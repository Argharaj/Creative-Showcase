function getUsers() {
  let data = localStorage.getItem("users");
  if (!data) {
    return [];
  }

  try {
    return JSON.parse(data);
  } catch (e) {
    return [];
  }
}

function saveUsers(users) {
  localStorage.setItem("users", JSON.stringify(users));
}

function getCurrentUser() {
  return localStorage.getItem("currentUser");
}
