
var user = {
    username: "Daw Maw",
    password: "dm2018"
};

var database = [ 
    user,
    {
        username:"Si Si Sein",
        password:"sss2018"
    },
    
    {
        username:"Cho Latt",
        password:"cl2018"
    },
    
    {
        username:"Myint Myint San",
        password:"mms2018"
    },
    
    {
        username:"Ei Phyo Thein",
        password:"ept2018"
    },
            
];
   
var newsFeed = [
    {
        username: "Daw Maw",
        timeline: "Only I can change my life. No one can do it for me",
    },
    {
        username: "Si Si Sein",
        timeline: "If you don't like something, change it. If you can't change it, change your attitude",
    },
    {
        username: "Cho Latt",
        timeline:  "Success and failure are both part of life. Both are not permanent",
    },
    {
        username:"Myint Myint San",
        timeline:"Try learning Javascript"
    },
    
    {
        username: "Ei Phyo Thein",
        timeline: " Let us remember: One book, one pen, one child, and one teacher can change the world",
    }
];

var userNamePrompt = prompt("What's your user name?");
var passwordPrompt = prompt("What's your password?");

function isUserValid(username, password) {
    for (var i = 0; i < database.length; i++) {
        if (database[i].username === username &&
            database[i].password === password) {
            return true;
        }    
    }
    return false;
}

function signIn(username, password) {
    // console.log(isUserValid(username, password));
    if (isUserValid(username, password)) {
            console.log(newsFeed);
        for (i=0; i<newsFeed.length; i++) {
            document.write(`<h2>${newsFeed[i].username}</h2>`);
            document.write(`<p>${newsFeed[i].timeline}</p>`);
        }
        
        } else {
            // alert("Sorry, wrong username and password!");
            document.write("Sorry, wrong username and password!");
        }
}

signIn(userNamePrompt, passwordPrompt);
