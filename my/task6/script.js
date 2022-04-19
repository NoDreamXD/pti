// date
let date = new Date().toLocaleDateString();
let day = new Date().toLocaleString("ru-RU", { weekday: "long" });
document.getElementById("lastModified").innerHTML = `
  Сегодня: ${date}, ${day}
  <br/>
  Дата последней модификации: ${document.lastModified}`;

// browser metric
document.getElementById("browserInformation").innerHTML = navigator.userAgent;

// refresh date
const refreshHtmlTime = () => {
  const currentTime = new Date().toLocaleTimeString();
  time.value = currentTime;
};
refreshHtmlTime();
setInterval(refreshHtmlTime, 1000);

// aphorisms start alert
let aphorisms = [
  "В мире нет такого языка программирования, на котором разработчики не смогли бы написать плохую программу. (Larry Flon)",
  "Если отладка — процесс удаления ошибок, то программирование должно быть процессом их внесения. (Edsger W. Dijkstra)",
  "Тестирование программы может весьма эффективно продемонстрировать наличие ошибок, но безнадежно неадекватно для демонстрации их отсутствия. (Edsger W. Dijkstra)",
  "Средства не виноваты в том, что их безграмотно используют. (Edsger W. Dijkstra)",
  "Итерация свойственна человеку, рекурсия божественна. (L. Peter Deutsch)",
];
const randomAphorism = () =>
  aphorisms[Math.floor(Math.random(aphorisms) * aphorisms.length)];

const showAphorism = () => window.open().document.write(randomAphorism());
