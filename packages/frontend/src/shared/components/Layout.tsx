import { Box, styled } from '@mui/material';

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  return <StyledLayout>{children}</StyledLayout>;
};

export default Layout;

const StyledLayout = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  flexWrap: 'wrap',
  flex: 1,
  background: '#000000',
  minHeight: '100vh',
  padding: '50px 0',
});
