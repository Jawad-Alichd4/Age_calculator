
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
    var dateInput = document.getElementById("DateInput").nodeValue;
   var myageInMilliseconds = currentDate - dateInput;

   var myageIndays = myageInMilliseconds/(1000 * 60 * 60 * 24);
   var myageInMonths = myageInMilliseconds/(1000 * 60 * 60);
   var myageInYears = myageInMilliseconds/(1000 * 60);

    console.log(myageInYears);


}
