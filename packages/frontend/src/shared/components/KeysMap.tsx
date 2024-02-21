import { Box, Stack, Typography, styled } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';

interface Props {
  character: string;
  keys: string;
  showColumns?: boolean;
}

const KeysMap = ({ keys, character, showColumns }: Props) => {
  const leftKeys = keys.slice(0, 3).split('');
  const rightKeys = keys.slice(3, 6).split('');
  return (
    <KeyInfoItem key={keys}>
      <SidesContainer>
        <DotsContainer
          showColumns={showColumns}
          flexDirection={showColumns ? 'column-reverse' : 'row'}
        >
          {leftKeys.map((bit, i) => (
            <Dot key={`l${character}${i}`} filled={bit === '1'} />
          ))}
        </DotsContainer>
        {character && <KeyHeader>{character}</KeyHeader>}
        <DotsContainer
          showColumns={showColumns}
          flexDirection={showColumns ? 'column' : 'row'}
        >
          {rightKeys.map((bit, i) => (
            <Dot key={`r${character}${i}`} filled={bit === '1'} />
          ))}
        </DotsContainer>
      </SidesContainer>
    </KeyInfoItem>
  );
};

export default KeysMap;

const KeyInfoItem = styled(Grid)(({ theme }) => ({
  border: `2px solid ${theme.palette.primary.main}`,
  padding: '8px',
  margin: 5,
}));

const KeyHeader = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.primary,
  fontWeight: 600,
  minWidth: 30,
  textAlign: 'center',
  fontSize: 15,
  [theme.breakpoints.up('md')]: {
    fontSize: 20,
  },
}));

const SidesContainer = styled(Stack)({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  flex: 1,
});

const DotsContainer = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'showColumns',
})<{ showColumns?: boolean }>(({ theme, showColumns }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  flexWrap: 'wrap',
  height: showColumns ? 50 : 15,
  width: showColumns ? 15 : 50,
  [theme.breakpoints.up('md')]: {
    height: showColumns ? 60 : 20,
    width: showColumns ? 20 : 60,
  },
}));

const Dot = styled(Box, { shouldForwardProp: (prop) => prop !== 'filled' })<{
  filled: boolean;
}>(({ filled, theme }) => ({
  border: '1px solid black',
  borderRadius: '50%',
  backgroundColor: filled ? theme.palette.primary.main : 'ivory',
  height: 14,
  width: 14,
  [theme.breakpoints.up('md')]: {
    height: 16,
    width: 16,
  },
}));
