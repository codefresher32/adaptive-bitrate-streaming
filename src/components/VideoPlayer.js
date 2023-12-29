import React from "react";
import { Replay } from 'vimond-replay';
import CompoundVideoStreamer from 'vimond-replay/video-streamer/compound';

const replayOptions = {
  videoStreamer: {
    manualBitrateSwitchStrategy: 'instant-switch'
  },
  controls: {
    qualitySelectionStrategy: 'fix-bitrate'
  },
};

const getSourceFromUrl = (sourceUrl) => {
  if (sourceUrl.includes('.m3u8')) {
    return {
      streamUrl: sourceUrl,
      contentType: 'application/x-mpegurl',
    };
  }
  if (sourceUrl.includes('.mpd')) {
    return {
      streamUrl: sourceUrl,
      contentType: 'application/dash+xml',
    }
  }
  return sourceUrl;
};

const VideoPlayer = ({ sourceUrl }) => {
  return (
    <Replay
      source={getSourceFromUrl(sourceUrl)}
      options={replayOptions}
    >
      <CompoundVideoStreamer />
    </Replay>
  );
};

export default VideoPlayer;
