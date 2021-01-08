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
        "<div id='donationBox' class='three columns'><div id='donationItem'><p id='donationAnimal'>"+animal+"</p><hr><p id='listHeading'>Food Type:</p><p id='listContents'>"+food+"</p><p id='listHeading'>Expiration Date:</p><p id='listContents'>"+expire+"</p><p id='listHeading'>Travel Distance:</p><p id='listContent'>"+travel+"</p><p id='listHeading'>Contact Details:</p><p id='listContents'>"+contact+"</p><p id='listHeading'>Preferred Contact Time:</p><p id='listContents'>"+time+"</p><a class='button' id='locationBtn' href='https://www.what3words.com/"+ location +"'>Location</a></div></div>"
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
