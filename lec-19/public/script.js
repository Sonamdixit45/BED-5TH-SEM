const API_BASE = "http://localhost:5556/api"; // backend base URL

// ---------------------- USERS ---------------------- //

// Handle User Form Submit
document.getElementById("userForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  const res = await fetch(`${API_BASE}/users`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, email, password })
  });

  const data = await res.json();
  alert(data.message);
  loadUsers(); // refresh list
  e.target.reset();
});

// Load All Users
async function loadUsers() {
  const res = await fetch(`${API_BASE}/users`);
  const data = await res.json();
  const userList = document.getElementById("userList");
  userList.innerHTML = "<h3>All Users</h3>";

  data.data.forEach(user => {
    const div = document.createElement("div");
    div.classList.add("user-card");
    div.innerHTML = `
      <strong>${user.name}</strong> (${user.email}) <br>
      ID: ${user._id}
      <button onclick="deleteUser('${user._id}')">❌ Delete</button>
    `;
    userList.appendChild(div);
  });
}

// Delete User
async function deleteUser(id) {
  if (!confirm("Are you sure you want to delete this user?")) return;
  const res = await fetch(`${API_BASE}/users/${id}`, { method: "DELETE" });
  const data = await res.json();
  alert(data.message);
  loadUsers();
}

// ---------------------- BLOGS ---------------------- //

// Handle Blog Form Submit
document.getElementById("blogForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  const title = document.getElementById("title").value;
  const body = document.getElementById("body").value;
  const userId = document.getElementById("userId").value;

  const res = await fetch(`${API_BASE}/blogs`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ title, body, userId })
  });

  const data = await res.json();
  alert(data.message);
  loadBlogs(); // refresh list
  e.target.reset();
});

// Load All Blogs
async function loadBlogs() {
  const res = await fetch(`${API_BASE}/blogs`);
  const data = await res.json();
  const blogList = document.getElementById("blogList");
  blogList.innerHTML = "<h3>All Blogs</h3>";

  data.data.forEach(blog => {
    const div = document.createElement("div");
    div.classList.add("blog-card");
    div.innerHTML = `
      <h4>${blog.title}</h4>
      <p>${blog.body}</p>
      <small>By User: ${blog.userId}</small><br>
      <button onclick="deleteBlog('${blog._id}')">❌ Delete</button>
    `;
    blogList.appendChild(div);
  });
}

// Delete Blog
async function deleteBlog(id) {
  if (!confirm("Are you sure you want to delete this blog?")) return;
  const res = await fetch(`${API_BASE}/blogs/${id}`, { method: "DELETE" });
  const data = await res.json();
  alert(data.message);
  loadBlogs();
}

// ---------------------- EXTRA FEATURES ---------------------- //

// Search Blogs
document.getElementById("searchBlog").addEventListener("input", async (e) => {
  const query = e.target.value.toLowerCase();
  const res = await fetch(`${API_BASE}/blogs`);
  const data = await res.json();

  const blogList = document.getElementById("blogList");
  blogList.innerHTML = "<h3>Search Results</h3>";

  data.data
    .filter(blog => blog.title.toLowerCase().includes(query))
    .forEach(blog => {
      const div = document.createElement("div");
      div.classList.add("blog-card");
      div.innerHTML = `
        <h4>${blog.title}</h4>
        <p>${blog.body}</p>
        <small>By User: ${blog.userId}</small>
      `;
      blogList.appendChild(div);
    });
});

// Sort Blogs (Newest First / Oldest First)
document.getElementById("sortBlogs").addEventListener("change", async (e) => {
  const order = e.target.value;
  const res = await fetch(`${API_BASE}/blogs`);
  const data = await res.json();

  let blogs = data.data;
  blogs.sort((a, b) =>
    order === "newest"
      ? new Date(b.createdAt) - new Date(a.createdAt)
      : new Date(a.createdAt) - new Date(b.createdAt)
  );

  const blogList = document.getElementById("blogList");
  blogList.innerHTML = "<h3>Sorted Blogs</h3>";

  blogs.forEach(blog => {
    const div = document.createElement("div");
    div.classList.add("blog-card");
    div.innerHTML = `
      <h4>${blog.title}</h4>
      <p>${blog.body}</p>
      <small>By User: ${blog.userId}</small>
    `;
    blogList.appendChild(div);
  });
});

// ---------------------- INIT ---------------------- //
loadUsers();
loadBlogs();
