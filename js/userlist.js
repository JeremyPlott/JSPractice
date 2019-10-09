var xusers = [
    {
        "id": 1,
        "username": "adm",
        "password": "adm",
        "firstname": "Normal",
        "lastname": "Admin",
        "phone": "513-555-1212",
        "email": "help@admin.com",
        "isReviewer": true,
        "isAdmin": true
    },
    {
        "id": 2,
        "username": "user",
        "password": "user",
        "firstname": "Normal",
        "lastname": "User",
        "phone": "",
        "email": "",
        "isReviewer": false,
        "isAdmin": false
    },
    {
        "id": 3,
        "username": "sa",
        "password": "sa",
        "firstname": "System",
        "lastname": "Admin",
        "phone": "",
        "email": "",
        "isReviewer": true,
        "isAdmin": true
    }
]

function refresh(users) {
    var tbodyCtrl = document.getElementById("tbody");
    tbodyCtrl.innerHTML = "";
    for(var user of users) {
        var tr = "<tr>";
        tr += `<td>${user.id}</td>`
        tr += `<td>${user.username}</td>`
        tr += `<td>${user.firstname}</td>`
        tr += `<td>${user.lastname}</td>`
        tr += `<td>${user.isReviewer ? "Yes" : "No"}</td>`
        tr += `<td>${user.isAdmin ? "Yes" : "No"}</td>`
        tr += "</tr>";
        tbodyCtrl.innerHTML += tr;
    }
}

const getUsers = () => {
    let url = "http://localhost:50288/api/users";
    $.getJSON(url)
        .done( (res) => {
            console.log(res);
            refresh(res);
        });
};

// var rncol = getRandomColor();

// function getRandomColor() {
//     var letters = '0123456789ABCDEF';
//     var color = '#';
//     for (var i = 0; i < 6; i++) {
//       color += letters[Math.floor(Math.random() * 16)];
//     }
//     return color;
// }