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
const config_1 = require("../../Configuration/config");
var ec = protractor_1.protractor.ExpectedConditions;
class BroswerExtensions {
    WaitForElementToBeVisible(webElementToWaitFor) {
        return __awaiter(this, void 0, void 0, function* () {
            var elm = yield protractor_1.element(webElementToWaitFor);
            yield protractor_1.browser.wait(ec.visibilityOf(elm), config_1.config.browserWaitTimeout, webElementToWaitFor + ": was not visible after " + config_1.config.browserWaitTimeout + " millisecond");
            return elm;
        });
    }
    WaitForElementsToBeVisible(webElementToWaitFor, index) {
        return __awaiter(this, void 0, void 0, function* () {
            var elm = yield protractor_1.element.all(webElementToWaitFor);
            yield protractor_1.browser.wait(ec.visibilityOf(elm[index]), config_1.config.browserWaitTimeout, webElementToWaitFor + ": was not visible after " + config_1.config.browserWaitTimeout + " millisecond");
            return elm;
        });
    }
    WaitForElementToBeClickble(webElementToWaitFor) {
        return __awaiter(this, void 0, void 0, function* () {
            var elm = yield protractor_1.element(webElementToWaitFor);
            yield protractor_1.browser.wait(ec.elementToBeClickable(elm), config_1.config.browserWaitTimeout, webElementToWaitFor + ": was not visible after " + config_1.config.browserWaitTimeout + " millisecond");
            return elm;
        });
    }
    WaitAndClick(webElementToClick) {
        return __awaiter(this, void 0, void 0, function* () {
            var elm = yield this.WaitForElementToBeVisible(webElementToClick);
            return yield elm.click();
        });
    }
    WaitAndClickByIndex(webElementToClick, index) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.WaitForElementToBeClickble(webElementToClick);
            var elm = yield protractor_1.element.all(webElementToClick);
            yield elm[index].click();
        });
    }
    WaitAndSendKeys(webElementToSendKeys, text) {
        return __awaiter(this, void 0, void 0, function* () {
            var elm = yield this.WaitForElementToBeVisible(webElementToSendKeys);
            return yield elm.sendKeys(text);
        });
    }
    WaitAndSendKeysByIndex(webElementToSendKeys, index, text) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.WaitForElementToBeClickble(webElementToSendKeys);
            var elm = yield protractor_1.element.all(webElementToSendKeys);
            return yield elm[index].sendKeys(text);
        });
    }
    GetInnerText(webElementToExtractInnerText) {
        return __awaiter(this, void 0, void 0, function* () {
            var elm = yield this.WaitForElementToBeVisible(webElementToExtractInnerText);
            return yield elm.getText();
        });
    }
    GetAllInnerTextByIndex(webElementToExtractInnerText) {
        return __awaiter(this, void 0, void 0, function* () {
            var allText = yield protractor_1.element.all(webElementToExtractInnerText).map(function (element) {
                return element.getText();
            });
            return yield allText.filter(function (values) {
                return values !== "";
            });
        });
    }
    HoverByIndex(elementToHoverOver, index) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.WaitForElementToBeVisible(elementToHoverOver);
            var elm = yield protractor_1.element.all(elementToHoverOver);
            return yield protractor_1.browser.actions().mouseMove(elm[index]).perform();
        });
    }
    IsElementDisplayed(elementToBeDisplayed) {
        return __awaiter(this, void 0, void 0, function* () {
            var ele = yield this.WaitForElementToBeVisible(elementToBeDisplayed);
            return yield ele.isDisplayed();
        });
    }
    WaitForSpinnerToDisappear(spinnerElement) {
        return __awaiter(this, void 0, void 0, function* () {
            yield protractor_1.browser.wait(function () {
                return !protractor_1.browser.isElementPresent(spinnerElement);
            }, 20000);
        });
    }
}
exports.BroswerExtensions = BroswerExtensions;
//# sourceMappingURL=broswerExtentions.js.map