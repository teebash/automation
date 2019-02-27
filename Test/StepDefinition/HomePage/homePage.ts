import { Given, Then, When, TableDefinition } from "cucumber";
import { expect, assert } from "chai";
import { HomePage } from "../../Pages/HomePage/homePage";
import { MortgagePage } from "../../Pages/HomePage/MortgagesPage";

let homePage = new HomePage();
let mortgagePage = new MortgagePage();

Given(/^I have navigated to Mortgage rates page$/, async () => {
    await homePage.NavigateToMortgageRates();
})

Given(/^I fill out Mortgage form with the following details respectively$/, async (table: TableDefinition) => {
    
    const data = table.rowsHash();

    await mortgagePage.SelectMortgage(data.nationwideMortage.toString());
    await mortgagePage.TypeOfMortgage(data.typeOfMortgage.toString());
    await mortgagePage.FillOutProperyValueDetails(data.propertyValue.toString(), data.mortgageAmount.toString(), data.duration.toString());
    await mortgagePage.MortgageType(data.mortgageType.toString());
    await mortgagePage.MortgageProductFee(data.productFee.toString());
})

Then(/^the following results should be visible for selection$/, async (table: TableDefinition) => {

    const expectedResultsList = await table.rows().map(row => {
        return row[0];
    });

    const actualResultsList = await mortgagePage.VerifyAllMortgageResultsIsDisplayed();
    await expect(actualResultsList).to.deep.equal(expectedResultsList);
})

When(/^I click more infor and apply$/, async () => {

    await mortgagePage.ApplyForMorgate();
})

Then(/^the page heading '([^\"]*)' should be visible$/, async (textValue: string) => {

    expect(await mortgagePage.IsStartRemortageApplicationDisplayed()).to.contain(textValue);
})