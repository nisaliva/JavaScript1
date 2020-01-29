'use strict';

function gradeCalculator(score) {

// Check first for the invalid score! 
if(typeof score !== 'number' || score < 0 || score > 100)
    return "INVALID SCORE";
    
var grade = "";
    
switch (typeof score === 'number'){
    case score >= 90 && score <= 100:
        grade='A';
        break;
    case score >= 80 && score <= 89:
        grade='B';
        break;
    case score >= 70 && score <= 79:
        grade='C';
        break;
    case score >= 60 && score <= 69:
        grade='D';
        break;
    case score >= 50 && score <= 59:
        grade='E';
        break;
    case score >= 0 && score <= 49:
        grade='F';
        break;
    
    default:
        grade='INVAILD SCORE';
    
}
    return "You got a " +grade+" (" + score+ "%"+")";
}
// The log test the function
    console.log(gradeCalculator(95));
    