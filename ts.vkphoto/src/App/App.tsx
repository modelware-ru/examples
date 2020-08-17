import {hot} from 'react-hot-loader/root';
import * as React from 'react';
import {connect} from "react-redux";

import {User} from '../component/User';
import {Page} from '../component/Page';
import {getPhotos} from "../action/PageActions";

import * as style from './App.css';

type Props = {
    user: TUser,
    page: TPage,
    getPhotosAction: (year: number) => any,
};

class App extends React.Component<Props> {

    public render() {
        const {user, page, getPhotosAction} = this.props;

        return (
            <div className={style.App}>
                <header className={style['App-header']}>
                    <h1 className={style['App-title']}>Мой топ фото</h1>
                </header>
                <User name={user.name}/>
                <Page
                    photos={page.photos}
                    year={page.year}
                    isFetching={page.isFetching}
                    getPhotos={getPhotosAction}
                />
            </div>
        );
    }
}

const mapStateToProps = (store: TRootState) => {
    return {
        user: store.user,
        page: store.page,
    }
};

const mapDispatchToProps = (dispatch: any) => {
    return {
        // setYearAction: (year: number) => dispatch(setYear(year)),
        getPhotosAction: (year: number) => dispatch(getPhotos(year)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(hot(App));