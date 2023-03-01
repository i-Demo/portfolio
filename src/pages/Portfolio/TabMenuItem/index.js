import { NavLink } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './TabMenuItem.module.scss';

const cx = classNames.bind(styles);

function TabMenuItem({ onClick, title, className }) {
    return (
        <NavLink onClick={onClick} className={cx('tab-item', className)}>
            <span>{title}</span>
        </NavLink>
    );
}

export default TabMenuItem;
