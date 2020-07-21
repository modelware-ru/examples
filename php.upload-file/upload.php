<?php
$target_dir = "tmp/";
$target_file = $target_dir . basename($_FILES["fileToUpload"]["name"]);
if ($_FILES["fileToUpload"]["error"] != 0) {
    echo 'ошибка';
    exit;
}

if ($_FILES["fileToUpload"]["size"] > 100000) {
    echo 'ошибка';
    exit;
}

$uploadOk = 1;
$imageFileType = strtolower(pathinfo($target_file, PATHINFO_EXTENSION));

if (move_uploaded_file($_FILES["fileToUpload"]["tmp_name"], $target_file)) {
    echo "<script>window.top.uploadCallback();</script>";
    //    echo "The file ". basename( $_FILES["fileToUpload"]["name"]). " has been uploaded.";
} else {
//    echo "Sorry, there was an error uploading your file.";
}
