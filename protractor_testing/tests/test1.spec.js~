var ScWebPage = require("./page_object/ScWebPage")
var ScnPage = require("./page_object/ScnEditorPage")

describe("SCn test", function() {
    console.log(ScWebPage);

    var scWebPage = new ScWebPage();

    beforeEach(function() {
        browser.get("http://localhost:8000");
        scWebPage.waitForScWebIsLoaded();
    });

    it('All menu buttons should function: click on Set', function() {
        var scnPage = new ScnPage(scWebPage.getActiveWindowId());
	scWebPage.openScnEditor();
        scnPage.waitForScLinksIsResolved();
        scnPage.clickSet();
       var elements = scnPage.editorSCnKeyword();
        expect(elements.count()).toEqual(1);
    });

    it('All menu buttons should function: click on Contour', function() {
        var scnPage = new ScnPage(scWebPage.getActiveWindowId());
	scWebPage.openScnEditor();
        scnPage.waitForScLinksIsResolved();
        scnPage.clickContour();
       var elements = scnPage.editorSCnKeyword();
        expect(elements.count()).toEqual(1);
    });

    it('All menu buttons should function: click on Text', function() {
        var scnPage = new ScnPage(scWebPage.getActiveWindowId());
	scWebPage.openScnEditor();
        scnPage.waitForScLinksIsResolved();
        scnPage.clickText();
       var elements = scnPage.editorSCnKeyword();
        expect(elements.count()).toEqual(1);
    });

    it('All menu buttons should function: click on LinkValue', function() {
        var scnPage = new ScnPage(scWebPage.getActiveWindowId());
	scWebPage.openScnEditor();
        scnPage.waitForScLinksIsResolved();
        scnPage.clickLinkValue();
       var elements = scnPage.editorSCnKeyword();
        expect(elements.count()).toEqual(1);
    });


});
