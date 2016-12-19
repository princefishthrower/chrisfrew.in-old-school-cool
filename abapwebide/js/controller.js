
window.setTimeout(function() {
	var editor = ace.edit("editor");
	editor.setTheme("ace/theme/monokai");
	editor.getSession().setMode("ace/mode/abap");
	editor.setOption("showPrintMargin", false);
	console.log("done");
	$("#editor").css("height", $(window).height());
	$("#editor").css("width", $(window).width());
},1);
