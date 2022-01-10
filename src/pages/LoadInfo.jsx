import React from 'react';
import MyTable from '@/components/Form/MyTable';

 const LoadInfo =()=>{
   const formData = [
     { dataIndex: 'id', key: 'id', title: 'ID' },
     { dataIndex: 'name', key: 'name', title: '道路名' },
     { dataIndex: 'ssdd', key: 'ssdd', title: '所属大队' },
     { dataIndex: 'sszd', key: 'sszd', title: '所属中队' },
     { dataIndex: 'dlsx', key: 'dlsx', title: '道路属性' },
     { dataIndex: 'level', key: 'level', title: '道路分类等级' },
     { dataIndex: 'hjmkd', key: 'hjmkd', title: '横断面宽度' },
     { dataIndex: 'length', key: 'length', title: '长度' },
     { dataIndex: 'hdmjg', key: 'hdmjg', title: '横断面结构' },
     { dataIndex: 'cdfb', key: 'cdfb', title: '车道分布' },
     { dataIndex: 'sjsd', key: 'sjsd', title: '道路设计速度' },
     { dataIndex: 'fx', key: 'fx', title: '道路方向' },
     { dataIndex: 'dlqd', key: 'dlqd', title: '道路起点' },
     { dataIndex: 'dlzd', key: 'dlzd', title: '道路终点' },
     { dataIndex: 'xhdsl', key: 'xhdsl', title: '信号灯路口数量' },
     { dataIndex: 'rxhdsl', key: 'rxhdsl', title: '人行横道' },
     { dataIndex: 'jzwcrksl', key: 'jzwcrksl', title: '建筑物出入口' },
     { dataIndex: 'bzpsl', key: 'bzpsl', title: '标志牌数量' },
     { dataIndex: 'jszsl', key: 'jszsl', title: '警示柱' },
     { dataIndex: 'tqlbsl', key: 'tqlbsl', title: '突起路标' },
     { dataIndex: 'bsdsl', key: 'bsdsl', title: '爆闪数量' },
     { dataIndex: 'aqzsl', key: 'aqzsl', title: '安全锥数量' },
     { dataIndex: 'lsydbzsl', key: 'lsydbzsl', title: '临时移动标志' },
     { dataIndex: 'blr', key: 'blr', title: '信息办理人数量' },
     { dataIndex: 'beizhu', key: 'beizhu', title: '备注' },
     { dataIndex: 'sjsdbz', key: 'sjsdbz', title: '道路设计备注' },
     { dataIndex: 'ccybh', key: 'ccybh', title: '操作员编号' },
   ];
    return <div>
      <MyTable info={formData} url={'test'}/>
    </div>
}
export  default  LoadInfo
