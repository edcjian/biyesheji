import React from 'react';
import MyTable from '@/components/Form/MyTable';

const Video = () => {
  const formData = [
    { dataIndex: 'id', key: 'id', title: 'ID' },
    { dataIndex: 'name', key: 'name', title: '视频名' },
    { dataIndex: 'ssdl', key: 'ssdl', title: '所属道路' },
    { dataIndex: 'time', key: 'time', title: '视频时间' },
    { dataIndex: 'qy', key: 'qy', title: '区域' },
    { dataIndex: 'beizhu', key: 'beizhu', title: '备注' },
  ];
  return <div>
    <MyTable info={formData} url={'video'} />
  </div>;
};
export default Video;
