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
    likes.textContent = "69,420"
    likedState = false
    document.getElementById("like-icon").src = "images/like.jpg"
    console.log(likedState) 
    } else { increaseLikes()
    likedState = true
    document.getElementById("like-icon").src = "images/liked.png"
    likeIcon.classList.toggle('like-icon-liked:hover', 'like-icon-liked:focus')
}
})

function increaseLikes() {
    likes.textContent = "69,421"
    likedState = true
    console.log(likedState)
    document.getElementById("like-icon").src = "images/liked.png"

}
