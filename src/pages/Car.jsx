import React, { useState } from 'react';
import MyTable from '@/components/Form/MyTable';
import Test from '@/pages/Test';
import { row } from '@/pages/style';
import MyUpLoad from '@/pages/MyUpLoad';
import Modal from 'antd/es/modal/Modal';


const Car = () => {
  const [visible, setVisible] = useState(false);
   const formData = [
    { dataIndex: 'id', key: 'id', title: 'ID' },
    { dataIndex: 'name', key: 'name', title: '车主名' },
    { dataIndex: 'num', key: 'num', title: '车牌号' },
    { dataIndex: 'kind', key: 'kind', title: '类型',type:{name:'select',extra:['nike','adidas']} },
     { dataIndex: 'addr', key: 'addr', title: '产地' },
/*     { dataIndex: 'bdate', key: 'bdate', title: '产地' },
    { dataIndex: 'udate', key: 'udate', title: '监控区名称' },*/
    { dataIndex: 'record', key: 'record', title: '回放' },
    { dataIndex: 'resp', key: 'resp', title: '监控区负责人' },
    { dataIndex: 'video', key: 'video', title: 'video' },
    { dataIndex: 'use', key: 'use', title: '使用日期' ,type:{name:'time'}},
    { dataIndex: 'remarks', key: 'remarks', title: '备注信息' },
    { dataIndex: '', key: 'location', title: 'location' ,
      render: ({ location }) =><a onClick={()=> {
        setVisible(true)
      }}>{location}</a>}
  ];
  return <div>
    <MyTable info={formData} url={'car'} />
    <Modal visible={visible} onCancel={()=>setVisible(false)}>
      {location&&<Test location={location}/>}
    </Modal>
  </div>;
};
export default Car;
