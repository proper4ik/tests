var ScWebPage = require("./page_object/ScWebPage")
var ScnPage = require("./page_object/ScnEditorPage")

describe("SCn test", function() {
    console.log(ScWebPage);

    var scWebPage = new ScWebPage();

    beforeEach(function() {
        browser.get("http://localhost:8000");
        scWebPage.waitForScWebIsLoaded();
    });

    it('History', function() {
        var scnPage = new ScnPage(scWebPage.getActiveWindowId());
	scWebPage.openScnEditorForChange();
        scnPage.waitForScLinksIsResolved();
        scnPage.historyButton();
       var elements = scnPage.editorSCnKeyword();
        expect(elements.count()).toEqual(2);
    });

});
