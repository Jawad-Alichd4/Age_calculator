
var calculateButton = document.getElementById("CalculateBtn");
// var age = currentDate - dateInput;
    // console.log(age)
    // var years = currentDate.getFullYear - dateInput.getFullYear;
    // console.log(years);

function calculateAge() {
    var currentDate = new Date();
    var year = currentDate.getFullYear();
    var month = currentDate.getMonth();
    var day = currentDate.getDate();
    var dateInput = document.getElementById("DateInput");
    var dateInputvalue = dateInput.value;
    var dateInputInOrder  = new Date(dateInputvalue);


    // console.log(dateInputInOrder);
    // calculating days months and years

   var myageInMilliseconds = currentDate - dateInputInOrder;
   console.log(currentDate.getFullYear())

   var myageIndays = currentDate.getDate() - dateInputInOrder.getDate();
   var myageInMonths = currentDate.getMonth() - dateInputInOrder.getMonth();
   var myageInYears = currentDate.getFullYear() - dateInputInOrder.getFullYear();

   console.log("years" + myageInYears)

    console.log("months" + myageInMonths);
    console.log("days" + myageIndays);
    // console.log(myageInMilliseconds);

    
var yearsbtn = document.getElementById("yearsbtn");
yearsbtn.innerHTML = myageInYears;

var monthssbtn = document.getElementById("monthsbtn");
monthssbtn.innerHTML = myageInMonths;

var daysbtn = document.getElementById("daysbtn");
daysbtn.innerHTML = myageIndays;

    






}
