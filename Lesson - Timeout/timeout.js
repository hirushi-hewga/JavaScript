// setTimeout(handler, time, args);

function printHelloWorld() {
    console.log("Hello world");
}

function printData(data) {
    console.log(JSON.stringify(data));
}

setTimeout(printHelloWorld, 5000);

console.log("end");

const user = {
    email: "user@gmail.com",
    username: "user"
};
const id = setTimeout(printData, 2000, user);

// clearTimeout(id) - зупиняє таймаут
clearTimeout(id);