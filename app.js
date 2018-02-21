var signals = {
    'SIGHUP': 1,
    'SIGINT': 2,
    'SIGTERM': 15
};

let capture = (signal, value) => {
    console.log("Received signal: " + signal + " (" + value + ")");
    setTimeout(() => {
        console.log("Exiting...");
        process.exit(1);
    }, 3000);
};

Object.keys(signals).forEach((signal) => {
    process.on(signal, function () {
        capture(signal, signals[signal]);
    });
});
console.log("App started");
setInterval(() => {
    console.log('Running');
}, 1000);