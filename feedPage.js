let posts = JSON.parse(localStorage.getItem("posts")) || [];
window.onload = function() {
    const userPost = posts.find(post => post.studentNumber === savedStNo);

    if (userPost) {
        document.getElementById("userName").innerHTML = userPost.name;
        document.getElementById("userStNo").innerHTML = userPost.studentNumber;
        document.getElementById("userPost").innerHTML = userPost.postText;
        document.getElementById("likeCount").innerHTML = userPost.likes;

        likes = userPost.likes;

        document.getElementById("postPreview").style.display = "block";
    }
}; //finds posts in localStorage (allows posts to go to localStorage and stay when page is refreshed)

const savedName = localStorage.getItem("savedName"); // Get items from localStorage
const savedStNo = localStorage.getItem("savedStNo");

const feedInput = document.getElementById("feedInput"); //save information from feedInput(textarea in html) into variable

let likes = 0;

document.getElementById("postPreview").style.display = "none"; // ensures postPreview is not displayed unless text is written

function postFeed() {

    if (feedInput.value.trim() === "") {
        alert("Please write something before posting...");
        return;
    }

    likes = 0;

    const newPost = {
        name: savedName,
        studentNumber: savedStNo,
        postText: feedInput.value,
        likes: likes
    };

    posts = posts.filter(post => post.studentNumber !== savedStNo);

    posts.push(newPost);

    localStorage.setItem("posts", JSON.stringify(posts));

    document.getElementById("userName").innerHTML = savedName;
    document.getElementById("userStNo").innerHTML = savedStNo;
    document.getElementById("userPost").innerHTML = feedInput.value;

    $("#postPreview").hide().fadeIn(300).slideDown(300);

    document.getElementById("likeCount").innerHTML = likes;

    feedInput.value = "";

} //whenever button is pressed it allows content it be posted and animation to be done.  It also saves posts in localStorage

function likePost() {

    likes = likes + 1;

    document.getElementById("likeCount").innerHTML = likes;

    posts = posts.map(post => {
        if (post.studentNumber === savedStNo) {
            post.likes = likes;
        }
        return post;
    });

    localStorage.setItem("posts", JSON.stringify(posts));

    $("#likeBtn").addClass("likeAnimation");
    $("#likeCount").addClass("likeCountAnimation");

    setTimeout(function() {
        $("#likeBtn").removeClass("likeAnimation");
        $("#likeCount").removeClass("likeCountAnimation");
    }, 200);

} // like counter each time like button is tapped

function deletePost() {

    let confirmDelete = confirm("Are you sure you want to delete this post?");

    if (confirmDelete) {

        posts = posts.filter(post => post.studentNumber !== savedStNo);

        localStorage.setItem("posts", JSON.stringify(posts));

        $("#postPreview").fadeOut(300);

        document.getElementById("userPost").innerHTML = "";

        likes = 0;

        document.getElementById("likeCount").innerHTML = likes;
    }

} //hides post if tapped and removes from localStorage