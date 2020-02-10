const puppeteer = require('puppeteer')

void (async () => {
  try {
    // creates a new browser instance
    const browser = await puppeteer.launch()

    // creates a page inside the browser
    const page = await browser.newPage()

    // navigates to a website
    await page.goto('https://scrapethissite.com/pages/forms/')

    // takes a screenshot and saves it to ./screenshots/page1.png
    await page.screenshot({
      path: './screenshots/page1.png'
    })

    // generates a pdf of the page and saves it to ./pdfs/page1.pdf
    await page.pdf({ path: './pdfs/page1.pdf' })

    // closes browser when finished
    await browser.close()
  } catch (error) {
    console.log(error)
  }

})()