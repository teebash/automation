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
const CucumberReportExtension_1 = require("../Test/Reporting/CucumberReportExtension");
const jsonReports = process.cwd() + "/reports/json";
exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    directConnect: true,
    specs: ["../Test/Features/**/*.feature"],
    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),
    baseUrl: "https://nationwide.co.uk",
    browserWaitTimeout: 20000,
    capabilities: {
        browserName: 'chrome',
        chromeOptions: {
            args: [
                '--start-maximized',
                '--disable-impl-side-painting',
                '--bypass-app-banner-engagement-checks ',
                '--test-type',
                '--ignore-certificate-errors',
                '--disable-extensions',
                '--incognito',
                '--disable-gpu'
            ]
        }
    },
    cucumberOpts: {
        compiler: "ts:ts-node/register",
        strict: true,
        format: "json:reports/json/cucumber_report.json",
        require: ['../Test/StepDefinition/**/*.js', '../Test/Hooks/*.js'],
        tags: '@Pending'
    },
    onPrepare: () => __awaiter(this, void 0, void 0, function* () {
        protractor_1.browser.ignoreSynchronization = true;
        yield protractor_1.browser.manage().deleteAllCookies();
        CucumberReportExtension_1.CucumberReportExtension.CreateReportFile(jsonReports);
    }),
    onComplete: () => __awaiter(this, void 0, void 0, function* () {
        yield CucumberReportExtension_1.CucumberReportExtension.GenerateCucumberReport();
    })
};
//# sourceMappingURL=config.js.map