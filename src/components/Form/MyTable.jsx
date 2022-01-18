import React, { useState } from 'react';
import { Button, Card, Form, Modal, Table } from 'antd';
import { useRequest } from '@/.umi/plugin-request/request';
import request from '../../../request';
import useEffect from 'rc-util/es/hooks/useEffect';
import { MyForm } from '@/components/Form/MyForm';
import Search from 'antd/es/input/Search';

const MyTable = ({ info, url = null ,insert=null}) => {
  const [flag, setFlag] = useState(false);
  const [action, setAction] = useState('edit');
  const [isVisible, setIsVisible] = useState(false);
  const [dataSource, setDataSource] = useState();

  const actions = [ {
    title: 'Action',
    dataIndex: '',
    key: 'x',
    render: (e) => <a onClick={() => {
      setAction('edit');
      setCurrent(e);
      setIsVisible(true);
    }}>Edit</a>,
  }];
  const [word, setWord] = useState('');
  const [current, setCurrent] = useState();
  const handleOk = () => {
    setFlag(true);
    setIsVisible(false);
  };
  const del = async (id) => {
    await request.delete(`${url}/del?id=${id}`);
  };
  const add = async (e) => {
    console.log([action, e]);
    const res = await request.post(url + '/' + action, e);
    console.log(res);
  };
  const handleCancel = () => {
    setFlag(true);
    setIsVisible(false);
  };

  async function onSearch(word) {
    const res = await request.get('car/search?word=' + word);
    console.log(res?.data?.data);
    setDataSource([res?.data?.data]);
  }


  const column = [...info, ...actions];
  let { loading, data } = useRequest(() => request.get(url + '/list'));
  console.log(data);
  useEffect(() => setDataSource(data), [data]);
  return loading ? <Card>
    <div>loading</div>
  </Card> : <div>
    <Button onClick={() => {
      setAction('add');
      setIsVisible(true);
    }}>add</Button>
    <Search

      allowClear
      enterButton='Search'
      size='large'
      placeholder='Basic usage' onSearch={onSearch} />
    <Table dataSource={dataSource ?? []} columns={column} />
    <Modal visible={isVisible} onOk={handleOk} onCancel={handleCancel}>
      <MyForm finish={add} formData={info} fill={current} />
    </Modal>
  </div>;

};
export default MyTable;
