<?php 

    include 'connection.php';

    $club = $_POST['Club_Name'];
    $date = $_POST['Date_Of_Creation'];
    $discription = $_POST['Description'];
    
    $sql= "INSERT INTO clubs( name, date , discription) 
    VALUES ('$club','$date','$discription');";
    mysqli_query($conection,$sql);

     header("location: ../AdminPage.php?add=success");

    
?>