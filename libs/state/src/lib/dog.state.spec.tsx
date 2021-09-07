import { snapshot_UNSTABLE } from 'recoil';

import { dogAtom } from './dog.state';

describe('Test dogAtom', () => {
  it('should be empty', () => {
    const initialSnapshot = snapshot_UNSTABLE();
    expect(initialSnapshot.getLoadable(dogAtom).valueOrThrow()).toStrictEqual([]);
  });

  it('should be one', () => {
    const initialSnapshot = snapshot_UNSTABLE(({ set }) => set(dogAtom, ['peter-dog']));
    expect(initialSnapshot.getLoadable(dogAtom).valueOrThrow()).toStrictEqual(['peter-dog']);
  });
});
