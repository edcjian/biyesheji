import React, { useState } from 'react';
import { Button, List } from 'antd';
import request from '../../request';
import Search from 'antd/es/input/Search';
import Mock from 'mockjs';
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
   /*     const data = Mock.mock({
          // 20条数据
          'data|20': [{
            'ssjd|1': a,
          }],
        });*/
        console.log(data)
        for (let i = 0; i < res.data.results.length; i++) {
          await request.post('road/add', {name:res.data.results[i]?.name,map:res.data.results[i]?.location?.lat+','+res.data.results[i]?.location?.lng})
          setTimeout(()=>{},500)
        }
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
