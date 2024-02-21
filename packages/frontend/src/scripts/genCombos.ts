import { PositionAliases, alphaKeys } from '~/shared/constants';

const getPosAliasesFromBitString = (bitString: string) => {
  let posAliases = '';
  bitString.split('').map((bit, i) => {
    if (bit) {
      posAliases = posAliases.concat(Object.values(PositionAliases)[i]);
    }
  });
  return posAliases;
};

const getZMKComboCommands = () => {
  const alphaLayer = alphaKeys.map((keyData) => {
    const posAliases = getPosAliasesFromBitString(keyData.keys);
    console.log(posAliases);
  });
  return alphaLayer;
};

getZMKComboCommands();
