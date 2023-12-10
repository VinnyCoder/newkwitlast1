var firebaseConfig = {
    apiKey: "AIzaSyACwrh2IK1qpRiZlm1s8ZDfqvCvAxZRXxE",
    authDomain: "newkwit-5d28c.firebaseapp.com",
    projectId: "newkwit-5d28c",
    storageBucket: "newkwit-5d28c.appspot.com",
    messagingSenderId: "304853642111",
    appId: "1:304853642111:web:95279e3ae92649979d884a"
  };
  
  firebaseConfig.initializeApp(firebaseConfig);

  user_name = localStorage.getItem("Username_input");
  room_name= localStorage.getItem("room_name");

  function getData()  { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
 firebase_mesesage_id= childKey;
 message_data = childData;

 console.log(firebase_mesesage_id);
 console.log(message_data);
 name1 = message_data['name1'];
message = message_data ['message'];
like = message_data ['like'];
name_with_tag = "<h4>" + name1 +"<img class = 'user-tick ' src = 'tick.png'></h4> " ;
message_with_tag = "<h4 class='message_h4'> "+ message + "</h4>";
like_button = "<button class= 'btn btn-warning id='>"+ firebase_message_id+ "value="+like+ "onclick='updateLike(this.id)'>";
span_with_tag = "<span class ='glyphicon glyphicon-thumbs-up> Like: "+like+ "</span> </button> <hr>" ; 

row = name_with_tag + message_with_tag + like_button + span_with_tag ;
document.getElementById ("output").innerHTML += row ; 
} });  }); }
getData();
function send(){
      msg = document.getElementById("msg").value ;
      firebase.database().ref(room_name).push({
            name:user_name , 
            message:msg , 
            like:0
      });
      document.getElementById("msg").value = "";
}
