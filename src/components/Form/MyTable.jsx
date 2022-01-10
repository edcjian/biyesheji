import React, { useState } from 'react';
import { Button, Card, Modal, Table } from 'antd';
import { useRequest } from '@/.umi/plugin-request/request';
import request from '../../../request';
import useEffect from 'rc-util/es/hooks/useEffect';
import { MyForm } from '@/components/Form/MyForm';

const MyTable = ({ info, url }) => {
  const [flag, setFlag] = useState(false);
  const [action, setAction] = useState('edit');
  const [isVisible, setIsVisible] = useState(false);
  const [dataSource, setDataSource] = useState();
  const actions = [{
    title: 'Action',
    dataIndex: '',
    key: 'x',
    render: ({ id }) => <a onClick={del(id)}>Del</a>,
  }, {
    title: 'Action',
    dataIndex: '',
    key: 'x',
    render: (e) => <a onClick={() => {
      setIsVisible(true);

    }}>Edit</a>,
  }];
  const [current, setCurrent] = useState();
  const handleOk = () => {
    setFlag(true);
    setIsVisible(false);
  };
  const del = async (id) => {
     request.delete(`del?id=${id}`);
  };
  const add = (a,e) => {
    request.post(a+url, e);
  };
  const handleCancel = () => {
    setFlag(true);
    setIsVisible(false);
  };
  const column = [...info, ...actions];
  let { loading, data } = useRequest(() => request.get(url));
  return loading ? <Card>
    <div>loading</div>
  </Card> : <div>
    <Button onClick={ () => {
      setAction('add')
      setIsVisible(true);
    }}>add</Button>
    <Table dataSource={data ?? []} columns={column} />
    <Modal visible={isVisible} onOk={handleOk} onCancel={handleCancel}>
      <MyForm finish={(e)=>add(action,e)} formData={info} fill={current} />
    </Modal>
  </div>;

};
export default MyTable;
