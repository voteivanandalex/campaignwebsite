document.addEventListener("DOMContentLoaded", function () {
    // Tab switching logic
    const tabs = document.querySelectorAll(".tab-link");
    const contents = document.querySelectorAll(".tab-content");

    tabs.forEach(tab => {
        tab.addEventListener("click", function (e) {
            e.preventDefault();

            // Remove active class from all tabs
            tabs.forEach(t => t.classList.remove("active"));
            this.classList.add("active");

            // Hide all content
            contents.forEach(content => content.classList.remove("active"));

            // Show the corresponding content
            const selectedTab = this.getAttribute("data-tab");
            document.getElementById(selectedTab).classList.add("active");
        });
    });
});

// Spin the Wheel gimmick
function spinWheel() {
    const perks = [
        "Very strong sense of community! 🤝",
        "Emphasis on school pep rallies! 🎉",
        "One of the best proms in school history! 😲",
        "Amazing senior body to leadership communication. 🗣",
        "Newsletters and suggestion box to hear from students. 👂",
        "A senior year no one will forget! ❗"
    ];
    const randomPerk = perks[Math.floor(Math.random() * perks.length)];
    document.getElementById("wheelResult").innerText = `You got: ${randomPerk}`;
}
