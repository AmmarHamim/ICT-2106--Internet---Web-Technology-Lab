// Show alert message
function showAlert() {
    alert("Hello, World!");
}

// Update paragraph content dynamically
function updateParagraph() {
    const para = document.getElementById("id1");
    para.innerHTML = "You clicked the button! Paragraph updated.";
}

// Update link text
const contactLink = document.querySelector(".my-div a");
contactLink.innerHTML = "Contact Us";

// Update image source dynamically
function updateImage() {
    const img = document.getElementById("imgid");
    img.src = "/Lab Class_12/Images/Hamim_st.jpg";
    img.alt = "Hamim Image";
}
