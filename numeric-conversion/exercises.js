var customerId = "123456789";
console.log(customerId);

var customerFistName = "Anderson";
console.log(customerFistName);

var customerMiddleName = null;
console.log(customerMiddleName);

var customerLastName = "Beltran";
console.log(customerLastName);

var gender = "Male";
console.log(gender);

var birthday = "May-14-2004";
console.log(birthday);

var license = "QT12345";
console.log(license);

var autoPolicyNumber = "123467";
console.log(autoPolicyNumber);

// functions 

function test() {
    console.log("test");
    console.log("test2");
    console.log("it worked");
    
  }
  test();

  var interestRateAsPercent = 5;
var interestRate = 5 / 100;

var yearsToDouble = 72 / interestRateAsPercent;
var amount = 0;
var principal = 50000;
var numberOfTimesCompounded = 12;
var timeInYears = yearsToDouble;



let total = principal * (1 + interestRate / numberOfTimesCompounded) ** (numberOfTimesCompounded * timeInYears);