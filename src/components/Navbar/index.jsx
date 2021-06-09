import { AppBar, Toolbar, Button, Grid } from '@material-ui/core'
import React from 'react'
import { NavLink } from 'react-router-dom';
import { LOGIN_ROUTE } from '../../utils'
export default function Navbar() {
    const user = false;

    return (
        <AppBar style={{ background: "linear-gradient(-45deg, #39249a, #e14e42)" }} position="static">
            <Toolbar variant='dense'>
                <h3 >Sardorbek Kholdarboev</h3>
                <Grid container justify={'flex-end'}>
                    {user ? (<Button variant={'outlined'}>Logout</Button>)
                        :
                        <NavLink to={LOGIN_ROUTE}>
                            (<Button variant={'outlined'}>Log In</Button>)
                        </NavLink>
                    }
                </Grid>
            </Toolbar>
        </AppBar>
    )
}
