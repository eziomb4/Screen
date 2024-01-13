document.addEventListener('DOMContentLoaded', function () {
    const videoFileInput = document.getElementById('fileselection');
    const videoPlayer = document.getElementById('videoPlayer');

    videoFileInput.addEventListener('change', function () {
        const selectedFile = videoFileInput.files[0];

        if (selectedFile) {
            const videoURL = URL.createObjectURL(selectedFile);
            videoPlayer.src = videoURL;
            videoPlayer.load();
            videoPlayer.play();
        } else {
            videoPlayer.src = '';
        }
    });
});

let back = document.querySelector('.forward');// Due to some error forward is actually backward

    back.addEventListener('click',function(){
        alert("Pressed");
    window.history.go(-1);
});

let home = document.querySelector('.home');
    home.addEventListener('click',function(){
        alert("Pressed HOme");
        location.href = "main.html";
    });
