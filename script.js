
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

   var myageIndays = Math.floor(myageInMilliseconds / (1000 * 60 * 60 * 24));
   var myageInMonths = myageIndays / 30;
   var myageInYears = myageInMonths / 12;
//    console.log(currentDate);
//    console.log(myageInYears)

    // console.log(myageInMonths);
    // console.log(myageIndays);
    // console.log(myageInMilliseconds);

    
   var agelist = document.getAnimations("listItems")
    var li1 = document.createElement('li');
    li1.value = myageInYears;
    agelist.appendChild('li');

    var li2 = document.createElement('li');
    li2.value = myageInMonths;
    agelist.appendChild('li')

    var li3 = document.createElement('li');
    li3.value = myageIndays;
    agelist.appendChild('li');

    






}
