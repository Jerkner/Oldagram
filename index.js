let postImage = document.getElementById("post-image")
let likeIcon = document.getElementById("like-icon")
let likesEl = document.getElementById("likes-el").innerHTML
let likes = document.getElementById("likes-el")
likedState = false
console.log(likedState)

postImage.addEventListener("dblclick", function() {
    if (likedState === false) {
        increaseLikes()
    }
})

likeIcon.addEventListener("click", function() {
    if (likedState === false) {
        increaseLikes()
    } else {
        decreaseLikes()
        likedState = false
    }
})

function increaseLikes() {
    likes.textContent = "69,421"
    likedState = true
    console.log(likedState)
    document.getElementById("like-icon").src = "images/liked.png"
    likeIcon.classList.add('like-icon-liked')
}

function decreaseLikes() {
    likes.textContent = "69,420"
    likedState = false
    console.log(likedState)
    document.getElementById("like-icon").src = "images/like.jpg"
    likeIcon.classList.remove('like-icon-liked')
}

