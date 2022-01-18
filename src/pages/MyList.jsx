import React, { useState } from 'react';
import { Button, List } from 'antd';
import request from '../../request';
import Search from 'antd/es/input/Search';
 const MyList =({location})=>{
   const [data, setData] = useState([]);
    return <div>
      <Search

        allowClear
        enterButton='Search'
        size='large'
        placeholder='Basic usage' onSearch={async (e) => {
        console.log(location.state[0].lng)
        const res = await request.get(`load/place?query=${e}&lng=${location.state[0].lng}&lat=${location.state[0].lat}`);
        console.log(res)
        const results = res.data.results;
        console.log(results)
        setData(results)
        console.log(res)
      }
      } />
      <List
        itemLayout="horizontal"
        dataSource={data}
        renderItem={item => (
          <List.Item>
            <List.Item.Meta
              title={<a href="https://ant.design">{item.name}</a>}
              description={item.address}
            />
          </List.Item>
        )}
      />
    </div>
}
export default MyList
