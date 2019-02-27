import * as fs from 'fs'
import * as mkdirp from 'mkdirp'
import * as report from 'cucumber-html-reporter'


export class CucumberReportExtension {

    private static jsonDir = process.cwd() + "/reports/json";
    private static htmlDir = process.cwd() + "/reports/html";
    private static jsonFile = CucumberReportExtension.jsonDir + "/cucumber_report.json";

    private static cucumberReporterOptions = {
        theme: "bootstrap",
        jsonFile: CucumberReportExtension.jsonFile,
        output: CucumberReportExtension.htmlDir + "/cucumber_reporter.html",
        reportSuiteAsScenarios: true,
        metadata: {
            "App Version": "0.0.1",
            "Test Environment": "Testing",
            "Browser": "Chrome  59.0.945",
            "Platform": "Windows 10",
            "Parallel": "Scenarios",
            "Executed": "Local"
        }
    };

    public static CreateReportFile(dirName: string) {
        //Check of the directory exist
        if (!fs.existsSync(dirName))
            mkdirp.sync(dirName);
    }

    public static GenerateCucumberReport() {

        report.generate(CucumberReportExtension.cucumberReporterOptions);
    }

}

