import { protractor, browser, element, $ } from "protractor";
import { By } from "selenium-webdriver";
import { config } from "../../Configuration/config";

var ec = protractor.ExpectedConditions;

export class BroswerExtensions {

    async WaitForElementToBeVisible(webElementToWaitFor: By) {
        var elm = await element(webElementToWaitFor);
        await browser.wait(ec.visibilityOf(elm), config.browserWaitTimeout, webElementToWaitFor + ": was not visible after " + config.browserWaitTimeout + " millisecond");
        return elm;
    }

    async WaitForElementsToBeVisible(webElementToWaitFor: By, index: number) {

        var elm = await element.all(webElementToWaitFor);
        await browser.wait(ec.visibilityOf(elm[index]), config.browserWaitTimeout, webElementToWaitFor + ": was not visible after " + config.browserWaitTimeout + " millisecond");
        return elm;
    }

    async WaitForElementToBeClickble(webElementToWaitFor: By) {
        var elm = await element(webElementToWaitFor);
        await browser.wait(ec.elementToBeClickable(elm), config.browserWaitTimeout, webElementToWaitFor + ": was not visible after " + config.browserWaitTimeout + " millisecond");
        return elm;
    }

    async WaitAndClick(webElementToClick: By) {

        var elm = await this.WaitForElementToBeVisible(webElementToClick);
        return await elm.click();
    }

    async WaitAndClickByIndex(webElementToClick: By, index: number) {

        await this.WaitForElementToBeClickble(webElementToClick);
        var elm = await element.all(webElementToClick);
        await elm[index].click();
    }

    async WaitAndSendKeys(webElementToSendKeys: By, text: string) {

        var elm = await this.WaitForElementToBeVisible(webElementToSendKeys);
        return await elm.sendKeys(text);
    }

    async WaitAndSendKeysByIndex(webElementToSendKeys: By, index: number, text: string) {

        await this.WaitForElementToBeClickble(webElementToSendKeys);
        var elm = await element.all(webElementToSendKeys);
        return await elm[index].sendKeys(text);
    }

    async GetInnerText(webElementToExtractInnerText: By) {

        var elm = await this.WaitForElementToBeVisible(webElementToExtractInnerText);
        return await elm.getText();
    }

    async GetAllInnerTextByIndex(webElementToExtractInnerText: By) {

        var allText = await element.all(webElementToExtractInnerText).map( function ( element ) {
            return element.getText()
        })
        
        return await allText.filter( function( values ) {
            return values !== "";
        })
    }

    async HoverByIndex(elementToHoverOver: By, index: number) {

        await this.WaitForElementToBeVisible(elementToHoverOver);
        var elm = await element.all(elementToHoverOver);
        return await browser.actions().mouseMove(elm[index]).perform();
    }

    async IsElementDisplayed(elementToBeDisplayed: By) {

        var ele = await this.WaitForElementToBeVisible(elementToBeDisplayed);
        return await ele.isDisplayed();
    }

    async WaitForSpinnerToDisappear(spinnerElement: By){

        await browser.wait(function() {

            return !browser.isElementPresent(spinnerElement);
          }, 20000);
    }
}