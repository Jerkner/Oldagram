let postImage = document.getElementById("post-image")
let likeIcon = document.getElementById("like-icon")
let likesEl = document.getElementById("likes-el").innerHTML
let likes = document.getElementById("likes-el")
likedState = false
console.log(likedState)

postImage.addEventListener("dblclick", function() {
    increaseLikes()
})

likeIcon.addEventListener("click", function() {
    if (likedState === true) {
    likes.textContent = "21,492"
    likedState = false
    document.getElementById("like-icon").src = "images/like.jpg"
    console.log(likedState) 
    } else { increaseLikes()
    likedState = true
    document.getElementById("like-icon").src = "images/liked.png"
}
})

function increaseLikes() {
    likes.textContent = "21,493"
    likedState = true
    console.log(likedState)
    document.getElementById("like-icon").src = "images/liked.png"

}
