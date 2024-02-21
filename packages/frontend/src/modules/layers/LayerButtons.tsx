import { styled, Box, ButtonBase } from '@mui/material';
import { LayerOptions } from '~/shared/constants';
import { useKeebStore } from '~/stores/useKeebStore';

export default function LayerButtons() {
  const { layer, setLayer } = useKeebStore(({ layer, setLayer }) => ({
    layer,
    setLayer,
  }));

  const handleClick = (value: LayerOptions) => {
    setLayer(value);
  };

  return (
    <ButtonGroup>
      {Object.values(LayerOptions).map((option) => (
        <OptionButton
          key={option}
          onClick={() => handleClick(option)}
          selected={layer === option}
        >
          {option}
        </OptionButton>
      ))}
    </ButtonGroup>
  );
}

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

const OptionButton = styled(ButtonBase)<{ selected: boolean }>(
  ({ theme, selected }) => ({
    flex: 1, // Distribute space evenly
    padding: theme.spacing(1),
    height: 35,
    color: theme.palette.text.primary,
    textAlign: 'center', // Center the text
    border: `2px solid ${selected ? theme.palette.primary.dark : theme.palette.primary.main}`, // Primary color for selected, divider color otherwise
    backgroundColor: selected ? theme.palette.primary.dark : 'transparent',
    '&:hover': {
      backgroundColor: selected
        ? theme.palette.primary.dark
        : theme.palette.primary.light,
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
  }),
);
