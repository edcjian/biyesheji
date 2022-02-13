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
  const [word, setWord] = useState('');
  const [current, setCurrent] = useState();
  const [types, setTypes] = useState(true);
  const [event, setEvent] = useState('');
  const actions = [ {
    title: 'Action',
    dataIndex: '',
    key: 'x',
    render: (e) => <a onClick={() => {
      setEvent('edits');
      setCurrent(e);
      setIsVisible(true);
    }}>Edit</a>,
  }];
  const handleOk = () => {
    setFlag(true);
    setIsVisible(false);
  };
  const del = async (id) => {
    await request.delete(`${url}/del?id=${id}`);
  };

  async function onSearch(word) {
    const res = await request.get('car/search?word=' + word);
    console.log(res?.data?.data);
    setDataSource([res?.data?.data]);
  }
  const handleCancel = () => {
    setFlag(true);
    setIsVisible(false);
  };
  const add = async (e) => {
    const res = await request.post(url + '/' + 'add', e);
    console.log(res);


  };
  const edits = async (e) => {
    const res = await request.post(url + '/' + 'edit', e);
    console.log(res);

  };
  const search = async (e) => {
    console.log([action, e]);
    const res = await request.post(url + '/' + 'search', e);
    console.log(res);

  };
const column = [...info, ...actions];
  let { loading, data } = useRequest(() => request.get(url + '/list'));
  console.log(data);
  useEffect(() => setDataSource(data), [data]);
  return loading ? <Card>
    <div>loading</div>
  </Card> : <div>
    <Button onClick={() => {
      setEvent('add')
      setIsVisible(true);
    }}>add</Button>
    <Search
      allowClear
      enterButton='Search'
      size='large'
      placeholder='Basic usage' onSearch={onSearch} />
    <Button onClick={()=>{
      setEvent('search')
      setIsVisible(true)
      setTypes(false)
    }}>search</Button>
    <Table dataSource={dataSource ?? []} columns={column} />
    <Modal visible={isVisible} onOk={handleOk} onCancel={handleCancel}>
      <MyForm finish={add} formData={info} fill={current} type={types} url={url} event={setDataSource}/>
    </Modal>
  </div>;

};
export default MyTable;
