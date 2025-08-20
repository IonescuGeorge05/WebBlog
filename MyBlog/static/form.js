function validateForm() {
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message") ? document.getElementById("message").value.trim() : "";
    let phone = document.getElementById("phone") ? document.getElementById("phone").value.trim() : "";
    let fileInput = document.getElementById("file") || null;

    if (name === "" || email === "" || (document.getElementById("message") && message === "")) {
        alert("All fields must be filled!");
        return false;
    }

    let emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email)) {
        alert("Please enter a valid email!");
        return false;
    }

    if (phone !== "") {
        let phonePattern = /^\d{10,}$/;
        if (!phonePattern.test(phone)) {
            alert("Please enter a valid phone number (at least 10 digits)!");
            return false;
        }
    }
    if (fileInput && fileInput.files.length > 0) {
        const file = fileInput.files[0];
        const allowedExtensions = /\.(pdf|doc|docx|png|jpg)$/i;
        const maxSize = 5 * 1024 * 1024; 

        if (!allowedExtensions.test(file.name)) {
            alert("Invalid file type. Allowed: PDF, DOC, DOCX, PNG, JPG.");
            return false;
        }

        if (file.size > maxSize) {
            alert("File size must be less than 5MB.");
            return false;
        }
    }

    alert("Success!");
    return true;
}
