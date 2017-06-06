var getCurrentLanguage = function() {
    var defaultLanguage;
    if(localStorage["currLan"] === undefined)defaultLanguage = 'ua';
    else defaultLanguage = localStorage["currLan"];
    return defaultLanguage;
}

var currentLang = getCurrentLanguage();
function indexOfCheckedInput() {
    for(var i = 0; i < document.getElementsByTagName('label').length; i++) {
    if((document.getElementsByTagName('label')[i].innerText[1] + 
    document.getElementsByTagName('label')
    [i].innerText[2])==currentLang.toUpperCase()){
    return i;
    } 
    }
}
var langEls = document.getElementsByClassName('lang-' + currentLang);
for (var i=0; i<langEls.length; i++) {
    var langEl = langEls[i];
  
    // langEl.style.display = 'inline';
  langEl.classList.add('visible');
}

function radio_checked() {
    for(var i = 0; i < document.getElementsByTagName('input').length; i++) {
    if(document.getElementsByTagName('input')[i].checked){
    return i;
    } 
 } 
}
// $<prefix> == DOMElement
var $save = document.querySelector('html body button#save')

$save.addEventListener('click', function(){
    var $radio_name = document.getElementsByTagName('label')[radio_checked()].innerText[1].toLowerCase() +
document.getElementsByTagName('label')
[radio_checked()].innerText[2].toLowerCase();
if(document.getElementsByTagName('label')
[radio_checked()].innerText[1].toLowerCase()=='e'){
    $radio_name=document.getElementsByTagName('label')
        [radio_checked()].innerText[1].toLowerCase() +
document.getElementsByTagName('label')
[radio_checked()].innerText[2].toLowerCase() +
    document.getElementsByTagName('label')
[radio_checked()].innerText[3].toLowerCase();
}
    alert('You pick ' + $radio_name + ' language');
    for(var i=0; i<document.getElementsByClassName('lang').length;i++){
    if(document.getElementsByClassName('lang')[i].classList.length==3){
        document.getElementsByClassName('lang')[i].classList.remove('visible');
    }
}
    document.getElementsByClassName('lang-' + $radio_name)[0].classList.add('visible');
    document.getElementsByClassName('lang-' + $radio_name)[1].classList.add('visible');
    for(var i=0;i<langEls.length;i++){
    if(langEls[i].classList.length==3)langEls.classList.remove('visible');
    }
    localStorage["currLan"]=$radio_name;
});