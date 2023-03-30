import classNames from 'classnames/bind';
import styles from './Slider.module.scss';
import { dataNavs } from './data';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCarSide } from '@fortawesome/free-solid-svg-icons';
const cx = classNames.bind(styles);

function Slider() {
  return (
    <aside className={cx('slider')}>
      {/* img slider */}
      <div className={cx('grid')}>
        <div className={cx('img-block')}>
          <img className={cx('img')} src={require('./components/img/slider.jpg')} alt="slider"></img>
        </div>
      </div>
      <div className={cx('grid', 'wide')}>
        <div className={cx('col l-12')}>
          <nav className={cx('nav')}>
            {dataNavs.map((dataNav, index) => {
              return (
                <nav className={cx('nav-item')}>
                  <div className={cx('nav-icon')}>
                    <FontAwesomeIcon icon={dataNav.icon} />
                  </div>
                  <div className={cx('nav-name')}>{dataNav.name}</div>
                </nav>
              );
            })}
          </nav>
        </div>
      </div>
    </aside>
  );
}

export default Slider;
