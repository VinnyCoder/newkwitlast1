function login(){
    user_name = document.getElementById("Username_input").value;
    localStorage.setItem("Username_input" , Username_input);
    window.location = "kwitter_room.html" ;
}
