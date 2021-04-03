



function problem3(input){
    let users = {}
    let line;
    while((line = input.shift()) !== "Log out"){
        let [command, user, ...args] = line.split(": ");

        if(command === "New follower"){
            if(!users.hasOwnProperty(user)){
                users[user] = {likes: 0, comments: 0}
            }
        }else if(command === "Like"){
            let countOfLikes = Number(args);
            if(!users.hasOwnProperty(user)){
                users[user] = {likes: countOfLikes, comments: 0}
            }else{
                users[user].likes += countOfLikes;
            }
        }else if(command === "Comment"){
            if(!users.hasOwnProperty(user)){
                users[user] = {likes: 0, comments: 1}
            }else{
                users[user].comments += 1;
            }
        }else if(command === "Blocked"){
            if(!users.hasOwnProperty(user)){
                console.log(`${user} doesn't exist.`);
            }else{
                delete users[user];
            }
        }
    }


    let sortedUsers = Object.entries(users).sort(sortUsers);

    console.log(`${sortedUsers.length} followers`);

    for (const user of sortedUsers) {
        console.log(`${user[0]}: ${user[1].comments + user[1].likes}`);
    }

    function sortUsers(a, b){
        let [aName, aInfo] = a;
        let [bName, bInfo] = b;


        let sortByLikesAndComments = (bInfo.likes + bInfo.comments) - (aInfo.likes + aInfo.comments);

        if(sortByLikesAndComments == 0){
            return aName.localeCompare(bName);
        }

        return sortByLikesAndComments;
    }
}


problem3(["Like: A: 3",
"Comment: A",
"New follower: B",
"Blocked: A",
"Comment: B",
"Like: C: 5",
"Like: D: 5",
"Log out"])
;
