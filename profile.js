let currentUsername = getCurrentUser();

if (!currentUsername) {
  window.location.href = "login.html";
}

let users = getUsers();
let currentUser = null;

for (let i = 0; i < users.length; i++) {
  if (users[i].username === currentUsername) {
    currentUser = users[i];
    break;
  }
}

if (!currentUser) {
  logout();
}

let linkBox = document.getElementById("profileLink");
linkBox.innerHTML =
  'Public Profile: <a href="public.html?user=' +
  currentUsername +
  '" target="_self">View</a>';

function uploadImage() {
  let input = document.getElementById("imageInput");
  let file = input.files[0];

  if (!file) {
    alert("Please select an image");
    return;
  }

  if (currentUser.images.length >= 7) {
    alert("You can upload a maximum of 7 images only");
    input.value = "";
    return;
  }

  let reader = new FileReader();

  reader.onload = function () {
    currentUser.images.push(reader.result);
    saveUsers(users);
    renderMyImages();
    input.value = "";
  };

  reader.readAsDataURL(file);
}

function renderMyImages() {
  let gallery = document.getElementById("myGallery");
  gallery.innerHTML = "";

  for (let i = 0; i < currentUser.images.length; i++) {
    let img = document.createElement("img");
    img.src = currentUser.images[i];
    gallery.appendChild(img);
  }
}

renderMyImages();
