const router = require("express").Router();
const Cheerio = require("cheerio");
const Puppeteer = require("puppeteer");
/* (async () => {
  const Browser = await Puppeteer.launch({ headless: false });
  const Page = await Browser.newPage();
  await Page.goto("https://www.tiktok.com/@a5rass?");
  await Page.setCookie([{
    "name": "s_v_web_id",
    "value": "verify_kx534sgz_DUzjNlLe_zuZv_48S7_9PnX_Uc6YmXHy14Ar"
    },{"name":"sid_tt","Value":"b2a1575cb6fe013197fc55d3ccd8aea7"}])
/*   await Page.waitForSelector("input[name=q]");
  await Page.type("input[name=q]","a5rase")
  await Page.click(".search-button-container");
  await Page.waitForSelector(".tiktok-133zmie-DivLink")
  await Page.click(".tiktok-133zmie-DivLink") 

})(); 
*/
module.exports = router;
