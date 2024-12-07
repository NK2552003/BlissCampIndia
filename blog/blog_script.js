// Initialize the posts array
let posts = JSON.parse(localStorage.getItem("posts"));

if (!posts || posts.length === 0) {
  // If no posts are found in localStorage, preload default posts
  posts = [
    {
      title: "Exploring the Himalayas",
      content:
        "A breathtaking journey through the majestic Himalayan mountains!",
      images: ["../images/1.jpg", "../images/2.jpg", "../images/3.jpg"],
      likes: 10,
      comments: ["Amazing!", "Would love to visit!", "Beautiful pictures!"],
      profilePhoto: "../images/aditya.png",
    },
    {
      title: "Winter Adventures",
      content:
        "Relaxing on the serene Himachal, Uttrakhand and many more places. A true paradise!",
      images: ["../images/4.jpg", "../images/5.jpg", "../images/dark.jpg"],
      likes: 8,
      comments: ["Looks so peaceful!", "Great post!"],
      profilePhoto: "../images/nitin.png",
    },
    {
      title: "Manali: A Winter Wonderland",
      content:
        "Snow-capped peaks and pine forests await you in the enchanting Manali!",
      images: [
        "../destination/Manali/2.png",
        "../destination/Manali/3.png",
        "../destination/Manali/1.png",
      ],
      likes: 12,
      comments: [
        "So picturesque!",
        "Manali is on my bucket list!",
        "The snow looks amazing!",
      ],
      profilePhoto: "../images/nitish.png",
    },
    {
      title: "Kullu Valley: The Heart of Himachal",
      content:
        "A peaceful retreat surrounded by lush green valleys and snow-covered peaks.",
      images: [
        "../destination/Himachal/1.png",
        "../destination/Himachal/3.png",
        "../destination/Himachal/2.png",
      ],
      likes: 14,
      comments: [
        "Breathtaking views!",
        "I could spend hours here!",
        "The perfect escape!",
      ],
      profilePhoto: "../images/gaureesh.png",
    },
  ];
  // Save preloaded posts into localStorage
  localStorage.setItem("posts", JSON.stringify(posts));
}

function renderPosts() {
  const container = document.getElementById("postsContainer");
  container.innerHTML = ""; // Clear the container first
  posts.forEach((post, index) => {
    const postDiv = document.createElement("div");
    postDiv.className = "post";
    postDiv.ondblclick = () => toggleDeleteOption(index);
    postDiv.innerHTML = `
                    <div class="post-header">
                        <img src="${
                          post.profilePhoto
                        }" alt="Profile Photo" class="avatar" onerror="this.src='https://via.placeholder.com/80'">
                        <h3>${post.title}</h3>
                    </div>
                    <p>${post.content}</p>
                    <div class="grid-images">
                        ${post.images
                          .map(
                            (img, imgIndex) =>
                              `<img src="${img}" alt="Post Image" onerror="handleImageError(this, ${imgIndex})">`
                          )
                          .join("")}
                    </div>
                    <div class="actions">
                        <button class="like-button" onclick="likePost(${index})">
                            <span>&#128077;</span> Like (<span>${
                              post.likes
                            }</span>)
                        </button>
                    </div>
                    <div class="comment-section">
                        <h4>Comments:</h4>
                        <ul>
                            ${post.comments
                              .map((comment) => `<li>${comment}</li>`)
                              .join("")}
                        </ul>
                        <input type="text" id="commentInput-${index}" placeholder="Add a comment...">
                        <button onclick="addComment(${index})">Post</button>
                    </div>
                    <button class="delete-button" id="deleteButton-${index}" onclick="deletePost(${index})">Delete</button>
                `;
    container.appendChild(postDiv);
  });
}

function handleImageError(imgElement, imgIndex) {
  imgElement.style.display = "none"; // Hide the image if it fails to load
}

function toggleDeleteOption(index) {
  const deleteButton = document.getElementById(`deleteButton-${index}`);
  deleteButton.style.display =
    deleteButton.style.display === "block" ? "none" : "block";
}

function addPost() {
  const title = document.getElementById("postTitle").value;
  const content = document.getElementById("postContent").value;
  const images = Array.from(document.getElementById("postImages").files).map(
    (file) => URL.createObjectURL(file)
  );
  const profilePhotoInput = document.getElementById("profilePhotoInput");

  if (title && content && profilePhotoInput.files.length > 0) {
    const reader = new FileReader();
    reader.onload = (e) => {
      const profilePhoto = e.target.result;
      posts.push({
        title,
        content,
        images,
        likes: 0,
        comments: [],
        profilePhoto,
      });
      localStorage.setItem("posts", JSON.stringify(posts));
      renderPosts();
      document.getElementById("postTitle").value = "";
      document.getElementById("postContent").value = "";
      document.getElementById("postImages").value = "";
      profilePhotoInput.value = "";
    };
    reader.readAsDataURL(profilePhotoInput.files[0]);
  } else {
    alert("Please fill in all fields and upload a profile photo!");
  }
}

function likePost(index) {
  posts[index].likes++;
  localStorage.setItem("posts", JSON.stringify(posts));
  renderPosts();
}

function addComment(index) {
  const commentInput = document.getElementById(`commentInput-${index}`);
  const comment = commentInput.value;
  if (comment) {
    posts[index].comments.push(comment);
    localStorage.setItem("posts", JSON.stringify(posts));
    renderPosts();
  }
}

function deletePost(index) {
  posts.splice(index, 1);
  localStorage.setItem("posts", JSON.stringify(posts));
  renderPosts();
}

function previewProfilePhoto() {
  const fileInput = document.getElementById("profilePhotoInput");
  const preview = document.getElementById("profilePhotoPreview");

  if (fileInput.files && fileInput.files[0]) {
    const reader = new FileReader();
    reader.onload = (e) => {
      preview.src = e.target.result;
    };
    reader.readAsDataURL(fileInput.files[0]);
  }
}

// Initial render
renderPosts();
