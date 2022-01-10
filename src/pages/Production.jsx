import React, { useState } from 'react';
import { Alert, Button, Card, Input, Modal } from 'antd';
import { row } from '@/pages/style';
import { MyForm } from '@/components/Form/MyForm';
const { Search } = Input;


const Production = () => {
  const [data, setData] = useState();
  const  onSearch=async (data) => {
    const res = await request.get('search');
    console.log(data)

  }
  function info() {
    Modal.info({
      title: 'This is a notification message',
      content: (
        <div>
          <Search
            allowClear
            enterButton="Search"
            size="large"
            placeholder="Basic usage" onChange={setData}  onSearch={onSearch}/>
        </div>
      ),
      onOk() {},
    });
  }
  return <div>
    <Card style={{...row,justifyContent:'space-around'}}>
      <Button type='primary' onClick={info}> 定位显示</Button>
      <Button type='primary'> 查询</Button>
      <Button type='primary'> 监控</Button>
      <Button type='primary'> 记录</Button>
    </Card>
  </div>;

};

export default Production;
