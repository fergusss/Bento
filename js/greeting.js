var today = new Date();
var Hr = today.getHours();

// Here you can change the greetings and your name
var name = 'Amigo';
var lateTxt = 'Ve A Dormir Mi ';
var morningTxt = 'Buenos Días Mi ';
var afterTxt = 'Buenas Tardes Mi ';
var evenTxt = 'Buenas Noches Mi ';

if (Hr >= 0 && Hr < 6) {
    document.getElementById('greetings').innerText = lateTxt + name;
} else if (Hr >= 6 && Hr < 12) {
    document.getElementById('greetings').innerText = morningTxt + name;
} else if (Hr >= 12 && Hr < 17) {
    document.getElementById('greetings').innerText = afterTxt + name;
} else {
    document.getElementById('greetings').innerText = evenTxt + name;
}
