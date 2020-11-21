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
    <nav class="navbar">
        <?php if ($data['id'] === 0) { ?>
            <span class="navbar-brand mb-0 h1">Создание задачи</span>
        <?php } else { ?>
            <span class="navbar-brand mb-0 h1">Редактирование задачи</span>
        <?php } ?>
        <?php if ($data['isAdmin']) { ?>
            <a class="btn btn-outline-secondary" href="index.php?controller=auth&action=logout">Выйти</a>
        <?php } else { ?>
            <a class="btn btn-secondary" href="index.php?controller=auth&action=showLoginForm">Войти</a>
        <?php } ?>
    </nav>

    <form action="/index.php" method="post">
        <input type="hidden" name="controller" value="task">

        <?php if ($data['action'] === 'showAddForm') { ?>
        <input type="hidden" name="action" value="add">
        <?php } ?>

        <?php if ($data['action'] === 'showUpdateForm') { ?>
            <input type="hidden" name="action" value="update">
        <?php } ?>

        <input type="hidden" name="id" value="<?= $data['id'] ?>">
        <?php if ($data['action'] === 'showAddForm') { ?>
            <div class="form-group">
                <label for="taskFormName">Имя</label>
                <input type="text" class="form-control" id="taskFormName" name="name" value="<?= isset($data['name']) ? $data['name'] : '' ?>">
                <small id="taskFormNameHelp" class="form-text text-muted">Максимальная длина 50 символов</small>
            </div>
            <div class="form-group">
                <label for="taskFormEmail">Email</label>
                <input type="email" class="form-control" id="taskFormEmail" name="email" value="<?= isset($data['email']) ? $data['email'] : '' ?>">
                <small id="taskFormNameHelp" class="form-text text-muted">Максимальная длина 50 символов. Требуется корректный email</small>
            </div>
        <?php } ?>

        <div class="form-group">
            <label for="taskFormText">Описание</label>
            <textarea class="form-control" id="taskFormText" rows="5" name="text"><?= isset($data['text']) ? $data['text'] : '' ?></textarea>
            <small id="taskFormTextHelp" class="form-text text-muted">Максимальная длина 2000 символов</small>
        </div>

        <?php if ($data['action'] === 'showUpdateForm') { ?>
            <div class="form-group form-check">
                <input type="checkbox" class="form-check-input" name="isCompleted" id="taskFormIsComplete" <?= (isset($data['isCompleted']) && $data['isCompleted']) ? 'checked' : '' ?>">
                <label class="form-check-label" for="taskFormIsComplete">Выполнено</label>
            </div>
        <?php } ?>
        <?php if (isset($data['error']) && !empty($data['error'])) { ?>
            <div class="alert alert-danger" role="alert">
                <?= $data['error'] ?>
            </div>
            <?php
        }
        ?>
        <button type="submit" class="btn btn-success">Сохранить</button>
    </form>
</div>
</body>
</html>
