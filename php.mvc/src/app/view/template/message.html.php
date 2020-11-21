<?php
use function BJ\Utils\ProcessView;
?>
<!doctype html>
<html lang='ru'>
<head>
    <?= ProcessView('app/view/shared/head.html.php', $data) ?>
</head>
<body>
<div class="container">
    <h1><?= isset($data['text']) ? $data['text'] : ''?></h1>
    <a class="btn btn-success" href="/">Вернуться на главную</a>
</div>
</body>
</html>
