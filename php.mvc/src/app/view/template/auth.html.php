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
    <form action="/index.php" method="post">
        <input type="hidden" name="controller" value="auth">
        <input type="hidden" name="action" value="login">
        <div class="form-group">
            <label for="loginFormLogin">Логин</label>
            <input type="text" class="form-control" id="loginFormLogin" name="login" value="<?= isset($data['login']) ? $data['login'] : '' ?>">
        </div>
        <div class="form-group">
            <label for="loginFormPassword">Пароль</label>
            <input type="password" class="form-control" id="loginFormPassword" name="password" value="<?= isset($data['password']) ? $data['password'] : '' ?>">
        </div>
        <?php if (isset($data['error']) && !empty($data['error'])) { ?>
            <div class="alert alert-danger" role="alert">
                <?= $data['error'] ?>
            </div>
            <?php
        }
        ?>
        <button type="submit" class="btn btn-primary">Войти</button>
    </form>
</div>
</body>
</html>
