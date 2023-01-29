import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelopeOpen, faMoon, faUser } from '@fortawesome/free-regular-svg-icons';
import { faBriefcase, faHouse } from '@fortawesome/free-solid-svg-icons';

import Button from '~/components/Button';
import styles from './DefaultLayout.module.scss';

const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('list-menu')}>
                <Button to="/">
                    <FontAwesomeIcon icon={faHouse} />
                </Button>
                <Button to="/portfolio">
                    <FontAwesomeIcon icon={faBriefcase} />
                </Button>
                <Button to="/about">
                    <FontAwesomeIcon icon={faUser} />
                </Button>
                <Button to="/contact">
                    <FontAwesomeIcon icon={faEnvelopeOpen} />
                </Button>
            </div>

            <div className={cx('toggle-theme')}>
                <Button>
                    <FontAwesomeIcon icon={faMoon} />
                </Button>
            </div>

            <div className={cx('content')}>{children}</div>
        </div>
    );
}

export default DefaultLayout;
