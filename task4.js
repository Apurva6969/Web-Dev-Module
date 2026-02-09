function getUser() {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log("User fetched");
            resolve({ id: 1, name: "Apurva" });
        }, 1000);
    });
}

function getPosts(userId) {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log("Posts fetched");
            resolve(["post1", "post2"]);
        }, 1000);
    });
}

function getComments(post) {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log("Comments fetched");
            resolve(["nice", "good"]);
        }, 1000);
    });
}

async function runTask4() {
    try {
        const user = await getUser();
        console.log("User:", user);

        const posts = await getPosts(user.id);
        console.log("Posts:", posts);

        const comments = await getComments(posts[0]);
        console.log("Comments:", comments);
    } catch (error) {
        console.log(error);
    }
}
