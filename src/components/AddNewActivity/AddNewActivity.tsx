import { Button, Form, Input, InputNumber, Select, Upload } from 'antd';
import React, { useRef } from 'react';
import { useSelector } from 'react-redux';
import { S } from '../../Global.styles';
import { UploadOutlined } from '@ant-design/icons';
import { Store } from '../../store/store.types';
import { TextAreaRef } from 'antd/lib/input/TextArea';
import { addNewExersice } from '../../firebase';
import { useHistory } from 'react-router';

import { ROUTES } from '../../constants/constants';

const AddNewActivityContainerComponent = () => {
  const { TextArea } = Input;
  const { Option } = Select;
  const history = useHistory();
  const state = useSelector((state: Store) => state);
  const refTitle = useRef<Input | null>(null);
  const refSelect = useRef<Input>(null);
  const refDuration = useRef<HTMLInputElement>(null);
  const refDescription = useRef<TextAreaRef>(null);
  const addActivity = () => {
    if (
      state.currentUser?.email &&
      refTitle?.current?.props.value &&
      refDuration?.current?.value &&
      refDescription?.current?.resizableTextArea?.props.value &&
      refSelect?.current?.props.value
    ) {
      addNewExersice(state.currentUser?.email, {
        title: String(refTitle?.current?.props.value),
        duration: Number(refDuration?.current?.value),
        description: String(
          refDescription?.current?.resizableTextArea?.props.value
        ),
        select: String(refSelect?.current?.props.value)
      });
    }
  };
  return (
    <S.Wrapper>
      <Form
        name="basic"
        labelCol={{
          span: 8
        }}
        wrapperCol={{
          span: 16
        }}
        initialValues={{
          remember: true
        }}
        autoComplete="off"
      >
        <Form.Item
          label="Select variant"
          name="variant"
          rules={[
            {
              required: true,
              message: 'Please select variant!'
            }
          ]}
        >
          <Select
            placeholder="Select an activity"
            ref={refSelect}
            allowClear
            defaultValue="warmUp"
          >
            <Option value="Warm Up">Warm Up</Option>
            <Option value="Stretching">Stretching</Option>
            <Option value="Exercise">Exercise</Option>
          </Select>
        </Form.Item>
        <Form.Item
          label="Title"
          name="title"
          rules={[
            {
              required: true,
              message: 'Please input title of exercise!'
            }
          ]}
        >
          <Input ref={refTitle} />
        </Form.Item>
        <Form.Item
          label="Duration"
          name="duration"
          rules={[
            {
              required: true,
              message: 'Please input duration of exercise!'
            }
          ]}
        >
          <InputNumber ref={refDuration} />
        </Form.Item>

        <Form.Item
          label="Description"
          name="description"
          rules={[
            {
              required: true,
              message: 'Please input description  of exercise!'
            }
          ]}
        >
          <TextArea ref={refDescription} rows={4} />
        </Form.Item>

        <Form.Item label="Add image" name="image">
          <Upload name="logo" action="/upload.do" listType="picture">
            <Button icon={<UploadOutlined />}>Click to upload</Button>
          </Upload>
        </Form.Item>

        <Form.Item label="Add video" name="video">
          <Upload name="logo" action="/upload.do" listType="picture">
            <Button icon={<UploadOutlined />}>Click to upload</Button>
          </Upload>
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16
          }}
        >
          <Button
            type="primary"
            onClick={() => {
              addActivity();
              history.push(ROUTES.OVERVIEW_ROUTE);
            }}
            htmlType="submit"
          >
            Add Activity
          </Button>
        </Form.Item>
      </Form>
    </S.Wrapper>
  );
};

export const AddNewActivityContainer = AddNewActivityContainerComponent;
