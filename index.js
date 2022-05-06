const express = require('express');
const app = express();

app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.set('view engine','ejs')


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

