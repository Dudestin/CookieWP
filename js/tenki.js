$(document).ready(function() {
    getWeather();
    setInterval(getWeather,600000);
});

function getWeather(location) {
    $.simpleWeather({
	//初期設定
	location: 'Tokyo, JP',
	unit: 'c',

	//正常に実行された時の処理
	success: function(weather) {
	    var cur,cur1,wcode;
	    cur1 = weather.currently;
	    
	    if (cur1 == 'Mostly Cloudy')wcode = 1;// 曇りのち晴れ
	    else if (cur1 == 'Cloudy')wcode = 2; // 曇り
	    else if (cur1 == 'Partly Cloudy')wcode = 3; // 晴れ時々曇り
	    else if (cur1 == 'Clear')wcode = 4; // 快晴
	    else if(cur1 == 'Mostly Clear')wcode = 5; // 快晴
	    else if(cur1 == 'Rainy')wcode = 6; // 雨
	    else if(cur1 == 'Showers')wcode = 7; // にわか雨
	    else if (cur1 == 'Sunny')wcode = 8; // 晴れ
	    else if(cur1 == 'Mostly Sunny')wcode = 9; // 快晴
	    else if(cur1 == 'Breezy')wcode = 10; //そよ風
	    else wcode = -1;   

	    switch(wcode){
		// #slide-1 雨
		// #slide-2 霧雨
		// #slide-3 晴れ
		// #slide-5 嵐
		// #slide-4 死の雨
		
	    case 1:
		cur = '曇りのち晴れ';
		window.location.href = "#slide-3";
		break;
	    case 2:
		cur = '曇り';
		window.location.href = "#slide-3";
		break;
	    case 3:
		cur = '晴れ時々曇り';
		window.location.href = "#slide-3";
		break;
	    case 4:
		cur = '快晴';
		window.location.href = "#slide-3";
		break;
	    case 5:
		cur = '快晴';
		window.location.href = "#slide-3";
		break;
	    case 6: 
		cur = '雨';
		window.location.href = "#slide-1";
		break;
	    case 7:
		cur = '霙';
		window.location.href = "#slide-2";
		break;
	    case 8:
		cur = '晴れ';
		window.location.href = "#slide-3";
		break;
	    case 9:
		cur = '快晴';
		window.location.href = "#slide-3";
		break;
	    case 10:
		cur = 'そよ風';
		window.location.href = "#slide-3";
		break;
	    }
	    
	    html = '<p>'+cur+'<p>';
	    //画面に表示
	    $("#weather").html(html);
	}
    });
}

function bgmplayer(weatherid){
    var audio;
    switch (weatherid){
    case 1:
	audio = new Audio("bgm/cloudy.m4a");
	break;
    case 2:
	audio = new Audio("bgm/cloudy.m4a");
	break;
    case 3:
	audio = new Audio("bgm/cloudy.m4a");
	break;
    case 4:
	audio = new Audio("bgm/clear.m4a");
	break;
    case 6:
	audio = new Audio("bgm/heavyrain.m4a");
	break;
    case 7:
	audio = new Audio("bgm/rain.m4a");
	break;
    default:
	audio = new Audio("bgm/rainjinja.ogg");
    }
    audio.loop = true;
    audio.play();
}
