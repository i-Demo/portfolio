import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faEnvelope, faHouse, faUser } from '@fortawesome/free-solid-svg-icons';
import Button from '~/components/Button';

import classNames from 'classnames/bind';
import styles from './NavMenu.module.scss';

const cx = classNames.bind(styles);

function NavMenu() {
    return (
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
    );
}

export default NavMenu;
