const { connect, query } = require("./mysql-promisified");

connect({
    host: 'localhost',
    user: 'standarduser',
    password: "",
    database: 'yorkhacks'
});

async function login(req) {
    var username = req.body.username;
    var pass = req.body.password;
    var sql = "SELECT password FROM login WHERE username = ?";
    
    const result = await query(sql, [username]);
    
    if

    return { code: 200, message: "Logged in" }
}

async function checkInfo(req) {
    
}
async function getInfo(req) {
    
}
async function getData(req) {
    
}
async function updateData(req) {
    
}
async function updateInfo(req) {
    
}
async function makeOrder(req) {
    
}

module.exports = {login, getInfo, getData, updateData, updateInfo, makeOrder};