const API_KEY = AIzaSyDbzB8ftzeNq9NrkMRo9kAlkZ6IUwm9iWY;  // Replace with your actual API key
const CHANNEL_ID = www.youtube.com/channel/UCJmKZ5GaiUlGuQCa9AiGNEg;  // Replace with your YouTube channel ID

// Function to fetch videos from YouTube API
function fetchYouTubeVideos() {
    const apiUrl = `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=${CHANNEL_ID}&order=date&part=snippet&type=video&maxResults=5`;

    $.get(apiUrl, function(data) {
        const videos = data.items;
        let videoHTML = '';
        videos.forEach(video => {
            const videoId = video.id.videoId;
            const videoTitle = video.snippet.title;
            const videoDescription = video.snippet.description;
            const videoThumbnail = video.snippet.thumbnails.high.url;

            videoHTML += `
                <div class="video">
                    <h3>${videoTitle}</h3>
                    <img src="${videoThumbnail}" alt="${videoTitle}" />
                    <p>${videoDescription}</p>
                    <a href="https://www.youtube.com/watch?v=${videoId}" target="_blank">Watch on YouTube</a>
                </div>
            `;
        });

        $('#videoContainer').html(videoHTML);
    });
}

// Call the function on page load
$(document).ready(function() {
    fetchYouTubeVideos();
});
