// OS modules (operating system);
const os = require("os");
console.log(os.version());

// info about user
const user = os.userInfo();
console.log(user);

// method returns systems uptime in seconds
console.log(`the system uptime is ${os.uptime()} seconds`);

const currentOS = {
  name: os.type(),
  totalMem: os.totalmem(),
  freeMem: os.freemem(),
};

console.log(currentOS);
