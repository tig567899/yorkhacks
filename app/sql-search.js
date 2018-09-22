const { connect, query } = require("./mysql-promisified");

connect({
    host: 'localhost',
    user: 'standarduser',
    password: "",
    database: 'yorkhacks'
});



module.exports = {login, checkInfo, getInfo, getData, updateData, updateInfo, makeOrder};