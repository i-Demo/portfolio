import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Cursor, useTypewriter } from 'react-simple-typewriter';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import Button from '~/components/Button';
import Image from '~/components/Image';
import { images } from '~/assets/images';

import classNames from 'classnames/bind';
import styles from './Home.module.scss';

const cx = classNames.bind(styles);

function Home() {
    const [personalInfo] = useTypewriter({
        words: ['Hoài Vĩ.', 'a Fullstack Developer !'],
        loop: 0,
        typeSpeed: 120,
        deleteSpeed: 80,
    });
    const [infoPerson] = useTypewriter({
        words: [
            `Hello! I’m Vĩ. My full name is Hồ Lê Hoài Vĩ. I’m 23. I graduated from Ho Chi Minh City
        University of Transport in 2023 with a bachelor’s degree in Infomation Technology major.
        With over 2 years of studying and practising as a Frontend Developer, I’m confident
        about my professional skills and my soft skills. I believe that if we want to work
        effectively and develop ourselves, carefulness and creativity is very important. That’s
        what I would like to share about myself.`,
        ],
        loop: 1,
        typeSpeed: 1,
    });

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
                            <h2>Hello, </h2>
                            <h1>
                                I'm <span>{personalInfo}</span>
                                <Cursor cursorStyle="<" />
                            </h1>
                            <p>
                                {infoPerson}
                                <Cursor cursorStyle="_" />
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
