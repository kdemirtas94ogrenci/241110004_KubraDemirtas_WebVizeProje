function validateForm(event) {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    if (!name || !email || !message) {
        event.preventDefault();
        alert("Lütfen tüm alanları doldurun.");
    } else {
        alert("Form başarıyla gönderildi!");
    }
}


function toggleMenu() {
    const nav = document.querySelector("nav ul");
    nav.classList.toggle("open");
}


document.addEventListener("DOMContentLoaded", () => {
    // Formu kontrol etme
    const form = document.querySelector("form");
    form.addEventListener("submit", validateForm);

    // Menü açılıp kapanma işlemi
    const menuButton = document.createElement("button");
    menuButton.innerText = "Menüyü Aç/Kapat";
    menuButton.classList.add("menu-toggle");
    document.body.insertBefore(menuButton, document.querySelector("header"));

    menuButton.addEventListener("click", toggleMenu);
});

// Metni gösterme/gizleme işlevi
function toggleText(projectNumber) {
    const textElement = document.getElementById(`project${projectNumber}-text`);
    const buttonElement = document.getElementById(`read-more-btn${projectNumber}`);

    if (textElement.style.maxHeight === "none") {
        // Eğer metin şu an tam görünüyorsa, gizle
        textElement.style.maxHeight = "100px";
        buttonElement.textContent = "Devamını Oku";
    } else {
        // Eğer metin gizliyse, tamamını göster
        textElement.style.maxHeight = "none";
        buttonElement.textContent = "Gizle";
    }
}
