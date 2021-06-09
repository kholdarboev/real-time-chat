import { Box, Button, Container, Grid } from '@material-ui/core'
import React, { useContext } from 'react';
import { Context } from '../../index'
import firebase from 'firebase';
export default function Login() {
    const { auth } = useContext(Context);

    const login = async () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        const { user } = await auth.signInWithPopup(provider);
        console.log(user);
    }
    return (
        <Container>
            <Grid
                container
                alignItems={'center'}
                justify={'center'}
                style={{ height: window.innerHeight - 50 }}>
                <Grid style={{ width: 400, background: 'whitesmoke' }}
                    container
                    alignItems={'center'}
                    justify={'center'}>

                    <Box style={{ padding: '50px 0' }} />
                    <Button onClick={login} variant={'outlined'}>Sign In with Google</Button>
                </Grid>
            </Grid>

        </Container>
    )
}
