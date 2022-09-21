<?php
 
// Подключаем файл конфигурации
include "db.php";
 
// Получаем значение переменной "search" из файла "script.js".
if (isset($_POST['search'])) {
 
    // Помещаем поисковой запрос в переменной
    $data_search = $_POST['search'];
 
    // Запрос для выбора из базы данных
    $Query = "SELECT * FROM prom_waste_classes WHERE description LIKE '%$data_search%' OR number_id LIKE '%$data_search%'";
 
    //Производим поиск в базе данных
    $ExecQuery = mysqli_query($connectionDB, $Query);
 
    //Перебираем результаты из базы данных
    while ($Result = mysqli_fetch_array($ExecQuery)) {
?>

        <div class="w-full h-auto mb-[30px]">
            <h4 class="font-rubic font-[500] text-[22px] leading-[27.5px] text-mlc">
                <?php echo $Result['number_id']; ?>
            </h4>
            <p class="font-open-sans font-[400] text-[12px] leading-[24px] mt-[5px]">
                <?php echo $Result['description']; ?>
            </p>
        </div>
 
<?php
    }
}
?>