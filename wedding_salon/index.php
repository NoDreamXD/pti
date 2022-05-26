<?php header('Content-Type: text/html; charset=utf-8'); ?>
<!DOCTYPE HTML>
<html>

<head>
    <title>PHP</title>
</head>

<body>
    <?php
    $link = mysqli_connect("localhost", "root", '') or die("Could not connect to MySQL server!"); // устанавливаем соединение с mySQL server
  mysqli_select_db($link, "newdb") or die("Could not select database!"); // указываем с какой БД планируется работать

  if (isset($_POST['write'])) {
    //записываем данные из полей формы в БД
    $sql = "INSERT INTO newtable (name, email, phone_number, address, letter_theme, message) VALUES ('{$_POST["Name"]}', '{$_POST["Email"]}', '{$_POST["Phone_number"]}', '{$_POST["Address"]}', '{$_POST["Letter_theme"]}', '{$_POST["Message"]}')";
    if (mysqli_query($link, $sql)) {
      echo "Отправлено!" . "<br />";
    } else {
      echo "Error: " . $sql . "<br>" . mysqli_error($link);
    }
    mysqli_close($link); // закрывается соединение с mySQL server
  }

    ?>
</body>

</html>