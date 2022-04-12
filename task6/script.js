let lastModified = document.lastModified;
let date = new Date().toLocaleDateString();
let day = new Date().toLocaleString('ru-RU',{weekday: 'long',});
document.getElementById("lastModified").innerHTML = "Сегодня: " + date + 
", " + day +
"<br/>" + 
"Дата последней модификации: " + lastModified;
document.getElementById("browserInformation").innerHTML = navigator.userAgent;
