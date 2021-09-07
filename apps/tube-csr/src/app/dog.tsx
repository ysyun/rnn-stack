// import { useEffect, useState } from 'react';

import { List } from 'antd';
// import Axios, { AxiosResponse } from 'axios';

// import { httpService } from '@rnn-stack/core';
import { useDogState } from '@rnn-stack/state';

function DogList() {
  // const [dogList, setDogList] = useState<string[]>([]);
  // useEffect(() => {
  // httpService.get('https://dog.ceo/api/breeds/list').subscribe((response: any) => {
  //   console.log('axios observable response:', response);
  //   setDogList(response.message);
  // });
  // }, []);

  const [isLoading, dog, error] = useDogState();

  if (isLoading || !dog) {
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
      dataSource={dog}
      renderItem={(item: string) => <List.Item>{item}</List.Item>}
    />
  );
}

export default DogList;
