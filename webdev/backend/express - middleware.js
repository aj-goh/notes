// Middleware function
const updateUser = (req, res, next) => {  // (req, res, next) signature required
    // ...do something

    next();  // pass to next middleware/handler
};

// Middleware factory (function that returns middleware)
const attachMessage = (message, status) => (req, res, next) => {
    res.locals.message = message;
    if (status) res.locals.status = status;
    next();
};

// Middleware chaining (middleware functions run in sequence)
router.put('/:id',
    updateUser,                     // apply middleware
    attachMessage('Updated', 200),  // calling the factory produces the middleware
    sendResponse()
);
