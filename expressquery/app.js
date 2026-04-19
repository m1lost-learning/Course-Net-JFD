const express = require('express')
const app = express()
const userRoutes = require('./routes/userRoutes')

app.use(express.json()) // middleware parsing JSON

app.use('/users',userRoutes);

app.listen(3000,()=>{
    console.log(`server jalan di port 3000`);
    
})
