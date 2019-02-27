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
const cucumber_1 = require("cucumber");
const config_1 = require("../../Configuration/config");
const homePage_1 = require("../Pages/HomePage/homePage");
cucumber_1.setDefaultTimeout(150000);
var homePage = new homePage_1.HomePage();
cucumber_1.Before(() => __awaiter(this, void 0, void 0, function* () {
    yield protractor_1.browser.driver.get(config_1.config.baseUrl);
    yield homePage.CloseCookiesPopUp();
}));
cucumber_1.After(function (Scenario) {
    return __awaiter(this, void 0, void 0, function* () {
        if (Scenario.result.status === cucumber_1.Status.FAILED) {
            const screenShot = yield protractor_1.browser.takeScreenshot();
            this.attach(screenShot, "image/png");
        }
        else {
            yield protractor_1.browser.navigate().refresh();
        }
    });
});
//# sourceMappingURL=ScenarioHooks.js.map