// assets
import { ChromeOutlined, QuestionOutlined } from '@ant-design/icons';

// icons
const icons = {
  ChromeOutlined,
  QuestionOutlined
};

// ==============================|| MENU ITEMS - SAMPLE PAGE & DOCUMENTATION ||============================== //

const support = {
  id: 'support',
  title: 'Support',
  type: 'group',
  children: [
    {
      id: 'Departments',
      title: 'Departments',
      type: 'item',
      url: '/departments',
    },
    {
      id: 'Events',
      title: 'Events',
      type: 'item',
      url: '/Events',
    },
    {
      id: 'Institutes',
      title: 'institutes',
      type: 'item',
      url: '/institutes',
    }
  ]
};

export default support;
