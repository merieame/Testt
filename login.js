const login = (event) => {
    event.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    console.log(username, password);

    if (username === "admin" && password === "admin") {
        window.location.href = "./home.html";
    } else {
        alert("Invalid username or password");
    }
};

document.getElementById("login-form").addEventListener("submit", login);
