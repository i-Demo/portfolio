import { NavLink } from 'react-router-dom';

import classNames from 'classnames/bind';
import styles from './MenuItem.module.scss';

const cx = classNames.bind(styles);

function MenuItem({ to, title, icon }) {
    return (
        <NavLink to={to} className={(nav) => cx('item-menu', { active: nav.isActive })}>
            <h2 className={cx('item-menu-title')}>{title}</h2>
            {icon}
        </NavLink>
    );
}

export default MenuItem;
