import classNames from 'classnames/bind';
import styles from './Contact.module.scss';

const cx = classNames.bind(styles);

function Contact() {
    return (
        <div className={cx('main')}>
            <div className={cx('page-header')}>
                <h1>
                    <span>Get in </span>
                    touch
                </h1>
                <span>Contact</span>
            </div>
        </div>
    );
}

export default Contact;
