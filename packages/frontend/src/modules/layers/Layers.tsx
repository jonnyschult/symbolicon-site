import { Typography, styled } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import LayerSelect from './LayerButtons';
import { useKeebStore } from '~/stores/useKeebStore';
import SortSelectGroup from './SortButtons';
import { KeyDirection, LayerOptions } from '~/shared/constants';
import KeysMap from '~/shared/components/KeysMap';
import Layout from '~/shared/components/Layout';
import ColumnButtons from '~/shared/components/ColumnButtons';

const Layers = () => {
  const { keyData, layer, keyDirection } = useKeebStore(({ keyData, layer, keyDirection }) => ({
    keyData,
    layer,
    keyDirection,
  }));

  return (
    <Layout>
      <Typography variant="h3" color={'primary.main'} mb={2}>
        Symbol<span style={{ color: 'ivory' }}>i</span>con
      </Typography>
      <LayerSelect />
      {layer === LayerOptions.Alpha && <SortSelectGroup />}
      <ColumnButtons />
      <KeyGrid container>
        {keyData.map(({ char, keys }) => (
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

export default Layers;

const KeyGrid = styled(Grid)({
  display: 'flex',
  justifyContent: 'center',
});
