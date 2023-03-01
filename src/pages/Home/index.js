import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import Button from '~/components/Button';
import Image from '~/components/Image';
import { images } from '~/assets/images';

import classNames from 'classnames/bind';
import styles from './Home.module.scss';

const cx = classNames.bind(styles);

function Home() {
    return (
        <div>
            <div className="slide"></div>

            <div className={cx('container')} data-aos="fade-up">
                <div className={cx('background-block')}></div>

                <div className={cx('wrapper')}>
                    <div className={cx('left-home')}>
                        <div className={cx('home-avatar')}>
                            <Image alt="avatar" src={images.avatar} />
                        </div>
                    </div>

                    <div className={cx('right-home')}>
                        <div className={cx('right-wrapper')}>
                            <h1>
                                I'm Hoai Vi
                                <span>Web Developer !</span>
                            </h1>
                            <p>
                                Hello! I’m Vĩ. My full name is Hồ Lê Hoài Vĩ. I’m 23. I graduated from Ho Chi Minh City
                                University of Transport in 2023 with a bachelor’s degree in Infomation Technology major.
                                With over 2 years of studying and practising as a Frontend Developer, I’m confident
                                about my professional skills and my soft skills. I believe that if we want to work
                                effectively and develop ourselves, carefulness and creativity is very important. That’s
                                what I would like to share about myself.
                            </p>

                            <div className={cx('btn-block')}>
                                <Button to="/portfolio" slide leftIcon={<FontAwesomeIcon icon={faArrowRight} />}>
                                    <h2>Portfolio</h2>
                                </Button>
                                <Button to="/about" slide leftIcon={<FontAwesomeIcon icon={faArrowRight} />}>
                                    <h2>About</h2>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
