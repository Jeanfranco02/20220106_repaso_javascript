var xhr = new XMLHttpRequest();
xhr.open("GET", "https://reqres.in/api/users?page=2", true);
xhr.onload = function(){
    if (xhr.status >= 200 && xhr.status < 300) {
        var response = JSON.parse(xhr.responseText);
        var users = response.data;
        var container = document.getElementById("users-container");

        users.forEach(function(user) {
            var userDiv = document.createElement("div");
            userDiv.className = 'card';
            userDiv.style = 'width: 18rem;'

            userDiv.innerHTML = `
                <img class="card-img-top" src="${user.avatar}" alt="${user.first_name} ${user.last_name}">
                <h5 class="card-title">Name: ${user.first_name} ${user.last_name}</h5>
                <p class="card-text">Email: ${user.email}</p>
            `;
            container.appendChild(userDiv);
        });
    } else {
        console.error("Error al obtener los datos:", xhr.statusText);
    }
};
xhr.send();
