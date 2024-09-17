let lastModified = document.lastModified;
let date = new Date().toLocaleDateString();
let day = new Date().toLocaleString("ru-RU", { weekday: "long" });
document.getElementById("lastModified").innerHTML =
  "Сегодня: " +
  date +
  ", " +
  day +
  "<br/>" +
  "Дата последней модификации: " +
  lastModified;
document.getElementById("browserInformation").innerHTML = navigator.userAgent;
let aphorisms = [
  "Итерация свойственна человеку, рекурсия божественна. (L. Peter Deutsch)",
  "Если отладка — процесс удаления ошибок, то программирование должно быть процессом их внесения. (Edsger W. Dijkstra)",
  "В мире нет такого языка программирования, на котором разработчики не смогли бы написать плохую программу. (Larry Flon)",
  "Средства не виноваты в том, что их безграмотно используют. (Edsger W. Dijkstra)",
  "Работать нужно не 12 часов, а головой! (Стив Джобс)",
];
alert(aphorisms[Math.floor(Math.random(aphorisms) * aphorisms.length)]);

setInterval(() => {
  const currentTime = new Date().toLocaleTimeString();
  time.value = currentTime;
}, 1000);
