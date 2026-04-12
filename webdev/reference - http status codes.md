<https://en.wikipedia.org/wiki/List_of_HTTP_status_codes>

# 1xx Informational
(Request received, continuing process)

- 100 Continue: Server got initial request headers, continue sending body
- 101 Switching Protocols: Server is switching protocols (eg. HTTP -> WebSocket)
- 102 Processing: Server is processing but no response yet
- 103 Early Hints: Sends headers early (eg. preload resources)

# 2xx Success
(Request was successfully received, understood, and accepted)

- 200 OK: Standard success response
- 201 Created: Resource successfully created
- 202 Accepted: Request accepted but not completed yet
- 203 Non-Authoritative Information: Modified response from proxy
- 204 No Content: Success, but no response body
- 205 Reset Content: Reset UI/form after request
- 206 Partial Content: Partial response (used in downloads/streaming)
- 207 Multi-Status: Multiple status codes (WebDAV)
- 208 Already Reported: Avoid duplicate responses (WebDAV)
- 226 IM Used: Instance manipulation applied

# 3xx Redirection
(Further action needed to complete request)

- 300 Multiple Choices: Multiple possible responses
- 301 Moved Permanently: Resource permanently moved (SEO important)
- 302 Found: Temporary redirect
- 303 See Other: Redirect with GET method
- 304 Not Modified: Cached version still valid
- 305 Use Proxy: Must access via proxy (deprecated)
- 307 Temporary Redirect: Same method, temporary redirect
- 308 Permanent Redirect: Same method, permanent redirect

# 4xx Client Errors
(Problem with the request client-side)

- 400 Bad Request: Malformed request
- 401 Unauthorized: Authentication required
- 402 Payment Required: Reserved (rarely used)
- 403 Forbidden: Authenticated but not allowed
- 404 Not Found: Resource doesn't exist
- 405 Method Not Allowed: HTTP method not allowed
- 406 Not Acceptable: Cannot satisfy Accept headers
- 407 Proxy Authentication Required: Proxy auth needed
- 408 Request Timeout: Client took too long
- 409 Conflict: Conflict with current state (eg. duplicate)
- 410 Gone: Resource permanently deleted
- 411 Length Required: Missing Content-Length
- 412 Precondition Failed: Conditions not met
- 413 Payload Too Large: Request too large
- 414 URI Too Long: URL too long
- 415 Unsupported Media Type: Wrong content type
- 416 Range Not Satisfiable: Invalid range request
- 417 Expectation Failed: Expect header failed
- 418 I'm a teapot: Joke status code
- 421 Misdirected Request: Wrong server
- 422 Unprocessable Content: Valid format but semantic error (common in APIs)
- 423 Locked: Resource locked (WebDAV)
- 424 Failed Dependency: Depends on failed request
- 425 Too Early: Request sent too early
- 426 Upgrade Required: Must switch protocol
- 428 Precondition Required: Must include conditions
- 429 Too Many Requests: Rate limit exceeded
- 431 Request Header Fields Too Large: Headers too large
- 451 Unavailable For Legal Reasons: Blocked by law (eg. censorship)

# 5xx Server Errors
(Server failed to fulfil a valid request)

- 500 Internal Server Error: Generic server error
- 501 Not Implemented: Feature not supported
- 502 Bad Gateway: Invalid response from upstream server
- 503 Service Unavailable: Server overloaded/down
- 504 Gateway Timeout: Upstream server timeout
- 505 HTTP Version Not Supported: Unsupported HTTP version
- 506 Variant Also Negotiates: Config error
- 507 Insufficient Storage: Not enough storage
- 508 Loop Detected: Infinite loop (WebDAV)
- 510 Not Extended: Further extensions required
- 511 Network Authentication Required: Login required (eg. captive portal WiFi)
