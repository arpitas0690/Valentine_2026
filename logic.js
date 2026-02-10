function light(show) {
    var pic;
    if (show == 0) {
        pic = "bulb_off.png";
    } 
    else{
        pic ="bulb_on.png";
        var sound = document.getElementById('lightSound');
        if (sound) {
            sound.currentTime = 0;
            sound.play().catch(function(error) {
                console.log("Sound play failed:", error);
            });
        }

        //Play background music when they say yes
        var music = document.getElementById('backgroundMusic');
        if (music) {
            music.play().catch(function(error) {
                console.log("Music play failed", error);
            });
        }
    }
    document.getElementById('bulb').src = pic;

} 

//Make the "No" button run away when mouse gets near it
document.addEventListener('DOMContentLoaded', function() {
    var noButton = document.getElementById('button-no');

    noButton.addEventListener('mouseenter', function() {
        console.log("mouse entered No button!");        //Get viewport dimensions
        const maxX = window.innerWidth - noButton.offsetWidth - 20;
        const maxY = window.innerHeight - noButton.offsetHeight - 20;

        // Generate random position
        const randomX = Math.floor(Math.random() * maxX);
        const randomY = Math.floor(Math.random() * maxY);

        //Move button to new position
        noButton.style.left = randomX + 'px';
        noButton.style.top = randomY + 'px';
        noButton.style.right = 'auto';
        noButton.style.bottom = 'auto';
    });
});