import React, { useState } from 'react';
import request from '../../request';
import { Button, Card, Cascader } from 'antd';
import { CustomOverlay, InfoWindow, Map, Marker, NavigationControl } from 'react-bmapgl';
import { useHistory } from 'umi';
import Search from 'antd/es/input/Search';
import r from './wallhaven-y89rqd.png';
import BMapGL from 'mapbox-gl';

const Test = ({ location, a }) => {
  const split = a && a.split(',');
  console.log(location);
  const loc = useHistory();
  const [isVisible, setIsVisible] = useState(false);
  const [coords, setCoords] = useState();
  const [datas, setDatas] = useState();

  async function onChange(value) {
    const { data } = await request.get(`mapInfo?location=` + value?.[2]);
    setCoords(data?.results?.[0]?.location);

    /*  if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(async pos => {

          // setCoords(pos.coords)
          alert(pos.coords.latitude + '-' + pos.coords.longitude)
        }, err => console.log(err));*/
    setIsVisible(true);


  }

  function update(a) {
    for (let i = 0; i < a.length; i++) {
      a[i].value = a[i].name;
      a[i].label = a[i].name;
      if (!a[i].districts) {
        continue;
      }
      a[i].children = a[i].districts;
      update(a[i].districts);
    }
  }

  async function onSearch(word) {
    const res = await request.get('load/detail?word=' + word);
    const d = res?.data?.districts;
    console.log(d);
    update(d);
    console.log(d);
    setDatas(d);
  }

  const x = coords?.lng ?? location?.lng ?? coords?.longitude ?? split
    ?.[0] ?? 0;
  const y = coords?.lat ?? location?.lat ?? coords?.latitude ?? split?.[1] ?? 0;

  return <div>
    <Button onClick={() => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(async pos => {
          alert(pos.coords.latitude + '-' + pos.coords.longitude);
          setCoords(pos.coords);
        }, err => console.log(err));
      }
    }}>获取我的位置</Button>
    <Search

      allowClear
      enterButton='Search'
      size='large'
      placeholder='Basic usage' onSearch={onSearch} />
    <Cascader options={datas ?? []} onChange={onChange} placeholder='Please select' />
    {(isVisible && coords || location || split) ? <Map center={{ lng: split?.[0]??120, lat: split?.[1]??30 }}
                                                       zoom={12}
                                                       heading={0}
                                                       tilt={40}
                                                       onClick={e => {
                                                         console.log(e);
                                                         loc.push('list', [e.latlng]);
                                                       }}
                                                       enableScrollWheelZoom>
      <Marker position={{ lng: split?.[0]??120, lat: split?.[1]??30 }} />
    </Map> : <Card>数据错误</Card>}
  </div>;
};
export default Test;
