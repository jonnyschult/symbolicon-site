import { KeyData } from './types/types';

export const IS_DEV = import.meta.env.DEV;

export enum LayerOptions {
  Alpha = 'Alpha',
  Num = 'Num',
  Sym = 'Sym',
  Nav = 'Nav',
}

export enum PositionAliases {
  LRF = 'LRF',
  LMF = 'LMF',
  LIF = 'LIF',
  RIF = 'RIF',
  RMF = 'RMF',
  RRF = 'RRF',
}

export enum ErgoType {
  Single = 'Single',
  Adjacent = 'Adjacent',
  Mirror = 'Mirror',
  Asymmetric = 'Asymmetric',
  Split = 'Split',
}

export enum KeyDirection {
  Column = 'column',
  Row = 'row',
}

export const numData: KeyData[] = [
  { char: '1', keys: '001000', pressCount: 1, ergoType: ErgoType.Single },
  { char: '2', keys: '000100', pressCount: 1, ergoType: ErgoType.Single },
  { char: '3', keys: '010000', pressCount: 1, ergoType: ErgoType.Single },
  { char: '4', keys: '000010', pressCount: 1, ergoType: ErgoType.Single },
  { char: '5', keys: '100000', pressCount: 1, ergoType: ErgoType.Single },
  { char: '6', keys: '000001', pressCount: 1, ergoType: ErgoType.Single },
  { char: '7', keys: '011000', pressCount: 2, ergoType: ErgoType.Adjacent },
  { char: '8', keys: '000110', pressCount: 2, ergoType: ErgoType.Adjacent },
  { char: '9', keys: '001100', pressCount: 2, ergoType: ErgoType.Mirror },
  { char: '0', keys: '010010', pressCount: 2, ergoType: ErgoType.Mirror },
];

export const navData: KeyData[] = [
  // ←
  { char: '\u2190', keys: '000100', pressCount: 1, ergoType: ErgoType.Single },
  // ↑
  { char: '\u2191', keys: '000010', pressCount: 1, ergoType: ErgoType.Single },
  // →
  { char: '\u2192', keys: '000001', pressCount: 1, ergoType: ErgoType.Single },
  // ↓
  { char: '\u2193', keys: '000110', pressCount: 2, ergoType: ErgoType.Adjacent },
  // LSHIFT
  { char: '\u21E7', keys: '100000', pressCount: 1, ergoType: ErgoType.Single },
  // LALT
  // LGUI
  { char: '\u2318', keys: '010000', pressCount: 2, ergoType: ErgoType.Adjacent },
  { char: '\u2325', keys: '001000', pressCount: 1, ergoType: ErgoType.Adjacent },
  // LCTRL
  { char: '\u2303', keys: '110000', pressCount: 2, ergoType: ErgoType.Adjacent },
];

