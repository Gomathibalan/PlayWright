import {chromium , firefox , test  } from "@playwright/test";

test(`print the tittle of the page` , async () => {
    
//create a browser instance

//const Browser = await chromium.launch({headless:false , channel: "msedge"})
const browser = await chromium.launch();


//create a browser context

 const context = await browser.newContext ();

 //create a new page

 const page = await context.newPage();

 await page.goto("https://login.salesforce.com/");

 await page.waitForTimeout(5000);

await page.getByLabel('username').fill('bgomathi.eee-jpy2@force.com');
await page.getByLabel('password').fill('$Welcome2024');
await page.click('#Login');
await page.waitForTimeout(10000);

//Get the url of the page
const url = page.url();
console.log(`The url of the page is ${url}`);

//Get the title of the page
const title = await page.title();
console.log(`The title of the page is ${title}`);

await page.waitForTimeout(3000);

//Gracefully clearing the resources
//Close the page
await page.close();


//Close the browser context
await context.close();


//Close the browsernpc
await browser.close();

} )

