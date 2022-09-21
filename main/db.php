<?php
    // Подключение к базе данных
    $connectionDB = mysqli_connect(
 
        "localhost", // Название хоста
 
        "u0220_promutil", // username
 
        '1qaz@WSX3edc$RFV', // Пароль пользователя
 
        "u0220618_client_promutil" // Название базы данных
    );
    mysqli_query($connectionDB, "SET NAMES 'utf8'");
    mysqli_query($connectionDB,"SET CHARACTER SET 'utf-8'");
    mysqli_query($connectionDB,"SET character_set_client = 'utf-8'");
    mysqli_query($connectionDB,"SET character_set_connection = 'utf-8'");
    mysqli_query($connectionDB,"SET character_set_results = 'utf-8'");
 
    // Проверка подключения
    if (mysqli_connect_errno()) {
 
        echo "Невозможно подключится к MySQL: " . mysqli_connect_error();
 
    }
?>