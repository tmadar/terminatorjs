chrome.extension.sendRequest({'url': 'http://twitch.tv/*'}, function(data) {
	$(".channel-main").css("background", "black");
	$("#right_col").css("background", "black");
	$(".chat_line").css("color", "white");
});