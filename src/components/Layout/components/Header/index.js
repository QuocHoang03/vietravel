import classNames from 'classnames/bind';

import styles from './Header.module.scss';

const cx = classNames.bind(styles);

function Header() {
  return (
    <header className={cx('header')}>
      <div className="grid">
        <div className="col l-12">
          <div className={cx('wrapper')}>
            {/* logo */}
            <a className={cx('logo-link')} href="/">
              <img className={cx('logo')} src={require('./components/img/logo.png')} alt="logo" />
            </a>

            {/* nav */}
            <nav className={cx('nav')}>
              <ul className={cx('nav-left')}>
                <li className={cx('nav-item')} href="/">
                  <a className={cx('nav-link', 'dropdown')}>Du lịch</a>
                </li>
                <li className={cx('nav-item')} href="/">
                  <a className={cx('nav-link')}>Vietravel MICE</a>
                </li>
                <li className={cx('nav-item')} href="/">
                  <a className={cx('nav-link', 'dropdown')}>Vận chuyển</a>
                </li>
                <li className={cx('nav-item')} href="/">
                  <a className={cx('nav-link', 'dropdown')}>Tin tức</a>
                </li>
                <li className={cx('nav-item')} href="/">
                  <a className={cx('nav-link', 'dropdown')}>Khuyến mãi</a>
                </li>
                <li className={cx('nav-item')} href="/">
                  <a className={cx('nav-link')}>VietravelPlus</a>
                </li>
                <li className={cx('nav-item')} href="/">
                  <a className={cx('nav-link')}>Liên hệ</a>
                </li>
              </ul>
              <div className={cx('nav-right')}>input</div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
