import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { KEY_DATA, KeyDirection, LayerOptions } from '~/shared/constants';
import { KeebStore } from './types';

export const useKeebStore = create<KeebStore>()(
  devtools((set) => ({
    layer: LayerOptions.Alpha,
    setLayer: (layer) => set({ layer }),
    keyData: KEY_DATA[LayerOptions.Alpha],
    setKeyData: (keyData) => set({ keyData }),
    keyDirection: KeyDirection.Column,
    setKeyDirection: (keyDirection) => set({ keyDirection }),
  })),
);

useKeebStore.subscribe((state, prevState) => {
  if (prevState.layer !== state.layer) {
    state.setKeyData(KEY_DATA[state.layer]);
  }
});
