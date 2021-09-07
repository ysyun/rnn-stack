import { useEffect } from 'react';
import { atom, useRecoilState } from 'recoil';

import { useDogApi } from '@rnn-stack/api';

export const dogAtom = atom<string[]>({
  key: 'dogAtom',
  default: [],
});

export function useDogState(): [isLoading: boolean, dog: string[], error: Error | null] {
  const { isLoading, data, error } = useDogApi();
  const [dog, setDog] = useRecoilState(dogAtom);

  useEffect(() => {
    setDog(data?.message || []);
  }, [data?.message, setDog]);

  return [isLoading, dog, error];
}
