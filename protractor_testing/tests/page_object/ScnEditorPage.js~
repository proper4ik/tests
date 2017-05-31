function ScnPage(sc_window) {
    var self = this;
    self.getScLinks = function() {
        return sc_window.all(by.css(".scs-scn-element"));
    }

    self.waitForScLinksIsResolved = function() {
        browser.sleep(3000);
    }

    var Contour = "#changeNodeValueToContourButton";
    var Set = "#changeNodeValueToSetButton";
    var Text = "#changeNodeValueToTextButton";
    var LinkValue = "#changeLinkValueButton";

    self.clickContour = function(){
        sc_window.all(by.css(Contour)).click();
        browser.sleep(3000);
    }

    self.clickSet = function(){
        sc_window.all(by.css(Set)).click();
        browser.sleep(3000);
    }

    self.clickText = function(){
        sc_window.all(by.css(Text)).click();
        browser.sleep(3000);
    }

    self.clickLinkValue = function(){
        sc_window.all(by.css(LinkValue)).click();
        browser.sleep(3000);
    }

    var editor ="#SCnEditorAliasWorkbenchEditor > span.SCnTransContentNext > div.SCnKeyword"
    self.editorSCnKeyword = function(){
        return sc_window.all(by.css(editor));
    }
    
    var constantScConnectorButton = "#accordionContainer > div.accordion.col-3 > div.accordionHeader:nth-child(1)";
    var belongLeftScConnectorButton = "#accordionContainer > div.accordion.col-3 > div.accordion-group-buttons:nth-child(2)  >           button.toolbarButton.accordion-button:nth-child(1)";
    var belongRightScConnectorButton = "#accordionContainer > div.accordion.col-3 > div.accordion-group-buttons:nth-child(2)  >           button.toolbarButton.accordion-button:nth-child(9)";
    var implicationLeftScConnectorButton = "#accordionContainer > div.accordion.col-3 > div.accordion-group-buttons:nth-child(2)  >           button.toolbarButton.accordion-button:nth-child(2)";
    var implicationRightScConnectorButton = "#accordionContainer > div.accordion.col-3 > div.accordion-group-buttons:nth-child(2)  >           button.toolbarButton.accordion-button:nth-child(10)";
    var varScConnectorButton = "#accordionContainer > div.accordion.col-3 > div.accordionHeader:nth-child(3)";
    var varbelongLeftScConnectorButton = "#accordionContainer > div.accordion.col-3 > div.accordion-group-buttons:nth-child(4)  >          button.toolbarButton.accordion-button:nth-child(1)";
    var varbelongRightScConnectorButton = "#accordionContainer > div.accordion.col-3 > div.accordion-group-buttons:nth-child(4)  >          button.toolbarButton.accordion-button:nth-child(9)";
    var varimplicationLeftScConnectorButton = "#accordionContainer > div.accordion.col-3 > div.accordion-group-buttons:nth-child(4)  >          button.toolbarButton.accordion-button:nth-child(2)";
    var varimplicationRightScConnectorButton = "#accordionContainer > div.accordion.col-3 > div.accordion-group-buttons:nth-child(4)  >          button.toolbarButton.accordion-button:nth-child(10)";
    var equipollenceLeftScConnectorButton = "#accordionContainer > div.accordion.col-3 > div.accordion-group-buttons:nth-child(2)  >           button.toolbarButton.accordion-button:nth-child(3)";
    var equipollenceRightScConnectorButton = "#accordionContainer > div.accordion.col-3 > div.accordion-group-buttons:nth-child(2)  >           button.toolbarButton.accordion-button:nth-child(11)";
    var varequipollenceLeftScConnectorButton = "#accordionContainer > div.accordion.col-3 > div.accordion-group-buttons:nth-child(4)  >          button.toolbarButton.accordion-button:nth-child(3)";
    var varequipollenceRightScConnectorButton = "#accordionContainer > div.accordion.col-3 > div.accordion-group-buttons:nth-child(4)  >          button.toolbarButton.accordion-button:nth-child(11)";
    var notbelongLeftScConnectorButton = "#accordionContainer > div.accordion.col-3 > div.accordion-group-buttons:nth-child(2)  >           button.toolbarButton.accordion-button:nth-child(4)";
    var notbelongRightScConnectorButton = "#accordionContainer > div.accordion.col-3 > div.accordion-group-buttons:nth-child(2)  >           button.toolbarButton.accordion-button:nth-child(12)";
    var varnotbelongLeftScConnectorButton = "#accordionContainer > div.accordion.col-3 > div.accordion-group-buttons:nth-child(4)  >           button.toolbarButton.accordion-button:nth-child(4)";
    var varnotbelongRightScConnectorButton = "#accordionContainer > div.accordion.col-3 > div.accordion-group-buttons:nth-child(4)  >           button.toolbarButton.accordion-button:nth-child(12)";
    var temporarybelongLeftScConnectorButton = "#accordionContainer > div.accordion.col-3 > div.accordion-group-buttons:nth-child(2)  >           button.toolbarButton.accordion-button:nth-child(6)";
    var temporarybelongRightScConnectorButton = "#accordionContainer > div.accordion.col-3 > div.accordion-group-buttons:nth-child(2)  >           button.toolbarButton.accordion-button:nth-child(14)";
    var vartemporarybelongLeftScConnectorButton = "#accordionContainer > div.accordion.col-3 > div.accordion-group-buttons:nth-child(4)  >           button.toolbarButton.accordion-button:nth-child(6)";
    var vartemporarybelongRightScConnectorButton = "#accordionContainer > div.accordion.col-3 > div.accordion-group-buttons:nth-child(4)  >           button.toolbarButton.accordion-button:nth-child(14)";
    var fuzbelongLeftScConnectorButton = "#accordionContainer > div.accordion.col-3 > div.accordion-group-buttons:nth-child(2)  >           button.toolbarButton.accordion-button:nth-child(5)";
    var fuzbelongRightScConnectorButton = "#accordionContainer > div.accordion.col-3 > div.accordion-group-buttons:nth-child(2)  >           button.toolbarButton.accordion-button:nth-child(13)";
    var varfuzbelongLeftScConnectorButton = "#accordionContainer > div.accordion.col-3 > div.accordion-group-buttons:nth-child(4)  >           button.toolbarButton.accordion-button:nth-child(5)";
    var varfuzbelongRightScConnectorButton = "#accordionContainer > div.accordion.col-3 > div.accordion-group-buttons:nth-child(4)  >           button.toolbarButton.accordion-button:nth-child(13)";
    var fuznotbelongLeftScConnectorButton = "#accordionContainer > div.accordion.col-3 > div.accordion-group-buttons:nth-child(2)  >           button.toolbarButton.accordion-button:nth-child(7)";
    var fuznotbelongRightScConnectorButton = "#accordionContainer > div.accordion.col-3 > div.accordion-group-buttons:nth-child(2)  >           button.toolbarButton.accordion-button:nth-child(15)";
    var varfuznotbelongLeftScConnectorButton = "#accordionContainer > div.accordion.col-3 > div.accordion-group-buttons:nth-child(4)  >           button.toolbarButton.accordion-button:nth-child(7)";
    var varfuznotbelongRightScConnectorButton = "#accordionContainer > div.accordion.col-3 > div.accordion-group-buttons:nth-child(4)  >           button.toolbarButton.accordion-button:nth-child(15)";
    var temporarynotbelongLeftScConnectorButton = "#accordionContainer > div.accordion.col-3 > div.accordion-group-buttons:nth-child(2)  >           button.toolbarButton.accordion-button:nth-child(8)";
    var temporarynotbelongRightScConnectorButton = "#accordionContainer > div.accordion.col-3 > div.accordion-group-buttons:nth-child(2)  >           button.toolbarButton.accordion-button:nth-child(16)";
    var vartemporarynotbelongLeftScConnectorButton = "#accordionContainer > div.accordion.col-3 > div.accordion-group-buttons:nth-child(4)  >           button.toolbarButton.accordion-button:nth-child(8)";
    var vartemporarynotbelongRightScConnectorButton = "#accordionContainer > div.accordion.col-3 > div.accordion-group-buttons:nth-child(4)  >           button.toolbarButton.accordion-button:nth-child(16)";
    var otherScConnectorButton = "#accordionContainer > div.accordion.col-3 > div.accordionHeader:nth-child(5)";
    var equalityScConnectorButton = "#accordionContainer > div.accordion.col-3 > div.accordion-group-buttons:nth-child(6)  >           button.toolbarButton.accordion-button:nth-child(1)";

    self.belongLeftScConnectorButton = function(){
        sc_window.all(by.css(constantScConnectorButton)).click();
        browser.sleep(2000);
        sc_window.all(by.css(belongLeftScConnectorButton)).click();
        browser.sleep(2000);
    }

    self.belongRightScConnectorButton = function(){
        sc_window.all(by.css(constantScConnectorButton)).click();
        browser.sleep(2000);
        sc_window.all(by.css(belongRightScConnectorButton)).click();
        browser.sleep(2000);
    }

    self.implicationLeftScConnectorButton = function(){
        sc_window.all(by.css(constantScConnectorButton)).click();
        browser.sleep(2000);
        sc_window.all(by.css(implicationLeftScConnectorButton)).click();
        browser.sleep(2000);
    }

    self.implicationRightScConnectorButton = function(){
        sc_window.all(by.css(constantScConnectorButton)).click();
        browser.sleep(2000);
        sc_window.all(by.css(implicationRightScConnectorButton)).click();
        browser.sleep(2000);
    }

    self.varbelongLeftScConnectorButton = function(){
        sc_window.all(by.css(varScConnectorButton)).click();
        browser.sleep(2000);
        sc_window.all(by.css(varbelongLeftScConnectorButton)).click();
        browser.sleep(2000);
    }

    self.varbelongRightScConnectorButton = function(){
        sc_window.all(by.css(varScConnectorButton)).click();
        browser.sleep(2000);
        sc_window.all(by.css(varbelongRightScConnectorButton)).click();
        browser.sleep(2000);
    }

    self.varimplicationLeftScConnectorButton = function(){
        sc_window.all(by.css(varScConnectorButton)).click();
        browser.sleep(2000);
        sc_window.all(by.css(varimplicationLeftScConnectorButton)).click();
        browser.sleep(2000);
    }

    self.varimplicationRightScConnectorButton = function(){
        sc_window.all(by.css(varScConnectorButton)).click();
        browser.sleep(2000);
        sc_window.all(by.css(varimplicationRightScConnectorButton)).click();
        browser.sleep(2000);
    }

    self.equipollenceLeftScConnectorButton = function(){
        sc_window.all(by.css(constantScConnectorButton)).click();
        browser.sleep(2000);
        sc_window.all(by.css(equipollenceLeftScConnectorButton)).click();
        browser.sleep(2000);
    }

    self.equipollenceRightScConnectorButton = function(){
        sc_window.all(by.css(constantScConnectorButton)).click();
        browser.sleep(2000);
        sc_window.all(by.css(equipollenceRightScConnectorButton)).click();
        browser.sleep(2000);
    }

    self.varequipollenceLeftScConnectorButton = function(){
        sc_window.all(by.css(varScConnectorButton)).click();
        browser.sleep(2000);
        sc_window.all(by.css(varequipollenceLeftScConnectorButton)).click();
        browser.sleep(2000);
    }

    self.varequipollenceRightScConnectorButton = function(){
        sc_window.all(by.css(varScConnectorButton)).click();
        browser.sleep(2000);
        sc_window.all(by.css(varequipollenceRightScConnectorButton)).click();
        browser.sleep(2000);
    }

    self.notbelongLeftScConnectorButton = function(){
        sc_window.all(by.css(constantScConnectorButton)).click();
        browser.sleep(2000);
        sc_window.all(by.css(notbelongLeftScConnectorButton)).click();
        browser.sleep(2000);
    }

    self.notbelongRightScConnectorButton = function(){
        sc_window.all(by.css(constantScConnectorButton)).click();
        browser.sleep(2000);
        sc_window.all(by.css(notbelongRightScConnectorButton)).click();
        browser.sleep(2000);
    }

    self.varnotbelongLeftScConnectorButton = function(){
        sc_window.all(by.css(varScConnectorButton)).click();
        browser.sleep(2000);
        sc_window.all(by.css(varnotbelongLeftScConnectorButton)).click();
        browser.sleep(2000);
    }

    self.varnotbelongRightScConnectorButton = function(){
        sc_window.all(by.css(varScConnectorButton)).click();
        browser.sleep(2000);
        sc_window.all(by.css(varnotbelongRightScConnectorButton)).click();
        browser.sleep(2000);
    }

    self.temporarybelongLeftScConnectorButton = function(){
        sc_window.all(by.css(constantScConnectorButton)).click();
        browser.sleep(2000);
        sc_window.all(by.css(temporarybelongLeftScConnectorButton)).click();
        browser.sleep(2000);
    }

    self.temporarybelongRightScConnectorButton = function(){
        sc_window.all(by.css(constantScConnectorButton)).click();
        browser.sleep(2000);
        sc_window.all(by.css(temporarybelongRightScConnectorButton)).click();
        browser.sleep(2000);
    }

    self.vartemporarybelongLeftScConnectorButton = function(){
        sc_window.all(by.css(varScConnectorButton)).click();
        browser.sleep(2000);
        sc_window.all(by.css(vartemporarybelongLeftScConnectorButton)).click();
        browser.sleep(2000);
    }

    self.vartemporarybelongRightScConnectorButton = function(){
        sc_window.all(by.css(varScConnectorButton)).click();
        browser.sleep(2000);
        sc_window.all(by.css(vartemporarybelongRightScConnectorButton)).click();
        browser.sleep(2000);
    }

    self.fuzbelongLeftScConnectorButton = function(){
        sc_window.all(by.css(constantScConnectorButton)).click();
        browser.sleep(2000);
        sc_window.all(by.css(fuzbelongLeftScConnectorButton)).click();
        browser.sleep(2000);
    }

    self.fuzbelongRightScConnectorButton = function(){
        sc_window.all(by.css(constantScConnectorButton)).click();
        browser.sleep(2000);
        sc_window.all(by.css(fuzbelongRightScConnectorButton)).click();
        browser.sleep(2000);
    }

    self.varfuzbelongLeftScConnectorButton = function(){
        sc_window.all(by.css(varScConnectorButton)).click();
        browser.sleep(2000);
        sc_window.all(by.css(varfuzbelongLeftScConnectorButton)).click();
        browser.sleep(2000);
    }

    self.varfuzbelongRightScConnectorButton = function(){
        sc_window.all(by.css(varScConnectorButton)).click();
        browser.sleep(2000);
        sc_window.all(by.css(varfuzbelongRightScConnectorButton)).click();
        browser.sleep(2000);
    }

    self.fuznotbelongLeftScConnectorButton = function(){
        sc_window.all(by.css(constantScConnectorButton)).click();
        browser.sleep(2000);
        sc_window.all(by.css(fuznotbelongLeftScConnectorButton)).click();
        browser.sleep(2000);
    }

    self.fuznotbelongRightScConnectorButton = function(){
        sc_window.all(by.css(constantScConnectorButton)).click();
        browser.sleep(2000);
        sc_window.all(by.css(fuznotbelongRightScConnectorButton)).click();
        browser.sleep(2000);
    }

    self.varfuznotbelongLeftScConnectorButton = function(){
        sc_window.all(by.css(varScConnectorButton)).click();
        browser.sleep(2000);
        sc_window.all(by.css(varfuznotbelongLeftScConnectorButton)).click();
        browser.sleep(2000);
    }

    self.varfuznotbelongRightScConnectorButton = function(){
        sc_window.all(by.css(varScConnectorButton)).click();
        browser.sleep(2000);
        sc_window.all(by.css(varfuznotbelongRightScConnectorButton)).click();
        browser.sleep(2000);
    }

    self.temporarynotbelongLeftScConnectorButton = function(){
        sc_window.all(by.css(constantScConnectorButton)).click();
        browser.sleep(2000);
        sc_window.all(by.css(temporarynotbelongLeftScConnectorButton)).click();
        browser.sleep(2000);
    }

    self.temporarynotbelongRightScConnectorButton = function(){
        sc_window.all(by.css(constantScConnectorButton)).click();
        browser.sleep(2000);
        sc_window.all(by.css(temporarynotbelongRightScConnectorButton)).click();
        browser.sleep(2000);
    }

    self.vartemporarynotbelongLeftScConnectorButton = function(){
        sc_window.all(by.css(varScConnectorButton)).click();
        browser.sleep(2000);
        sc_window.all(by.css(vartemporarynotbelongLeftScConnectorButton)).click();
        browser.sleep(2000);
    }

    self.vartemporarynotbelongRightScConnectorButton = function(){
        sc_window.all(by.css(varScConnectorButton)).click();
        browser.sleep(2000);
        sc_window.all(by.css(vartemporarynotbelongRightScConnectorButton)).click();
        browser.sleep(2000);
    }

    self.equalityScConnectorButton = function(){
        sc_window.all(by.css(otherScConnectorButton)).click();
        browser.sleep(2000);
        sc_window.all(by.css(equalityScConnectorButton)).click();
        browser.sleep(2000);
    }

    var editor ="#SCnEditorAliasWorkbenchEditor > div.SCnSentence"
    self.editorSCnSentenceElements = function(){
        return sc_window.all(by.css(editor));
    }

    var saveButton = "#toolbarSaveButton";

    self.saveButton = function(){
        sc_window.all(by.css(saveButton)).click();
        browser.sleep(2000);
    }

    var historyButton = "#historyPanelButton";

    self.historyButton = function(){
        sc_window.all(by.css(historyButton)).click();
        browser.sleep(2000);
    }

    var set1Button = "#SCnEditorAliasWorkbenchEditor > span.SCnTransContentNext > div.SCnKeyword selectedSCnNode";

    self.set1Button = function(){
        sc_window.all(by.css(set1Button)).click();
        browser.sleep(2000);
    }

    var editor ="#SCnEditorAliasWorkbenchEditor > div.SCnSentence"
    self.editorSCnSentenceElements = function(){
        return sc_window.all(by.css(editor));
    }

}

module.exports = ScnPage
