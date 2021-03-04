import { useState } from 'react';
// import useAuth from '../../store/auth/hooks/useAuth';
import {
  CssBaseline,
  Container,
  Paper,
  Grid,
  Button,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import materials from '../../materials.json';

const ROLES = Object.keys(materials);

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(2),
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default () => {
  // const [auth, isLoading, login] = useAuth();

  // useEffect(() => {
  //   login();
  // }, []);

  // if (auth) {
  //   // Redirect...
  // }

  // {isLoading ? 'Loading...' : 'Done'}

  const classes = useStyles();

  const [selected, setSelected] = useState<string>('');

  // eslint-disable-next-line no-unused-vars
  const handleClick = (role: string) => (_: any) => setSelected(role);

  const materialsFoo: { [key: string]: any } = { ...materials };

  if (selected) {
    console.log(materialsFoo[selected]);
  }

  console.log(materials);

  return (
    <>
      <CssBaseline />
      <Container maxWidth="md">
        <div className={classes.root}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={12}>
              <img src="https://www.alc.co.jp/dl/common/img/main.jpg" alt="" style={{ width: '100%' }} />
            </Grid>
            {ROLES.map((i) => (
              <Grid item xs={6} sm={3} key={i}>
                <Button variant="outlined" fullWidth onClick={handleClick(i)}>{i}</Button>
              </Grid>
            ))}

            <Grid container item spacing={3}>
              {selected && (
                materialsFoo[selected].map((i: any) => (
                  <Grid item sm={6} key={i.title}>
                    <Paper className={classes.paper}>{i.title}</Paper>
                  </Grid>
                )))}
            </Grid>
          </Grid>
        </div>
      </Container>
    </>
  );
};
