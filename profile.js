//check signUp.html

// saves information/tags in form in variables
const email = $("#email");
const fullName = $("#fullName");
const password = $("#password");
const confirmPassword = $("#confirmPassword");
const yourConfirmPassword = $("#yourConfirmPassword");
const studentNumber = $("#studentNumber");
const campus = $("#campus");
const interest = $("#interests");
const bio = $("#Bio");


//this is for live profile view section

//saves live profile view tags in variables
const yourEmail = $("#yourEmail");
const yourName = $("#yourName");
const yourPassword = $("#yourPassword");
const emptyConfirmPassword = $("#emptyConfirmPassword");
const yourStNo = $("#yourStNo");
const yourCampus = $("#yourCampus");
const yourInterest = $("#yourInterest");
const yourBio = $("#yourBio");

//ensures that as user types, values are displayed in live profile view section
email.on("input", function() {
    yourEmail.html(email.val());
});

fullName.on("input", function() {
    yourName.html(fullName.val());
});

password.on("input", function() {
    yourPassword.html("••••••");
});

studentNumber.on("input", function() {
    yourStNo.html(studentNumber.val());
});

campus.on("change", function() {
    yourCampus.html(campus.val());
});

interest.on("input", function() {
    yourInterest.html(interest.val());
});

bio.on("input", function() {
    yourBio.html(bio.val());
});

//for alert purposes
//save alert information/tags in variables
const emptyEmail = $("#emptyEmail");
const emptyName = $("#emptyName");
const emptyPassword = $("#emptyPassword");
const emptyStNo = $("#emptyStNo");
const emptyCampus = $("#emptyCampus");
const emptyInterest = $("#emptyInterest");
const emptyBio = $("#emptyBio");


//once button is tapped the function performs the following
$("#myForm").on("submit", function(event) {
    event.preventDefault();

    //initializes alert tags
    //rids alert tags so that it does not display anything yet
    emptyEmail.text("");
    emptyName.text("");
    emptyPassword.text("");
    emptyConfirmPassword.text("");
    emptyStNo.text("");
    emptyCampus.text("");
    emptyInterest.text("");
    emptyBio.text("");

    //hides alert design styles (written with those classes)
    email.removeClass("errorInput");
    fullName.removeClass("errorInput");
    password.removeClass("errorInput");
    studentNumber.removeClass("errorInput");
    campus.removeClass("errorInput");
    interest.removeClass("errorInput");
    bio.removeClass("errorInput");
    confirmPassword.removeClass("errorInput");


    //conditions that the button checks before it submits information into localStorage
    let isValid = true;


    if (email.val().trim() === "") {

        emptyEmail.text("Please enter email");
        emptyEmail.addClass("errorText");

        email.addClass("errorInput");

        isValid = false;
    }


    if (fullName.val().trim() === "") {

        emptyName.text("Please enter full name");
        emptyName.addClass("errorText");

        fullName.addClass("errorInput");

        isValid = false;
    }


    if (password.val().trim() === "") {

        emptyPassword.text("Please enter password");
        emptyPassword.addClass("errorText");

        password.addClass("errorInput");

        isValid = false;
    }

    if (password.val().trim().length < 8) {

        emptyPassword.text("Password must be at least 8 characters");
        emptyPassword.addClass("errorText");

        password.addClass("errorInput");

        isValid = false;
    }

    if (confirmPassword.val().trim() === "") {

        emptyConfirmPassword.text("Please confirm your password");
        emptyConfirmPassword.addClass("errorText");

        confirmPassword.addClass("errorInput");

        isValid = false;
    }

    if (password.val().trim() !== confirmPassword.val().trim()) {

        emptyConfirmPassword.text("Passwords do not match");
        emptyConfirmPassword.addClass("errorText");

        password.addClass("errorInput");
        confirmPassword.addClass("errorInput");

        isValid = false;
    }


    if (studentNumber.val().trim() === "") {

        emptyStNo.text("Please enter student number");
        emptyStNo.addClass("errorText");

        studentNumber.addClass("errorInput");

        isValid = false;
    }


    if (campus.val() === "") {

        emptyCampus.text("Please select campus");
        emptyCampus.addClass("errorText");

        campus.addClass("errorInput");

        isValid = false;
    }


    if (interest.val().trim() === "") {

        emptyInterest.text("Please enter interests");
        emptyInterest.addClass("errorText");

        interest.addClass("errorInput");

        isValid = false;
    }



    if (bio.val().trim() === "") {

        emptyBio.text("Please enter bio");
        emptyBio.addClass("errorText");

        bio.addClass("errorInput");

        isValid = false;
    }


    if (isValid === false) {
        return;
    }

    //if condition is met it saves information inputted in form into localStorage
    localStorage.setItem("savedEmail", email.val());
    localStorage.setItem("savedName", fullName.val());
    localStorage.setItem("savedPassword", password.val());
    localStorage.setItem("savedStNo", studentNumber.val());
    localStorage.setItem("savedCampus", campus.val());
    localStorage.setItem("savedInterest", interest.val());
    localStorage.setItem("savedBio", bio.val());

});