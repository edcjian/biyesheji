import React from 'react'
import {message} from 'antd'


 function Identify() {
  function handlePhoto() {
    if (navigator.mediaDevices.getUserMedia || navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia) {
      console.log('调用了')
      getUserMedia({
        video: {
          width: 480,
          height: 320
        }
      }, success, error);
    } else {
      alert('不支持访问用户媒体');
    }
    if (!navigator.mediaDevices) {
      message.warning("不支持访问用户媒体")
      return
    }
    function error(error) {
      console.log(`访问用户媒体设备失败${error.name}, ${error.message}`);
    }
  }
  function getUserMedia(constraints, success, error) {
    if (navigator.mediaDevices.getUserMedia) {
      //最新的标准API
      navigator.mediaDevices.getUserMedia(constraints).then(success).catch(error);
    } else if (navigator.webkitGetUserMedia) {
      //webkit核心浏览器
      navigator.webkitGetUserMedia(constraints, success, error)
    } else if (navigator.mozGetUserMedia) {
      //firfox浏览器
      navigator.mozGetUserMedia(constraints, success, error);
    } else if (navigator.getUserMedia) {
      //旧版API
      navigator.getUserMedia(constraints, success, error);
    }
  }
  function success(stream) {
    let video = document.getElementById('video');

    //兼容webkit核心浏览器
    let CompatibleURL = window.URL || window.webkitURL;
    //将视频流设置为video元素的源
    console.log(stream);

    // video.src = CompatibleURL.createObjectURL(stream);
    video.srcObject = stream;
    video.play();
  }

  return (
    <div className='identify'>
      <video id='video' ></video>
      <button onClick={() => handlePhoto()} >调用摄像头</button>
    </div>
  )
}
export default Identify

