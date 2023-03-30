import { faMagnifyingGlass, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';

import styles from './Header.module.scss';

const cx = classNames.bind(styles);

function Header() {
  return (
    <header className={cx('header')}>
      <div className="grid">
        <div className="col l-12">
          <div className={cx('wrapper')}>
            {/* Logo */}
            <a className={cx('logo-link')} href="/">
              <img className={cx('logo')} src={require('./components/img/logo.png')} alt="logo" />
            </a>

            {/* Nav */}
            <nav className={cx('nav')}>
              {/* Nav-left */}
              <ul className={cx('nav-left')}>
                <li className={cx('nav-item')}>
                  <a className={cx('nav-link', 'dropdown')} href="/">
                    Du lịch
                  </a>
                </li>
                <li className={cx('nav-item')}>
                  <a className={cx('nav-link')} href="/">
                    Vietravel MICE
                  </a>
                </li>
                <li className={cx('nav-item')}>
                  <a className={cx('nav-link', 'dropdown')} href="/">
                    Vận chuyển
                  </a>
                </li>
                <li className={cx('nav-item')}>
                  <a className={cx('nav-link', 'dropdown')} href="/">
                    Tin tức
                  </a>
                </li>
                <li className={cx('nav-item')}>
                  <a className={cx('nav-link', 'dropdown')} href="/">
                    Khuyến mãi
                  </a>
                </li>
                <li className={cx('nav-item')}>
                  <a className={cx('nav-link')} href="/">
                    VietravelPlus
                  </a>
                </li>
                <li className={cx('nav-item')}>
                  <a className={cx('nav-link')} href="/">
                    Liên hệ
                  </a>
                </li>
              </ul>
              <div className={cx('nav-right')}>
                <form className={cx('search')}>
                  <input className={cx('input')} placeholder="Bắt đầu tìm kiếm..." spellCheck={false}></input>
                  <button className={cx('button')}>
                    <FontAwesomeIcon className={cx('button-icon')} icon={faMagnifyingGlass} />
                  </button>
                </form>
                <a className={cx('account')} href="/">
                  <FontAwesomeIcon className={cx('account-icon')} icon={faUser} />
                </a>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
