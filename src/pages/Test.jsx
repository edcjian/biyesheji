import React, { useState } from 'react';
import { MyForm } from '@/components/Form/MyForm';
import request from '../../request';
import { Button, Card, Cascader } from 'antd';
import data from './data.json';
import {Map, Marker, NavigationControl, InfoWindow} from 'react-bmapgl';

import index from 'react-bmapgl/Map/index'

const Test = () => {

  const [isVisible, setIsVisible] = useState(false);
  const [coords, setCoords] = useState();
  async function onChange(value) {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(async pos => {
        const { data } = await request.get(`mapInfo?location=`+value?.[2]);
        setCoords(data?.results?.[0]?.location)
        // setCoords(pos.coords)
        alert(pos.coords.latitude + '-' + pos.coords.longitude)
      }, err => console.log(err));
    setIsVisible(true)
    } else {
      alert('浏览器不支持地理定位。');
    }

  }

  return <div>

    <Cascader options={data} onChange={onChange} placeholder='Please select' />
    {(isVisible&&coords) ?   <Map
      style={{ height: 450 }}
      center={new BMapGL.Point( coords?.lng??0,coords?.lat??0)}
      zoom={12}
      heading={0}
      tilt={40}
      onClick={e => console.log(e)}
      enableScrollWheelZoom
    />:<Card>数据错误</Card>}
  </div>;
};
export default Test;
