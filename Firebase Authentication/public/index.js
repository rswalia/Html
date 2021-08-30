import { getAuth, onAuthStateChanged } from "firebase/auth";

const auth = getAuth();
onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
    document.getElementById("user_div").style.display = "initial";
    document.getElementById("logout_div").style.display = "none";
    const uid = user.uid;
    // ...
  } else {
    // User is signed out
    // ...
    document.getElementById("user_div").style.display = "none";
    document.getElementById("logout_div").style.display = "initial";
  }
});


function login(){

    var userEmail = document.getElementById("email").value;
    var userPass = document.getElementById("password").value;

    import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const auth = getAuth();
signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });
}