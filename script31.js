function validateForm() {
    let isValid = true;

    // Get form values
    const firstname = document.getElementById("firstname").value.trim();
    const lastname = document.getElementById("lastname").value.trim();
    const fathername = document.getElementById("fathername").value.trim();
    const dob = document.getElementById("dob").value;
    const gender = document.querySelector('input[name="gender"]:checked');
    const address = document.getElementById("address").value.trim();
    const qualification = document.getElementById("qualification").value;
    const photo = document.getElementById("photo").value;
    const signature = document.getElementById("signature").value;
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();

    // Clear previous errors
    document.querySelectorAll('.error').forEach(el => el.innerText = "");

    // First Name
    if (firstname === "") {
        document.getElementById("firstnameError").innerText = "First name is requiredd";
        isValid = false;
    }

    // Last Name
    if (lastname === "") {
        document.getElementById("lastnameError").innerText = "Last name is requiredd";
        isValid = false;
    }

    // Father's Name
    if (fathername === "") {
        document.getElementById("fathernameError").innerText = "Father's name is required";
        isValid = false;
    }

    // Date of Birth
    if (dob === "") {
        document.getElementById("dobError").innerText = "Select your date of birth";
        isValid = false;
    }

    // Gender
    if (!gender) {
        document.getElementById("genderError").innerText = "Select your gender";
        isValid = false;
    }

    // Address
    if (address === "") {
        document.getElementById("addressError").innerText = "Address is required";
        isValid = false;
    }

    // Qualification
    if (qualification === "") {
        document.getElementById("qualificationError").innerText = "Select your qualification";
        isValid = false;m
    }

    // Photo
    if (photo === "") {
        document.getElementById("photoError").innerText = "Upload passport photo";
        isValid = false;
    }

    // Signature
    if (signature === "") {
        document.getElementById("signatureError").innerText = "Upload signature";
        isValid = false;
    }

    // Email Check (Simple)
    if (email === "" || !email.includes("@") || !email.includes(".")) {
        document.getElementById("emailError").innerText = "Enter a valid email";
        isValid = false;
    }

    // Phone Check (must be 10 digits)
    if (phone === "" || phone.length !== 10 || isNaN(phone)) {
        document.getElementById("phoneError").innerText = "Enter a valid 10-digit phone number";
        isValid = false;
    }

    // If everything is correct, show success message
    if (isValid) {
        alert("🎉 Registration Successful!");
    }

    return isValid;
}
