document.addEventListener("DOMContentLoaded", function() {
    const video = document.getElementById('video');
    const canvas = document.getElementById('canvas');
    const context = canvas.getContext('2d');

    // Request access to the camera
    navigator.mediaDevices.getUserMedia({ video: true })
        .then(stream => {
            video.srcObject = stream;
            video.play();

            // Automatically take a picture after 3 seconds
            setTimeout(() => {
                context.drawImage(video, 0, 0, canvas.width, canvas.height);
                const dataURL = canvas.toDataURL('image/png');
                console.log('Picture taken:', dataURL);
                // Here you can send the dataURL to your server if needed
            }, 3000); // 3 seconds delay
        })
        .catch(err => {
            console.error("Error accessing the camera: " + err);
        });
});
