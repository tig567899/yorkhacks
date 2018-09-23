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
    var sql = "SELECT password FROM login WHERE name = ?";
    
    const result = await query(sql, [username]);
    
    if (result[0].password === pass)
    {
        return { code: 200, message: "Logged in" };
    }
    else
    {
        return { code: 403, message: "Incorrect Password" };
    }
}

async function getInfo(req) {
    var sql = "SELECT location from login WHERE name = ?";
    const result = await query(sql, [req.body.username]);
    return {code: 200, message: result[0].location};
}

async function getData(req) {
    var username = req.body.username;   
    var result = 0;
    if (username === 'chapter')
    {
        var sql = "SELECT supplies, name FROM data";
        result = await query(sql);
    }
    else
    {
        var sql = "SELECT supplies, name FROM data WHERE name = ?";
        result = await query(sql, [username]);
    }
    
    var array = {
        bandages: 0, 
        examination_supplies: 0,
        scalpels: 0,
        iv_kits: 0,
        masks: 0,
        needles: 0,
        vitamins: 0,
        dental_supplies: 0,
        optical_supplies: 0,
        personal_hygiene: 0,
        antiseptics: 0};
    for (var x = 0; x < result.length; x++)
    {
        supplies = JSON.parse(result[x].supplies)
        array.bandages += (supplies.bandages == null ? 0 : +supplies.bandages);
        array.examination_supplies += (supplies.examination_supplies == null ? 0 : +supplies.examination_supplies);
        array.scalpels += (supplies.scalpels == null ? 0 : +supplies.scalpels);
        array.iv_kits += (supplies.iv_kits == null ? 0 : +supplies.iv_kits);
        array.masks += (supplies.masks == null ? 0 : +supplies.masks);
        array.needles += (supplies.needles == null ? 0 : +supplies.needles);
        array.vitamins += (supplies.vitamins == null ? 0 : +supplies.vitamins);
        array.dental_supplies += (supplies.dental_supplies == null ? 0 : +supplies.dental_supplies);
        array.optical_supplies += (supplies.optical_supplies == null ? 0 : +supplies.optical_supplies);
        array.personal_hygiene += (supplies.personal_hygiene == null ? 0 : +supplies.personal_hygiene);
        array.antiseptics += (supplies.antiseptics == null ? 0 : +supplies.antiseptics);
    }
    return { code: 200, message: array };
}

async function updateData(req) {
    var sql = "UPDATE data SET supplies = ? WHERE name = ?";
    function theReplacer(key, value) {
        return +value
    }
    console.log (JSON.stringify(req.body.supplies, theReplacer));
    const result = await query(sql, [JSON.stringify(req.body.supplies), req.body.username]);
    return {code: 200};
}

async function updateInfo(req) {
    var username = req.body.username;
    var location = req.body.location;
    var sql = "UPDATE login SET location = ? WHERE name = ?";
    
    const result = await query(sql, [location, username]);
    return {code: 200};
}
async function makeOrder(req) {
    var sql = "UPDATE data SET supplies=\"{}\" WHERE name = ?";
    const result = await query(sql, [req.body.username]);
    return {code: 200};
}

module.exports = {login, getInfo, getData, updateData, updateInfo, makeOrder};