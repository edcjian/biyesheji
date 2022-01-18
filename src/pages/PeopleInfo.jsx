import React from 'react';
import MyTable from '@/components/Form/MyTable';

const PeopleInfo = () => {
  const formData = [
    { dataIndex: 'id', key: 'id', title: 'ID' },
      { key: 'jg', dataIndex: 'jg', title: '机构' },
    { key: 'name', dataIndex: 'sex', title: '姓名' },
      {key: 'sex' , dataIndex: 'sex' ,title:'机构'},
    { key: 'jh', dataIndex: 'jh', title: '警号' },
    { key: 'jh', dataIndex: 'jh', title: '' },
    { key: 'sfxx', dataIndex: 'sfxx', title: '身份证号' },
    { key: 'tele', dataIndex: 'tele', title: '电话' },
    { key: 'ch', dataIndex: 'ch', title: '手机长号' },
    { key: 'dh', dataIndex: 'dh', title: '短号' },
    { key: 'addr', dataIndex: 'addr', title: '地址' },
    { key: 'zwbm', dataIndex: 'zwbm', title: '职位编号' },
    { key: 'type', dataIndex: 'type', title: '人员类型' },
    { key: 'syx', dataIndex: 'syx', title: '是否有效' },
    { key: 'xgsj', dataIndex: 'xgsj', title: '修改时间' },
    { key: 'xzsj', dataIndex: 'xzsj', title: '新增时间' },
    { key: 'scsj', dataIndex: 'scsj', title: '删除时间' }

  ];
  return <div>
    <MyTable info={formData} url={'people'}/>
  </div>;
};
export default PeopleInfo;

