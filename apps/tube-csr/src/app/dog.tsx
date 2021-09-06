// import { useEffect, useState } from 'react';

import { List } from 'antd';
// import Axios, { AxiosResponse } from 'axios';

// import { httpService } from '@rnn-stack/core';
import { useDogList } from '@rnn-stack/api';

function DogList() {
  // const [dogList, setDogList] = useState<string[]>([]);
  // useEffect(() => {
  // httpService.get('https://dog.ceo/api/breeds/list').subscribe((response: any) => {
  //   console.log('axios observable response:', response);
  //   setDogList(response.message);
  // });
  // }, []);

  const { isLoading, data, error } = useDogList();

  if (isLoading || !data) {
    return <span>loading...</span>;
  }

  if (error) {
    return <span>Error: {error.message}</span>;
  }

  return (
    <List
      header={<div>Header</div>}
      footer={<div>Footer</div>}
      bordered
      dataSource={data.message}
      renderItem={(item: string) => <List.Item>{item}</List.Item>}
    />
  );
}

export default DogList;
