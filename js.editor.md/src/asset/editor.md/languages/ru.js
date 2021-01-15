(function(){
    var factory = function (exports) {
        var lang = {
            name : "ru",
            description : "Open source online Markdown editor.",
            tocTitle    : "Содержание",
            toolbar : {
                undo             : "Undo(Ctrl+Z)",
                redo             : "Redo(Ctrl+Y)",
                bold             : "Bold",
                del              : "Strikethrough",
                italic           : "Italic",
                quote            : "Block quote",
                ucwords          : "Words first letter convert to uppercase",
                uppercase        : "Selection text convert to uppercase",
                lowercase        : "Selection text convert to lowercase",
                h1               : "Заголовок 1",
                h2               : "Заголовок 2",
                h3               : "Заголовок 3",
                h4               : "Заголовок 4",
                h5               : "Заголовок 5",
                h6               : "Заголовок 6",
                "list-ul"        : "Неупорядоченный список",
                "list-ol"        : "Упорядоченный список",
                hr               : "Горизонтальная линия",
                link             : "Ссылка",
                "reference-link" : "Reference link",
                image            : "Картинка",
                code             : "Code inline",
                "preformatted-text" : "Preformatted text / Code block (Tab indent)",
                "code-block"     : "Code block (Multi-languages)",
                table            : "Таблицы",
                datetime         : "Datetime",
                emoji            : "Emoji",
                "html-entities"  : "HTML Entities",
                pagebreak        : "Page break",
                watch            : "Unwatch",
                unwatch          : "Watch",
                preview          : "HTML Preview (Press Shift + ESC exit)",
                fullscreen       : "Fullscreen (Press ESC exit)",
                clear            : "Clear",
                search           : "Search",
                help             : "Help",
                info             : "About " + exports.title
            },
            buttons : {
                enter  : "Enter",
                cancel : "Отменить",
                close  : "Закрыть"
            },
            dialog : {
                link : {
                    title    : "Link",
                    url      : "Address",
                    urlTitle : "Title",
                    urlEmpty : "Error: Please fill in the link address."
                },
                referenceLink : {
                    title    : "Reference link",
                    name     : "Name",
                    url      : "Address",
                    urlId    : "ID",
                    urlTitle : "Title",
                    nameEmpty: "Error: Reference name can't be empty.",
                    idEmpty  : "Error: Please fill in reference link id.",
                    urlEmpty : "Error: Please fill in reference link url address."
                },
                image : {
                    title    : "Image",
                    url      : "Address",
                    link     : "Link",
                    alt      : "Title",
                    uploadButton     : "Upload",
                    imageURLEmpty    : "Error: picture url address can't be empty.",
                    uploadFileEmpty  : "Error: upload pictures cannot be empty!",
                    formatNotAllowed : "Error: only allows to upload pictures file, upload allowed image file format:"
                },
                preformattedText : {
                    title             : "Preformatted text / Codes", 
                    emptyAlert        : "Error: Please fill in the Preformatted text or content of the codes."
                },
                codeBlock : {
                    title             : "Code block",         
                    selectLabel       : "Languages: ",
                    selectDefaultText : "select a code language...",
                    otherLanguage     : "Other languages",
                    unselectedLanguageAlert : "Error: Please select the code language.",
                    codeEmptyAlert    : "Error: Please fill in the code content."
                },
                htmlEntities : {
                    title : "HTML Entities"
                },
                help : {
                    title : "Help"
                }
            }
        };
        
        exports.defaults.lang = lang;
    };
    
	// CommonJS/Node.js
	if (typeof require === "function" && typeof exports === "object" && typeof module === "object")
    { 
        module.exports = factory;
    }
	else if (typeof define === "function")  // AMD/CMD/Sea.js
    {
		if (define.amd) { // for Require.js

			define(["editormd"], function(editormd) {
                factory(editormd);
            });

		} else { // for Sea.js
			define(function(require) {
                var editormd = require("../editormd");
                factory(editormd);
            });
		}
	} 
	else
	{
        factory(window.editormd);
	}
    
})();