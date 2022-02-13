import React, { useState } from 'react';
import MyTable from '@/components/Form/MyTable';
import Modal from 'antd/es/modal/Modal';
import Test from '@/pages/Test';
 const Camera =()=>{
   const [visible, setVisible] = useState(false);
   const [data, setData] = useState();
   const formData = [
     { dataIndex: 'id', key: 'id', title: 'ID' },
     { dataIndex: 'name', key: 'name', title: '摄像头号' },
     { dataIndex: 'sn', key: 'sn', title: '摄像头sn' },
     { dataIndex: 'type', key: 'type', title: '类型',type:{name:'select',extra:['nike','adidas']} },
     { dataIndex: 'monitorName', key: 'monitorName', title: '监控区名称' },
     { dataIndex: 'location', key: 'location', title: '位置', render: (a) => <a onClick={() => {
         setData(a);
         setVisible(true);
       }}>{a}</a>},
     { dataIndex: 'record', key: 'record', title: '回放' },
     { dataIndex: 'resp', key: 'resp', title: '监控区负责人' },
     { dataIndex: 'video', key: 'video', title: '回放' },
     { dataIndex: 'link', key: 'link', title: '链接' },
     { dataIndex: 'use', key: 'use', title: '使用日期' ,type:{name:'time'}},
   ];
    return  <div>
      <MyTable info={formData} url={'camera'} />
      <Modal visible={visible} onCancel={()=>setVisible(false)}>
        {data&&<Test a={data}/>}
      </Modal>
    </div>;
}
export default Camera
