document.addEventListener('DOMContentLoaded', function() {
    const audioPlayer = document.getElementById('audioPlayer');
    const thumbnail = document.querySelector('.thumbnail');
    const playlist = document.getElementById('playlist');
    const songTitle = document.querySelector('.song-title');
    const timeBar = document.getElementById('timeBar');
    const volumeBar = document.getElementById('volumeBar');

    // Define an array of songs with their titles, source paths, and thumbnails
    const songs = [
         { title: 'Downtown', src: './Solstice/Downtown.mp3', thumbnail: './Solstice/Folder.jpg' },
                { title: 'Flight', src: './Solstice/Flight.mp3', thumbnail: './Solstice/Folder.jpg' },
                { title: 'Moirse', src: './Solstice/Moires.mp3', thumbnail: './Solstice/Folder.jpg' },
                { title: 'Riptide', src: './Solstice/Riptide.mp3', thumbnail: './Solstice/Folder.jpg' },
                { title: 'Satellites', src: './Solstice/Satellites.mp3', thumbnail: './Solstice/Folder.jpg' },
                { title: 'Snowland', src: './Solstice/Snowland.mp3', thumbnail: './Solstice/Folder.jpg' },
                { title: 'The Woods', src: './Solstice/The Woods.mp3', thumbnail: './Solstice/Folder.jpg' },
                { title: 'Ziva', src: './Solstice/Ziva.mp3', thumbnail: './Solstice/Folder.jpg' },
                { title: 'Safira', src: './Solstice/Safira.mp3', thumbnail: './Solstice/Folder.jpg' },
        
        // Add more songs as needed
    ];

    // Populate the playlist
    songs.forEach(song => {
        const listItem = document.createElement('li');
        listItem.textContent = song.title;
        listItem.setAttribute('data-src', song.src);
        listItem.setAttribute('data-thumbnail', song.thumbnail);
        playlist.appendChild(listItem);
    });

    // Add event listener to each playlist item
    playlist.addEventListener('click', function(event) {
        if (event.target.tagName === 'LI') {
            const src = event.target.getAttribute('data-src');
            const thumbnailSrc = event.target.getAttribute('data-thumbnail');
            const title = event.target.textContent;
            audioPlayer.src = src;
            thumbnail.style.backgroundImage = `url('${thumbnailSrc}')`;
            songTitle.textContent = title;
            audioPlayer.play();
        }
    });

    // Update time bar as audio plays
    audioPlayer.addEventListener('timeupdate', function() {
        timeBar.value = audioPlayer.currentTime;
        timeBar.max = audioPlayer.duration;
    });

    // Seek to selected time on time bar change
    timeBar.addEventListener('input', function() {
        audioPlayer.currentTime = timeBar.value;
    });

    // Adjust volume on volume bar change
    volumeBar.addEventListener('input', function() {
        audioPlayer.volume = volumeBar.value;
    });
});
