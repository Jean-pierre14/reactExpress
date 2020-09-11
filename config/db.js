const { success, error } = require('consola')
const mysql = require('mysql')
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'erc_db'
})

db.connect((err) => {
    if(err) error({message: `Error ${err}`, badge: true})
    success({message: `Database is connected`, badge: true})
})

module.exports = db