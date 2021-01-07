var rootRef = firebase.database().ref().child("Donations");

rootRef.on("child_added", snap => {
    var food = snap.child("food").val();
    var animal = snap.child("animal").val();
    var expire = snap.child("expire").val();
    var travel = snap.child("travel").val();
    var location = snap.child("location").val();
    var contact = snap.child("contact").val();
    var time = snap.child("time").val();


    $("#listingDonations").append(
        "<div id='donationBox' class='three columns'><div id='donationItem'><p><b>Type of Food:</b> " + food + "</p><p><b>Type of Animal:</b> " + animal + "</p><p><b>Expiration Date:</b> " + expire + "</p><p><b>Travel Distance:</b> " + travel + "</p><p><b>Contact Details:</b> " + contact + "</p><p><b>Preferred Contact Time:</b> " + time + "</p><a href='https://www.what3words.com/"+ location +"'>Location</a></div></div>"
    );
})

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
        alert("Please Verify Email Address")
        window.location = '/index.html';
    }
}
