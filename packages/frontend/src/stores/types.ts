import { KeyDirection, LayerOptions } from '~/shared/constants';
import { KeyData } from '~/shared/types/types';

export interface KeebStore {
  layer: LayerOptions;
  setLayer: (layer: LayerOptions) => void;
  keyData: KeyData[];
  setKeyData: (KeyData: KeyData[]) => void;
  keyDirection: KeyDirection;
  setKeyDirection: (keyDirection: KeyDirection) => void;
}
