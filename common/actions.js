class Actions {
    async Click(element) {
        await element.waitForDisplayed({ timeout: 10000 });
        await element.waitForEnabled({ timeout: 10000 });

        const location = await element.getLocation();
        const size = await element.getSize();

        const x = Math.floor(location.x + size.width / 2);
        const y = Math.floor(location.y + size.height / 2);

        await driver.execute('mobile: shell', {
            command: 'input',
            args: ['tap', x.toString(), y.toString()]
        });
    }


    async SetValue(element, value) {
        await element.waitForDisplayed({ timeout: 10000 });
        await element.clearValue();
        await element.setValue(value);
        await browser.pause(500);
    }
}

module.exports = new Actions();
