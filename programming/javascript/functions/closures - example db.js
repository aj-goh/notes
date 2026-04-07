function init_secure_database() {
    // Private data (only accessible via returned methods)
    const database = [];

    // Object to hold API methods
    const methods = {};

    // Insert a single record
    methods.insertSingle = function (data) {
        const item = {
            id: database.length + 1,
            data: data
        };
        database.push(item);
        return structuredClone(item);
    };

    // Insert multiple records at once
    methods.insertBulk = function (dataArray) {
        const items = [];
        for (let i of dataArray) {
            const item = {
                id: database.length + 1,
                data: i
            };
            database.push(item);
            items.push(structuredClone(item));
        }
        return items;
    };

    // Read all records (returns a copy)
    methods.readAll = function () {
        return structuredClone(database);
    };

    // Read a record by id
    methods.readById = function (id) {
        const item = database.find(item => item.id === id);
        return item ? structuredClone(item) : null;
    };

    // Update a record by id
    methods.updateById = function (id, newData) {
        const item = database.find(item => item.id === id);
        if (item) {
            item.data = newData;
            return structuredClone(item);
        } else {
            return null;
        }
    };

    // Delete a record by id
    methods.deleteById = function (id) {
        const index = database.findIndex(item => item.id === id);
        if (index !== -1) {
            const [deleted] = database.splice(index, 1);
            return structuredClone(deleted);
        } else {
            return null;
        }
    };

    return methods;
}

const db = init_secure_database();

// Insert single items
console.log("Inserted:", db.insertSingle({ name: "Alice" }));
console.log("Inserted:", db.insertSingle({ name: "Bob" }));

// Insert bulk items
console.log("Inserted:", db.insertBulk([{ name: "Charlie" }, { name: "Diana" }]));

// Read all
console.log("All records:", db.readAll());

// Read by ID
console.log("Record with ID 2:", db.readById(2));

// Update a record
console.log("Updated ID 3:", db.updateById(3, { name: "Chuck" }));

// Delete a record
console.log("Deleted ID 1:", db.deleteById(1));

// Read all after modifications
console.log("All records after updates:", db.readAll());
