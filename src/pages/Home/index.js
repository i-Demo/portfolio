import classNames from 'classnames/bind';
import styles from './Home.module.scss';
import images from '~/assets/images';

import Button from '~/components/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function Home() {
    return (
        <div className={cx('main')}>
            <div className={cx('background-block')}></div>

            <div className={cx('wrapper')}>
                <div className={cx('left-home')}>
                    <div className={cx('home-avatar')}>
                        <img alt="avatar" src={images.avatar}></img>
                    </div>
                </div>

                <div className={cx('right-home')}>
                    <div className={cx('right-wrapper')}>
                        <h1>
                            I'm Hoai Vi
                            <span>Web Developer !</span>
                        </h1>
                        <p>
                            Hello mọi người! Mình là Vĩ, đang là sinh viên năm cuối trường Đại học Giao thông vận tải
                            Tp. HCM. Cơ duyên mình đến với IT là nhờ các sự tích "IT là vua của các nghề", hay câu
                            chuyện "thằng em học BK cơ khí sinh năm 96". Tháng 5/2020, tình cờ biết đến cộng đồng F8
                            Fullstack của anh Sơn, mình đã hoàn thành các khóa học HTML, CSS, ReactJS và có được một số
                            dự án cá nhân. Trải qua nhiều cay đắng, thật sự cảm ơn anh Sơn cũng như cộng đồng anh em
                            đóng góp đã truyền động lực cho mình suốt thời gian qua giúp mình không bỏ cuộc.
                        </p>

                        <Button to="/portfolio" className={cx('home-btn')}>
                            <div className={cx('icon')}>
                                <FontAwesomeIcon icon={faArrowRight} />
                            </div>
                            <h2 className={cx('home-btn-title')}>Portfolio</h2>
                        </Button>
                        <Button to="/about" className={cx('home-btn')}>
                            <div className={cx('icon')}>
                                <FontAwesomeIcon icon={faArrowRight} />
                            </div>
                            <h2 className={cx('home-btn-title')}>About</h2>
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
