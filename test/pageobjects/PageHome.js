const HomeElements = require('../../Elements/Home');

class HomePage {
    get EchoBox() {
        return $(HomeElements.EchoBox);
    }
}
module.exports = new HomePage();
