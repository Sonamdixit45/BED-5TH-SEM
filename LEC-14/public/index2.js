function getUsers(URL) {
    fetch(URL)
        .then((res) => res.json())
        .then((data) => {
            console.log(data);

            const container = document.getElementById("userContainer");

            data.forEach((user) => {
                const div = document.createElement("div");
                div.classList.add("user-card");
                div.innerHTML = `
                    <h3>${user.name}</h3>
                    <p><strong>Email:</strong> ${user.email}</p>
                    <p><strong>Phone:</strong> ${user.phone}</p>
                `;
                container.appendChild(div);
            });
        })
        .catch((err) => {
            console.error(err);
        });
}

getUsers("https://localhost:4000/users");
