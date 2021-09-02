
let x = 5 + 5;
let y = "5" + 5;
let z = "Hello" + 5;
document.getElementById("demo").innerHTML =x + "<br>" + y + "<br>" + z;


document.getElementById("demoone").innerHTML = 
typeof 0 + "<br>" + 
typeof 314 + "<br>" +
typeof 3.14 + "<br>" +
typeof (3) + "<br>" +
typeof (3 + 4);

const person = {
    firstName : "John",
    lastName  : "Doe",
    age     : 50,
    eyeColor  : "blue"
  };
  
  document.getElementById("demotwo").innerHTML =
  person.firstName + " is " + person.age + " years old.";


  function myFunction(p1, p2) {
    return p1 * p2;
  }
  document.getElementById("demothree").innerHTML = myFunction(4, 3);
 
  function toCelsius(f) {
    return (5/9) * (f-32);
  }
  document.getElementById("demofour").innerHTML = toCelsius(77);

  function displayDate() {
    document.getElementById("demofive").innerHTML = Date();
  }

  var date = new Date();
  console.log(date)
  
  var year = date.getFullYear();
  console.log(year)
  
  var month = date.getMonth();
  console.log(month)
  
  var currentDate = date.getDate();
  console.log(currentDate)
  
  var currentDay = date.getDay();
  console.log(currentDay)
  
  var currentHour = date.getHours();
  console.log(currentHour)
  
  var currentMinutes = date.getMinutes();
  console.log(currentMinutes)