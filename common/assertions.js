const { expect } = require('@wdio/globals');

module.exports = {
    async assertElementsTextEquals(element, expectedText) {
        await element.waitForDisplayed({ timeout: 5000 });
        const actualText = await element.getText();
        expect(actualText).toEqual(expectedText);
    },

    async assertsElementsTextEquals(element) {
        await element.waitForDisplayed({ timeout: 5000 });
        const isDisplayed = await element.isDisplayed();
        expect(isDisplayed).toBe(true);
    }
};
