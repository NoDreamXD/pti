function Complete() {
  var w = window.open();
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
    "Форма контроля: " + document.form.controlForm.value;
  var information =
    "Дополнительная информация: " + document.form.information.value;
  // console.log(w)
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
      information 
  );
}
// function 
