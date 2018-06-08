import React from 'react';
export function getdata() {

    let data = {
        username: "nava user",
        email: "zzsvs",
        bio: "testing from react",
        password: "newpassword"
    }
    fetch('http://localhost:3000/routes/handlers/users/register', {
            method: "POST",
            body: JSON.stringify(data)
        })
        .then(response => {
            return response.json();
        }).then(data => {
            let username = data.response.username;
            console.log("!!!!!!!!!!!!!!");
            console.log(username);
        })

}