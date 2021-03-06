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
                        <button className={Style.buttons} onClick={whatClick}>what?</button>
                        {whatOpen ? (
                            <Portal>
                                <div className={classes.window}>
                                    <p className={Style.text1}>???????????????????????????????????????????????????</p>
                                </div>
                            </Portal>
                        ) : null}
                    </div>
                </ClickAwayListener>
                <div className={Style.margin}></div>
                <ClickAwayListener onClickAway={whoClickAway}>
                    <div>
                        <button className={Style.buttons} onClick={whoClick}>who?</button>
                        {whoOpen ? (
                            <Portal>
                                <div className={classes.window}>
                                    <p className={Style.text1}>???????????????????????????????????????????????????</p>
                                    <p className={Style.text2}>Web????????????????????????Unity????????????????????????????????????????????????????????????C#)?????????????????????????????????????????????????????????????????????????????????????????????????????????</p>
                                </div>
                            </Portal>
                        ) : null}
                    </div>
                </ClickAwayListener>
                <div className={Style.margin}></div>
                <ClickAwayListener onClickAway={howClickAway}>
                    <div>
                        <button className={Style.buttons} onClick={howClick}>how?</button>
                        {howOpen ? (
                            <Portal>
                                <div className={classes.window}>
                                    <p className={Style.text1}>Web???????????????/??????????????????????????????????????????</p>
                                    <p className={Style.text2}>2020??????????????????????????????????????????????????????</p>
                                    <p className={Style.text2}>????????????????????????PIVOT??????</p>
                                </div>
                            </Portal>
                        ) : null}
                    </div>
                </ClickAwayListener>
                <div className={Style.margin}></div>
                <ClickAwayListener onClickAway={whereClickAway}>
                    <div>
                        <button className={Style.buttons} onClick={whereClick}>where?</button>
                        {whereOpen ? (
                            <Portal>
                                <div className={classes.window}>
                                    <p className={Style.text1}>???????????????????????????????????????????????????????????????</p>
                                    <a href="mailto:amisosima.school@gmail.com"><p className={Style.text2}>[??????????????????]</p></a>
                                </div>
                            </Portal>
                        ) : null}
                    </div>
                </ClickAwayListener>
                <div className={Style.margin}></div>
            </div>
    )
}