const  {Pool}= require('pg')
const pool = new Pool({
    host : 'localhost',
    user : 'postgres',
    password : 'janisuhanda',
    database : 'latihanmaret',
    port : 5432
})

module.exports = pool