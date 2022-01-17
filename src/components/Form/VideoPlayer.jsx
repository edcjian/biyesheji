import React, { useEffect } from 'react';
import DPlayer from 'dplayer';
import FlvJs from 'flv.js'
const VideoPlayer = ({ url }) => {
  useEffect(() => {
    const dp = new DPlayer({
      container: document.getElementById('video'),
      video: {
        url: url,
        type: 'customFlv',
        customType: {
          customFlv: function (video, player) {
            const flvPlayer = FlvJs .createPlayer({
              type: 'flv',
              url: video.src,
            });
            flvPlayer.attachMediaElement(video);
            flvPlayer.load();
          },
        },
      },
    });
    dp.play();
  }, []);
  return (<div id='video'/>);
};

export default VideoPlayer;
