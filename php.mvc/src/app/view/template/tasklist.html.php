<?php

use function BJ\Utils\ProcessView;

$page = $data['taskListInfo']['page'];
$sortName = $data['taskListInfo']['sortName'];
$sortType = $data['taskListInfo']['sortType'];

$nameSortAsc = "index.php?controller=tasklist&page={$page}&sort_name=name&sort_type=asc";
$nameSortDesc = "index.php?controller=tasklist&page={$page}&sort_name=name&sort_type=desc";
$emailSortAsc = "index.php?controller=tasklist&page={$page}&sort_name=email&sort_type=asc";
$emailSortDesc = "index.php?controller=tasklist&page={$page}&sort_name=email&sort_type=desc";
$statusSortAsc = "index.php?controller=tasklist&page={$page}&sort_name=status&sort_type=asc";
$statusSortDesc = "index.php?controller=tasklist&page={$page}&sort_name=status&sort_type=desc";

$pageSort = "&sort_name={$sortName}&sort_type={$sortType}";
?>
<!doctype html>
<html lang='ru'>
<head>
    <?= ProcessView('app/view/shared/head.html.php', $data) ?>
</head>
<body>
<div class="container">
    <?php if ($data['isAdmin']) { ?>
        <nav class="navbar">
            <a class="btn btn-primary" href="index.php?controller=task&action=showAddForm">Добавить задачу</a>
            <a class="btn btn-outline-secondary" href="index.php?controller=auth&action=logout">Выйти</a>
        </nav>
    <?php } else { ?>
        <nav class="navbar">
            <a class="btn btn-primary" href="index.php?controller=task&action=showAddForm">Добавить задачу</a>
            <a class="btn btn-secondary" href="index.php?controller=auth&action=showLoginForm">Войти</a>
        </nav>
    <?php } ?>

    <?php if (count($data['taskList']) === 0) {
        ?>
        <h3>Нет данных</h3>
        <?php
    } else {
        ?>
        <table class="table">
            <thead>
            <tr>
                <th scope="col" class="min-w100px">
                    Имя<br/>
                    <?php if ($sortName === 'name' && $sortType === 'asc') { ?>
                        <span class="m-1">asc</span>
                        <a href="<?= $nameSortDesc ?>" class="m-1">desc</a>
                    <?php } else if ($sortName === 'name' && $sortType === 'desc') { ?>
                        <a href="<?= $nameSortAsc ?>" class="m-1">asc</a>
                        <span class="m-1">desc</span>
                    <?php } else { ?>
                        <a href="<?= $nameSortAsc ?>" class="m-1">asc</a>
                        <a href="<?= $nameSortDesc ?>" class="m-1">desc</a>
                    <?php } ?>
                </th>
                <th scope="col">Почта<br/>
                    <?php if ($sortName === 'email' && $sortType === 'asc') { ?>
                        <span class="m-1">asc</span>
                        <a href="<?= $emailSortDesc ?>" class="m-1">desc</a>
                    <?php } else if ($sortName === 'email' && $sortType === 'desc') { ?>
                        <a href="<?= $emailSortAsc ?>" class="m-1">asc</a>
                        <span class="m-1">desc</span>
                    <?php } else { ?>
                        <a href="<?= $emailSortAsc ?>" class="m-1">asc</a>
                        <a href="<?= $emailSortDesc ?>" class="m-1">desc</a>
                    <?php } ?>
                </th>
                <th scope="col">Описание</th>
                <th scope="col">Статус<br/>
                    <?php if ($sortName === 'status' && $sortType === 'asc') { ?>
                        <span class="m-1">asc</span>
                        <a href="<?= $statusSortDesc ?>" class="m-1">desc</a>
                    <?php } else if ($sortName === 'status' && $sortType === 'desc') { ?>
                        <a href="<?= $statusSortAsc ?>" class="m-1">asc</a>
                        <span class="m-1">desc</span>
                    <?php } else { ?>
                        <a href="<?= $statusSortAsc ?>" class="m-1">asc</a>
                        <a href="<?= $statusSortDesc ?>" class="m-1">desc</a>
                    <?php } ?>
                </th>
                <?php if ($data['isAdmin']) { ?>
                    <th scope="col"></th>
                <?php } ?>
            </tr>
            </thead>
            <tbody>
            <?php foreach ($data['taskList'] as $task) {
                $status = $task['isCompleted'] ? 'Выполнено.' : 'Не выполнено.';
                $status = $status . ($task['isUpdated'] ? '<br/>Отредактировано администратором.' : '');

                ?>
                <tr>
                    <td><?= $task['name'] ?></td>
                    <td><?= $task['email'] ?></td>
                    <td class="w200px"><?= $task['text'] ?></td>
                    <td><?= $status ?></td>
                    <?php if ($data['isAdmin']) { ?>
                        <td>
                            <a class="btn btn-success" href="index.php?controller=task&action=showUpdateForm&id=<?= $task['id'] ?>">Редактировать</a>
                        </td>
                    <?php } ?>
                </tr>
            <?php } ?>
            </tbody>
        </table>

        <?php
        if ($data['taskPager']['firstPage'] !== 0 ||
            $data['taskPager']['prevPage'] !== 0 ||
            $data['taskPager']['nextPage'] !== 0 ||
            $data['taskPager']['lastPage'] !== 0
        ) {
            ?>
            <nav>
                <ul class="pagination">
                    <li class="page-item <?= $data['taskPager']['firstPage'] !== 0 ? '' : 'disabled' ?>">
                        <a class="page-link" href="index.php?controller=tasklist&page=<?= $data['taskPager']['firstPage'] . $pageSort ?>" aria-label="First">
                            <span aria-hidden="true">&laquo;</span>
                        </a>
                    </li>
                    <li class="page-item <?= $data['taskPager']['prevPage'] !== 0 ? '' : 'disabled' ?>">
                        <a class="page-link" href="index.php?controller=tasklist&page=<?= $data['taskPager']['prevPage'] . $pageSort ?>" aria-label="Previous">
                            <span aria-hidden="true">&lt;</span>
                        </a>
                    </li>
                    <li class="m-1">
                        <?= $data['taskPager']['from'] ?> &dash; <?= $data['taskPager']['to'] ?> из <?= $data['taskPager']['count'] ?>
                    </li>
                    <li class="page-item <?= $data['taskPager']['nextPage'] !== 0 ? '' : 'disabled' ?>">
                        <a class="page-link" href="index.php?controller=tasklist&page=<?= $data['taskPager']['nextPage'] . $pageSort ?>" aria-label="Next">
                            <span aria-hidden="true">&gt;</span>
                        </a>
                    </li>
                    <li class="page-item <?= $data['taskPager']['lastPage'] !== 0 ? '' : 'disabled' ?>">
                        <a class="page-link" href="index.php?controller=tasklist&page=<?= $data['taskPager']['lastPage'] . $pageSort ?>" aria-label="Last">
                            <span aria-hidden="true">&raquo;</span>
                        </a>
                    </li>
                </ul>
            </nav>
            <?php
        }
        ?>
        <?php
    }
    ?>


</div>
</body>
</html>
