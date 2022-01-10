import React from 'react';
import MyTable from '@/components/Form/MyTable';

const Car = () => {
  const formData = [
    { dataIndex: 'id', key: 'id', title: 'ID' },
    { dataIndex: 'name', key: 'name', title: '车牌号' },
    { dataIndex: 'num', key: 'num', title: '车主名' },
    { dataIndex: 'kind', key: 'kind', title: '类型' },
    { dataIndex: 'bdate', key: 'bdate', title: '产地' },
    { dataIndex: 'udate', key: 'udate', title: '监控区名称' },
    { dataIndex: 'resp', key: 'resp', title: '监控区负责人' },
    { dataIndex: 'use', key: 'use', title: '使用日期' },
    { dataIndex: 'remarks', key: 'remarks', title: '备注信息' }
  ];
  return <div>
    <MyTable info={formData} url={'car'} />
  </div>;
};
export default Car;
