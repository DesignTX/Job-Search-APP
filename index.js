const puppeteer = require('puppeteer')

async function run() {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.goto('https://oce.op.gg/summoner/userName=Des%C4%B1gn');
  await page.screenshot({ path: 'screenshots/opgg.png' });

  browser.close();
}

run();