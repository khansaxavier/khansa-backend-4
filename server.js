const express = require('express');
const routeMhs = require('./routes/mahasiswa')
const routerMk = require('./routes/matakuliah')
const app = express();
const port = 5500

app.use(express.json())
app.use(routeMhs)
app.use(routerMk)




app.get('/', (req,res) =>{
    res.send('Hello')
})


app.listen(port,() => {
    console.log(`Server berjalan pada localhost:${port}`);
    
})

