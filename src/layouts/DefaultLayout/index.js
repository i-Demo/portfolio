import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faEnvelope, faHouse, faUser, faMoon } from '@fortawesome/free-solid-svg-icons';

import Button from '~/components/Button';
import styles from './DefaultLayout.module.scss';

const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('list-menu')}>
                <Button to="/" rounded className={cx('item-menu')}>
                    <h2 className={cx('item-menu-title')}>Home</h2>
                    <FontAwesomeIcon icon={faHouse} />
                </Button>
                <Button to="/portfolio" rounded className={cx('item-menu')}>
                    <h2 className={cx('item-menu-title')}>Portfolio</h2>
                    <FontAwesomeIcon icon={faBriefcase} />
                </Button>
                <Button to="/about" rounded className={cx('item-menu')}>
                    <h2 className={cx('item-menu-title')}>About</h2>
                    <FontAwesomeIcon icon={faUser} />
                </Button>
                <Button to="/contact" rounded className={cx('item-menu')}>
                    <h2 className={cx('item-menu-title')}>Contact</h2>
                    <FontAwesomeIcon icon={faEnvelope} />
                </Button>
            </div>

            <div className={cx('toggle-theme')}>
                <Button className={cx('toggle-theme-btn')}>
                    <FontAwesomeIcon icon={faMoon} />
                </Button>
            </div>

            <div className={cx('content')}>{children}</div>
        </div>
    );
}

export default DefaultLayout;
