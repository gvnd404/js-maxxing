const password = document.querySelector('#password');
const form = document.querySelector('form');
const hint = document.querySelector('.hint');

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const passwordRegex =
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    const isValid = passwordRegex.test(password.value);

    if (!isValid) {
        hint.style.display = "block";
        hint.textContent = "Password must be at least 8 characters and include uppercase, lowercase, number, and symbol.";
    } else {
        hint.style.display = "none";
        console.log("Strong password ✅");
    }
});
