function add(number1, number2)
{
	return number1 + number2;
}

function sub(number1,number2)
{
    return number1 - number2;
}

console.log(sub(5,4));

var socket = io.connect(window.location.href);
socket.on('chat', function (data) {
	console.log(data);
	var label = document.getElementById("textLabel");
	label.innerHTML = data.text;
});

function setText() {
	var value = document.getElementById("textBox").value;
	socket.emit("chat", {text: value});
}