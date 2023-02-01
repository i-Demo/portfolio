import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCheck,
    faEnvelopeOpen,
    faEnvelopeOpenText,
    faLocationDot,
    faPhoneVolume,
} from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faGithub } from '@fortawesome/free-brands-svg-icons';
import Button from '~/components/Button';

import classNames from 'classnames/bind';
import styles from './Contact.module.scss';

const cx = classNames.bind(styles);

function Contact() {
    const [isShowModal, setIsShowModal] = useState(false);
    const handleClick = (e) => {
        e.preventDefault();
        setIsShowModal(true);
    };
    return (
        <div className={cx('main')}>
            <div className={cx('page-header')}>
                <h1>
                    <span>Get in </span>
                    touch
                </h1>
                <span>Contact</span>
            </div>

            <div className={cx('container')}>
                <div className={cx('contact-info')}>
                    <h3>Don't be shy</h3>
                    <p>
                        Feel free to get in touch with me. I am always open to discussing new projects, creative ideas
                        or opportunities to be part of your visions.
                    </p>

                    <ul className={cx('contact-list')}>
                        <li>
                            <FontAwesomeIcon className={cx('contact-icon')} icon={faLocationDot} />
                            <span>Address</span> Tp. HCM, VietNam
                        </li>
                        <li>
                            <FontAwesomeIcon className={cx('contact-icon')} icon={faEnvelopeOpen} />
                            <span>Email</span> hoaivi.dev@gmail.com
                        </li>
                        <li>
                            <FontAwesomeIcon className={cx('contact-icon')} icon={faPhoneVolume} />
                            <span>Phone</span> 0363629xxx
                        </li>
                    </ul>

                    <div className={cx('social-list')}>
                        <Button rounded href="https://www.facebook.com/vi.hoai.52035" className={cx('social-btn')}>
                            <FontAwesomeIcon icon={faFacebookF} />
                        </Button>
                        <Button rounded href="https://github.com/i-Demo" className={cx('social-btn')}>
                            <FontAwesomeIcon icon={faGithub} />
                        </Button>
                    </div>
                </div>

                <div className={cx('form-container')}>
                    <form className={cx('form-contact')} id="form-contact">
                        <div className={cx('contact-form_info')}>
                            <input type="text" placeholder="your name" name="name" />
                            <input type="text" placeholder="your email" name="email" />
                        </div>

                        <div className={cx('contact-form_subject')}>
                            <input type="text" placeholder="your subject" name="subject" />
                        </div>

                        <div className={cx('contact-form_message')}>
                            <textarea rows="9" placeholder="your message" name="message" />
                        </div>

                        <div className={cx('contact-form-btn')}>
                            <Button
                                slide
                                animate
                                leftIcon={<FontAwesomeIcon icon={faEnvelopeOpenText} />}
                                onClick={handleClick}
                            >
                                <h2>Send Message</h2>
                            </Button>
                        </div>
                    </form>
                </div>
            </div>

            {isShowModal && (
                <div className={cx('modal')}>
                    <div className={cx('modal-wrapper')}>
                        <div className={cx('modal-icon')}>
                            <FontAwesomeIcon icon={faCheck} className={cx('icon')} />
                        </div>
                        <h3>Success!</h3>
                        <p>We've sent a confirmation to your e-mail for verification.</p>
                        <button className={cx('redo-btn')} onClick={() => setIsShowModal(false)}>
                            Ok
                        </button>
                        <span className={cx('notice')}>-- Click to close the modal --</span>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Contact;
