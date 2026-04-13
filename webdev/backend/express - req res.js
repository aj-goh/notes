const controllerFn = (req, res) => {
    // Request object - req
    // contains data about the incoming HTTP request
    req.params.id              // request params (eg. /users/:id)
    Number(req.params.id)      // always a string => parse if number needed

    req.body                   // parsed request body object
    req.body.email

    req.headers                // request headers
    req.headers.authorization  // "Bearer <token>"

    req.cookies.token          // plain cookies
    req.signedCookies.token    // signed cookies

    req.method                 // "GET" | "POST" | "PUT" | "DELETE"
    req.path                   // "/users/42"
    req.originalUrl            // "/api/users/42" (includes mount prefix)
    req.ip                     // client IP address

    // Response object - res
    // contains methods to send a response
    res.json({ message: "Success", results });            // send JSON, no status => default 200
    res.status(404).json({ message: 'User not found' });  // specify status
    res.status(204).send();                               // send with no body

    res.locals                                            // object used to pass data between handlers in the same request chain
    res.locals.insertId

    res.redirect('/login');                               // redirect
    res.redirect(301, '/new-path');

    const cookie_options = {
        httpOnly: true,                                   // JS cannot access, protects against XSS
        secure: true,                                     // HTTPS only
        sameSite: 'lax'                                   // lax = sent on top-level nav; strict = same-site only
    };

    res.cookie('refresh_token', token, cookie_options);   // set cookie
    res.clearCookie('refresh_token');                     // remove cookie

    res.headersSent                                       // check if response has already been sent
};
