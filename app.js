function calculateage(){
    var birthdate = new Date(document.getElementById('dob').value);
    var currentdate = new Date(document.getElementById('curd').value);
if(birthdate<currentdate){
    var ageInMilliseconds = currentdate - birthdate;
    var ageInSeconds = ageInMilliseconds / 1000;
    var ageInMinutes = ageInSeconds / 60;
    var ageInHours = ageInMinutes / 60;
    var ageInDays = ageInHours / 24;
    var ageInMonths = ageInDays / 30.44;
    var ageInYears = ageInMonths / 12;

    document.getElementById("years").innerHTML ='Age: '+ Math.floor(ageInYears)+ " Years";
    document.getElementById("months").innerHTML ='Total months: ' + Math.floor(ageInMonths ) + 'Month';
    document.getElementById("days").innerHTML ='Total days: ' + Math.floor(ageInDays ) + 'Days';
    document.getElementById("hours").innerHTML ='Total hours:' + Math.floor(ageInHours ) + 'Hours';
    document.getElementById("minutes").innerHTML ='Total minutes: ' + Math.floor(ageInMinutes ) + 'Minutes';
    document.getElementById("seconds").innerHTML ='Total seconds: ' + Math.floor(ageInSeconds ) + 'Second';
    document.getElementById("milliseconds").innerHTML = "Total milliseconds :" + Math.floor(ageInMilliseconds) +'milliseconds';
  }  else{
    alert("Error type");
    return false;
  }
}