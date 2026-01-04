function signup() {
  let username = document.getElementById("username").value.trim();
  let email = document.getElementById("email").value.trim();
  let password = document.getElementById("password").value;

  if (!username || !email || !password) {
    alert("Please fill all fields");
    return;
  }

  let users = getUsers();

  for (let i = 0; i < users.length; i++) {
    if (users[i].username === username) {
      alert("Username already exists");
      return;
    }
  }

  users.push({
    username: username,
    email: email,
    password: password,
    images: []
  });

  saveUsers(users);
  window.location.href = "login.html";
}

function login() {
  let username = document.getElementById("username").value.trim();
  let password = document.getElementById("password").value;

  let users = getUsers();
  let matched = false;

  for (let i = 0; i < users.length; i++) {
    if (users[i].username === username && users[i].password === password) {
      matched = true;
      break;
    }
  }

  if (matched) {
    localStorage.setItem("currentUser", username);
    window.location.href = "profile.html";
  } else {
    alert("Invalid credentials");
  }
}

function logout() {
  localStorage.removeItem("currentUser");
  window.location.href = "index.html";
}
