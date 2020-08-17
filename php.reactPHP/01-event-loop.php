<?php
namespace React\EventLoop;

require_once './vendor/autoload.php';

$loop = Factory::create();

$counter = 0;
$counter2 = 100;

$loop->addPeriodicTimer(1, function () use (&$counter) {
    $counter++;
    echo "{$counter}\n";
});

$loop->addTimer(1, function () {
    echo "Hello\n";
});

$loop->addPeriodicTimer(1, function (TimerInterface $timer) use (&$counter2, $loop) {
    $counter2++;
    echo "{$counter2}\n";
    if ($counter2 === 105) {
        $loop->cancelTimer($timer);
    }
});
echo 'OK' . PHP_EOL;

$loop->run();