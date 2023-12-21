import React from "react";
import { Replay } from 'vimond-replay';
import 'vimond-replay/index.css';
import CompoundVideoStreamer from 'vimond-replay/video-streamer/compound';

const replayOptions = {
  videoStreamer: {
    manualBitrateSwitchStrategy: 'instant-switch'
  },
  controls: {
    qualitySelectionStrategy: 'fix-bitrate'
  },
};

const App = () => {

  return (
    <Replay
      source={{
        streamUrl: 'https://bitdash-a.akamaihd.net/content/sintel/hls/playlist.m3u8',
        contentType: 'application/x-mpegurl',
      }}
      options={replayOptions}
    >
      <CompoundVideoStreamer />
    </Replay>
  );
};

export default App;
