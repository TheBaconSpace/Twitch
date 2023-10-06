// Function to fetch and display emotes
function loadEmotes() {
    // Replace 'YOUR_ENCODED_USERNAME' with the encoded username
    const encodedUsername = encodeURIComponent('Afro');
    const api_url = `https://emotes.adamcy.pl/v1/channel/Afro/emotes/all`;

    fetch(api_url)
        .then(response => response.json())
        .then(data => {
            const emoteContainer = document.getElementById('emoteContainer');
            emoteContainer.innerHTML = '';

            data.forEach(emote => {
                // Create a div for each emote
                const emoteDiv = document.createElement('div');
                emoteDiv.className = 'emote';

                // Create an img element for the emote
                const img = document.createElement('img');
                img.src = emote.urls[0].url;
                img.alt = emote.code;

                // Append the img element to the emote div
                emoteDiv.appendChild(img);

                // Append the emote div to the emoteContainer
                emoteContainer.appendChild(emoteDiv);
            });
        })
        .catch(error => {
            console.error('Error fetching emotes:', error);
        });
}

// Function to embed Twitch chat
function embedTwitchChat() {
    // Replace 'YOUR_CHANNEL_NAME' with your Twitch channel name
    const channelName = 'Afro';

    // Embed Twitch Chat
    const twitchChatEmbed = document.createElement('iframe');
    twitchChatEmbed.src = `https://www.twitch.tv/embed/Afro/chat`;
    twitchChatEmbed.width = '100%';
    twitchChatEmbed.height = '480'; // Adjust the height as needed
    twitchChatEmbed.frameborder = '0';
    document.getElementById('twitch-chat').appendChild(twitchChatEmbed);
}

// Call the loadEmotes and embedTwitchChat functions when the page loads
window.onload = function () {
    loadEmotes();
    embedTwitchChat();
};
