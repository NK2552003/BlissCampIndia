import { initializeApp } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";
import {
  getFirestore,
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
  getDoc,
} from "https://www.gstatic.com/firebasejs/11.1.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBz1ATsvAjHchK0PtD2Gm_SURQv3OgHZ6Q",
  authDomain: "blisscampindia-ec9c0.firebaseapp.com",
  projectId: "blisscampindia-ec9c0",
  storageBucket: "blisscampindia-ec9c0.appspot.com",
  messagingSenderId: "671615465152",
  appId: "1:671615465152:web:3bc8edff86220845afdf25",
  measurementId: "G-YN13PCFC5E",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

function showLoading() {
  const loadingElement = document.createElement("p");
  loadingElement.id = "loading";
  loadingElement.textContent = "Loading posts...";
  document.body.appendChild(loadingElement);
}

function hideLoading() {
  const loadingElement = document.getElementById("loading");
  if (loadingElement) {
    loadingElement.remove();
  }
}

async function fetchPosts() {
  showLoading();
  try {
    const snapshot = await getDocs(collection(db, "posts"));
    const posts = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    hideLoading();
    renderPosts(posts);
  } catch (error) {
    hideLoading();
    console.error("Error fetching posts:", error);
  }
}

async function addPost() {
  const title = document.getElementById("postTitle").value.trim();
  const content = document.getElementById("postContent").value.trim();
  const name = document.getElementById("userName").value.trim();
  const profilePhotoInput = document.getElementById("profilePhotoInput");
  const postImageInput = document.getElementById("postImageInput");
  const statusMessage = document.getElementById("statusMessage");

  statusMessage.textContent = ""; // Clear any previous messages

  if (
    !title ||
    !content ||
    !name ||
    profilePhotoInput.files.length === 0 ||
    postImageInput.files.length === 0
  ) {
    statusMessage.textContent =
      "Please complete all fields and ensure both images are uploaded!";
    return;
  }

  const profilePhoto = profilePhotoInput.files[0];
  const postImage = postImageInput.files[0];

  // Validate postImage size
  if (postImage.size > 1024 * 1024) {
    statusMessage.textContent = "Post image size should not exceed 1 MB!";
    return;
  }

  statusMessage.textContent = "Processing submission...";

  const profileReader = new FileReader();
  const postImageReader = new FileReader();

  profileReader.onload = () => {
    postImageReader.onload = async () => {
      const newPost = {
        title,
        content,
        name,
        profilePhoto: profileReader.result,
        postImage: postImageReader.result,
        likes: 0,
        comments: [],
        date: new Date().toLocaleString(),
      };

      try {
        await addDoc(collection(db, "posts"), newPost);
        statusMessage.textContent = "Post submitted successfully!";
        fetchPosts();
        resetForm();
      } catch (error) {
        console.error("Error adding post:", error);
        statusMessage.textContent = "Error submitting post. Please try again.";
      }
    };
    postImageReader.readAsDataURL(postImage);
  };
  profileReader.readAsDataURL(profilePhoto);
}

function resetForm() {
  document.getElementById("postTitle").value = "";
  document.getElementById("postContent").value = "";
  document.getElementById("userName").value = "";
  document.getElementById("profilePhotoInput").value = "";
  document.getElementById("profilePhotoPreview").src =
    "https://via.placeholder.com/80";
}

function previewProfilePhoto(event) {
  const preview = document.getElementById("profilePhotoPreview");
  const file = event.target.files[0];

  if (file) {
    const reader = new FileReader();
    reader.onload = () => {
      preview.src = reader.result;
    };
    reader.readAsDataURL(file);
  } else {
    preview.src = "https://via.placeholder.com/80";
  }
}