const symData: KeyData[] = [
  { char: '.', keys: '001000', pressCount: 1, ergoType: ErgoType.Single, freq: 80814 },
  { char: "'", keys: '000100', pressCount: 1, ergoType: ErgoType.Single, freq: 8271 },
  { char: ',', keys: '010000', pressCount: 1, ergoType: ErgoType.Single, freq: 38364 },
  { char: '=', keys: '000010', pressCount: 1, ergoType: ErgoType.Single, freq: 4675 },
  { char: ':', keys: '000101', pressCount: 2, ergoType: ErgoType.Split, freq: 5485 },
  { char: '&', keys: '001100', pressCount: 2, ergoType: ErgoType.Mirror, freq: 72 },
  { char: '|', keys: '010010', pressCount: 2, ergoType: ErgoType.Mirror, freq: 423 },
  { char: '!', keys: '011110', pressCount: 4, ergoType: ErgoType.Mirror, freq: 511 },
  { char: '?', keys: '110011', pressCount: 4, ergoType: ErgoType.Mirror, freq: 768 },
  { char: '(', keys: '011000', pressCount: 2, ergoType: ErgoType.Adjacent, freq: 2799 },
  { char: ')', keys: '000110', pressCount: 2, ergoType: ErgoType.Adjacent, freq: 3156 },
  { char: '{', keys: '111000', pressCount: 3, ergoType: ErgoType.Adjacent, freq: 4675 },
  { char: '}', keys: '000111', pressCount: 3, ergoType: ErgoType.Adjacent, freq: 4096 },
  { char: '`', keys: '011100', pressCount: 3, ergoType: ErgoType.Asymmetric, freq: 3856 },
  { char: '[', keys: '110000', pressCount: 2, ergoType: ErgoType.Adjacent, freq: 214 },
  { char: ']', keys: '000011', pressCount: 2, ergoType: ErgoType.Adjacent, freq: 231 },
  { char: '<', keys: '100000', pressCount: 1, ergoType: ErgoType.Single, freq: 768 },
  { char: '>', keys: '000001', pressCount: 1, ergoType: ErgoType.Single, freq: 1590 },
  { char: '+', keys: '001110', pressCount: 3, ergoType: ErgoType.Asymmetric, freq: 3184 },
  { char: '-', keys: '011100', pressCount: 3, ergoType: ErgoType.Asymmetric, freq: 650 },
  { char: '*', keys: '001010', pressCount: 2, ergoType: ErgoType.Asymmetric, freq: 655 },
  { char: '/', keys: '010100', pressCount: 2, ergoType: ErgoType.Asymmetric, freq: 2799 },
  { char: '$', keys: '111010', pressCount: 4, ergoType: ErgoType.Asymmetric, freq: 0 },
  { char: '%', keys: '010111', pressCount: 4, ergoType: ErgoType.Asymmetric, freq: 212 },
  { char: '"', keys: '101000', pressCount: 2, ergoType: ErgoType.Split, freq: 23 },
  { char: '^', keys: '000101', pressCount: 2, ergoType: ErgoType.Split, freq: 5 },
  { char: ';', keys: '100111', pressCount: 4, ergoType: ErgoType.Asymmetric, freq: 0 },
  { char: '\\', keys: '111001', pressCount: 4, ergoType: ErgoType.Asymmetric, freq: 2057 },
  { char: '~', keys: '110010', pressCount: 3, ergoType: ErgoType.Asymmetric, freq: 729 },
  { char: '@', keys: '010011', pressCount: 3, ergoType: ErgoType.Asymmetric, freq: 5487 },
  { char: '#', keys: '101101', pressCount: 4, ergoType: ErgoType.Split, freq: 0 },
];

export const alphaKeys: KeyData[] = [
  { char: 'a', keys: '001000', pressCount: 1, ergoType: ErgoType.Single, freq: '8.2' },
  { char: 'b', keys: '011100', pressCount: 1, ergoType: ErgoType.Asymmetric, freq: '1.5' },
  { char: 'c', keys: '110011', pressCount: 1, ergoType: ErgoType.Mirror, freq: '2.8' },
  { char: 'd', keys: '011110', pressCount: 1, ergoType: ErgoType.Mirror, freq: '4.3' },
  { char: 'e', keys: '000100', pressCount: 1, ergoType: ErgoType.Single, freq: '12.7' },
  { char: 'f', keys: '011100', pressCount: 1, ergoType: ErgoType.Asymmetric, freq: '2.2' },
  { char: 'g', keys: '001010', pressCount: 1, ergoType: ErgoType.Split, freq: '2.0' },
  { char: 'h', keys: '100001', pressCount: 1, ergoType: ErgoType.Mirror, freq: '6.1' },
  { char: 'i', keys: '000010', pressCount: 1, ergoType: ErgoType.Single, freq: '7.0' },
  { char: 'j', keys: '100111', pressCount: 1, ergoType: ErgoType.Asymmetric, freq: '0.15' },
  { char: 'k', keys: '000111', pressCount: 1, ergoType: ErgoType.Adjacent, freq: '0.8' },
  { char: 'l', keys: '111000', pressCount: 1, ergoType: ErgoType.Adjacent, freq: '4.0' },
  { char: 'm', keys: '000011', pressCount: 1, ergoType: ErgoType.Adjacent, freq: '2.4' },
  { char: 'n', keys: '110000', pressCount: 1, ergoType: ErgoType.Adjacent, freq: '6.7' },
  { char: 'o', keys: '010000', pressCount: 1, ergoType: ErgoType.Single, freq: '7.5' },
  { char: 'p', keys: '111100', pressCount: 1, ergoType: ErgoType.Asymmetric, freq: '1.9' },
  { char: 'q', keys: '001111', pressCount: 1, ergoType: ErgoType.Asymmetric, freq: '0.1' },
  { char: 'r', keys: '000110', pressCount: 1, ergoType: ErgoType.Adjacent, freq: '6.0' },
  { char: 's', keys: '010010', pressCount: 1, ergoType: ErgoType.Mirror, freq: '6.3' },
  { char: 't', keys: '001100', pressCount: 1, ergoType: ErgoType.Mirror, freq: '9.1' },
  { char: 'u', keys: '010000', pressCount: 1, ergoType: ErgoType.Single, freq: '2.8' },
  { char: 'v', keys: '001110', pressCount: 1, ergoType: ErgoType.Asymmetric, freq: '1.0' },
  { char: 'w', keys: '101101', pressCount: 1, ergoType: ErgoType.Split, freq: '2.4' },
  { char: 'x', keys: '001001', pressCount: 1, ergoType: ErgoType.Asymmetric, freq: '0.15' },
  { char: 'y', keys: '000001', pressCount: 1, ergoType: ErgoType.Single, freq: '2.0' },
  { char: 'z', keys: '100100', pressCount: 1, ergoType: ErgoType.Asymmetric, freq: '0.07' },
];

