var ECLIPSE_FRAME_NAME = "ContentViewFrame";
var eclipseBuild = false;

var liveDocsBaseUrl = "http://livedocs.adobe.com/flash/9.0";
var liveDocsBookName = "ActionScriptLangRefV3";

function findObject(objId) {

	if (document.getElementById)
		return document.getElementById(objId);

	if (document.all)
		return document.all[objId];
}

function isEclipse() {
	return eclipseBuild;
//	return (window.name == ECLIPSE_FRAME_NAME) || (parent.name == ECLIPSE_FRAME_NAME) || (parent.parent.name == ECLIPSE_FRAME_NAME);
}

function configPage() {
	setRowColorsInitial(true, "Defines");
	setRowColorsInitial(true, "Typedefs");
	setRowColorsInitial(true, "Enums");
	setRowColorsInitial(true, "Variables");	
	setRowColorsInitial(true, "Structures");
	setRowColorsInitial(true, "Unions");
	setRowColorsInitial(true, "Callbacks");
	setRowColorsInitial(true, "Methods");
	if (isEclipse()) {
		if (window.name != "classFrame")
		{
			var localRef = window.location.href.indexOf('?') != -1 ? window.location.href.substring(0, window.location.href.indexOf('?')) : window.location.href;
			localRef = localRef.substring(localRef.indexOf("langref/") + 8);
			if (window.location.search != "")
				localRef += ("#" + window.location.search.substring(1));

			window.location.replace(baseRef + "index.html?" + localRef);
			return;
		}
		else
		{
			setStyle(".eclipseBody", "display", "block");
//			var isIE  = (navigator.appVersion.indexOf("MSIE") != -1) ? true : false;
//			if (isIE == false && window.location.hash != "")
			if (window.location.hash != "")
				window.location.hash=window.location.hash.substring(1);
		}
	}
	else if (window == top) { // no frames
		findObject("titleTable").style.display = "";
	}
	else { // frames
		findObject("titleTable").style.display = "none";
	}
	showTitle(asdocTitle);
}


function showTitle(title) {
	if (!isEclipse())
		top.document.title = title;
}

function loadClassListFrame(classListFrameURL) {
	if (parent.frames["classListFrame"] != null) {
		parent.frames["classListFrame"].location = classListFrameURL;
	}
	else if (parent.frames["packageFrame"] != null) {
		if (parent.frames["packageFrame"].frames["classListFrame"] != null) {
			parent.frames["packageFrame"].frames["classListFrame"].location = classListFrameURL;
		}
	}
}

function loadPackageListFrame(packageListFrameURL) {
	if (parent.frames["packageListFrame"] != null) {
		parent.frames["packageListFrame"].location = packageListFrameURL;
	}
	else if (parent.frames["packageFrame"] != null) {
		if (parent.frames["packageFrame"].frames["packageListFrame"] != null) {
			parent.frames["packageFrame"].frames["packageListFrame"].location = packageListFrameURL;
		}
	}
}

function gotoLiveDocs(primaryURL, secondaryURL, locale) {
        if (locale == "en-us") {
             locale = "";
        } 
        else {
              locale = "_" + locale.substring(3);
        }

	var url = liveDocsBaseUrl + locale + "/" + liveDocsBookName + "/index.html?" + primaryURL;
	if (secondaryURL != null && secondaryURL != "")
		url += ("&" + secondaryURL);

	window.open(url, "mm_livedocs", "menubar=1,toolbar=1,status=1,scrollbars=1,resizable=yes");
}

function findTitleTableObject(id)
{
	if (isEclipse())
		return parent.titlebar.document.getElementById(id);
	else if (top.titlebar)
		return top.titlebar.document.getElementById(id);
	else
		return document.getElementById(id);
}

function titleBar_setSubTitle(title)
{
	if (isEclipse() || top.titlebar)
		findTitleTableObject("subTitle").childNodes.item(0).data = title;
}

function titleBar_setSubNav(showDefines,showTypedefs,showEnums,showVariables,showStructures,showUnions,showCallbacks,showMethods)
{
	if (isEclipse() || top.titlebar)
	{
		findTitleTableObject("definesLink").style.display = showDefines ? "inline" : "none";
		findTitleTableObject("definesBar").style.display = (showDefines && (showTypedefs || showEnums || showVariables || showStructures || showUnions || showCallbacks || showMethods)) ? "inline" : "none";

		findTitleTableObject("typedefsLink").style.display = showTypedefs ? "inline" : "none";
		findTitleTableObject("typedefsBar").style.display = (showTypedefs && (showEnums || showVariables || showStructures || showUnions || showCallbacks || showMethods)) ? "inline" : "none";

		findTitleTableObject("enumsLink").style.display = showEnums ? "inline" : "none";
		findTitleTableObject("enumsBar").style.display = (showEnums && (showVariables || showStructures || showUnions || showCallbacks || showMethods)) ? "inline" : "none";

		findTitleTableObject("variablesLink").style.display = showVariables ? "inline" : "none";
		findTitleTableObject("variablesBar").style.display = (showVariables && (showStructures || showUnions || showCallbacks || showMethods)) ? "inline" : "none";

		findTitleTableObject("structuresLink").style.display = showStructures ? "inline" : "none";
		findTitleTableObject("structuresBar").style.display = (showStructures && (showCallbacks || showUnions || showMethods)) ? "inline" : "none";

		findTitleTableObject("unionsLink").style.display = showUnions ? "inline" : "none";
		findTitleTableObject("unionsBar").style.display = (showUnions && (showCallbacks || showMethods)) ? "inline" : "none";

		findTitleTableObject("callbacksLink").style.display = showCallbacks ? "inline" : "none";
		findTitleTableObject("callbacksBar").style.display = (showCallbacks && showMethods) ? "inline" : "none";

		findTitleTableObject("methodsLink").style.display = showMethods ? "inline" : "none";
	}
}

