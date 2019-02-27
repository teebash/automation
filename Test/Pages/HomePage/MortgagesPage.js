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
const protractor_1 = require("protractor");
const chai_1 = require("chai");
const broswerExtentions_1 = require("../../Helpers/broswerExtentions");
var broswerActions = new broswerExtentions_1.BroswerExtensions();
const Locators = {
    NoMortagesElement: protractor_1.by.css("[id*='Mortgage1']"),
    ChangingLenderElement: protractor_1.by.css("[id*='MortgageTypeNo2']"),
    PropertyValueElement: protractor_1.by.css("[id*='SearchPropertyValue']"),
    MortgageAmountElement: protractor_1.by.css("[id*='SearchMortgageAmount']"),
    MortgageTermElement: protractor_1.by.css("[id*='SearchMortgageTerm']"),
    MortgageFixedRateElement: protractor_1.by.css("[for*='input-fixed']"),
    MortgageWithFeeElement: protractor_1.by.css("[for*='product-fee-input-fee']"),
    FindMortgageElement: protractor_1.by.css("[id*='myButton']"),
    MortgageSearchResultsElement: protractor_1.by.css("h3[id*='_ProductName']"),
    MorInfoAndApplyElement: protractor_1.by.css("[class='showHideCell doNotPrint']"),
    ApplyElement: protractor_1.by.css("[data-productname*='5 yr Fixed ']"),
    StartMortgageApplicationElement: protractor_1.by.css("[class*='blue regularText']"),
    SpinnerElement: protractor_1.by.css('.spinner')
};
class MortgagePage {
    FillOutProperyValueDetails(propertyValue, mortgageAmount, mortgageDuration) {
        return __awaiter(this, void 0, void 0, function* () {
            const propertyValueChanged = yield propertyValue.replace("£", "").replace(',', "").trim();
            const mortgageAmountChanged = yield mortgageAmount.replace("£", "").replace(',', "").trim();
            const mortgageDurationChanged = yield mortgageDuration.replace("years", "").trim();
            yield broswerActions.WaitAndSendKeysByIndex(Locators.PropertyValueElement, 1, propertyValueChanged);
            yield broswerActions.WaitAndSendKeysByIndex(Locators.MortgageAmountElement, 1, mortgageAmountChanged);
            yield broswerActions.WaitAndSendKeys(Locators.MortgageTermElement, mortgageDurationChanged);
            yield broswerActions.WaitAndClick(Locators.FindMortgageElement);
            yield protractor_1.browser.sleep(5000);
        });
    }
    SelectMortgage(nationwideMortage) {
        return __awaiter(this, void 0, void 0, function* () {
            switch (nationwideMortage) {
                case "No":
                    yield broswerActions.WaitAndClickByIndex(Locators.NoMortagesElement, 0);
                    break;
                default:
                    chai_1.assert.fail("No option for nationwideMortage was passed in to be selected");
                    break;
            }
        });
    }
    TypeOfMortgage(typeOfMortgage) {
        return __awaiter(this, void 0, void 0, function* () {
            switch (typeOfMortgage) {
                case "Changing lender":
                    yield broswerActions.WaitAndClickByIndex(Locators.ChangingLenderElement, 0);
                    break;
                default:
                    chai_1.assert.fail("No option for typeOfMortgage was passed in to be selected");
                    break;
            }
        });
    }
    MortgageType(mortgageType) {
        return __awaiter(this, void 0, void 0, function* () {
            switch (mortgageType) {
                case "Fixed rate":
                    yield broswerActions.WaitAndClick(Locators.MortgageFixedRateElement);
                    break;
                default:
                    chai_1.assert.fail("No option for mortgageType was passed in to be selected");
                    break;
            }
            yield protractor_1.browser.sleep(2000); // a better work around is needed
            // await broswerActions.WaitForSpinnerToDisappear(Locators.SpinnerElement);
        });
    }
    MortgageProductFee(productFee) {
        return __awaiter(this, void 0, void 0, function* () {
            switch (productFee) {
                case "With Fee":
                    yield broswerActions.WaitAndClick(Locators.MortgageWithFeeElement);
                    break;
                default:
                    chai_1.assert.fail("No option for productFee was passed in to be selected");
                    break;
            }
            yield protractor_1.browser.sleep(2000); // a better work around is needed
            // await broswerActions.WaitForSpinnerToDisappear(Locators.SpinnerElement);
        });
    }
    VerifyAllMortgageResultsIsDisplayed() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield broswerActions.GetAllInnerTextByIndex(Locators.MortgageSearchResultsElement);
        });
    }
    ApplyForMorgate() {
        return __awaiter(this, void 0, void 0, function* () {
            yield broswerActions.WaitAndClickByIndex(Locators.MorInfoAndApplyElement, 4);
            yield broswerActions.WaitAndClick(Locators.ApplyElement);
        });
    }
    IsStartRemortageApplicationDisplayed() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield broswerActions.GetInnerText(Locators.StartMortgageApplicationElement);
        });
    }
}
exports.MortgagePage = MortgagePage;
;
//# sourceMappingURL=MortgagesPage.js.map