const { connect, query } = require("./mysql-promisified");

connect({
    host: 'localhost',
    user: 'standarduser',
    password: "",
    database: 'yorkhacks'
});

async function login(req) {
    return true; // CHANGE IN PROD
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

module.exports = {login, checkInfo, getInfo, getData, updateData, updateInfo, makeOrder};