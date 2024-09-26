//By using "var" checking browserversion outside of ifblock and inside of the function block */


const browser = "Chrome";

function getBrowserVersion(){

    if(browser.startsWith("Chrome")){
        var browserVersion = '128.45.6.8';
console.log("Inside of the block:"+browserVersion);

    }
console.log("Outside of the block:"+browserVersion);

}

getBrowserVersion();

// By using "let" checking browserversion outside of ifblock and inside of the function block */

const browser1 = "Chrome";
function getBrowserVersionlet(){

if(browser1.startsWith("Chrome")){
    let browserVesrion= '126.78.96.9'
    console.log("Inside of the ifblock;"+browserVesrion);
    
}

console.log("Outside of the ifblock ;"+browserVersion);


}

getBrowserVersionlet();