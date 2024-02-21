import { styled, Box, ButtonBase } from '@mui/material';
import { useState } from 'react';
import { useKeebStore } from '~/stores/useKeebStore';

const SortSelectGroup = () => {
  const [isFreqSorted, setIsFreqSorted] = useState(false);
  const { keyData, setKeyData } = useKeebStore(({ keyData, setKeyData }) => ({
    keyData,
    setKeyData,
  }));

  const handleClick = (option: string) => {
    setIsFreqSorted(option === 'freq');
    if (option == 'freq') {
      const sortedData = keyData.sort((a, b) => Number(b.freq) - Number(a.freq));

      setKeyData(sortedData);
    } else {
      const sortedData = keyData.sort((a, b) => a.char.localeCompare(b.char));

      setKeyData(sortedData);
    }
  };

  return (
    <ButtonGroup>
      {['alpha', 'freq'].map((option) => (
        <OptionButton
          key={option}
          onClick={() => handleClick(option)}
          selected={isFreqSorted ? option === 'freq' : option === 'alpha'}
        >
          {option}
        </OptionButton>
      ))}
    </ButtonGroup>
  );
};

export default SortSelectGroup;

const ButtonGroup = styled(Box)(({ theme }) => ({
  display: 'flex',
  width: 150,
  [theme.breakpoints.up('sm')]: {
    width: 200,
  },
  [theme.breakpoints.up('md')]: {
    width: 300,
  },
}));

const OptionButton = styled(ButtonBase)<{ selected: boolean }>(({ theme, selected }) => ({
  flex: 1, // Distribute space evenly
  padding: theme.spacing(1),
  height: 20,
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
    height: 30,
  },
  [theme.breakpoints.up('md')]: {
    width: 35,
  },
}));
