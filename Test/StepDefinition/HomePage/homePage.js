"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const cucumber_1 = require("cucumber");
const chai_1 = require("chai");
const homePage_1 = require("../../Pages/HomePage/homePage");
const MortgagesPage_1 = require("../../Pages/HomePage/MortgagesPage");
let homePage = new homePage_1.HomePage();
let mortgagePage = new MortgagesPage_1.MortgagePage();
cucumber_1.Given(/^I have navigated to Mortgage rates page$/, () => __awaiter(this, void 0, void 0, function* () {
    yield homePage.NavigateToMortgageRates();
}));
cucumber_1.Given(/^I fill out Mortgage form with the following details respectively$/, (table) => __awaiter(this, void 0, void 0, function* () {
    const data = table.rowsHash();
    yield mortgagePage.SelectMortgage(data.nationwideMortage.toString());
    yield mortgagePage.TypeOfMortgage(data.typeOfMortgage.toString());
    yield mortgagePage.FillOutProperyValueDetails(data.propertyValue.toString(), data.mortgageAmount.toString(), data.duration.toString());
    yield mortgagePage.MortgageType(data.mortgageType.toString());
    yield mortgagePage.MortgageProductFee(data.productFee.toString());
}));
cucumber_1.Then(/^the following results should be visible for selection$/, (table) => __awaiter(this, void 0, void 0, function* () {
    const expectedResultsList = yield table.rows().map(row => {
        return row[0];
    });
    const actualResultsList = yield mortgagePage.VerifyAllMortgageResultsIsDisplayed();
    yield chai_1.expect(actualResultsList).to.deep.equal(expectedResultsList);
}));
cucumber_1.When(/^I click more infor and apply$/, () => __awaiter(this, void 0, void 0, function* () {
    yield mortgagePage.ApplyForMorgate();
}));
cucumber_1.Then(/^the page heading '([^\"]*)' should be visible$/, (textValue) => __awaiter(this, void 0, void 0, function* () {
    chai_1.expect(yield mortgagePage.IsStartRemortageApplicationDisplayed()).to.contain(textValue);
}));
//# sourceMappingURL=homePage.js.map