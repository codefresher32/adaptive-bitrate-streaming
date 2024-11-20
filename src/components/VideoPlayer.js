import React, { useEffect, useRef } from 'react';
import shaka from 'shaka-player';

const VideoPlayer =({ sourceUrl })=> {
  const videoRef = useRef(null);

  useEffect(() => {
    shaka.polyfill.installAll();
    if (shaka.Player.isBrowserSupported()) {
      const player = new shaka.Player(videoRef.current);
      // Custom request filter to allow cross-site requests
      // player.getNetworkingEngine().registerRequestFilter(function(type, request, context) {
        
      //   if (type === 0 || type === 1) {
      //     request.allowCrossSiteCredentials = true;
      //   }
      // });

      player.load(sourceUrl)
        .then(() => {
          console.log('The video has been loaded.');
        })
        .catch((error) => {
          console.error('Error loading the video:', error);
        });
    } else {
      console.error('Browser not supported.');
    }
  }, [sourceUrl]);

  return (
    <div>
      <video ref={videoRef} width="640" height="360" controls autoPlay />
    </div>
  );
}

export default VideoPlayer;
