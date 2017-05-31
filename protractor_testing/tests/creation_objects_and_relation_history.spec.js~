var ScWebPage = require("./page_object/ScWebPage")
var ScnPage = require("./page_object/ScnEditorPage")

describe("SCn test", function() {
    console.log(ScWebPage);

    var scWebPage = new ScWebPage();

    beforeEach(function() {
        browser.get("http://localhost:8000");
        scWebPage.waitForScWebIsLoaded();
    });

    it('Creation sets and belonging. History', function() {
        var scnPage = new ScnPage(scWebPage.getActiveWindowId());
	scWebPage.openScnEditor();
        scnPage.waitForScLinksIsResolved();
        scnPage.clickSet();
        scnPage.waitForScLinksIsResolved();
        scnPage.belongLeftScConnectorButton();
        scnPage.waitForScLinksIsResolved();
        scnPage.clickSet();
        scnPage.waitForScLinksIsResolved();
        scnPage.historyButton();
       var elements = scnPage.editorSCnKeyword();
        expect(elements.count()).toEqual(1);
    });

    it('Creation set, contour and belonging. History', function() {
        var scnPage = new ScnPage(scWebPage.getActiveWindowId());
	scWebPage.openScnEditor();
        scnPage.waitForScLinksIsResolved();
        scnPage.clickSet();
        scnPage.waitForScLinksIsResolved();
        scnPage.belongLeftScConnectorButton();
        scnPage.waitForScLinksIsResolved();
        scnPage.clickContour();
        scnPage.waitForScLinksIsResolved();
        scnPage.historyButton();
       var elements = scnPage.editorSCnKeyword();
        expect(elements.count()).toEqual(1);
    });

});
