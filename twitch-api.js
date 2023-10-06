// Load Twitch Embed
const twitchEmbed = document.createElement('iframe');
twitchEmbed.src = 'https://player.twitch.tv/?channel=YOUR_CHANNEL_NAME'; // Replace with your channel name
twitchEmbed.width = '100%';
twitchEmbed.height = '480'; // Adjust the height as needed
twitchEmbed.frameborder = '0';
document.getElementById('twitch').appendChild(twitchEmbed);

// Function to fetch and display emotes
async function loadEmotes() {
    const response = await fetch('https://emotes.adamcy.pl/v1/channel/Bacon_Space/emotes/all');
    const emotesData = await response.json();

    // Process the emotesData and display emotes in the chat section
    const chatSection = document.getElementById('chat');
    // You'll need to parse the emotesData and create HTML elements for the emotes here

    // Example: Displaying an emote
    const emoteURL = emotesData.emotes[0].url;
    const emoteImg = document.createElement('img');
    emoteImg.src = emoteURL;
    chatSection.appendChild(emoteImg);
}

// Call the loadEmotes function to load emotes when the page loads
loadEmotes();
