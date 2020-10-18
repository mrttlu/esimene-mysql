// Import express and put it into express constant
const express = require('express');
// Create express object and put it into app constant
const app = express();

// Middleware required for receiving body from request object as JSON
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// Database mockup
const users = [
    {
        id: 0,
        firstName: 'Juku',
        lastName: 'Juurikas',
        email: 'juku@juurikas.ee',
        password: 'juku'
    },
    {
        id: 1,
        firstName: 'Juhan',
        lastName: 'Juurikas',
        email: 'juhan@juurikas.ee',
        password: 'juhan'
    }
];

// Endpoint for checking if API is alive (response 200 OK means, it is working)
// GET - ping
// Required values: none
// Optional values: none
// Returns: status 200 - OK and { success: true } message
app.get('/api/ping', (req, res) => {
    res.status(200).json({
        success: true
    });
});

// Endpoint for getting list of available users
// GET - users
// Required values: none
// Optional values: none
// Returns: status 200 - OK and list of users in response body
app.get('/api/users', (req, res) => {
    res.status(200).json({
        success: true,
        users: users
    });
});


// Endpoint for getting user specified by id
// GET - users
// Required: id
// Optional: none
// Returns: status 200 - OK and user data in response body
app.get('/api/users/:id', (req, res) => {
    res.status(200).json({
        success: true,
        user: users[req.params.id]
    });
});

// Endpoint for creating new user
// POST - users
// Required values: firstName, lastName, email, password
// Optionalvalues: none
// Returns:
//  Success: status 201 - Created and user data in response body
//  Fail: status 400 - Bad Request and error message in response body
app.post('/api/users', (req, res) => {
    const firstName = typeof(req.body.firstName) === 'string' && req.body.firstName.trim().length > 0 ? req.body.firstName : false;
    const lastName = typeof(req.body.lastName) === 'string' && req.body.lastName.trim().length > 0 ? req.body.lastName : false;
    const email = typeof(req.body.email) === 'string' && req.body.email.trim().length > 0 ? req.body.email : false;
    const password = typeof(req.body.password) === 'string' && req.body.password.trim().length > 3 ? req.body.password : false;
    
    if (firstName && lastName && email && password) {
        const newUser = {
            id: users.length,
            firstName,
            lastName,
            email,
            password
        };

        users.push(newUser);
        // delete newUser.password;

        res.status(201).json({
            success: true,
            user: newUser
        });
    } else {
        res.status(400).json({
            success: false,
            message: 'Required field(s) missing or invalid'
        });
    }
});

// Endpoint for updating user specified by id
// PUT - users
// Required: id
// Optional: firstName, lastName, email, password
// Returns:
//  Success: status 200 - OK and user data in response body
//  Fail: status 400 - Bad Request and error message in response body
app.put('/api/users', (req, res) => {
    const id = typeof(req.body.id) === 'number' ? req.body.id : false;
    const firstName = typeof(req.body.firstName) === 'string' && req.body.firstName.trim().length > 0 ? req.body.firstName : false;
    const lastName = typeof(req.body.lastName) === 'string' && req.body.lastName.trim().length > 0 ? req.body.lastName : false;
    const email = typeof(req.body.email) === 'string' && req.body.email.trim().length > 0 ? req.body.email : false;
    const password = typeof(req.body.password) === 'string' && req.body.password.trim().length > 3 ? req.body.password : false;
    if(id || id === 0) {
        if (firstName) {
            users[id].firstName = firstName;
        }
        if (lastName) {
            users[id].lastName = lastName;
        }
        if (email) {
            users[id].email = email;
        }
        if (password) {
            users[id].password = password;
        }
        res.status(200).json({
            success: true,
            user: users[id]
        });
    } else {
        res.status(400).json({
            success: false,
            message: 'Required field(s) missing or invalid'
        });
    }
});

// Endpoint for deleting user specified by id
// DELETE - users
// Required: id
// Optional: none
// Returns:
//  Success: status 200 - OK and { success: true } message
//  Fail: status 400 - Bad Request and error message in response body
app.delete('/api/users', (req, res) => {
    const id = typeof(req.body.id) === 'number' ? req.body.id : false;
    if(id || id === 0) {
        users.splice(id, 1);
        res.status(200).json({
            success: true
        });
    } else {
        res.status(400).json({
            success: false,
            message: 'Required field(s) missing or invalid'
        });
    }
});

app.listen(3000, () => {
    console.log('Server running');
});