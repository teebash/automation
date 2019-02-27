import { by, browser } from 'protractor';
import { assert } from 'chai';
import { BroswerExtensions } from '../../Helpers/broswerExtentions';

var broswerActions = new BroswerExtensions();

const Locators = {
    NoMortagesElement: by.css("[id*='Mortgage1']"),
    ChangingLenderElement: by.css("[id*='MortgageTypeNo2']"),
    PropertyValueElement: by.css("[id*='SearchPropertyValue']"),
    MortgageAmountElement: by.css("[id*='SearchMortgageAmount']"),
    MortgageTermElement: by.css("[id*='SearchMortgageTerm']"),
    MortgageFixedRateElement: by.css("[for*='input-fixed']"),
    MortgageWithFeeElement: by.css("[for*='product-fee-input-fee']"),
    FindMortgageElement: by.css("[id*='myButton']"),
    MortgageSearchResultsElement: by.css("h3[id*='_ProductName']"),
    MorInfoAndApplyElement: by.css("[class='showHideCell doNotPrint']"),
    ApplyElement: by.css("[data-productname*='5 yr Fixed ']"),
    StartMortgageApplicationElement: by.css("[class*='blue regularText']"),
    SpinnerElement: by.css('.spinner')
};

export class MortgagePage {

    async FillOutProperyValueDetails(propertyValue: string, mortgageAmount: string, mortgageDuration: string) {

        const propertyValueChanged = await propertyValue.replace("£", "").replace(',', "").trim();
        const mortgageAmountChanged = await mortgageAmount.replace("£", "").replace(',', "").trim();
        const mortgageDurationChanged = await mortgageDuration.replace("years", "").trim();

        await broswerActions.WaitAndSendKeysByIndex(Locators.PropertyValueElement, 1, propertyValueChanged);
        await broswerActions.WaitAndSendKeysByIndex(Locators.MortgageAmountElement, 1, mortgageAmountChanged);
        await broswerActions.WaitAndSendKeys(Locators.MortgageTermElement, mortgageDurationChanged);
        await broswerActions.WaitAndClick(Locators.FindMortgageElement);

        await browser.sleep(5000);
    }

    async SelectMortgage(nationwideMortage: string) {
        switch (nationwideMortage) {
            case "No":
            await broswerActions.WaitAndClickByIndex(Locators.NoMortagesElement, 0);
                break;
            default:
                assert.fail("No option for nationwideMortage was passed in to be selected");
                break;
        }
    }

    async TypeOfMortgage(typeOfMortgage: string) {
        
        switch (typeOfMortgage) {
            case "Changing lender":
            await broswerActions.WaitAndClickByIndex(Locators.ChangingLenderElement, 0);
                break;
            default:
                assert.fail("No option for typeOfMortgage was passed in to be selected");
                break;
        }
    }

    async MortgageType(mortgageType: string) {
        
        switch (mortgageType) {
            case "Fixed rate":
                await broswerActions.WaitAndClick(Locators.MortgageFixedRateElement);
                break;
            default:
                assert.fail("No option for mortgageType was passed in to be selected");
                break;
        }
        await browser.sleep(2000);  // a better work around is needed
        // await broswerActions.WaitForSpinnerToDisappear(Locators.SpinnerElement);
    }

    async MortgageProductFee(productFee: string) {
        
        switch (productFee) {
            case "With Fee":
                await broswerActions.WaitAndClick(Locators.MortgageWithFeeElement);
                break;
            default:
                assert.fail("No option for productFee was passed in to be selected");
                break;
        }
        await browser.sleep(2000); // a better work around is needed
        // await broswerActions.WaitForSpinnerToDisappear(Locators.SpinnerElement);
    }

    async VerifyAllMortgageResultsIsDisplayed() {
        return await broswerActions.GetAllInnerTextByIndex(Locators.MortgageSearchResultsElement);
    }

    async ApplyForMorgate() {
        await broswerActions.WaitAndClickByIndex(Locators.MorInfoAndApplyElement, 4);
        await broswerActions.WaitAndClick(Locators.ApplyElement);
    }

    async IsStartRemortageApplicationDisplayed() {
        return await broswerActions.GetInnerText(Locators.StartMortgageApplicationElement);
    }
};