class Actions {
    async Click(element) {
        await element.waitForDisplayed({ timeout: 10000 });

        // Click simple avec WebDriver
        try {
            await element.click();
        } catch (err) {
            console.log("Click normal échoué. Vérifie que l'élément est interactif et visible !");
        }

        await browser.pause(500);
    }

    async SetValue(element, value) {
        await element.waitForDisplayed({ timeout: 10000 });
        await element.clearValue();
        await element.setValue(value);
        await browser.pause(500);
    }
}

module.exports = new Actions();
