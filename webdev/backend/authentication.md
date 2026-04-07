# json web token (jwt)
- compact, url-safe (base64url-encoded) string: "HEADER.PAYLOAD.SIGNATURE"
- used to carry trusted identity claims (eg. token.sub=userId) between client n server (so client no longer uses untrusted req.params.userId)
- cryptographically signed (JWS), NOT encrypted (readable if token leaks, but modification is also detectable) -> transport-layer security (https) required alongside jwt to prevent interception in transit
- signature based on header + payload + secret so eg. if userId modified -> signature no longer applies -> token rejected
- claims: token expiry (token.exp), issued-at (token.iat), issuer (token.iss), audience (token.aud), not-before (token.nbf), etc

# registration
- client fetches POST /auth/register {username, other details like email}
- server generates salt n hashes password with bcrypt (plaintext discarded)
- server stores username + hash (with salt attached) + other details in db
- server redirects user to login (common) or immediately generates and sends jwt (ux-friendly)

# login
- client fetches POST /auth/login {username, password}
- server looks up username in db
- if exists -> server hashes password (with salt extracted from hash in db), then compares with hash in db
- if matches -> server generates n sends jwt

# typical request
- client fetches endpoint, attaches token in req.headers (Authorization: "Bearer {token}")
- server verifies jwt
- if verify ok -> res.locals.userId = token.sub (or token.userId) -> next();
- invalid token -> 401 unauthorised
- invalid perms -> 403 forbidden

# jwt statelessness
- client stores and uses token for future requests after logging in only once
- client does NOT send username + password for each request
- server verifies token signature + claims (exp, iss, aud) for each request (stateless, faster)
- server does NOT store session data in db and verify session for each request (stateful, slower)
- pros: improves horizontal scalability and makes api implementation easier
- cons: makes immediate logout difficult cuz server doesnt track tokens
- fix: use short-lived access jwt + refresh tokens

# refresh token
- long-lived, stateful, revocable token
- machine-generated opaque random string instead of jwt (no need jwt statelessness)
- used to get new (short-lived) access jwts without needing user to log in again
- server-side: hashed (need hash to reduce impact from db leaks, but no need salt cuz high entropy), then stored in db
- client-side: stored in cookie (browser-managed) to be used during refresh request only (path=/auth/refresh)
- cookie HttpOnly -> prevents javascript access (prevents xss)
- cookie Secure -> requires https encryption
- cookie SameSite=Lax(ux-friendly)/Strict(super-safe) -> reduces csrf
- only refresh tokens are stateful + server looks up token in db only upon refresh request -> best of both worlds (scalability of statelessness, revocability of statefulness)
- server rotates refresh token upon refresh request n revokes refresh token upon logout (access jwts expire naturally soon)
- if old refresh token is presented again -> possible theft -> revoke all sessions

# dynamic salting
- cost factor (number of salt rounds) should increase as production server hardware or attacker computer hardware improves over time
- cost factor controls how slow hashing takes
- during registration: server hashes password using current cost -> cost + hash + salt stored in db
- during login: user logs in successfully -> server checks cost in stored hash: if less than current cost -> server hash password again using current cost -> replace stored hash with new hash
- advanced: calibrate cost factor automatically based on hashing time (best around 250ms per hash)
- too fast -> hash easy to crack
- too slow -> attackers can spam attempts to DoS login
