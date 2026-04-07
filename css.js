<!--


/*スタイルシート設定*/
function setDir() {
var plats = navigator.platform;
var bName = navigator.appName.charAt(0);
var bVers = navigator.appVersion.charAt(0);
var bAgew = navigator.userAgent.substring(47,52);
var bAgem = navigator.userAgent.substring(51,56);
var bPath ="";
if(plats == "Win32"){
	if((bName == "N") && (bVers >= 4)){
		bPath = "css/win_nc4";
	} if ((bName == "N") && (bVers >= 5)){
		bPath = "css/win_nc6over";
	} if((bName == "M") && (bVers >= 4)){
		bPath = "css/win_ie";
	} else if ((bName == "O") || (bAgew == "Opera")){
		bPath = "css2/win_opera";
	}
} else if(plats == "MacPPC"){
	if((bName == "N") && (bVers >= 4)){
		bPath = "css/mac_nc4";
	} if((bName == "N") && (bVers >= 5)){
		bPath = "css/mac_nc6over";
	} if((bName == "M") && (bVers >= 4)) {
		bPath = "css/mac_ie";
	} else if((bName == "O") || (bAgem == "Opera")){
		bPath = "css2/mac_opera"
	}
}
if(bPath != ""){
	document.write('<link rel="stylesheet" type="text/css" href="'+dName+bPath+'.css">');
}
}
