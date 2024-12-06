function show() {
	const iframe = document.getElementById('iframe');
	document.getElementById('iframe').style.display = "block";
	iframe.src = iframe.src;
} 


// Toggle dropdown visibility on "Iniciar Sessão" or username click
function toggleDropdown() {
    const loginDropdown = document.getElementById("loginDropdown");
    const sairDropdown = document.getElementById("sairDropdown");

    // If logged in, toggle the Sair dropdown; otherwise, toggle the login form dropdown
    if (document.getElementById("Login").textContent !== "Iniciar Sessão") {
        sairDropdown.style.display = sairDropdown.style.display === "block" ? "none" : "block";
        loginDropdown.style.display = "none"; // Hide login form if open
    } else {
        loginDropdown.style.display = loginDropdown.style.display === "block" ? "none" : "block";
    }
}

// Function to show "Funcionalidade ainda não disponível" message when clicking "Registar"
function showRegisterMessage() {
    alert("Funcionalidade ainda não disponível");
}

// Function to handle login and replace "Iniciar Sessão" with the entered username
function loginUser() {
    const usernameField = document.getElementById("username");
    const loginLink = document.getElementById("Login");
    
    // Get the entered username
    const username = usernameField.value.trim();
    
    // Check if username is not empty
    if (username) {
        // Replace "Iniciar Sessão" text with the entered username
        loginLink.textContent = username;
        
        // Close the login dropdown
        document.getElementById("loginDropdown").style.display = "none";
    } else {
        // Optionally, alert if no username is entered
        alert("Por favor, insira um nome de usuário.");
    }
    
    // Prevent form from actually submitting
    return false;
}

// Function to log out the user and reset to "Iniciar Sessão"
function logOutUser() {
    const loginLink = document.getElementById("Login");
    
    // Reset "Iniciar Sessão" text and hide the Sair dropdown
    loginLink.textContent = "Iniciar Sessão";
    document.getElementById("sairDropdown").style.display = "none";
}

// Hide dropdowns if clicking outside of them
window.onclick = function(event) {
    const loginDropdown = document.getElementById("loginDropdown");
    const sairDropdown = document.getElementById("sairDropdown");

    if (!event.target.closest('#loginDropdown') && !event.target.closest('#Login')) {
        loginDropdown.style.display = "none";
    }

    if (!event.target.closest('#sairDropdown') && !event.target.closest('#Login')) {
        sairDropdown.style.display = "none";
    }
};
