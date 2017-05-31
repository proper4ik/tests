var ScWebPage = require("./page_object/ScWebPage")
var ScnPage = require("./page_object/ScnEditorPage")

describe("SCn test", function() {
    console.log(ScWebPage);

    var scWebPage = new ScWebPage();

    beforeEach(function() {
        browser.get("http://localhost:8000");
        scWebPage.waitForScWebIsLoaded();
    });

    it('Creation sets and belonging', function() {
        var scnPage = new ScnPage(scWebPage.getActiveWindowId());
	scWebPage.openScnEditor();
        scnPage.waitForScLinksIsResolved();
        scnPage.clickSet();
        scnPage.waitForScLinksIsResolved();
        scnPage.belongLeftScConnectorButton();
        scnPage.waitForScLinksIsResolved();
        scnPage.clickSet();
       var elements = scnPage.editorSCnKeyword();
        expect(elements.count()).toEqual(1);
    });

    it('Creation set, contour and belonging', function() {
        var scnPage = new ScnPage(scWebPage.getActiveWindowId());
	scWebPage.openScnEditor();
        scnPage.waitForScLinksIsResolved();
        scnPage.clickSet();
        scnPage.waitForScLinksIsResolved();
        scnPage.belongLeftScConnectorButton();
        scnPage.waitForScLinksIsResolved();
        scnPage.clickContour();
       var elements = scnPage.editorSCnKeyword();
        expect(elements.count()).toEqual(1);
    });

});
