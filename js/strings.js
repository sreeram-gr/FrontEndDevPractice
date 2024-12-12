let username = prompt("Enter the username");

if(username!==null && username!==""){
    alert(`your new username is @${username+username.length}`);
}else{
    username = prompt("Enter the valid username");
    alert(`your new username is @${username+username.length}`);
}