function titleBar_gotoClassFrameAnchor(anchor)
{
	if (isEclipse())
		parent.classFrame.location = parent.classFrame.location.toString().split('#')[0] + "#" + anchor;
	else
		top.classFrame.location = top.classFrame.location.toString().split('#')[0] + "#" + anchor;
}

function setMXMLOnly() 
{
	if (getCookie("showMXML") == "false")
	{
		toggleMXMLOnly();
	}
}

function toggleMXMLOnly() 
{
	var mxmlDiv = findObject("mxmlSyntax");
	var mxmlShowLink = findObject("showMxmlLink");
	var mxmlHideLink = findObject("hideMxmlLink");
	if (mxmlDiv && mxmlShowLink && mxmlHideLink)
	{
		if (mxmlDiv.style.display == "none")
		{
			mxmlDiv.style.display = "block";
			mxmlShowLink.style.display = "none";
			mxmlHideLink.style.display = "inline";
			setCookie("showMXML","true", new Date(3000,1,1,1,1), "/", document.location.domain);
		}
		else
		{
			mxmlDiv.style.display = "none";
			mxmlShowLink.style.display = "inline";
			mxmlHideLink.style.display = "none";
			setCookie("showMXML","false", new Date(3000,1,1,1,1), "/", document.location.domain);
		}
	}
}

function showHideInherited()
{	
	setInheritedVisible(getCookie("showInheritedConstant") == "true", "Constant");
	setInheritedVisible(getCookie("showInheritedProtectedConstant") == "true", "ProtectedConstant");
	setInheritedVisible(getCookie("showInheritedProperty") == "true", "Property");
	setInheritedVisible(getCookie("showInheritedProtectedProperty") == "true", "ProtectedProperty");
	setInheritedVisible(getCookie("showInheritedMethod") == "true", "Method");
	setInheritedVisible(getCookie("showInheritedProtectedMethod") == "true", "ProtectedMethod");
	setInheritedVisible(getCookie("showInheritedEvent") == "true", "Event");
	setInheritedVisible(getCookie("showInheritedStyle") == "true", "Style");
	setInheritedVisible(getCookie("showInheritedEffect") == "true", "Effect");
}


function setInheritedVisible(show, selectorText)
{
	if (document.styleSheets[0].cssRules != undefined)
	{
		var rules = document.styleSheets[0].cssRules;
		for (var i = 0; i < rules.length; i++)
		{
			if (rules[i].selectorText == ".hideInherited" + selectorText)
				rules[i].style.display = show ? "" : "none";
				
			if (rules[i].selectorText == ".showInherited" + selectorText)
				rules[i].style.display = show ? "none" : "";
		}
	}
	else
	{
		document.styleSheets[0].addRule(".hideInherited" + selectorText, show ? "display:inline" : "display:none");
		document.styleSheets[0].addRule(".showInherited" + selectorText, show ? "display:none" : "display:inline");
	}

	setCookie("showInherited" + selectorText, show ? "true" : "false", new Date(3000,1,1,1,1), "/", document.location.domain);
	setRowColors(show, selectorText);
}

function setRowColors(show, selectorText)
{
	var rowColor = "#F2F2F2";
	var table = findObject("summaryTable" + selectorText);

	if (table != null)
	{
		var rowNum = 0;
		for (var i = 1; i < table.rows.length; i++)
		{
			if (table.rows[i].className.indexOf("hideInherited") == -1 || show)
			{
				rowNum++;
				table.rows[i].bgColor = (rowNum % 2 == 0) ? rowColor : "#FFFFFF";
			}			
		}
	}
}

function setRowColorsInitial(show, selectorText)
{
	var rowColor = "#F2F2F2";
	var table = findObject("summaryTable" + selectorText);

	if (table != null)
	{
		var rowNum = 0;
		for (var i = 1; i < table.rows.length; i++)
		{
			if (table.rows[i].className.indexOf("hideInherited") == -1 && show)
			{
				rowNum++;
				table.rows[i].bgColor = (rowNum % 2 == 0) ? rowColor : "#FFFFFF";
			}			
		}
	}
}

function setStyle(selectorText, styleName, newValue)
{
	if (document.styleSheets[0].cssRules != undefined)
	{
		var rules = document.styleSheets[0].cssRules;
		for (var i = 0; i < rules.length; i++)
		{
			if (rules[i].selectorText == selectorText)
			{
				rules[i].style[styleName] = newValue;
				break;
			}
		}
	}
	else
	{
		document.styleSheets[0].addRule(selectorText, styleName + ":" + newValue);
	}
}

