document.addEventListener("DOMContentLoaded", function () {
    const authLink = document.getElementById("auth-link");
    const token = document.cookie.split(";").find(row => row.startsWith("token="));
    if (token) {
        authLink.textContent = "Logout";
        authLink.href = "#";
        authLink.addEventListener("click", function () {
            document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
            location.reload();
        });
    }

    const searchInput = document.getElementById("search");
    const searchResults = document.getElementById("search-results");
    const routes = [
        { path: "/", name: "Home" },
        { path: "../routes/services.html", name: "Services" },
        { path: "../routes/brief.html", name: "Brief" },
        { path: "../routes/about-us.html", name: "About Us" },
    ];

    searchInput.addEventListener("input", function () {
        const term = searchInput.value.toLowerCase();
        searchResults.innerHTML = "";
        if (term) {
            const filtered = routes.filter(route => route.name.toLowerCase().includes(term));
            if (filtered.length > 0) {
                filtered.forEach(route => {
                    const li = document.createElement("li");
                    li.classList.add("list-group-item");
                    li.textContent = route.name;
                    li.addEventListener("click", () => {
                        window.location.href = route.path;
                    });
                    searchResults.appendChild(li);
                });
            } else {
                const li = document.createElement("li");
                li.classList.add("list-group-item", "text-muted");
                li.textContent = "No results found";
                searchResults.appendChild(li);
            }
            searchResults.classList.remove("d-none");
        } else {
            searchResults.classList.add("d-none");
        }
    });
});