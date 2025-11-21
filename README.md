# YouTube Playlist Item Fetcher

This project contains a simple Node.js script that retrieves every video from a YouTube playlist using the YouTube Data API v3. It fetches items in batches of fifty, logs each video's title, ID, and the date it was added to the playlist, and automatically handles pagination until the entire playlist has been processed.

## How to Install and Run

To start, create a `.env` file in the root of the project and add your YouTube API key and the playlist ID you want to fetch:

```shell
API_KEY=your_api_key_here
PLAYLIST_ID=your_playlist_id_here
```

Next, open the project folder in your terminal and install the dependencies:

```shell
npm install
```

When the installation is done, compile the TypeScript files:

```shell
npx tsc
```

This generates the JavaScript output in the `dist` directory. Finally, run the script:

```shell
node --env-file=.env dist/index.js
```

The script will print each video's title, its ID, and the date it was added to the playlist, automatically loading more results until the playlist is fully listed.
