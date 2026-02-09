function getUser(id, callback) {
    setTimeout(() => {
        callback({ id: id, name: "Apurva" });
    }, 2000);
}

function runTask1() {
    getUser(1, function(user) {
        console.log(user.name);
    });
}
