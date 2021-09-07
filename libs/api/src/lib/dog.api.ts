import { useQuery } from 'react-query';

import { httpService } from '@rnn-stack/core';

export function useDogApi() {
  return useQuery<{ message: string[]; status: string }, Error>('dog-list', () =>
    httpService
      .get('https://dog.ceo/api/breeds/list')
      .toPromise()
      .then((response: any) => response)
  );
}
