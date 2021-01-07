auth.onAuthStateChanged(function(user) {
    if(user) {        
        verificationCheck();
    } else {
        window.location = '/index.html';
    }
})

function verificationCheck(){ 
    var user = firebase.auth().currentUser;
    var emailVerified = user.emailVerified;
    if(emailVerified) {

    } else {
        alert("Please Verify Email Address");
        window.location = '/index.html';

    }
}

function submitDonation() {
    var user = firebase.auth().currentUser;
    if(user) {
        var userid = user.uid;
        var email = user.email;
        var firebaseRef = firebase.database().ref();
        firebaseRef.child("Donations").push({
            user: userid,
            email: email,
            food: document.getElementById("foodType").value,
            animal: document.getElementById("animalType").value,
            expire: document.getElementById("expirationDate").value,
            travel: document.getElementById("travelDistance").value,
            location: document.getElementById("what3wordsLocation").value,
            contact: document.getElementById("contactPreference").value,
            time: document.getElementById("timePreference").value
        })
    }
}