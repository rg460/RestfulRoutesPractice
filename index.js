const express = require('express');
const app = express();
const path = require('path');

app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

const comments = [
    {
        username : 'Jim77777',
        comment: 'I love Javascript!'
    },
    {
        username : 'Tom1993',
        comment: 'I am learning web developlment!'
    },
    {
        username : 'Shaq32',
        comment: 'Python is cool'
    },
    {
        username : 'LebronJames23',
        comment: 'Everyone should learn to code it is so fun'
    },
]

app.get('/comments', (req, res) => {
    res.render('comments/index', {comments});
})

app.get('/comments/new', (req, res) => {
    res.render('comments/new');
})


app.get('/tacos', (req, res) => {
    res.send("GET/tacos response");
})
app.post('/tacos', (req, res) => {
    const {meat, qty} = req.body;
    res.send(`Ok, here are your ${qty} ${meat} tacos`);
})
app.listen(3000,()=>{
    console.log('listening on port 3000');
})

// Restful API Blueprint
// RESTFUL COMMENTS
// GET / comments - list all comments
// POST / comments - list all comments
// GET / comments/:id - Get one comment (using ID)
// PATCH / comments/:id - Patch one comment 
// DELETE / comments/:id - Delete one comment

