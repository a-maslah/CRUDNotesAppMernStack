const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

require('dotenv').config();
const {noteRoutes, notesRoutes} = require('./routes/note.routes');

const uri ="mongodb+srv://admin:admin@cluster0.qfnz5.mongodb.net/notes?retryWrites=true&w=majority" ;


const app = express();

app.use(express.json({extended:false}));

app.use(cors());

mongoose.connect(uri,{
    useNewUrlParser: true, // <-- no longer necessary
    useUnifiedTopology: true,
   
}).then(()=>console.log('connected'));


app.get('/',(req,res)=>{
    res.send('api working succes!!!!');
});

app.use('/',notesRoutes);

const port = process.env.port || 3200;
app.listen(port,()=>console.log("server running at port" + port));

