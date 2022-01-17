import { ReactFlvPlayer } from 'react-flv-player';
import React from 'react';

const Flv = () => {
  return <div>
    {
      <ReactFlvPlayer
        url = "http://localhost:8080/video/477147441_nb2-1-64.flv"
        // url={this.state.src}
        heigh='100%'
        width='100%'
        hasAudio={false}
        enableStashBuffer={false}
        isMuted={false}
      />
    }
  </div>;
};
export default Flv;
