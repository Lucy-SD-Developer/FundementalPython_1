/*
    This script file has some common functions.
*/

function generateSemester() {
    
    var nameSemesterDiv;
    var today;
    var thisMonth;
    var thisYear;
    var semesterYear;
    var SPRING = 1;
    var SUMMER = 6;
    var FALL = 8;

    today = new Date();    
    thisMonth = today.getMonth() + 1;
    thisYear = today.getFullYear();

    nameSemesterDiv = document.getElementById('logo');
    
    //console.debug("nameSemesterDiv" + nameSemesterDiv);
    
    //Determine semester and year
    if (thisMonth >= FALL) {
        semesterYear = "FALL " + thisYear;
    } else if (thisMonth >= SUMMER) {
        semesterYear = "Summer " + thisYear;
    } else {
        semesterYear = "Spring " + thisYear;
    }
    
    nameSemesterDiv.innerHTML += semesterYear;
}
