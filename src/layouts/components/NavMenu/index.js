import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faEnvelope, faHouse, faUser } from '@fortawesome/free-solid-svg-icons';
import MenuItem from './MenuItem';

import classNames from 'classnames/bind';
import styles from './NavMenu.module.scss';

const cx = classNames.bind(styles);

function NavMenu() {
    return (
        <nav className={cx('list-menu')}>
            <MenuItem to="/" title="Home" icon={<FontAwesomeIcon icon={faHouse} />} />
            <MenuItem to="/portfolio" title="Portfolio" icon={<FontAwesomeIcon icon={faBriefcase} />} />
            <MenuItem to="/about" title="About" icon={<FontAwesomeIcon icon={faUser} />} />
            <MenuItem to="/contact" title="Contact" icon={<FontAwesomeIcon icon={faEnvelope} />} />
        </nav>
    );
}

export default NavMenu;
