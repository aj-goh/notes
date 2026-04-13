# URL Structure

- Resources are nouns, use plural for collections
- Action is conveyed by HTTP method, not the URL

Collections and items:
- `GET /users`: List all users
- `POST /users`: Create a user
- `GET /users/:id`: Get one user
- `PUT /users/:id`: Update a user
- `DELETE /users/:id`: Delete a user

Nested resources (when a resource belongs to another):
- `GET /users/:id/posts`: List posts belonging to a user
- `POST /users/:id/posts`: Create a post for a user
- `GET /posts/:id/comments`

For actions that don't map cleanly to CRUD, use verb after resource:
- `POST /users/:id/verify-email`
- `POST /users/:id/reset-password`
- `POST /orders/:id/cancel`

Avoid verbs in URLs:
- Bad:  `GET /getUsers`, `POST /createUser`, `GET /user-list`
- Good: `GET /users`, `POST /users`, `GET /users`

# HTTP Methods

- `GET`: read, safe (no side effects), idempotent
- `POST`: create, not idempotent (calling twice creates twice)
- `PUT`: full replace, idempotent (same result if repeated)
- `PATCH`: partial update, not necessarily idempotent
- `DELETE`: delete, idempotent
