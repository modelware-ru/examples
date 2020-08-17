import * as React from 'react';
import * as PropTypes from 'prop-types'

type Props = {
    year: number,
    photos: any[],
    isFetching: boolean,
    getPhotos: any,
};

export class Page extends React.Component<Props> {
    onBtnClick = (e: any) => {
        const year = parseInt(e.currentTarget.innerText);
        this.props.getPhotos(year);
    }

    render() {
        const {year, photos, isFetching} = this.props;
        return (
            <div>
                <div>
                    <button onClick={this.onBtnClick}>2018</button>
                    <button onClick={this.onBtnClick}>2017</button>
                    <button onClick={this.onBtnClick}>2016</button>
                    <button onClick={this.onBtnClick}>2015</button>
                    <button onClick={this.onBtnClick}>2014</button>
                </div>
                <h3>{year} год</h3>
                {/* добавили отрисовку по условию */}
                {isFetching ? <p>Загрузка...</p> : <p>У тебя {photos.length} фото.</p>}
            </div>
        );
    }
}

// @ts-ignore
Page.propTypes = {
    year: PropTypes.number.isRequired,
    photos: PropTypes.array.isRequired,
    getPhotos: PropTypes.func.isRequired,
    isFetching: PropTypes.bool.isRequired,
}