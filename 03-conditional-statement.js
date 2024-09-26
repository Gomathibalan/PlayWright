//write a function with if-else statement and print the browser value

function launchBrowser(browserName) {
    if (browserName==="chrome"){

        console.log("browser name is chrome");
        
    }
else if(browserName==="edge"){

    console.log("browser name is edge");

}
else if(browserName==="safari"){

    console.log("browser name is safari");

}
else if(browserName==="firefox"){

    console.log("browser name is firefox");  
}
    
else
{
    console.log("browser name is not a valid browser");
  

}
}

let browserName;
launchBrowser('chrome');

// use switch case statement to print different types of values

function runTests(testType) {
    
switch (testType) {
    case 'smoke':
        console.log(" The testtype is smoke");
        
        break;

case 'sanity':
    console.log("The testType is sanity");
        break;
    
        case 'regression':
            console.log("The testType is regression");
            
break;

    default:
    console.log("Not a valid testing");
        

    break;
}

}

let testType;
runTests('smoke');