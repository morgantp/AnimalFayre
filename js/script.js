window.onload = function() {
    currentYear();
  };
  
  function currentYear(){
    const date = new Date();
    const autoDate = document.querySelector('#autoDate');
    autoDate.textContent = date.getFullYear();
};

function passwordCheck() {
  var password = document.getElementById("passwordField");
  var confirmPassword = document.getElementById("confirmPassword");

  if (password.value === confirmPassword.value) {
      alert("Passwords Match");
      signUp();
  } else {
      alert("Passwords Do Not Match");
  }
}

auth.onAuthStateChanged(function(user) {
  if(user) {
      var email = user.email;
      document.getElementById("signIn").style.display = "none";
      document.getElementById("signUp").style.display = "none";
      document.getElementById("signOut").style.display = "inline-block";
      document.getElementById("verificationButton").style.display = "inline-block";
      welcomeText.textContent = 'Signed In: ' + email;
      verificationButton();                            
  } else {
      document.getElementById("signIn").style.display = "inline-block";
      document.getElementById("signUp").style.display = "inline-block";
      document.getElementById("signOut").style.display = "none";
      document.getElementById("verificationButton").style.display = "none";
      welcomeText.textContent = ' ';
  }
})

function verificationButton() {
  var user = firebase.auth().currentUser;
  var emailVerified = user.emailVerified;
  if(emailVerified) {
      verifiedCheck.textContent = ' ';
      document.getElementById("verificationButton").style.display = "none";        
  } else {
      verifiedCheck.textContent = "You are not verified. Please complete verification to access donations and listings.";
  }
}

function sendVerification() {
  var user = firebase.auth().currentUser;

  user.sendEmailVerification().then(function() {
      alert("Verification Email has been sent");
  }).catch(function(error) {
      alert("Error: " +error.message);
  });
}

function resetPassword() {
  var email = document.getElementById("resetPassword").value;

  auth.sendPasswordResetEmail(email).then(function(){
      alert("Reset Email Has Been Sent");
      document.getElementById("passwordPopup").style.display = "none";
  }).catch(function(error){
      alert(error.message);
  })
}

function makeDonation() {
  var user = firebase.auth().currentUser;
  if(user) {
      window.location = '/donation.html';
  } else {
      alert("Please Sign In");
  }
}

function seeListings() {
  var user = firebase.auth().currentUser;
  if(user) {
      window.location = '/listing.html';
  } else {
      alert("Please Sign In");
  }
}

function forgotPassword() {
  document.getElementById("passwordPopup").style.display = "block";
}

function closePopup() {
  document.getElementById("passwordPopup").style.display = "none";
}