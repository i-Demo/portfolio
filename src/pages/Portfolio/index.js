import classNames from 'classnames/bind';
import styles from './Portfolio.module.scss';

const cx = classNames.bind(styles);

function Portfolio() {
    return (
        <div className={cx('main')}>
            <div className={cx('page-header')}>
                <h1>
                    <span>My </span>
                    portfolio
                </h1>
                <span>Works</span>
            </div>

            <div classNames={cx('container')}>
                <div className={cx('tabs')}></div>
            </div>
        </div>
    );
}

export default Portfolio;
