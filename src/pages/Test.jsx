import React, { useEffect, useState } from 'react';
import { MyForm } from '@/components/Form/MyForm';
import request from '../../request';
import { Alert, Button, Card, Cascader } from 'antd';
import data from './data.json';
import {Map, Marker, NavigationControl, InfoWindow} from 'react-bmapgl';

import index from 'react-bmapgl/Map/index'
import { useHistory, useLocation } from 'umi';
import { useRequest } from '@/.umi/plugin-request/request';
import fs from 'fs';
import Search from 'antd/es/input/Search';

const Test = ({location}) => {
  console.log(location)
const loc = useHistory()
  const [isVisible, setIsVisible] = useState(false);
  const [coords, setCoords] = useState();
  const [datas, setDatas] = useState();
  async function onChange(value) {
    const { data } = await request.get(`mapInfo?location=`+value?.[2]);
    setCoords(data?.results?.[0]?.location)

  /*  if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(async pos => {

        // setCoords(pos.coords)
        alert(pos.coords.latitude + '-' + pos.coords.longitude)
      }, err => console.log(err));*/
    setIsVisible(true)


  }
  function update(a) {
    for (let i = 0; i < a.length; i++) {
      a[i].value= a[i].name
      a[i].label = a[i].name
      if (!a[i].districts) {
        continue
      }
      a[i].children=a[i].districts
      update(a[i].districts);
    }
  }

  async function onSearch(word) {
    const res = await request.get('load/detail?word=' + word);
    const d = res?.data?.districts;
    console.log(d)
    update(d)
    console.log(d)
    setDatas(d)
  }
  return <div>
    <Search

      allowClear
      enterButton='Search'
      size='large'
      placeholder='Basic usage' onSearch={onSearch} />
   <Cascader options={datas??[]} onChange={onChange} placeholder='Please select' />
    {(isVisible&&coords||location) ?   <Map
      style={{ height: 450 }}
      center={new BMapGL.Point( coords?.lng??location.lng??0,coords?.lat??location.lat??0)}
      zoom={12}
      heading={0}
      tilt={40}
      onClick={e => {
        console.log(e)
        loc.push('list',[e.latlng])
      }}
      enableScrollWheelZoom
    />:<Card>数据错误</Card>}
  </div>;
};
export default Test;
