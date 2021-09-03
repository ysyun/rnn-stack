import { useEffect, useState } from 'react';

import List from 'antd/es/list';
// import Axios, { AxiosResponse } from 'axios';

import { httpService } from '@rnn-stack/core';

function DogList() {
  const [dogList, setDogList] = useState<string[]>([]);

  useEffect(() => {
    httpService.get('https://dog.ceo/api/breeds/list').subscribe((response: any) => {
      console.log('axios observable response:', response);
      setDogList(response.message);
    });
    // Axios.get('https://dog.ceo/api/breeds/list').then((result: AxiosResponse) => {
    //   setDogList(result.data.message);
    // });
  }, []);

  return (
    <List
      header={<div>Header</div>}
      footer={<div>Footer</div>}
      bordered
      dataSource={dogList}
      renderItem={(item: string) => <List.Item>{item}</List.Item>}
    />
  );
}

export default DogList;
