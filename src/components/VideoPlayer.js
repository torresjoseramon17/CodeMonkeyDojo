// videoPlayer will pull our tutorial video, and display any video from
// the videoList componenet if user clicks on one. If user clicks the
// tutorial video title it should show our tutorial video again
// the default video should be stored in the tutorial table

import React from 'react';
import YouTube from 'react-youtube';

class Example extends React.Component {
  render() {
    const opts = {
      height: '390',
      width: '640',
      playerVars: { // https://developers.google.com/youtube/player_parameters
        autoplay: 2
      }
    };

    return (
      <YouTube
        videoId="IBB-m1lfaqY"
        opts={opts}
        onReady={this._onReady}
      />
    );
  }

  _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }
}

export default Example;
