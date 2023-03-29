import classNames from 'classnames/bind';

import styles from './DefaultLayout.module.scss';

import Header from '../components/Header';
import Footer from '../components/Footer';

const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
  return (
    <main className={cx('Wrapper')}>
      <Header />
      <div className={cx('container')}>{children}</div>
      <Footer />
    </main>
  );
}

export default DefaultLayout;
