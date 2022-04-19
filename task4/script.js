 function checkboxesToString(boxes) {
  return Array.from(boxes)
    .filter((box) => box.checked)
    .map((box) => box.value)
    .join(", ");
}

function Complete() {
  var name = "Имя: " + document.form.name.value;
  var surname = "Фамилия: " + document.form.surname.value;
  var login = "Логин: " + document.form.login.value;
  var password = "Пароль: " + document.form.password.value;
  var nSelectedClasses = document.form.selectedClasses.selectedIndex;
  var selectedClasses =
    "Выбран предмет: " +
    document.form.selectedClasses.options[nSelectedClasses].value;
  var time = "Время: " + document.form.time.value;
  var controlForm =
    "Форма контроля: " + checkboxesToString(document.form.controlForm);
  var information =
    "Дополнительная информация: " + document.form.information.value;
   var w = window.open();
   w.document.write('<html> <head> <meta http-equiv="Content-Type" content="text/html; charset=utf-8" /> <title>Данные с формы</title> </head>');
      w.document.write(
        name +
      "<br/>" +
      surname +
      "<br/>" +
      login +
      "<br/>" +
      password +
      "<br/>" +
      selectedClasses +
      "<br/>" +
      time +
      "<br/>" +
      controlForm +
      "<br/>" +
      information );
}
