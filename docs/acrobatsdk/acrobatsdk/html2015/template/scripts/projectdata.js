// Publish project specific data
(function() {
rh = window.rh;
model = rh.model;

rh.consts('DEFAULT_TOPIC', encodeURI("#Acro12_MasterBook/Introduction_Help_TitlePage/About_This_Help.htm".substring(1)));
rh.consts('START_FILEPATH', encodeURI('index.html'));
rh.consts('HELP_ID', '4DDF845B-8123-473E-9DCF-FDB90F6F8E36' || 'preview');
rh.consts('LNG_STOP_WORDS', ["a", "about", "after", "against", "all", "also", "among", "an", "and", "are", "as", "at", "be", "became", "because", "been", "between", "but", "by", "can", "come", "do", "during", "each", "early", "for", "form", "found", "from", "had", "has", "have", "he", "her", "his", "however", "in", "include", "into", "is", "it", "its", "late", "later", "made", "many", "may", "me", "med", "more", "most", "near", "no", "non", "not", "of", "on", "only", "or", "other", "over", "several", "she", "some", "such", "than", "that", "the", "their", "then", "there", "these", "they", "this", "through", "to", "under", "until", "use", "was", "we", "were", "when", "where", "which", "who", "with", "you"]);
rh.consts('LNG_SUBSTR_SEARCH', 1);

model.publish(rh.consts('KEY_DIR'), "ltr");
model.publish(rh.consts('KEY_LNG'), {"SearchResultsPerScreen":"Search results per page","SyncToc":"SyncToc","HomeButton":"Home","WebSearchButton":"WebSearch","GlossaryFilterTerms":"Filter Term","HighlightSearchResults":"Highlight Search Results","WebSearch":"WebSearch","Show":"Show","ShowAll":"All","EnableAndSearch":"Display results with all search words","Next":"Next","PreviousLabel":"Previous","NoScriptErrorMsg":"Enable JavaScript support in the browser to view this page.","Print":"Print","Contents":"Contents","Search":"-Search-","Hide":"Hide","Canceled":"Canceled","ShowHide":"Show/Hide","Loading":"Loading...","EndOfResults":"End of search results.","Logo":"Logo","Logo/Author":"Powered By","JS_alert_LoadXmlFailed":"Failed to load XML file","Searching":"Searching...","Disabled Next":">>","JS_alert_InitDatabaseFailed":"Failed to initialize database","Cancel":"Cancel","UnknownError":"Unknown error","ResultsFoundText":"%1 result(s) found for %2","Index":"Index","Seperate":"|","SearchPageTitle":"Search Results","TopicsNotFound":"No results found","Glossary":"Glossary","NextLabel":"Next","TableOfContents":"Table of Contents","HideAll":"Hide All","Disabled Prev":"<<","SearchOptions":"Search Options","Back":"Back","Prev":"Previous","JS_alert_InvalidExpression_1":"The search string you typed is not valid.","IndexFilterKewords":"Filter Keyword","IeCompatibilityErrorMsg":"This page cannot be viewed in Internet Explorer 8 or earlier version."});
})();