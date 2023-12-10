
var firebaseConfig = {
    apiKey: "AIzaSyACwrh2IK1qpRiZlm1s8ZDfqvCvAxZRXxE",
    authDomain: "newkwit-5d28c.firebaseapp.com",
    projectId: "newkwit-5d28c",
    storageBucket: "newkwit-5d28c.appspot.com",
    messagingSenderId: "304853642111",
    appId: "1:304853642111:web:95279e3ae92649979d884a"
  };
  
  firebaseConfig.initializeApp(firebaseConfig);
 
  localStorage.getItem("Username_input");
document.getElementById("Username_input").innerHTML = "Welcome" + Username_input + "!";

function addRoom(){
roomname = document.getElementById("room_name").value;
firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
});
localStorage.setItem("room_name", room_name);
window.location = "kwitter_page.html";
}
function redirecttoroomname(name){
    console.log(name);
    localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}


function getData() {
    firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML =""; snapshot.forEach(function(childSnapshot) { childKey = childSnapshot.key;
            Room_names = childKey;
//Start code
row = "<div class='room_name' id="+room_names+" onclick='redirectToRoom(this.id)' >#"+ room_names +"</div><hr>";
document.getElementById("output").innerHTML += row;
//End code
});});}
getData();

function logout() {
    localStorage.removeItem("Username_input");
    localStorage.removeItem("room_name");
    window.location = "index.html";
}