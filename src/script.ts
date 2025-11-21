const axios = require("axios");

const API_KEY = process.env.API_KEY;
const PLAYLIST_ID = process.env.PLAYLIST_ID;

// Function to get all playlist items
async function getPlaylistItems(pageToken = "") {
    try {
        const response = await axios.get(
            "https://www.googleapis.com/youtube/v3/playlistItems",
            {
                params: {
                    part: "snippet",
                    playlistId: PLAYLIST_ID,
                    maxResults: 50,
                    pageToken: pageToken,
                    key: API_KEY,
                },
            },
        );

        const items = response.data.items;

        items.forEach(
            (item: {
                snippet: {
                    title: string;
                    resourceId: { videoId: string };
                    publishedAt: Date;
                };
            }) => {
                const title = item.snippet.title;
                const videoId = item.snippet.resourceId.videoId;
                const addedAt = item.snippet.publishedAt;
                console.log(
                    `${title} [id: ${videoId}] - added to playlist: ${addedAt}`,
                );
            },
        );

        // Pagination: if there's a next page, call recursively
        if (response.data.nextPageToken) {
            await getPlaylistItems(response.data.nextPageToken);
        }
    } catch (error: any) {
        console.error(
            "Error fetching playlist items:",
            error.response?.data || error.message,
        );
    }
}

// Run the function
getPlaylistItems();
