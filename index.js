const express = require('express');
const cors = require('cors')
const app = express();
const port = process.env.PORT || 5000;


// Middleware
app.use(cors())
app.use(express.json())

const users = [
    {id: 1, name: 'Sabana', email: 'sabana@example.com'},
    {id: 2, name: 'Babana', email: 'babana@example.com'},
    {id: 3, name: 'Kabana', email: 'kabana@example.com'}
]

app.get('/', (req, res) =>{
    res.send('User management service is available')
});

app.post('/users', (req, res) =>{
    console.log('post api hittings')
    console.log(req.body)
    const newUser = req.body
    newUser.id = users. length + 1;
    users.push(newUser)
    res.send(newUser)
})

app.get('/users', (req, res) =>{
    res.send(users);
})

app.listen(port, () =>{
    console.log(`Server is running on: ${port}`)
})