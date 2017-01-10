$(document).ready(function() {
    getWeather();
    setInterval(getWeather,600000);
});

function getWeather(location) {
    $.simpleWeather({
	//‰Šúİ’è
	location: 'Kumamoto, JP',
	unit: 'c',

	//³í‚ÉÀs‚³‚ê‚½‚Ìˆ—
	success: function(weather) {
	    var cur,cur1,wcode;
	    cur1 = weather.currently;
	    
	    if (cur1 == 'Mostly Cloudy')wcode = 1;// “Ü‚è‚Ì‚¿°‚ê
	    else if (cur1 == 'Cloudy')wcode = 2; // “Ü‚è
	    else if (cur1 == 'Partly Cloudy')wcode = 3; // °‚êX“Ü‚è
	    else if (cur1 == 'Clear')wcode = 4; // ‰õ°
	    else if(cur1 == 'Mostly Clear')wcode = 5; // ‰õ°
	    else if(cur1 == 'Rainy')wcode = 6; // ‰J
	    else if(cur1 == 'Showers')wcode = 7; // ‚É‚í‚©‰J
	    else if (cur1 == 'Sunny')wcode = 8; // °‚ê
	    else wcode = -1;   

	    switch(wcode){
		// #slide-1 ‰J
		// #slide-2 –¶‰J
		// #slide-3 °‚ê
		// #slide-5 —’
		// #slide-4 €‚Ì‰J
		
	    case 1:
		cur = '“Ü‚è‚Ì‚¿°‚ê';
		window.location.href = "#slide-3";
		break;
	    case 2:
		cur = '“Ü‚è';
		window.location.href = "#slide-3";
		break;
	    case 3:
		cur = '°‚êX“Ü‚è';
		window.location.href = "#slide-3";
		break;
	    case 4:
		cur = '‰õ°';
		window.location.href = "#slide-3";
		break;
	    case 5:
		cur = '‰õ°';
		window.location.href = "#slide-3";
		break;
	    case 6: 
		cur = '‰J';
		window.location.href = "#slide-1";
		break;
	    case 7:
		cur = 'èÂ';
		window.location.href = "#slide-2";
		break;
	    case 8:
		cur = '°‚ê';
		window.location.href = "#slide-3";
		break;
	    }

	    html = '<p>'+cur+'<p>';
	    //‰æ–Ê‚É•\¦
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
