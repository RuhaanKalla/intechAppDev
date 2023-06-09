
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyC-0DWC5eBfluZbnOiWVz7iGpt12KLjIoU",
      authDomain: "c93-kwitter-3aade.firebaseapp.com",
      databaseURL: "https://c93-kwitter-3aade-default-rtdb.firebaseio.com",
      projectId: "c93-kwitter-3aade",
      storageBucket: "c93-kwitter-3aade.appspot.com",
      messagingSenderId: "1066628948877",
      appId: "1:1066628948877:web:f07ae06f5a2009259213c4"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    user_name = localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML = "Welcome : " + user_name + "!";

    function addroom(){
          room_name = document.getElementById("room_name").value;
          firebase.database().ref("/").child(room_name).update({purpose : "add user"});
          localStorage.setItem("room_name",room_name);
          window.location = "kwitter_page.html";
    }
    

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Room names" + room_name);
       row = "<div class='room_name' id="+Room_names+"onclick='redirectToRoomname(this.id)'>#" + Room_names + "</div><hr>";
       document.getElementById("output").innerHTML += row;      
      });});}
getData();

function redirectToRoomname(name){
console.log(name);
localStorage.setItem("room_name",name);
window.location = "kwitter_page.html";
}

function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");

      window.location = "index.html";
}
