import { browser } from 'protractor';
import { After, setDefaultTimeout, Status, Before } from 'cucumber';
import { config } from '../../Configuration/config';
import { HomePage } from '../Pages/HomePage/homePage';

setDefaultTimeout(150000);
var homePage = new HomePage();

Before( async () => {
        
    await browser.driver.get(config.baseUrl);
    await homePage.CloseCookiesPopUp();
});

After( async function (Scenario) {

    if (Scenario.result.status === Status.FAILED) {
        const screenShot = await browser.takeScreenshot();
        this.attach(screenShot, "image/png");

    }else{
        
        await browser.navigate().refresh();
    }
});