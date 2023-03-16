// Modules
// common js, every file is a module (by default);

const { john, jane } = require("./4_names");
const sayHi = require("./5_utils");
const data = require("./6_alt_flavor");
require("./7_mind_grenade");
console.log(data);

sayHi("Henry");
sayHi(john);
sayHi(jane);
