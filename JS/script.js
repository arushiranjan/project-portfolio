
// sidebar
function toggleSidebar() {
    let sidebar = document.getElementById("sidebar");
    if (sidebar.style.left === "-220px" || sidebar.style.left === "") {
        sidebar.style.left = "0px";
    } else {
        sidebar.style.left = "-220px";
    }
}
document.querySelectorAll('.sidebar a').forEach(anchor => {
    anchor.addEventListener('click', function(event) {
        event.preventDefault();
        let section = document.querySelector(this.getAttribute('href'));
        if (section) {
            section.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
        toggleSidebar(); // Close sidebar only after selection
    });
});


// projects section

const images = [
    'project_images/chatbot1.png',
    'project_images/chatbot2.png',
    'project_images/project2.png'
];
let currentIndex = 0;

const previousBtn = document.getElementById('previousBtn');
const nextBtn = document.getElementById('nextBtn');
const image = document.getElementById('image');

previousBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    image.src = images[currentIndex];
});

nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % images.length;
    image.src = images[currentIndex];
});

/* Auto-slide images every 2 seconds */
setInterval(() => {
    currentIndex = (currentIndex + 1) % images.length;
    image.src = images[currentIndex];
}, 2000);

document.addEventListener("DOMContentLoaded", function () {
    const achievements = document.querySelectorAll(".achievement");

    function fadeInOnScroll() {
        achievements.forEach((achievement) => {
            const rect = achievement.getBoundingClientRect();
            if (rect.top < window.innerHeight * 0.9) {
                achievement.classList.add("visible");
            }
        });
    }

    window.addEventListener("scroll", fadeInOnScroll);
    fadeInOnScroll(); // Run on load in case elements are already in view

    // Message box handling
    const urlParams = new URLSearchParams(window.location.search);
    const status = urlParams.get("status");
    const messageBox = document.getElementById("message-box");

    if (messageBox) {
        if (status === "success") {
            messageBox.innerHTML = "<p style='color: green;'>Message sent successfully!</p>";
        } else if (status === "error") {
            messageBox.innerHTML = "<p style='color: red;'>Message failed to send. Please try again.</p>";
        }
    }

    // Initialize EmailJS
    emailjs.init("VrmQh-I5UhUcp8ozp"); // Correct Public Key
});

// Contact form submission using EmailJS
function sendMail(event) {
    event.preventDefault(); // Prevent form submission

    let senderName = document.getElementById("name").value.trim();
    let senderEmail = document.getElementById("email").value.trim();
    let senderMessage = document.getElementById("message").value.trim();

    // Regular expression for email validation
    let emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    // Form validation
    if (senderName === "" || senderEmail === "" || senderMessage === "") {
        alert("Please fill in all fields.");
        return;
    }
    if (!emailPattern.test(senderEmail)) {
        alert("Please enter a valid email address.");
        return;
    }

    let templateParams = {
        name: senderName,
        email: senderEmail,
        message: senderMessage,
    };

    // Send email to yourself
    emailjs.send("service_j9sype8", "template_17264zd", templateParams)
    .then(function(response) {
        alert("Email sent successfully!");

        // Now send an acknowledgment email to the sender
        let acknowledgeParams = {
            name: senderName,
            email: senderEmail,
            message: "Thank you for giving your feedback. Looking forward to connecting and growing.",
        };

        return emailjs.send("service_j9sype8", "template_n6mylol", acknowledgeParams);
    })
    .then(function(response) {
        alert("Thank you for the feedback!");
        document.getElementById("contact-form").reset(); // Clear form
    })
    .catch(function(error) {
        alert("Error sending email: " + error.text);
    });
}

// scroll to top or bottom
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function scrollToBottom() {
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
}


