const express = require ("express")
const PORT =process.env.PORT || 4000
const app = express('')
const cors = require('cors')
const sendemail = require('./cbmisserver/middleware/email/sendemail');

app.use(cors())
app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.listen(PORT , () => {
    console.log(`ServerApp is listening on port ${PORT}`)
})

app.get("/",(req,res) =>{
    return res.send("welcome to my ServerApp")
})
app.use(sendemail)