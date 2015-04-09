var todayAndTime = new Date();

var goodbye = function () {
    alert("Goodbye!");
};

var greetNBye = function (greetingNTime, callback) {
    alert("Today's date & time are " + greetingNTime);
    callback();
};

greetNBye(todayAndTime, goodbye);