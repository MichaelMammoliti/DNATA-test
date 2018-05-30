import styles from './main.scss';

import HotelsContainer from '../../containers/hotels';

const Hotels = () => (
  <div className={styles['hotels']}>
    <HotelsContainer />
  </div>
);

export default Hotels;
