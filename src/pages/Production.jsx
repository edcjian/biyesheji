import React, { useState } from 'react';
import { Alert, Button, Card, Input, Modal } from 'antd';
import { row } from '@/pages/style';
import { MyForm } from '@/components/Form/MyForm';
import request from '../../request';
import MyTable from '@/components/Form/MyTable';
import { formData } from '@/pages/Car';
import MyUpLoad from '@/pages/MyUpLoad';
const { Search } = Input;


const Production = () => {
  const [word, setWord] = useState('');
  const [data, setData] = useState();

  function info() {
    Modal.info({
      title: 'This is a notification message',
      content: (
        <div>
 123
        </div>
      ),
      onOk() {},
    });
  }
  return <div>
    <MyUpLoad/>

    {/*<MyTable info={formData} url={'car/search?word='+word} />*/}
    <Card style={{...row,justifyContent:'space-around'}}>
      <Button type='primary' onClick={info}> 定位显示</Button>
      <Button type='primary'> 查询</Button>
      <Button type='primary'> 监控</Button>
      <Button type='primary'> 记录</Button>
    </Card>
  </div>;

};

export default Production;
