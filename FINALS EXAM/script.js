// Wait until the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    // Get all the images in the gallery
    const images = document.querySelectorAll('.gallery-item img');
    // Get the modal and modal content elements
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('modalImg');
    const closeModal = document.getElementById('closeModal');
    
    // Loop through all the images
    images.forEach(img => {
        img.addEventListener('click', () => {
            // When an image is clicked, display the modal and set the image source
            modal.style.display = 'flex';
            modalImg.src = img.src;
        });
    });

    // Close the modal when the close button is clicked
    closeModal.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    // Close the modal when clicking anywhere outside the image
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });
});
