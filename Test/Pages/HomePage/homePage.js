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
const broswerExtentions_1 = require("../../Helpers/broswerExtentions");
var broswerActions = new broswerExtentions_1.BroswerExtensions();
const Locators = {
    MortagesElement: protractor_1.by.css("[href*='who-we-can-help']"),
    NewMortageElement: protractor_1.by.css("[href*='our-mortgage-rate']"),
    CookiesElement: protractor_1.by.css("[class*='iconLink close']")
};
class HomePage {
    NavigateToMortgageRates() {
        return __awaiter(this, void 0, void 0, function* () {
            yield broswerActions.HoverByIndex(Locators.MortagesElement, 0);
            yield broswerActions.WaitAndClick(Locators.NewMortageElement);
        });
    }
    ;
    CloseCookiesPopUp() {
        return __awaiter(this, void 0, void 0, function* () {
            yield broswerActions.WaitAndClick(Locators.CookiesElement);
        });
    }
}
exports.HomePage = HomePage;
;
//# sourceMappingURL=homePage.js.map