// Replace with your Twitch client ID and Bearer token
const clientId = '2oag632o0mp6n85h3mismr2ocsa1jip';
const bearerToken = '62ly1aqjnymr30sn6yga5xpxuo4yi9';

// Function to fetch Twitch stream data
async function fetchTwitchData() {
    try {
        const response = await fetch('https://api.twitch.tv/helix/streams?user_login=Monstercat', {
            headers: {
                'Client-ID': clientId,
                'Authorization': `Bearer ${bearerToken}`,
            },
        });
        const data = await response.json();

        if (data.data && data.data.length > 0) {
            // User is live
            const streamData = data.data[0];
            document.getElementById('status').textContent = 'Live';
            document.getElementById('viewers').textContent = `Viewers: ${streamData.viewer_count}`;
            document.getElementById('avatar').innerHTML = `<img src="${streamData.thumbnail_url.replace('{width}', '320').replace('{height}', '180')}">`;
            // Calculate uptime from stream start time
            const startTime = new Date(streamData.started_at);
            const currentTime = new Date();
            const uptimeSeconds = Math.floor((currentTime - startTime) / 1000);
            const hours = Math.floor(uptimeSeconds / 3600);
            const minutes = Math.floor((uptimeSeconds % 3600) / 60);
            document.getElementById('uptime').textContent = `Uptime: ${hours}h ${minutes}m`;
        } else {
            // User is not live
            document.getElementById('status').textContent = 'Offline';
            document.getElementById('viewers').textContent = '';
            document.getElementById('avatar').innerHTML = '';
            document.getElementById('uptime').textContent = '';
        }
    } catch (error) {
        console.error('Error fetching Twitch data:', error);
    }
}

// Fetch Twitch data on page load
fetchTwitchData();
// Update every 5 minutes (300,000 milliseconds)
setInterval(fetchTwitchData, 300000);
