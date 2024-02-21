import { styled, Box, ButtonBase } from '@mui/material';
import { useState } from 'react';
import { ErgoType, ergoPositions } from '~/shared/constants';
import { KeyData } from '~/shared/types/types';

interface Props {
  data: KeyData[];
  setData: React.Dispatch<React.SetStateAction<KeyData[]>>;
}

const ErgoButtons = ({ data, setData }: Props) => {
  const [sortType, setSortType] = useState('ergo');

  const handleClick = (option: string) => {
    setSortType(option);
    if (option == 'keys') {
      const sorted = ergoPositions.sort((a, b) => a.pressCount - b.pressCount);
      console.log(sorted);
      setData([...sorted]);
    } else if (option == 'type') {
      const singleArr: KeyData[] = [];
      const adjacentArr: KeyData[] = [];
      const mirrorArr: KeyData[] = [];
      const asymmetricArr: KeyData[] = [];
      const splitArr: KeyData[] = [];
      for (const item of ergoPositions) {
        if (item.ergoType === ErgoType.Single) {
          singleArr.push(item);
        } else if (item.ergoType === ErgoType.Adjacent) {
          adjacentArr.push(item);
        } else if (item.ergoType === ErgoType.Mirror) {
          mirrorArr.push(item);
        } else if (item.ergoType === ErgoType.Asymmetric) {
          asymmetricArr.push(item);
        } else if (item.ergoType === ErgoType.Split) {
          splitArr.push(item);
        }
      }
      setData([...singleArr, ...adjacentArr, ...mirrorArr, ...asymmetricArr, ...splitArr]);
    } else {
      const sorted = data.sort((a, b) => a.ranking! - b.ranking!);
      console.log(sorted);
      setData([...sorted]);
    }
  };

  return (
    <ButtonGroup>
      {['ergo', 'keys', 'type'].map((option) => (
        <OptionButton
          key={option}
          onClick={() => handleClick(option)}
          selected={option === sortType}
        >
          {option}
        </OptionButton>
      ))}
    </ButtonGroup>
  );
};

export default ErgoButtons;

const ButtonGroup = styled(Box)(({ theme }) => ({
  display: 'flex',
  width: 300,
  [theme.breakpoints.up('sm')]: {
    width: 450,
  },
  [theme.breakpoints.up('md')]: {
    width: 700,
  },
}));

const OptionButton = styled(ButtonBase)<{ selected: boolean }>(({ theme, selected }) => ({
  flex: 1, // Distribute space evenly
  padding: theme.spacing(1),
  height: 35,
  color: theme.palette.text.primary,
  textAlign: 'center', // Center the text
  border: `2px solid ${selected ? theme.palette.primary.dark : theme.palette.primary.main}`, // Primary color for selected, divider color otherwise
  backgroundColor: selected ? theme.palette.primary.dark : 'transparent',
  '&:hover': {
    backgroundColor: selected ? theme.palette.primary.dark : theme.palette.primary.light,
    borderColor: theme.palette.primary.main, // Change border color on hover
  },
  borderRadius: theme.shape.borderRadius,
  margin: theme.spacing(0.5), // Add some space between buttons
  [theme.breakpoints.up('sm')]: {
    height: 45,
  },
  [theme.breakpoints.up('md')]: {
    width: 65,
  },
}));
