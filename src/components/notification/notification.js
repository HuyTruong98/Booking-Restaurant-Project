import { notification } from 'antd';

export const openNotification = (message, description) => {
  const args = {
    message: message,
    description: description,
    duration: 0,
  };
  notification.open(args)
}