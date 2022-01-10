import React from 'react';
import { Button, Form, Input } from 'antd';
import useForm from 'antd/es/form/hooks/useForm';


export const MyForm =({formData,finish=()=>{},isVisible=true,fill=[]})=>{
  console.log(finish)
    const [form] = useForm();
  const onFill = () => {
    form.setFieldsValue(fill);
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
                <Input />
            </Form.Item>)

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
