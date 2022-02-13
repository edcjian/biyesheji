import React from 'react';
import { Button, Form, Input, Select, TimePicker } from 'antd';
import useForm from 'antd/es/form/hooks/useForm';
import moment from 'moment';
import { Option } from 'antd/es/mentions';
import MyUpLoad from '@/pages/MyUpLoad';
import request from '../../../request';


export const MyForm =({formData,finish,isVisible=true,fill=[],edit,url='',event})=>{

  function typeOfComponent(type) {
    switch (type?.name) {
      case 'time':
        return <TimePicker.RangePicker />
      case 'select':
        return  <Select
          showSearch
          placeholder="Select a person"
          optionFilterProp="children"
          filterOption={(input, option) =>
            option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
          }
        >
          {type.extra.map(it=><Option value={it}>{it}</Option>)}
        </Select>
      case 'custom':
        return  type?.extra
      default:
        return <Input/>
    }
  }
    const [form] = useForm();
  const onFill = () => {
  try {
    form.setFieldsValue(fill);
  }
    catch (e) {

    }
  };
/*    {Object.entries(formData).map((it, index) =>
        <Form.Item key={index} name={it[0]} label={it[0]} rules={[{required: true}]}>
            <Input placeholder={it[1]}/>
        </Form.Item>)

    }*/
  // const formData=["name", "work"]
    return    isVisible? <Form height="200px" weight="500px"   form={form} name="control-hooks" onFinish={finish} >
        {formData?.map((it,index)=>
            <Form.Item name={it.key} label={it.title} rules={[{ required: edit }]} >
              {typeOfComponent(it.type)}
            </Form.Item>
        )
        }
        <Form.Item >
            <Button type="primary" htmlType="submit">
                Submit
            </Button>
            <Button htmlType="button" onClick={()=>form.resetFields()}>
                Reset
            </Button>
            <Button type="link" htmlType="button" onClick={onFill} >
                Fill form
            </Button>
        </Form.Item>
{/*        <Button type="link" htmlType="button" onClick={()=>form.setFieldsValue(formData)}>
            Fill form
        </Button>*/}
    </Form>:<div>123</div>
}