export const KEY_DATA: Record<LayerOptions, KeyData[]> = {
  [LayerOptions.Alpha]: alphaKeys,
  [LayerOptions.Sym]: symData,
  [LayerOptions.Num]: numData,
  [LayerOptions.Nav]: navData,
};

export const ergoPositions: KeyData[] = [
  { char: '1', keys: '001000', pressCount: 1, ergoType: ErgoType.Single },
  { char: '2', keys: '000100', pressCount: 1, ergoType: ErgoType.Single },
  { char: '3', keys: '010000', pressCount: 1, ergoType: ErgoType.Single },
  { char: '4', keys: '000010', pressCount: 1, ergoType: ErgoType.Single },
  { char: '5', keys: '100000', pressCount: 1, ergoType: ErgoType.Single },
  { char: '6', keys: '000001', pressCount: 1, ergoType: ErgoType.Single },
  { char: '7', keys: '000110', pressCount: 2, ergoType: ErgoType.Adjacent },
  { char: '8', keys: '011000', pressCount: 2, ergoType: ErgoType.Adjacent },
  { char: '9', keys: '001100', pressCount: 2, ergoType: ErgoType.Mirror },
  { char: '10', keys: '010010', pressCount: 2, ergoType: ErgoType.Mirror },
  { char: '11', keys: '000011', pressCount: 2, ergoType: ErgoType.Adjacent },
  { char: '12', keys: '110000', pressCount: 2, ergoType: ErgoType.Adjacent },
  { char: '13', keys: '100001', pressCount: 2, ergoType: ErgoType.Adjacent },
  { char: '14', keys: '000111', pressCount: 3, ergoType: ErgoType.Adjacent },
  { char: '15', keys: '111000', pressCount: 3, ergoType: ErgoType.Adjacent },
  { char: '16', keys: '011110', pressCount: 4, ergoType: ErgoType.Mirror },
  { char: '17', keys: '110011', pressCount: 4, ergoType: ErgoType.Mirror },
  { char: '18', keys: '111111', pressCount: 6, ergoType: ErgoType.Mirror },
  { char: '19', keys: '001010', pressCount: 2, ergoType: ErgoType.Asymmetric },
  { char: '20', keys: '010100', pressCount: 2, ergoType: ErgoType.Asymmetric },
  { char: '21', keys: '001001', pressCount: 2, ergoType: ErgoType.Asymmetric },
  { char: '22', keys: '100100', pressCount: 2, ergoType: ErgoType.Asymmetric },
  { char: '23', keys: '010001', pressCount: 2, ergoType: ErgoType.Asymmetric },
  { char: '24', keys: '100010', pressCount: 2, ergoType: ErgoType.Asymmetric },
  { char: '25', keys: '101000', pressCount: 2, ergoType: ErgoType.Split },
  { char: '26', keys: '000101', pressCount: 2, ergoType: ErgoType.Split },
  { char: '27', keys: '001110', pressCount: 3, ergoType: ErgoType.Asymmetric },
  { char: '28', keys: '010110', pressCount: 3, ergoType: ErgoType.Asymmetric },
  { char: '29', keys: '011100', pressCount: 3, ergoType: ErgoType.Asymmetric },
  { char: '30', keys: '011010', pressCount: 3, ergoType: ErgoType.Asymmetric },
  { char: '31', keys: '100110', pressCount: 3, ergoType: ErgoType.Asymmetric },
  { char: '32', keys: '011001', pressCount: 3, ergoType: ErgoType.Asymmetric },
  { char: '33', keys: '001111', pressCount: 4, ergoType: ErgoType.Asymmetric },
  { char: '34', keys: '010111', pressCount: 4, ergoType: ErgoType.Asymmetric },
  { char: '35', keys: '100111', pressCount: 4, ergoType: ErgoType.Asymmetric },
  { char: '36', keys: '111100', pressCount: 4, ergoType: ErgoType.Asymmetric },
  { char: '37', keys: '111010', pressCount: 4, ergoType: ErgoType.Asymmetric },
  { char: '38', keys: '111001', pressCount: 4, ergoType: ErgoType.Asymmetric },
  { char: '39', keys: '110100', pressCount: 3, ergoType: ErgoType.Asymmetric },
  { char: '40', keys: '110010', pressCount: 3, ergoType: ErgoType.Asymmetric },
  { char: '41', keys: '110001', pressCount: 3, ergoType: ErgoType.Asymmetric },
  { char: '42', keys: '001011', pressCount: 3, ergoType: ErgoType.Asymmetric },
  { char: '43', keys: '010011', pressCount: 3, ergoType: ErgoType.Asymmetric },
  { char: '44', keys: '100011', pressCount: 3, ergoType: ErgoType.Asymmetric },
  { char: '45', keys: '101101', pressCount: 4, ergoType: ErgoType.Split },
  { char: '46', keys: '101100', pressCount: 3, ergoType: ErgoType.Split },
  { char: '47', keys: '101001', pressCount: 3, ergoType: ErgoType.Split },
  { char: '48', keys: '101010', pressCount: 3, ergoType: ErgoType.Split },
  { char: '49', keys: '001101', pressCount: 3, ergoType: ErgoType.Split },
  { char: '50', keys: '010101', pressCount: 3, ergoType: ErgoType.Split },
  { char: '51', keys: '100101', pressCount: 3, ergoType: ErgoType.Split },
  { char: '52', keys: '111110', pressCount: 5, ergoType: ErgoType.Asymmetric },
  { char: '53', keys: '111011', pressCount: 5, ergoType: ErgoType.Asymmetric },
  { char: '54', keys: '011111', pressCount: 5, ergoType: ErgoType.Asymmetric },
  { char: '55', keys: '110111', pressCount: 5, ergoType: ErgoType.Asymmetric },
  { char: '56', keys: '110110', pressCount: 4, ergoType: ErgoType.Asymmetric },
  { char: '57', keys: '011011', pressCount: 4, ergoType: ErgoType.Asymmetric },
  { char: '58', keys: '111101', pressCount: 5, ergoType: ErgoType.Split },
  { char: '59', keys: '101111', pressCount: 5, ergoType: ErgoType.Split },
  { char: '60', keys: '101110', pressCount: 4, ergoType: ErgoType.Split },
  { char: '61', keys: '101011', pressCount: 4, ergoType: ErgoType.Split },
  { char: '62', keys: '011101', pressCount: 4, ergoType: ErgoType.Split },
  { char: '63', keys: '110101', pressCount: 4, ergoType: ErgoType.Split },
];
