import { chromium , firefox, test } from "@playwright/test";

test(`test to create a multiple browser contexts`, async() => {

const browser1 = await chromium.launch({headless:false, channel: "msedge"});
const context1 = await browser1.newContext();

const page1 =  await context1.newPage();

await page1.goto("https://www.redbus.in/");

await page1.waitForTimeout(3000);

const url1 = page1.url();
console.log(`The url of the page is ${url1}`);
const title1 = await page1.title();
console.log(`The title of the page is ${title1}`);

await page1.waitForTimeout(3000);
await page1.close();
await context1.close();
await browser1.close();


const browser2 = await firefox.launch({headless:false, channel: "firefox"});

    
   const context2 = await browser2.newContext();
   
   const page2 =  await context2.newPage();
   
   await page2.goto("https://www.flipkart.com/");
   
   await page2.waitForTimeout(3000);
   
   const url2= page2.url();
   console.log(`The url of the page is ${url2}`);
   const title2 = await page2.title();
   console.log(`The title of the page is ${title2}`);
   
   await page2.waitForTimeout(3000);
   await page2.close();
   await context2.close();
   await browser2.close();
   
}
)
   
   






    