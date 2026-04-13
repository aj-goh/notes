// Basic routing: map HTTP method + URL path to a handler function
const app = express();

app.get('/users', handler);         // runs if GET request method
app.post('/users', handler);        // runs if POST request method
app.use('/users', handler);         // runs if any request method

// Route parameters: named URL segments, available in req.params
router.get('/users/:id', (req, res) => {
    const id = req.params.id;       // /users/42 => req.params.id === "42"
});
app.get('/posts/:year/:month', handler);
app.get('/users/:id?', handler);    // optional parameter
app.get('/files/*', handler);       // wildcard, /files/a/b/c => req.params[0] = "a/b/c"

// Express router object: mini app instance for related routes
const router = express.Router();

router.get('/', getUsers)           // => /users
router.get('/:id', getUser)         // => /users/:id

module.exports = router;

// Mount router in separate file
app.use('/users', router);
