import { by } from 'protractor';
import { BroswerExtensions } from '../../Helpers/broswerExtentions';

var broswerActions = new BroswerExtensions();

const Locators = {
    MortagesElement: by.css("[href*='who-we-can-help']"),
    NewMortageElement: by.css("[href*='our-mortgage-rate']"),
    CookiesElement: by.css("[class*='iconLink close']")
};

export class HomePage {

    async NavigateToMortgageRates() {

        await broswerActions.HoverByIndex(Locators.MortagesElement, 0);
        await broswerActions.WaitAndClick(Locators.NewMortageElement);
    };

    async CloseCookiesPopUp()
    {
        await broswerActions.WaitAndClick(Locators.CookiesElement);
    }
};