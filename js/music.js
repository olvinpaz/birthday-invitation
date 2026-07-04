const MusicController = (() => {
    let isPlaying = false;
    let audio;
    let btn;
    let iconPlay;
    let iconPause;

    function init() {
        audio = document.getElementById('bg-music');
        btn = document.getElementById('music-btn');
        iconPlay = document.getElementById('icon-play');
        iconPause = document.getElementById('icon-pause');

        if (!audio || !btn) return;

        btn.addEventListener('click', toggleMusic);
    }

    function playMusic() {
        if (!audio) return;
        audio.play().then(() => {
            isPlaying = true;
            btn.classList.add('playing');
            iconPlay.classList.add('hidden');
            iconPause.classList.remove('hidden');
        }).catch(e => console.log("Audio play failed.", e));
    }

    function toggleMusic() {
        if (isPlaying) {
            audio.pause();
            btn.classList.remove('playing');
            iconPause.classList.add('hidden');
            iconPlay.classList.remove('hidden');
        } else {
            audio.play().catch(e => console.log("Audio play was prevented.", e));
            btn.classList.add('playing');
            iconPlay.classList.add('hidden');
            iconPause.classList.remove('hidden');
        }
        isPlaying = !isPlaying;
    }

    return { init, playMusic };
})();
