const formFormatDict = [
  { label: "Имя", getValue: (form) => form.name.value },
  { label: "Фамилия", getValue: (form) => form.surname.value },
  { label: "Логин", getValue: (form) => form.login.value },
  { label: "Пароль", getValue: (form) => form.password.value },
  {
    label: "Выбран предмет",
    getValue: (form) => {
      const nSelectedClasses = form.selectedClasses.selectedIndex;
      return form.selectedClasses.options[nSelectedClasses].value;
    },
  },
  { label: "Время", getValue: (form) => form.time.value },
  {
    label: "Форма(ы) контроля",
    getValue: (form) => checkboxesToString(form.controlForm),
  },
  {
    label: "Дополнительная информация",
    getValue: (form) => form.information.value,
  },
];

// function Complete() {
//   var w = window.open();
//   w.document.write
// }

function checkboxesToString(boxes) {
  return Array.from(boxes)
    .filter((box) => box.checked)
    .map((box) => box.value)
    .join(", ");
}

function getFormStringer(form) {
  return function (label, getFn) {
    return label + ": " + getFn(form);
  };
}

function parseForm(form, formatDict) {
  const formFieldToString = getFormStringer(document.form);
  const form2FieldToString = getFormStringer(document.form3);

  return formatDict
    .map(({ label, getValue }) => formFieldToString(label, getValue))
    .join("<br/>");
}

function Complete1() {
  document.getElementById("formOutput").innerHTML = parseForm(
    document.form,
    formFormatDict
  );
}

function Complete2() {
  document.getElementById("formOutput2").innerHTML = parseForm(
    document.form,
    formFormatDict
  );
}
