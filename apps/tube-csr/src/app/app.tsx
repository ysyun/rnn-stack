/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button, Divider, Dropdown, Menu, message } from 'antd';

import styles from './app.module.scss';
import DogList from './dog';

function App() {
  const handleButtonClick = (e: any) => {
    message.info('Click on left button.');
    console.log('click left button', e);
  };

  const handleMenuClick = (e: any) => {
    message.info('Click on menu item.');
  };

  const menu = (
    <Menu onClick={handleMenuClick}>
      <Menu.Item key="1">1st menu item</Menu.Item>
      <Menu.Item key="2">2nd menu item</Menu.Item>
      <Menu.Item key="3">3rd menu item</Menu.Item>
    </Menu>
  );

  return (
    <div className={styles.app}>
      <Divider>AntD Components</Divider>
      <Button type="primary">Primary Button</Button>
      <Button>Default Button</Button>
      <Button type="dashed">Dashed Button</Button>
      <br />
      <Button type="text">Text Button</Button>
      <Button type="link">Link Button</Button>
      <Divider>Others</Divider>
      <Dropdown.Button onClick={handleButtonClick} overlay={menu}>
        Dropdown
      </Dropdown.Button>
      <Divider>Dog List</Divider>
      <DogList />
    </div>
  );
}

export default App;
