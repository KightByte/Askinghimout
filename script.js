document.getElementById('noteImage').addEventListener('click', function() {
    const image = document.getElementById('noteImage');
    const ringLink = document.getElementById('ringLink');

    // Ensure the source is toggled correctly by updating only the part of the src we need
    if (image.src.includes('note1.jpg')) {
        image.src = 'note2.jpg';  // Change to second image
        ringLink.style.display = 'block';  // Show the ring image
    } else if (image.src.includes('note2.jpg')) {
        image.src = 'note1.jpg';  // Revert back to first image
        ringLink.style.display = 'none';  // Hide the ring image
    }
});
