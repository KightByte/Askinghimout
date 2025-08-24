// Change the image when clicked and display the ring
document.getElementById('noteImage').addEventListener('click', function() {
    const image = document.getElementById('noteImage');
    const ringLink = document.getElementById('ringLink');

    // Change image if it's note1.jpg
    if (image.src.includes('note1.jpg')) {
        image.src = 'note2.jpg';  // Change to second image
        ringLink.style.display = 'block';  // Show the ring image
    } else {
        image.src = 'note1.jpg';  // Revert back to first image
        ringLink.style.display = 'none';  // Hide the ring image
    }
});
