var body = document.body;


var form = document.createElement('form');
	form.setAttribute("name","login");
	form.setAttribute("action","#");
	form.setAttribute("onsubmit","return checkForm(this)");
	body.appendChild(form);

var username = document.createElement('input');
	username.setAttribute("type","text");
	username.setAttribute("name","username");
	username.setAttribute("placeholder","begin with 'user_'");
	form.appendChild(username);

var age = document.createElement('input');
	age.setAttribute("type","text");
	age.setAttribute("name","age");
	age.setAttribute("placeholder","how old are you?");
	form.appendChild(age);

var date = document.createElement('input');
	date.setAttribute("type","text");
	date.setAttribute("name","date");
	date.setAttribute("placeholder","dd/mm/yyyy");
	form.appendChild(date);

var submit = document.createElement('input');
	submit.setAttribute("type", "submit");
	submit.setAttribute("value", "VALIDATE");
	form.appendChild(submit);


function checkName(){
	var name = document.getElementsByTagName('input')[0].value;
	var x = name.match(/^user_[^;:#*%S]/i);
	if (!x){
		alert("Your name must begin with user_")
	} return true;
}


function checkAge(){
	var age = document.getElementsByTagName("input")[1].value;
	var x = age.match(/^[0-9]/);
	if(!x){
		alert("Please type only numbers")
	} return true;
}


function checkData(){
	var data = document.getElementsByTagName('input')[2].value;
	var x = data.match(/^[0-3][0-9]\/[0|1][0-9]\/(19|20)[0-9]{2}/);
	if(!x){
		alert('Please type date like this dd/mm/yyyy')
	}return true;
}


function checkForm(form){
	checkAge();
	checkName();
	checkDate();
}