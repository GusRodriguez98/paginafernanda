document.getElementById("button1").addEventListener("click", function () {
    window.location.href = "fechas.html";
});
document.getElementById("button2").addEventListener("click", function () {
    window.location.href = "agenda.html";
});

function showImage(imageUrl) {
    var modal = document.getElementById("image-modal");
    var modalImage = document.getElementById("modal-image");

    modal.style.display = "block";
    modalImage.src = imageUrl;
}

function closeModal() {
    var modal = document.getElementById("image-modal");
    modal.style.display = "none";
}
