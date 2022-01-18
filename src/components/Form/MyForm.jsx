import React from 'react';
import { Button, Form, Input, Select, TimePicker } from 'antd';
import useForm from 'antd/es/form/hooks/useForm';
import moment from 'moment';
import { Option } from 'antd/es/mentions';


export const MyForm =({formData,finish=()=>{},isVisible=true,fill=[]},children)=>{
  function typeOfComponent(type) {
    switch (type) {
      case 'time':
        return <TimePicker defaultOpenValue={moment('00:00:00', 'HH:mm:ss')} />
      case 'select':
        return  <Select
          showSearch
          placeholder="Select a person"
          optionFilterProp="children"
          filterOption={(input, option) =>
            option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
          }
        >
          <Option value="jack">Jack</Option>
          <Option value="lucy">Lucy</Option>
          <Option value="tom">Tom</Option>
        </Select>
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
            <Form.Item name={it.key} label={it.title} rules={[{ required: true }]} >
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
