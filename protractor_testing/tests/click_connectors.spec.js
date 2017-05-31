var ScWebPage = require("./page_object/ScWebPage")
var ScnPage = require("./page_object/ScnEditorPage")

describe("SCn test", function() {
    console.log(ScWebPage);

    var scWebPage = new ScWebPage();

    beforeEach(function() {
        browser.get("http://localhost:8000");
        scWebPage.waitForScWebIsLoaded();
    });


   it('All menu buttons should function: click on constant connectors (left belong)', function() {
        var scnPage = new ScnPage(scWebPage.getActiveWindowId());
	scWebPage.openScnEditor();
        scnPage.waitForScLinksIsResolved();
        scnPage.belongLeftScConnectorButton();
      var elements = scnPage.editorSCnSentenceElements();
        expect(elements.count()).toEqual(1);
    });

    it('All menu buttons should function: click on constant connectors (right belong)', function() {
        var scnPage = new ScnPage(scWebPage.getActiveWindowId());
	scWebPage.openScnEditor();
        scnPage.waitForScLinksIsResolved();
        scnPage.belongRightScConnectorButton();
      var elements = scnPage.editorSCnSentenceElements();
        expect(elements.count()).toEqual(1);
    });

    it('All menu buttons should function: click on variables connectors (left belong)', function() {
        var scnPage = new ScnPage(scWebPage.getActiveWindowId());
	scWebPage.openScnEditor();
        scnPage.waitForScLinksIsResolved();
        scnPage.varbelongLeftScConnectorButton();
      var elements = scnPage.editorSCnSentenceElements();
        expect(elements.count()).toEqual(1);
    });

    it('All menu buttons should function: click on variables connectors (right belong)', function() {
        var scnPage = new ScnPage(scWebPage.getActiveWindowId());
	scWebPage.openScnEditor();
        scnPage.waitForScLinksIsResolved();
        scnPage.varbelongRightScConnectorButton();
      var elements = scnPage.editorSCnSentenceElements();
        expect(elements.count()).toEqual(1);
    });

    it('All menu buttons should function: click on constant connectors (left implication)', function() {
        var scnPage = new ScnPage(scWebPage.getActiveWindowId());
	scWebPage.openScnEditor();
        scnPage.waitForScLinksIsResolved();
        scnPage.implicationLeftScConnectorButton();
      var elements = scnPage.editorSCnSentenceElements();
        expect(elements.count()).toEqual(1);
    });

    it('All menu buttons should function: click on constant connectors (right implication)', function() {
        var scnPage = new ScnPage(scWebPage.getActiveWindowId());
	scWebPage.openScnEditor();
        scnPage.waitForScLinksIsResolved();
        scnPage.implicationRightScConnectorButton();
      var elements = scnPage.editorSCnSentenceElements();
        expect(elements.count()).toEqual(1);
    });

    it('All menu buttons should function: click on variables connectors (left implication)', function() {
        var scnPage = new ScnPage(scWebPage.getActiveWindowId());
	scWebPage.openScnEditor();
        scnPage.waitForScLinksIsResolved();
        scnPage.varimplicationLeftScConnectorButton();
      var elements = scnPage.editorSCnSentenceElements();
        expect(elements.count()).toEqual(1);
    });

    it('All menu buttons should function: click on variables connectors (right implication)', function() {
        var scnPage = new ScnPage(scWebPage.getActiveWindowId());
	scWebPage.openScnEditor();
        scnPage.waitForScLinksIsResolved();
        scnPage.varimplicationRightScConnectorButton();
      var elements = scnPage.editorSCnSentenceElements();
        expect(elements.count()).toEqual(1);
    });

    it('All menu buttons should function: click on constant connectors (left equipollence)', function() {
        var scnPage = new ScnPage(scWebPage.getActiveWindowId());
	scWebPage.openScnEditor();
        scnPage.waitForScLinksIsResolved();
        scnPage.equipollenceLeftScConnectorButton();
      var elements = scnPage.editorSCnSentenceElements();
        expect(elements.count()).toEqual(1);
    });

    it('All menu buttons should function: click on constant connectors (right equipollence)', function() {
        var scnPage = new ScnPage(scWebPage.getActiveWindowId());
	scWebPage.openScnEditor();
        scnPage.waitForScLinksIsResolved();
        scnPage.equipollenceRightScConnectorButton();
      var elements = scnPage.editorSCnSentenceElements();
        expect(elements.count()).toEqual(1);
    });

    it('All menu buttons should function: click on variables connectors (left equipollence)', function() {
        var scnPage = new ScnPage(scWebPage.getActiveWindowId());
	scWebPage.openScnEditor();
        scnPage.waitForScLinksIsResolved();
        scnPage.varequipollenceLeftScConnectorButton();
      var elements = scnPage.editorSCnSentenceElements();
        expect(elements.count()).toEqual(1);
    });

    it('All menu buttons should function: click on variables connectors (right equipollence)', function() {
        var scnPage = new ScnPage(scWebPage.getActiveWindowId());
	scWebPage.openScnEditor();
        scnPage.waitForScLinksIsResolved();
        scnPage.varequipollenceRightScConnectorButton();
      var elements = scnPage.editorSCnSentenceElements();
        expect(elements.count()).toEqual(1);
    });

    it('All menu buttons should function: click on constant connectors (left not belong)', function() {
        var scnPage = new ScnPage(scWebPage.getActiveWindowId());
	scWebPage.openScnEditor();
        scnPage.waitForScLinksIsResolved();
        scnPage.notbelongLeftScConnectorButton();
      var elements = scnPage.editorSCnSentenceElements();
        expect(elements.count()).toEqual(1);
    });

    it('All menu buttons should function: click on constant connectors (right not belong)', function() {
        var scnPage = new ScnPage(scWebPage.getActiveWindowId());
	scWebPage.openScnEditor();
        scnPage.waitForScLinksIsResolved();
        scnPage.notbelongRightScConnectorButton();
      var elements = scnPage.editorSCnSentenceElements();
        expect(elements.count()).toEqual(1);
    });

    it('All menu buttons should function: click on constant connectors (left temporary belong)', function() {
        var scnPage = new ScnPage(scWebPage.getActiveWindowId());
	scWebPage.openScnEditor();
        scnPage.waitForScLinksIsResolved();
        scnPage.temporarybelongLeftScConnectorButton();
      var elements = scnPage.editorSCnSentenceElements();
        expect(elements.count()).toEqual(1);
    });

    it('All menu buttons should function: click on constant connectors (right temporary belong)', function() {
        var scnPage = new ScnPage(scWebPage.getActiveWindowId());
	scWebPage.openScnEditor();
        scnPage.waitForScLinksIsResolved();
        scnPage.temporarybelongRightScConnectorButton();
      var elements = scnPage.editorSCnSentenceElements();
        expect(elements.count()).toEqual(1);
    });

    it('All menu buttons should function: click on constant connectors (left fuz belong)', function() {
        var scnPage = new ScnPage(scWebPage.getActiveWindowId());
	scWebPage.openScnEditor();
        scnPage.waitForScLinksIsResolved();
        scnPage.fuzbelongLeftScConnectorButton();
      var elements = scnPage.editorSCnSentenceElements();
        expect(elements.count()).toEqual(1);
    });

    it('All menu buttons should function: click on constant connectors (right fuz belong)', function() {
        var scnPage = new ScnPage(scWebPage.getActiveWindowId());
	scWebPage.openScnEditor();
        scnPage.waitForScLinksIsResolved();
        scnPage.fuzbelongRightScConnectorButton();
      var elements = scnPage.editorSCnSentenceElements();
        expect(elements.count()).toEqual(1);
    });

    it('All menu buttons should function: click on constant connectors (left fuz not belong)', function() {
        var scnPage = new ScnPage(scWebPage.getActiveWindowId());
	scWebPage.openScnEditor();
        scnPage.waitForScLinksIsResolved();
        scnPage.fuznotbelongLeftScConnectorButton();
      var elements = scnPage.editorSCnSentenceElements();
        expect(elements.count()).toEqual(1);
    });

    it('All menu buttons should function: click on constant connectors (right fuz not belong)', function() {
        var scnPage = new ScnPage(scWebPage.getActiveWindowId());
	scWebPage.openScnEditor();
        scnPage.waitForScLinksIsResolved();
        scnPage.fuznotbelongRightScConnectorButton();
      var elements = scnPage.editorSCnSentenceElements();
        expect(elements.count()).toEqual(1);
    });

    it('All menu buttons should function: click on constant connectors (left temporary not belong)', function() {
        var scnPage = new ScnPage(scWebPage.getActiveWindowId());
	scWebPage.openScnEditor();
        scnPage.waitForScLinksIsResolved();
        scnPage.temporarynotbelongLeftScConnectorButton();
      var elements = scnPage.editorSCnSentenceElements();
        expect(elements.count()).toEqual(1);
    });

    it('All menu buttons should function: click on constant connectors (right temporary not belong)', function() {
        var scnPage = new ScnPage(scWebPage.getActiveWindowId());
	scWebPage.openScnEditor();
        scnPage.waitForScLinksIsResolved();
        scnPage.temporarynotbelongRightScConnectorButton();
      var elements = scnPage.editorSCnSentenceElements();
        expect(elements.count()).toEqual(1);
    });

    it('All menu buttons should function: click on var connectors (left not belong)', function() {
        var scnPage = new ScnPage(scWebPage.getActiveWindowId());
	scWebPage.openScnEditor();
        scnPage.waitForScLinksIsResolved();
        scnPage.varnotbelongLeftScConnectorButton();
      var elements = scnPage.editorSCnSentenceElements();
        expect(elements.count()).toEqual(1);
    });

    it('All menu buttons should function: click on var connectors (right not belong)', function() {
        var scnPage = new ScnPage(scWebPage.getActiveWindowId());
	scWebPage.openScnEditor();
        scnPage.waitForScLinksIsResolved();
        scnPage.varnotbelongRightScConnectorButton();
      var elements = scnPage.editorSCnSentenceElements();
        expect(elements.count()).toEqual(1);
    });

    it('All menu buttons should function: click on var connectors (left temporary belong)', function() {
        var scnPage = new ScnPage(scWebPage.getActiveWindowId());
	scWebPage.openScnEditor();
        scnPage.waitForScLinksIsResolved();
        scnPage.vartemporarybelongLeftScConnectorButton();
      var elements = scnPage.editorSCnSentenceElements();
        expect(elements.count()).toEqual(1);
    });

    it('All menu buttons should function: click on var connectors (right temporary belong)', function() {
        var scnPage = new ScnPage(scWebPage.getActiveWindowId());
	scWebPage.openScnEditor();
        scnPage.waitForScLinksIsResolved();
        scnPage.vartemporarybelongRightScConnectorButton();
      var elements = scnPage.editorSCnSentenceElements();
        expect(elements.count()).toEqual(1);
    });

    it('All menu buttons should function: click on var connectors (left fuz belong)', function() {
        var scnPage = new ScnPage(scWebPage.getActiveWindowId());
	scWebPage.openScnEditor();
        scnPage.waitForScLinksIsResolved();
        scnPage.varfuzbelongLeftScConnectorButton();
      var elements = scnPage.editorSCnSentenceElements();
        expect(elements.count()).toEqual(1);
    });

    it('All menu buttons should function: click on var connectors (right fuz belong)', function() {
        var scnPage = new ScnPage(scWebPage.getActiveWindowId());
	scWebPage.openScnEditor();
        scnPage.waitForScLinksIsResolved();
        scnPage.varfuzbelongRightScConnectorButton();
      var elements = scnPage.editorSCnSentenceElements();
        expect(elements.count()).toEqual(1);
    });

    it('All menu buttons should function: click on var connectors (left fuz not belong)', function() {
        var scnPage = new ScnPage(scWebPage.getActiveWindowId());
	scWebPage.openScnEditor();
        scnPage.waitForScLinksIsResolved();
        scnPage.varfuznotbelongLeftScConnectorButton();
      var elements = scnPage.editorSCnSentenceElements();
        expect(elements.count()).toEqual(1);
    });

    it('All menu buttons should function: click on var connectors (right fuz not belong)', function() {
        var scnPage = new ScnPage(scWebPage.getActiveWindowId());
	scWebPage.openScnEditor();
        scnPage.waitForScLinksIsResolved();
        scnPage.varfuznotbelongRightScConnectorButton();
      var elements = scnPage.editorSCnSentenceElements();
        expect(elements.count()).toEqual(1);
    });

    it('All menu buttons should function: click on var connectors (left temporary not belong)', function() {
        var scnPage = new ScnPage(scWebPage.getActiveWindowId());
	scWebPage.openScnEditor();
        scnPage.waitForScLinksIsResolved();
        scnPage.vartemporarynotbelongLeftScConnectorButton();
      var elements = scnPage.editorSCnSentenceElements();
        expect(elements.count()).toEqual(1);
    });

    it('All menu buttons should function: click on var connectors (right temporary not belong)', function() {
        var scnPage = new ScnPage(scWebPage.getActiveWindowId());
	scWebPage.openScnEditor();
        scnPage.waitForScLinksIsResolved();
        scnPage.vartemporarynotbelongRightScConnectorButton();
      var elements = scnPage.editorSCnSentenceElements();
        expect(elements.count()).toEqual(1);
    });

    it('All menu buttons should function: click on other connectors (equality)', function() {
        var scnPage = new ScnPage(scWebPage.getActiveWindowId());
	scWebPage.openScnEditor();
        scnPage.waitForScLinksIsResolved();
        scnPage.equalityScConnectorButton();
      var elements = scnPage.editorSCnSentenceElements();
        expect(elements.count()).toEqual(1);
    });

});
