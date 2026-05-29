//check profile.html
// Gets information from local storage and saves it into the const variables
const savedEmail = localStorage.getItem("savedEmail");
const savedName = localStorage.getItem("savedName");
const savedPassword = localStorage.getItem("savedPassword");
const savedStNo = localStorage.getItem("savedStNo");
const savedCampus = localStorage.getItem("savedCampus");
const savedInterest = localStorage.getItem("savedInterest");
const savedBio = localStorage.getItem("savedBio");

const profileView = document.getElementById("profileView"); //saves profileView section into variable
const noProfile = document.getElementById("noProfile"); //saves noProfile section into variable

if (savedEmail && savedName && savedPassword) {
    profileView.style.display = "block";
    noProfileSection.style.display = "none";

    document.getElementById("profileEmail").innerHTML = savedEmail;
    document.getElementById("profileName").innerHTML = savedName;
    document.getElementById("profilePassword").innerHTML = savedPassword;
    document.getElementById("profileStNo").innerHTML = savedStNo;
    document.getElementById("profileCampus").innerHTML = savedCampus;
    document.getElementById("profileInterest").innerHTML = savedInterest;
    document.getElementById("profileBio").innerHTML = savedBio;
} else {
    profileView.style.display = "none";
    noProfileSection.style.display = "block";
    document.getElementById("noProfile").innerHTML =
        "Please Sign Up first to access Richfield Connect!!!";
} // Displays profile only if it was saved in localStorage, if not it show user to create an account