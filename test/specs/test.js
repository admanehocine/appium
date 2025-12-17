const Home = require("../pageobjects/PageHome");
const Actions = require("../../common/actions");
const allure = require("@wdio/allure-reporter").default;
describe("simpleTest", () => {
    it("ouverteur de EchoBox", async () => {
        await allure.step("ouverteur de Home", async () => {
            await Actions.Click(await Home.EchoBox);
        });
    });
});