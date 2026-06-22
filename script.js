const blogContainer =
document.getElementById("blogContainer");

function addPost(){

const title =
document.getElementById("title").value;

const content =
document.getElementById("content").value;

if(title==="" || content===""){

alert("Please fill all fields");
return;

}

const card =
document.createElement("div");

card.className="blog-card";

card.innerHTML=`

<h3>${title}</h3>

<p>${content}</p>

<div class="blog-actions">

<button onclick="likePost(this)">
❤️ Like
</button>

</div>

<div class="comment-box">

<input
type="text"
placeholder="Write comment..."
>

<button
onclick="addComment(this)">
Comment
</button>

<div class="comment-list"></div>

</div>

`;

blogContainer.prepend(card);

document.getElementById("title").value="";
document.getElementById("content").value="";

}

function likePost(btn){

btn.innerHTML="❤️ Liked";

}

function addComment(btn){

const input =
btn.previousElementSibling;

const commentText =
input.value;

if(commentText==="") return;

const commentDiv =
document.createElement("div");

commentDiv.className="comment";

commentDiv.textContent=
commentText;

btn.nextElementSibling.appendChild(
commentDiv
);

input.value="";

}
