import React, { useEffect, useState } from 'react';
import MyTable from '@/components/Form/MyTable';
import VideoPlayer from '@/components/Form/VideoPlayer';
import MyUpLoad from '@/pages/MyUpLoad';
import { useRequest } from '@/.umi/plugin-request/request';
import request from '../../request';
import { Button } from 'antd';
import  {row} from './style.js'
const MyVideo = ({location}) => {
  const  [link, setLink] = useState()
const [loc, setLoc] = useState();


  const formData = [
    { dataIndex: 'id', key: 'id', title: 'ID' },
    { dataIndex: 'name', key: 'name', title: '视频名' },
    { dataIndex: 'ssdl', key: 'ssdl', title: '所属道路',type: 'select' },
    { dataIndex: 'time', key: 'time', title: '视频时间',type:'time' },
    { dataIndex: 'location', key: 'location', title: '位置' },
    {
      title: 'link',
      dataIndex: '',
      key: 'x',
      render: ({ link,id }) =><div style={row}>
        <a onClick={()=>{
          console.log(link)
          setLink(link)
        }}>{link}</a>
        <MyUpLoad id={id}/>
      </div>,
    },
    { dataIndex: 'qy', key: 'qy', title: '区域' },
    { dataIndex: 'beizhu', key: 'beizhu', title: '备注' },
  ];
  return <div>
    <MyTable info={formData} url={'video'}  />
    {link&&<VideoPlayer url={link}/>}
  </div>;
};
export default MyVideo;
