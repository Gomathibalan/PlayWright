//Evaluate a student score and return their grade using conditional statement

function studentGrade(studentscore) {
    
    if (studentscore>=400) {
        console.log("the student grade: A " , "the student score is " + studentscore);
        
    }
else if(studentscore>=350){
console.log("the grade is : B" , " the student score is " + studentscore);

}
else if(studentscore>=300){
console.log("the Grade is : C", "the student score is" + studentscore);

}

else if (studentscore>=250){

    console.log("the Grade is: D" , " the student score is " + studentscore);
    }
else if(studentscore<=200){

    console.log("the student is not graded");
    
}

else{

    console.log("there is no grade if the student is absent");
    
}
}

let studentscore;
studentGrade(400);