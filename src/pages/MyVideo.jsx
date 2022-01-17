import React, { useEffect, useState } from 'react';
import MyTable from '@/components/Form/MyTable';
import VideoPlayer from '@/components/Form/VideoPlayer';
import MyUpLoad from '@/pages/MyUpLoad';
import { useRequest } from '@/.umi/plugin-request/request';
import request from '../../request';
import { Button } from 'antd';

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
      render: ({ link }) => <a onClick={()=>{
        console.log(link)
        setLink(link)
      }}>{link}</a>,
    },
    { dataIndex: 'qy', key: 'qy', title: '区域' },
    { dataIndex: 'beizhu', key: 'beizhu', title: '备注' },
  ];
  return <div>
  <Button onClick={async () => {
    console.log(location.state[0])
    const res = await request.get(`load/place?query=银行&location=${location.state[1]}, ${location.state[0]}`);
    console.log(res)
  }
  }>123</Button>
    <MyTable info={formData} url={'video'}  />
    {link&&<VideoPlayer url={link}/>}
  </div>;
};
export default MyVideo;
