import React from 'react';
import { Upload, message, Button } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import request from '../../request';
import axios from 'axios';

const MyUpLoad = ({id}) => {
  async function fileUpload(file) {
    console.log(file)
    // let files = f["assets"][0]
    let data = new FormData();
    data.append('file', file);
    const config = {
      headers: {
        'content-type': 'multipart/form-data'
      }
    }
    let res = await axios.post(
      'http://localhost:8080/test/upload', data, config)
    console.log([res.data.data,id])
    await  request.post('video/update',{link:res.data.data,id:id})
    // let a = {...e, cover: res.data.data,upId:state.id}
/*    let r = await request.post('/info', a);
    console.log(r)*/

  }
  const props = {
    name: 'file',
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    headers: {
      authorization: 'authorization-text',
    },
    async onChange(info) {
      if (info.file.status !== 'uploading') {
        console.log(info.fileList[0].originFileObj);
        await fileUpload(info.fileList[0].originFileObj)
      }
      if (info.file.status === 'done') {
        message.success(`${info.file.name} file uploaded successfully`);
      } else if (info.file.status === 'error') {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
  };

  return <div>
    <Upload {...props}>
      <Button icon={<UploadOutlined />}>Click to Upload</Button>
    </Upload>,
  </div>;

};
export default MyUpLoad;
