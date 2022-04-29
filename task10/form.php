<?php header('Content-Type: text/html; charset=utf-8'); ?>
<!DOCTYPE HTML>
<html>
<head>
    <title>PHP</title>
</head>

<body>
    <?php
    if (isset($_POST["name"]) && $_POST["name"] !== "") {
        $name = $_POST["name"];
        echo ("Имя: " . $name . "<br/>");
    } else {
        echo ("Имя: Данные не указаны" . "<br/>");
    }

    if (isset($_POST["surname"]) && $_POST["surname"] !== "") {
        $surname = $_POST["surname"];
        echo ("Фамилия: " . $surname . "<br/>");
    } else {
        echo ("Фамилия: Данные не указаны" . "<br/>");
    }

    if (isset($_POST["login"]) && $_POST["login"] !== "") {
        $login = $_POST["login"];
        echo ("Логин: " . $login . "<br/>");
    } else {
        echo ("Логин: Логин не указан" . "<br/>");
    }
    if (isset($_POST["password"]) && $_POST["password"] !== "") {
        $password = $_POST["password"];
        echo ("Пароль: " . $password . "<br/>");
    } else {
        echo ("Пароль: Пароль не указан" . "<br/>");
    }

    if (isset($_POST["selectedClasses"]) && $_POST["selectedClasses"] !== "") {
        $selectedClasses = $_POST["selectedClasses"];
        echo ("Дисциплина: " . $selectedClasses . "<br/>");
    } else {
        echo ("Дисциплина: Дисциплина не выбрана" . "<br/>");
    }

    if (isset($_POST["time"]) && $_POST["time"] !== "") {
        $time = $_POST["time"];
        echo ("Время: " . $time . "<br/>");
    } else {
        echo ("Время: Время не выбрано" . "<br/>");
    }
    
    if (isset($_POST["controlForm"])) {
        $controlForm = $_POST["controlForm"];
        if (is_array($controlForm)) {
            echo('Форма контроля: ');
            foreach ($controlForm as &$value) {
                echo($value . '; ');
            }
            echo('<br/>');
        } else {
            echo('Sex');
            echo ("Форма контроля: " . $controlForm . "<br/>");
        }
    } else {
        echo ("Форма контроля: не выбрана" . "<br/>");
    }

    if (isset($_POST["information"]) && $_POST["information"] !== "") {
        $information = $_POST["information"];
        echo ("Дополнительная информация: " . $information . "<br/>");
    } else {
        echo ("Дополнительная информация: не указана" . "<br/>");
    }
    
    ?>
</body>
</html>