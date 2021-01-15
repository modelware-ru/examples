import { hot } from 'react-hot-loader/root';
import * as React from 'react';
import { AppBar, CssBaseline, Divider, Drawer, IconButton, makeStyles, Toolbar } from "@material-ui/core";
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';

import classNames from 'classnames';
import clsx from 'clsx';
import * as style from './Dashboard.scss';

// const drawerWidth = 240;

// const useStyles = makeStyles((theme) => ({
//     root: {
//         display: 'flex',
//     },
//     toolbar: {
//         paddingRight: 24, // keep right padding when drawer closed
//     },
//     toolbarIcon: {
//         display: 'flex',
//         alignItems: 'center',
//         justifyContent: 'flex-end',
//         padding: '0 8px',
//         ...theme.mixins.toolbar,
//     },
//     appBar: {
//         zIndex: theme.zIndex.drawer + 1,
//         transition: theme.transitions.create(['width', 'margin'], {
//             easing: theme.transitions.easing.sharp,
//             duration: theme.transitions.duration.leavingScreen,
//         }),
//     },
//     appBarShift: {
//         marginLeft: drawerWidth,
//         width: `calc(100% - ${drawerWidth}px)`,
//         transition: theme.transitions.create(['width', 'margin'], {
//             easing: theme.transitions.easing.sharp,
//             duration: theme.transitions.duration.enteringScreen,
//         }),
//     },
//     menuButton: {
//         marginRight: 36,
//     },
//     menuButtonHidden: {
//         display: 'none',
//     },
//     title: {
//         flexGrow: 1,
//     },
//     drawerPaper: {
//         position: 'relative',
//         whiteSpace: 'nowrap',
//         width: drawerWidth,
//         transition: theme.transitions.create('width', {
//             easing: theme.transitions.easing.sharp,
//             duration: theme.transitions.duration.enteringScreen,
//         }),
//     },
//     drawerPaperClose: {
//         overflowX: 'hidden',
//         transition: theme.transitions.create('width', {
//             easing: theme.transitions.easing.sharp,
//             duration: theme.transitions.duration.leavingScreen,
//         }),
//         width: theme.spacing(7),
//         [theme.breakpoints.up('sm')]: {
//             width: theme.spacing(9),
//         },
//     },
//     appBarSpacer: theme.mixins.toolbar,
//     content: {
//         flexGrow: 1,
//         height: '100vh',
//         overflow: 'auto',
//     },
//     container: {
//         paddingTop: theme.spacing(4),
//         paddingBottom: theme.spacing(4),
//     },
//     paper: {
//         padding: theme.spacing(2),
//         display: 'flex',
//         overflow: 'auto',
//         flexDirection: 'column',
//     },
//     fixedHeight: {
//         height: 240,
//     },
// }));

class Dashboard extends React.Component<any, any> {

    state: any = {
        open: true,
    };

    constructor(props: any) {
        super(props);
    }

    handleDrawerOpen = () => {
        this.setState({ open: true });
    }

    handleDrawerClose = () => {
        this.setState({ open: false });
    }

    render() {
        const { open } = this.state;

        // const classes = useStyles();

        return (
            <div className='root'>
                <CssBaseline />
                {/*<AppBar position='static' className={clsx(classes.appBar, open && classes.appBarShift)}>*/}
                <AppBar position='static' className={classNames(style.appBar, open && style.appBarShift)}>
                    <Toolbar>
                        <IconButton
                            edge="start"
                            color="inherit"
                            aria-label="open drawer"
                            onClick={this.handleDrawerOpen}
                            className={classNames(style.menuButton, open && style.menuButtonHidden)}
                            // className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
                        >
                            <MenuIcon />
                        </IconButton>

                    </Toolbar>
                </AppBar>
                <Drawer
                    variant="permanent"
                    classes={{
                        // paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
                        paper: classNames(style.drawerPaper, !open && style.drawerPaperClose),
                    }}
                    open={open}
                >
                    <div>
                        <IconButton onClick={this.handleDrawerClose}>
                            <ChevronLeftIcon />
                        </IconButton>
                    </div>
                    <Divider />
                </Drawer>
            </div>
        );
    }

}

export default hot(Dashboard);