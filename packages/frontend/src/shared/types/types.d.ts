import { ErgoType } from '../constants';

export type KeyData = {
  char: string;
  keys: string;
  pressCount: number;
  ergoType: ErgoType;
  freq?: number | string;
  ranking?: number;
};
