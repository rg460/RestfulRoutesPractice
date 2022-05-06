const express = require('express');
const app = express();
const path = require('path');
const { v4: uuidv4 } = require('uuid');
uuidv4();

app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

const comments = [
    {
        id: uuidv4(),
        username : 'Jim77777',
        comment: 'I love Javascript!'
    },
    {
        id: uuidv4(),
        username : 'Tom1993',
        comment: 'I am learning web developlment!'
    },
    {
        id:  uuidv4(),
        username : 'Shaq32',
        comment: 'Python is cool'
    },
    {
        id:  uuidv4(),
        username : 'LebronJames23',
        comment: 'Everyone should learn to code it is so fun'
    }
]

app.get('/comments', (req, res) => {
    res.render('comments/index', {comments});
})

app.get('/comments/new', (req, res) => {
    res.render('comments/new');
})
 app.post('/comments', (req, res) => {
    const { username, comment } = req.body;
    comments.push({ username, comment, id:  uuidv4()})
     res.redirect('/comments');
 })
 app.get('/comments/:id', (req, res) => {
       const {id } = req.params;
      const comment = comments.find(c => c.id === id)
      res.render('comments/show',{comment})
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

