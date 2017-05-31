var fs = require('fs');

function ScWebPage() {
    var self = this;

    var EC = protractor.ExpectedConditions;

    function untilLoaded() {
        var deferred = protractor.promise.defer();
        element.all(by.css(".scs-scn-element"))
            .first()
            .getAttribute("class")
            .then(function(array) {
                var acc = array && array.indexOf("resolve") == -1;
                deferred.fulfill(acc);
            });
        return deferred.promise;
    }

    /*
     Блокирует поток выполнения пока
     не загрузятся все ссылки
     * */
    self.waitForScWebIsLoaded = function() {
        browser.wait(EC.visibilityOf($(".scs-scn-element"))
            , 60000);
        browser.wait(untilLoaded, 60000)
    }

    self.getActiveWindowId = ()=> {
        return element.all(by.css(".sc-window"))
            .filter(element=>element.isDisplayed()).get(0);
    }

    var changeLanguageDropdownButtonSelector = "#window-header-tools > div.btn-group > button.histoy-item-btn.btn.btn-success"

    var changeLanguageSelectors = {
        scg: "#history-item-langs > li:nth-child(2) > a",
        scn: "#history-item-langs > li:nth-child(1) > a"
    }

    var untilLanguageChangeExpectations = {
        /*
        * need blocking function*/
        scg: function() {
            return true;
        },
        scn: self.waitForScWebIsLoaded
    }

    /*
     * Нажимает на кнопку смены языка(scs, scg)*/
    self.changeLanguige = function(language) {
        if (!changeLanguageSelectors[language]) {
            console.error("Язык " + language + " не поддерживается");
        }
        element(by.css(changeLanguageDropdownButtonSelector)).click();
        element(by.css(changeLanguageSelectors[language])).click();
        untilLanguageChangeExpectations[language]();
    }

    var scnEditor = "#window-container > div.panel.panel-default.sc-window > div.panel-body > div.btn-group > button:nth-child(1)";

    self.openScnEditor = function() {
        element(by.css(scnEditor)).click();
}

    var scnEditorForChange = "#window-container > div.panel.panel-default.sc-window > div.panel-body > div.btn-group > button:nth-child(2)";

    self.openScnEditorForChange = function() {
        element(by.css(scnEditorForChange)).click();
}

    var editArticleSelector = "[id$='edit-article-btn']";
    var cancelEditSelector = "[id$='cancel-article-btn']";

    /*
    * add blocking until resolve*/
    self.activateEditor = function() {
        element(by.css(editArticleSelector)).click();
    }


    self.deactivateEditor = function() {
        element(by.css(cancelEditSelector)).click();
        untilLanguageChangeExpectations['scn']();
    }
}

module.exports = ScWebPage
