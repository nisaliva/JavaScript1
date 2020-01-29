'use strict';

let theReadingList = [
    {title: 'Crime and Punishment',
     author: 'Fyodor Dostoevsky',
     alreadyRead: true
    },
    {title: 'The Museum of Innocence',
    author: 'Orhan Pamuk',
    alreadyRead: false
    },
    {title: 'My Name Is Red',
    author: 'Orhan Pamuk',
    alreadyRead: true
    }
] ;
for (let i = 0; i < theReadingList.length; i++){
    let myReadingList = theReadingList[i];
    console.log('"' + myReadingList.title + '" by ' + myReadingList.author); 
}

for (let i = 0; i < theReadingList.length; i++) {
    let myReadingList = theReadingList[i];
    let listInfo = myReadingList.title + '" by ' + myReadingList.author;
    if (myReadingList.alreadyRead) {
      console.log('You already read "' + listInfo);
    } else {
      console.log('You still need to read "' + listInfo);
    }
}