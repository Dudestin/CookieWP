$(document).ready(function() {
	getWeather();
	setInterval(getWeather,600000);
});

function getWeather(location) {
    $.simpleWeather({
	//�����ݒ�
	location: 'London, JP',
	unit: 'c',

	//����Ɏ��s���ꂽ���̏���
	success: function(weather) {
	    var cur,cur1,wcode;
	    cur1 = weather.currently;
	    
	    if (cur1 == 'Mostly Cloudy')wcode = 1;// �܂�̂�����
	    else if (cur1 == 'Cloudy')wcode = 2; // �܂�
	    else if (cur1 == 'Partly Cloudy')wcode = 3; // ���ꎞ�X�܂�
	    else if (cur1 == 'Clear')wcode = 4; // ����
	    else if(cur1 == 'Mostly Clear')wcode = 5; // ����
	    else if(cur1 == 'Rainy')wcode = 6; // �J
	    else if(cur1 == 'Showers')wcode = 7; // �ɂ킩�J
	    else wcode = -1;   

	    switch(wcode){
		// #slide-1 �J
		// #slide-2 ���J
		// #slide-3 ����
		// #slide-5 ��
		// #slide-4 ���̉J
		
	    case 1:
		cur = '�܂�̂�����';
		window.location.href = "#slide-3";
		break;
	    case 2:
		cur = '�܂�';
		window.location.href = "#slide-3";
		break;
	    case 3:
		cur = '���ꎞ�X�܂�';
		window.location.href = "#slide-3";
		break;
	    case 4:
		cur = '����';
		window.location.href = "#slide-3";
		break;
	    case 5:
		cur = '����';
		window.location.href = "#slide-3";
		break;
	    case 6: 
		cur = '�J';
		window.location.href = "#slide-1";
		break;
	    case 7:
		cur = '��';
		window.location.href = "#slide-2";
		break;
	    }
	    html = '<p>'+cur+'<p>';
	    
	    //��ʂɕ\��
	    $("#weather").html(html);
	}
    });
}
