<?php
    include "db.php";
    $Query = "SELECT * FROM prom_waste_classes";
    $ExecQuery = mysqli_query($connectionDB, $Query);
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
?>