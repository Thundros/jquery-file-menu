
	function handleFileSelect (e) {
	var files = e.target.files;
	if (files.length < 1) {
	alert('select a file...');
	return;
	}
	var file = files[0];
	var reader = new FileReader();
	reader.onload = onFileLoaded;
	reader.readAsDataURL(file);
	}

	function onFileLoaded (e) {
	var match = /^data:(.*);base64,(.*)$/.exec(e.target.result);
	if (match == null) {
	throw 'Could not parse result'; // should not happen
	}
	var mimeType = match[1];
	var content = match[2];
	alert(mimeType);
	alert(content);
	}

	$(function () {
	$('#import-pfx-button').click(function(e) {
	$('#file-input').click();
	});
	$('#file-input').change(handleFileSelect);
	});


