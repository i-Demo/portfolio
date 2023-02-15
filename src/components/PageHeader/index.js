import classNames from 'classnames/bind';
import styles from './PageHeader.module.scss';

const cx = classNames.bind(styles);

function PageHeader({ titleSpan, title, titleBg }) {
    return (
        <div className={cx('page-header')}>
            <h1>
                <span>{titleSpan} </span>
                {title}
            </h1>
            <span>{titleBg}</span>
        </div>
    );
}

export default PageHeader;
