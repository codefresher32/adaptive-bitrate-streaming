import React from "react";
import 'vimond-replay/index.css';
import VideoPlayer from "./components/VideoPlayer";

const App = () => {
  const sourceUrl = 'https://bitdash-a.akamaihd.net/content/sintel/hls/playlist.m3u8';

  return (
    <VideoPlayer
      sourceUrl={sourceUrl}
    />
  );
};

export default App;
