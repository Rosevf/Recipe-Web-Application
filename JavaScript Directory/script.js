document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Regular expression for email validation

    if (!email || !password) {
        alert('Please fill in both fields.');
        return;
    }

    if (!emailRegex.test(email)) {
        alert('Please enter a valid email address.');
        return;
    }

    if (password.length < 8) {
        alert('Password should be at least 8 characters.');
        return;
    }

    // AJAX request for login
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "login.inc.php", true);
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhr.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var response = this.responseText;
            if (response == "success") {
                window.location.href = "dashboard.html"; // Redirect on successful login
            } else {
                alert(response); // Show error message from server
            }
        }
    };
    xhr.send("email=" + email + "&password=" + encodeURIComponent(password));
});

// for searching recipes
document.getElementById('searchForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    var searchQuery = document.getElementById('searchQuery').value;
    
    if (!searchQuery) {
        alert('Please enter a search term.');
        return;
    }

    // Here you would typically make an AJAX call to your server-side search script.
    // For demonstration, I'll just show a mock result.

    // Mock AJAX call
    setTimeout(function() { // This setTimeout is just to simulate async behavior
        var mockResults = 'Search results for "' + searchQuery + '"';
        document.getElementById('searchResults').innerHTML = mockResults;
    }, 1000);
});
