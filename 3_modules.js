// Modules
// common js, every file is a module (by default);

const { john, jane } = require("./4_names");
const sayHi = require("./5_utils");
const obj = require("./6_alt_flavor");
const [name1, name2] = obj.items;
require("./7_mind_grenade");
console.log(name1, name2);


sayHi("Henry");
sayHi(john);
sayHi(jane);