function renderPosts(posts) {
  const container = document.getElementById("postsContainer");
  container.innerHTML = posts
    .map(
      (post) => `
          <div class="post" ondblclick="toggleDeleteButton('${post.id}')">
            <div class="post-header">
              <img src="${
                post.profilePhoto
              }" alt="Profile Photo" class="avatar" onerror="this.src='https://via.placeholder.com/80'">
              <div>
                <h3>${post.name}</h3>
                <small>${post.title}</small>
              </div>
            </div>
            <p>${post.content}</p>
            <img src="${
              post.postImage
            }" alt="Post Image" class="post-image" onerror="this.style.display='none'">
            <small class="post-date">Uploaded on: ${post.date}</small>
            <div class="actions">
              <button class="like-button" onclick="likePost('${post.id}', ${
        post.likes
      })">
                👍 Like (<span>${post.likes}</span>)
              </button>
              <button class="share-button like-button" onclick="sharePost('${
                post.id
              }')">
                📤 Share
              </button>
            </div>
            <div class="comment-section">
              <h4>Comments:</h4>
              <ul>
                ${post.comments
                  .map(
                    (comment) =>
                      `<li>${comment.text} <small>(${new Date(
                        comment.timestamp
                      ).toLocaleString()})</small></li>`
                  )
                  .join("")}
              </ul>
              <input type="text" id="commentInput-${
                post.id
              }" placeholder="Add a comment...">
              <button onclick="addComment('${post.id}')">Post</button>
            </div>
            <button class="delete-button hidden" id="deleteButton-${
              post.id
            }" onclick="deletePost('${post.id}')">Delete</button>
          </div>`
    )
    .join("");
}

function toggleDeleteButton(postId) {
  const deleteButton = document.getElementById(`deleteButton-${postId}`);
  deleteButton.classList.toggle("hidden");
}

async function deletePost(postId) {
  try {
    await deleteDoc(doc(db, "posts", postId));
    fetchPosts();
  } catch (error) {
    console.error("Error deleting post:", error);
  }
}

async function likePost(postId, currentLikes) {
  try {
    const postRef = doc(db, "posts", postId);
    await updateDoc(postRef, {
      likes: currentLikes + 1,
    });
    fetchPosts(); // Refresh the posts to show updated like count
  } catch (error) {
    console.error("Error updating likes:", error);
  }
}

async function addComment(postId) {
  const commentInput = document.getElementById(`commentInput-${postId}`);
  const comment = commentInput.value.trim();

  if (comment) {
    try {
      const postRef = doc(db, "posts", postId);
      const postDoc = await getDoc(postRef);

      if (postDoc.exists()) {
        const currentComments = postDoc.data().comments || [];

        await updateDoc(postRef, {
          comments: [
            ...currentComments,
            { text: comment, timestamp: Date.now() },
          ],
        });

        commentInput.value = ""; // Clear the input field
        fetchPosts(); // Refresh the posts to show the new comment
      } else {
        console.error("Post not found");
      }
    } catch (error) {
      console.error("Error adding comment:", error);
    }
  }
}

async function sharePost(postId) {
  try {
    const postRef = doc(db, "posts", postId);
    const postDoc = await getDoc(postRef);

    if (postDoc.exists()) {
      const postData = postDoc.data();
      const shareTitle = `${postData.name}'s Post`;
      const shareText = `Check out this post by ${postData.name}: "${postData.title}"\n\n${postData.content}`;
      const shareUrl = `${window.location.origin}/post/${postId}`;

      if (navigator.share) {
        await navigator.share({
          title: shareTitle,
          text: shareText,
          url: shareUrl,
        });
      } else {
        // Fallback for browsers that don't support the Web Share API
        const fallbackText = `${shareTitle}\n\n${shareText}\n\nLink: ${shareUrl}`;
        prompt("Copy this information to share:", fallbackText);
      }
    } else {
      console.error("Post not found");
    }
  } catch (error) {
    console.error("Error sharing post:", error);
  }
}

fetchPosts();

// Make functions globally accessible
window.addPost = addPost;
window.previewProfilePhoto = previewProfilePhoto;
window.toggleDeleteButton = toggleDeleteButton;
window.deletePost = deletePost;
window.likePost = likePost;
window.addComment = addComment;
window.sharePost = sharePost;
