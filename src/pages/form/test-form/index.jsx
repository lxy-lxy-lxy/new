import {
  Button,
  Card,
  DatePicker,
  Form,
  Icon,
  Input,
  InputNumber,
  Radio,
  Select,
  Tooltip,
} from 'antd';
import { FormattedMessage, formatMessage } from 'umi-plugin-react/locale';
import React, { Component } from 'react';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import { connect } from 'dva';
import styles from './style.less';

const FormItem = Form.Item;
const { Option } = Select;
const { RangePicker } = DatePicker;
const { TextArea } = Input;

class BasicForm extends Component {
  handleSubmit = e => {
    const { dispatch, form } = this.props;
    e.preventDefault();
    form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        dispatch({
          type: 'formTestForm/submitRegularForm',
          payload: values,
        });
      }
    });
  };

  render() {
    const { submitting } = this.props;
    const {
      form: { getFieldDecorator, getFieldValue },
    } = this.props;
    const formItemLayout = {
      labelCol: {
        xs: {
          span: 24,
        },
        sm: {
          span: 7,
        },
      },
      wrapperCol: {
        xs: {
          span: 24,
        },
        sm: {
          span: 12,
        },
        md: {
          span: 10,
        },
      },
    };
    const submitFormLayout = {
      wrapperCol: {
        xs: {
          span: 24,
          offset: 0,
        },
        sm: {
          span: 10,
          offset: 7,
        },
      },
    };
    return (
      <PageHeaderWrapper content={<FormattedMessage id="form-test-form.basic.description" />}>
        <Card bordered={false}>
          <Form
            onSubmit={this.handleSubmit}
            hideRequiredMark
            style={{
              marginTop: 8,
            }}
          >
            <FormItem
              {...formItemLayout}
              label={<FormattedMessage id="form-test-form.title.label" />}
            >
              {getFieldDecorator('title', {
                rules: [
                  {
                    required: true,
                    message: formatMessage({
                      id: 'form-test-form.title.required',
                    }),
                  },
                ],
              })(
                <Input
                  placeholder={formatMessage({
                    id: 'form-test-form.title.placeholder',
                  })}
                />,
              )}
            </FormItem>
            <FormItem
              {...formItemLayout}
              label={<FormattedMessage id="form-test-form.date.label" />}
            >
              {getFieldDecorator('date', {
                rules: [
                  {
                    required: true,
                    message: formatMessage({
                      id: 'form-test-form.date.required',
                    }),
                  },
                ],
              })(
                <RangePicker
                  style={{
                    width: '100%',
                  }}
                  placeholder={[
                    formatMessage({
                      id: 'form-test-form.placeholder.start',
                    }),
                    formatMessage({
                      id: 'form-test-form.placeholder.end',
                    }),
                  ]}
                />,
              )}
            </FormItem>
            <FormItem
              {...formItemLayout}
              label={<FormattedMessage id="form-test-form.goal.label" />}
            >
              {getFieldDecorator('goal', {
                rules: [
                  {
                    required: true,
                    message: formatMessage({
                      id: 'form-test-form.goal.required',
                    }),
                  },
                ],
              })(
                <TextArea
                  style={{
                    minHeight: 32,
                  }}
                  placeholder={formatMessage({
                    id: 'form-test-form.goal.placeholder',
                  })}
                  rows={4}
                />,
              )}
            </FormItem>
            <FormItem
              {...formItemLayout}
              label={<FormattedMessage id="form-test-form.standard.label" />}
            >
              {getFieldDecorator('standard', {
                rules: [
                  {
                    required: true,
                    message: formatMessage({
                      id: 'form-test-form.standard.required',
                    }),
                  },
                ],
              })(
                <TextArea
                  style={{
                    minHeight: 32,
                  }}
                  placeholder={formatMessage({
                    id: 'form-test-form.standard.placeholder',
                  })}
                  rows={4}
                />,
              )}
            </FormItem>
            <FormItem
              {...formItemLayout}
              label={
                <span>
                  <FormattedMessage id="form-test-form.client.label" />
                  <em className={styles.optional}>
                    <FormattedMessage id="form-test-form.form.optional" />
                    <Tooltip title={<FormattedMessage id="form-test-form.label.tooltip" />}>
                      <Icon
                        type="info-circle-o"
                        style={{
                          marginRight: 4,
                        }}
                      />
                    </Tooltip>
                  </em>
                </span>
              }
            >
              {getFieldDecorator('client')(
                <Input
                  placeholder={formatMessage({
                    id: 'form-test-form.client.placeholder',
                  })}
                />,
              )}
            </FormItem>
            <FormItem
              {...formItemLayout}
              label={
                <span>
                  <FormattedMessage id="form-test-form.invites.label" />
                  <em className={styles.optional}>
                    <FormattedMessage id="form-test-form.form.optional" />
                  </em>
                </span>
              }
            >
              {getFieldDecorator('invites')(
                <Input
                  placeholder={formatMessage({
                    id: 'form-test-form.invites.placeholder',
                  })}
                />,
              )}
            </FormItem>
            <FormItem
              {...formItemLayout}
              label={
                <span>
                  <FormattedMessage id="form-test-form.weight.label" />
                  <em className={styles.optional}>
                    <FormattedMessage id="form-test-form.form.optional" />
                  </em>
                </span>
              }
            >
              {getFieldDecorator('weight')(
                <InputNumber
                  placeholder={formatMessage({
                    id: 'form-test-form.weight.placeholder',
                  })}
                  min={0}
                  max={100}
                />,
              )}
              <span className="ant-form-text">%</span>
            </FormItem>
            <FormItem
              {...formItemLayout}
              label={<FormattedMessage id="form-test-form.public.label" />}
              help={<FormattedMessage id="form-test-form.label.help" />}
            >
              <div>
                {getFieldDecorator('public', {
                  initialValue: '1',
                })(
                  <Radio.Group>
                    <Radio value="1">
                      <FormattedMessage id="form-test-form.radio.public" />
                    </Radio>
                    <Radio value="2">
                      <FormattedMessage id="form-test-form.radio.partially-public" />
                    </Radio>
                    <Radio value="3">
                      <FormattedMessage id="form-test-form.radio.private" />
                    </Radio>
                  </Radio.Group>,
                )}
                <FormItem
                  style={{
                    marginBottom: 0,
                  }}
                >
                  {getFieldDecorator('publicUsers')(
                    <Select
                      mode="multiple"
                      placeholder={formatMessage({
                        id: 'form-test-form.publicUsers.placeholder',
                      })}
                      style={{
                        margin: '8px 0',
                        display: getFieldValue('public') === '2' ? 'block' : 'none',
                      }}
                    >
                      <Option value="1">
                        <FormattedMessage id="form-test-form.option.A" />
                      </Option>
                      <Option value="2">
                        <FormattedMessage id="form-test-form.option.B" />
                      </Option>
                      <Option value="3">
                        <FormattedMessage id="form-test-form.option.C" />
                      </Option>
                    </Select>,
                  )}
                </FormItem>
              </div>
            </FormItem>
            <FormItem
              {...submitFormLayout}
              style={{
                marginTop: 32,
              }}
            >
              <Button type="primary" htmlType="submit" loading={submitting}>
                <FormattedMessage id="form-test-form.form.submit" />
              </Button>
              <Button
                style={{
                  marginLeft: 8,
                }}
              >
                <FormattedMessage id="form-test-form.form.save" />
              </Button>
            </FormItem>
          </Form>
        </Card>
      </PageHeaderWrapper>
    );
  }
}

export default Form.create()(
  connect(({ loading }) => ({
    submitting: loading.effects['formTestForm/submitRegularForm'],
  }))(BasicForm),
);
