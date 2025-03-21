function validateForm() {
    let fullName = document.getElementById("fullName").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let dob = document.getElementById("dob").value;
    let presentAddress = document.getElementById("presentAddress").value;
    let permanentAddress = document.getElementById("permanentAddress").value;
    let termsChecked = document.getElementById("termsCheckbox").checked;

    if (!fullName || !email || !phone || !dob || !presentAddress || !permanentAddress) {
        alert("All fields are required!");
        return false;
    }

    let phonePattern = /^[6-9]\d{9}$/;
    if (!phonePattern.test(phone)) {
        alert("Please enter a valid 10-digit mobile number starting with 6, 7, 8, or 9.");
        return false;
    }

    if (!termsChecked) {
        alert("You must agree to the terms and conditions.");
        return false;
    }

    alert("Form submitted successfully!");
    return true;
}

function copyAddress() {
    let presentAddress = document.getElementById("presentAddress").value;
    let checkbox = document.getElementById("sameAddressCheckbox");
    let permanentAddress = document.getElementById("permanentAddress");

    if (checkbox.checked) {
        permanentAddress.value = presentAddress;
        permanentAddress.setAttribute("readonly", true);
    } else {
        permanentAddress.value = "";
        permanentAddress.removeAttribute("readonly");
    }
}

function toggleDropdown() {
    let dropdownList = document.getElementById("dropdownList");
    dropdownList.style.display = dropdownList.style.display === "block" ? "none" : "block";
}

function updateSelection() {
    let checkboxes = document.querySelectorAll("#dropdownList input[type='checkbox']");
    let selectedLanguages = [];

    checkboxes.forEach((checkbox) => {
        if (checkbox.checked) {
            selectedLanguages.push(checkbox.value);
        }
    });

    let button = document.getElementById("dropdownButton");
    button.innerText = selectedLanguages.length ? `${selectedLanguages.length} Selected` : "Select Languages";
}
