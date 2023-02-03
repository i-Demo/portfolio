import PropTypes from 'prop-types';
import NavMenu from '../components/NavMenu';
import ToggleTheme from '../components/ToggleTheme';

import classNames from 'classnames/bind';
import styles from './DefaultLayout.module.scss';

const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
    return (
        <div className={cx('wrapper')}>
            <NavMenu />

            <ToggleTheme />

            <div className={cx('content')}>{children}</div>
        </div>
    );
}

DefaultLayout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default DefaultLayout;
