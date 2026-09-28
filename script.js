
// HERO BUTTON

let heroBtn = document.querySelector(".hero-btn");

heroBtn.addEventListener("click", function () {

    document.querySelector("#services").scrollIntoView({
        behavior: "smooth"
    });

});


// CONTACT BUTTON

let contactBtn = document.querySelector(".contact-btn");

contactBtn.addEventListener("click", function () {

    alert("Thanks for contacting NEXORA!");

});


// NAVIGATION

let navLinks = document.querySelectorAll(".nav-links a");

navLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        console.log(
            "NEXORA Navigation: " + link.innerText
        );

    });

});

// CONTACT FORM

let sendBtn = document.querySelector("#sendBtn");

sendBtn.addEventListener("click", function () {

    let name = document.querySelector("#name").value;
    let email = document.querySelector("#email").value;
    let message = document.querySelector("#message").value;

    if (
        name === "" ||
        email === "" ||
        message === ""
    ) {

        alert("Please fill all fields.");

        return;
    }

    alert(
        "Thanks " + name +
        "! Your message has been received."
    );

});



