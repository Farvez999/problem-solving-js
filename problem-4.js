function bestFriend(friends) {
    console.log(friends);
    let largeName = [0];
    for (let i = 0; i < friends.length; i++) {
        let nameIndex = friends[i];
        if (largeName.length < nameIndex.length) {
            largeName = nameIndex;
        }
    }
    return largeName;
}

const friends = ['Farvez', 'Rakib', 'Sohel', 'Sobuj', 'Harun', 'Shahin Mia'];
const friendList = bestFriend(friends);
console.log(friendList);