import { Typography, styled } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import KeysMap from '~/shared/components/KeysMap';
import { useState } from 'react';
import { KeyDirection, ergoPositions } from '~/shared/constants';
import ErgoButtons from './ErgoButtons';
import Layout from '~/shared/components/Layout';
import ColumnButtons from '~/shared/components/ColumnButtons';
import { useKeebStore } from '~/stores/useKeebStore';

const ErgoPositions = () => {
  const [data, setData] = useState(ergoPositions);
  const { keyDirection } = useKeebStore(({ keyDirection }) => ({
    keyDirection,
  }));

  return (
    <Layout>
      <Typography variant="h3" color={'primary.main'} mb={2}>
        Symbol<span style={{ color: 'ivory' }}>i</span>con
      </Typography>
      <ErgoButtons data={data} setData={setData} />
      <ColumnButtons />
      <KeyGrid container>
        {data.map(({ keys, char }) => (
          <KeysMap
            key={char}
            character={char}
            keys={keys}
            showColumns={keyDirection === KeyDirection.Column}
          />
        ))}
      </KeyGrid>
    </Layout>
  );
};

export default ErgoPositions;

const KeyGrid = styled(Grid)({
  display: 'flex',
  justifyContent: 'center',
});
