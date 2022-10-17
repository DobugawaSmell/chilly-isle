import Style from '../../styles/menu.module.css'
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Portal from '@material-ui/core/Portal';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
          margin: theme.spacing(1),
        },
      },

    window:{
        position: 'fixed',
        width: '60vw',
        top: '90%',
        left: '50%',
        transform: 'translate(-50%, -90%)',
        color: '#FFF',
        backgroundColor: '#0004FF',
        padding: theme.spacing(1),
        fontFamily: 'Noto Sans JP',
        fontWeight: '100',
        },
}));

export default function Menu() {
    const classes = useStyles();

    const [whatOpen, whatSetOpen] = React.useState(false);
    const [whoOpen, whoSetOpen] = React.useState(false);
    const [howOpen, howSetOpen] = React.useState(false);
    const [whereOpen, whereSetOpen] = React.useState(false);

    const whatClick = () => {
        whatSetOpen((prev) => !prev);
        whoSetOpen(false);
        howSetOpen(false);
        whereSetOpen(false);
    };
    const whoClick = () => {
        whoSetOpen((prev) => !prev);
        whatSetOpen(false);
        howSetOpen(false);
        whereSetOpen(false);
    };
    const howClick = () => {
        howSetOpen((prev) => !prev);
        whatSetOpen(false);
        whoSetOpen(false);
        whereSetOpen(false);
    };
    const whereClick = () => {
        whereSetOpen((prev) => !prev);
        whatSetOpen(false);
        whoSetOpen(false);
        howSetOpen(false);
    };
    
    const whatClickAway = () => {
        whatSetOpen(false);
    };
    const whoClickAway = () => {
        whoSetOpen(false);
    };
    const howClickAway = () => {
        howSetOpen(false);
    };
    const whereClickAway = () => {
        whereSetOpen(false);
    };

    return(
            <div className={Style.menuWrap}>
                <div className={Style.margin}></div>
                <ClickAwayListener onClickAway={whatClickAway}>
                    <div>
                        <a href='/profile'><button className={Style.buttons} onClick={whatClick}>Profile</button></a>
                    </div>
                </ClickAwayListener>
                <div className={Style.margin}></div>
            </div>
    )
}