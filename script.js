// Change the image when clicked
document.getElementById('noteImage').addEventListener('click', function() {
    const image = document.getElementById('noteImage');
    if (image.src.includes('note1.png')) {
        image.src = 'note2.png';  // Change to second image
    } else {
        image.src = 'note1.png';  // Revert back to first image
    }
});

