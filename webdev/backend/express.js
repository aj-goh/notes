// Project entry point - index.js
// loads environment variables and starts server

require('dotenv').config();  // load .env into process.env before anything else
const app = require('./src/app');
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {  // start the server
    console.log(`Server listening on port ${PORT}`);
});

// App setup - src/app.js
// creates app, registers middleware, mounts routers

const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();

// Parse JSON request bodies into req.body
// eg. {"name":"Alice","email":"alice@example.com"}
app.use(express.json());

// Parse URL-encoded request bodies into req.body
// eg. name=Alice&email=alice%40example.com
// extended: true allows nested objects/arrays
app.use(express.urlencoded({ extended: true }));

// Parse Cookie header into req.cookies
app.use(cookieParser());

// Serve static files from /public on base path
app.use('/', express.static('public'));

// Mount routers (see express - routing.js)
const mainRoutes = require('./routes/mainRoutes');
app.use('/api', mainRoutes);  // all API routes under /api

module.exports = app;

/*
    File structure

    index.js                        entry point: dotenv + app.listen
    src/
        app.js                      express app: middleware + router mounts
        routes/
            mainRoutes.js           root router: mounts sub-routers
            userRoutes.js           route definitions for /user resource
        controllers/
            userController.js       handler functions: reads req, writes res.locals, calls next
        models/
            userModel.js            SQL queries: takes data object + callback
        middleware/
            ...                     middleware functions
        utils/
            ...                     helper functions
        services/
            db.js                   mysql2 connection pool
*/
