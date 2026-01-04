let users = getUsers();
let gallery = document.getElementById("gallery") || document.getElementById("userGallery");

if (gallery) {
  let params = new URLSearchParams(window.location.search);
  let username = params.get("user");

  if (username) {
    for (let i = 0; i < users.length; i++) {
      if (users[i].username === username) {
        document.getElementById("usernameTitle").innerText =
          users[i].username + "'s Gallery";

        for (let j = 0; j < users[i].images.length; j++) {
          let wrapper = document.createElement("div");
          wrapper.className = "image-card";

          let img = document.createElement("img");
          img.src = users[i].images[j];

          wrapper.appendChild(img);
          gallery.appendChild(wrapper);
        }
        break;
      }
    }
  } else {
    for (let i = 0; i < users.length; i++) {
      for (let j = 0; j < users[i].images.length; j++) {
        let wrapper = document.createElement("div");
        wrapper.className = "image-card";

        let img = document.createElement("img");
        img.src = users[i].images[j];

        let name = document.createElement("p");
        name.innerText = users[i].username;

        wrapper.appendChild(img);
        wrapper.appendChild(name);
        gallery.appendChild(wrapper);
      }
    }
  }
}
