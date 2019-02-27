import { Config, browser } from 'protractor';
import { CucumberReportExtension } from '../Test/Reporting/CucumberReportExtension';

const jsonReports = process.cwd() + "/reports/json";

export let config: Config = {

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

    onPrepare: async () => {

        browser.ignoreSynchronization = true;
        await browser.manage().deleteAllCookies();
        CucumberReportExtension.CreateReportFile(jsonReports);
    },

    onComplete: async () => {

        await CucumberReportExtension.GenerateCucumberReport();
    }
}