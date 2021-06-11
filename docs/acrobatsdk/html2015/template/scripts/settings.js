
var gHost = null;
var gHostPath = "/";
var gIFrameElem = null;
var glocalCookie = {};

function saveSetting(name, value, bPersistent)
{
		setCookie(name, value, bPersistent);
}
function readSetting(name, oCallbackFunc, arg1, arg2)
{
	var val="";
		val = getCookie(name);
		if(oCallbackFunc)
			oCallbackFunc(val, arg1, arg2);
	return true;
}

function initSettings(commonRootRelPath)
{
	if(commonRootRelPath == null || commonRootRelPath == "" || !rh._.isRelativeUrl(commonRootRelPath))
		return;
	var data = rh._.getHostData(commonRootRelPath);
	window.gHost = data.gHost;
	window.gHostPath = data.gHostPath;
}
function setCookie(name, value)
{
	glocalCookie[name] = value
}
function getCookie(name)
{
	return glocalCookie[name]
}
			

var gbIFrameLoaded = false;
var gbIFrameLoading = false;
function cookieSaveRequesObj(reqType, name, value, bPersistent)
{
	this.reqType = reqType;
	this.name = name;
	this.value = value;
	this.bPersistent = bPersistent;
}
function cookieReadRequesObj(reqType, name, oCallbackFunc, arg1, arg2)
{
	this.reqType = reqType;
	this.name = name;
	this.oCallbackFunc = oCallbackFunc;
	this.arg1 = arg1;
	this.arg2 = arg2;
}
function insertIFrame()
{
	gbIFrameLoading = true;
	gIFrameElem = document.createElement('iframe');
	gIFrameElem.setAttribute("src", gHostPath+COOKIESPAGE);
	gIFrameElem.setAttribute("name", COOKIESPAGEID);
	gIFrameElem.setAttribute("height", "0px");
	gIFrameElem.setAttribute("width", "0px");
	gIFrameElem.style.display = "none";
	var bodyElem = document.getElementsByTagName('body')[0];
	bodyElem.appendChild(gIFrameElem);
	if( gIFrameElem.addEventListener )
		gIFrameElem.addEventListener('load', performRequest, false);
	else if( gIFrameElem.attachEvent )
		gIFrameElem.attachEvent('onload', performRequest, false);	
}
function setThroughIFrame(name, value, bPersistent)
{
	var objSave = new cookieSaveRequesObj(SAVE_REQ, name, value, bPersistent);
	cookieRequestQ.enqueue(objSave);
	
	if(!gbIFrameLoaded)
	{
		if(gbIFrameLoading)
			return;
		else
			insertIFrame();
	}
	else
		performRequest();
}

function getThroughIFrame(name, oCallbackFunc, arg1, arg2)
{
	var objRead = new cookieReadRequesObj(READ_REQ, name, oCallbackFunc, arg1, arg2)
	cookieRequestQ.enqueue(objRead);
	
	if(!gbIFrameLoaded)
	{
		if(gbIFrameLoading)
			return;
		else
			insertIFrame();
	}
	else
		performRequest();
}
function performRequest()
{
	gbIFrameLoaded = true;
	gbIFrameLoading = false;
	if(cookieRequestQ.isEmpty())
		return;
	var obj = cookieRequestQ.dequeue();
	if(obj.reqType == SAVE_REQ)
		gIFrameElem.contentWindow.setIFrameCookie(obj.name, obj.value, obj.bPersistent, gHost, gHostPath);
	else if(obj.reqType == READ_REQ)
	{
		var val = gIFrameElem.contentWindow.getIFrameCookie(obj.name);
		if(obj.oCallbackFunc)
			obj.oCallbackFunc(val, obj.arg1, obj.arg2);
	}
	performRequest();
}
