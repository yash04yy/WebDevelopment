function validate_name() {
    let name = document.getElementById("uname").value;
    var ideal = /\s/;
    if (name.match(ideal)) {
        alert("Please enter username without space !");
        document.getElementById("uname").focus(AbortSignal);
        return false;
    } else {
        return true;
    }

}

function validate_email() {
    let email = document.getElementById("email");

    if (email.value.indexOf("@") > 1) {
        if (email.value.indexOf(".") > 5) {
            if ((email.value.charAt(email.value.length - 4) == ".") || (email.value.charAt(email.value.length - 3) == ".")) {
                return true;
            } else {
                alert("Email must contain 2 or 3 letters after . character ");
                return false;
            }
        } else {
            alert("Email must contain . and atleast 3 letters between . and @");
            return false;
        }
    } else {
        alert("Email must contain @ sign after few letters");
        return false;
    }
}

function validate_phone() {
    let phone = document.getElementById("phone").value;
    var ideal_number = /^\d{10}$/;
    if (phone.match(ideal_number)) {
        return true;
    } else {
        alert("Please enter 10 digit phone number!");
        return false;
    }

}

function validate_password() {
    let pass = document.getElementById("password").value;
    var ideal_cap = /[A-Z]+/;
    var ideal_digit = /[0-9]+/;
    var ideal_char = /[@,#,$,&]+/;
    if (pass.length >= 7) {
        if (pass.match(ideal_cap)) {
            if (pass.match(ideal_digit)) {
                if (pass.match(ideal_char)) {
                    return true;
                } else {
                    alert("Please enter at least one special character!");
                    return false;
                }

            } else {
                alert("Please enter at least one digit!");
                return false;
            }

        } else {
            alert("Please enter atleast one uppercase character!");
            return false;
        }

    } else {
        alert("Password must be at least 7 characters long!");
        return false;
    }
}

function validate_confirmpass() {
    let cp = document.getElementById("confirm-pass").value;
    let p = document.getElementById("password").value;
    if (cp == p) {
        return true;
    } else {
        alert("Password does not match!");
        return false;
    }

}