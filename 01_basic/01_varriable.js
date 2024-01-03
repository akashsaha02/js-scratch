const accountId = 21053452
let accountEmail = "akash@gmail.com"
var accountPassword = "12345"
accountCity = "Jaipur"

// accountId = 2; //not allowed
accountEmail = "a@a.com"
accountPassword = "54321"
accountCity = "Bangladesh"


console.log(accountId);

console.table([accountId, accountEmail, accountPassword, accountCity]);

// prefer not to use var 
// because of issue in block scope and functional scope