




const task = new Promise((resolve, reject) => {

    //do some work
    setTimeout(() => {
        console.log("Do hard work!!!")
    },4000)

    //if success - resolve();
    //if error - reject();
    if (Math.random() > 0.5)
        resolve()
    else
        reject()
})

task.then(() => {
    console.log("Everything is good!")
}).catch(() => {
    console.log("Something went wrong!")
})

//await task;

console.log("Continue work!!!")



