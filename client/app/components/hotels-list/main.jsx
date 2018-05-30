import HotelsListItem from './hotels-list-item';

import styles from './main.scss';

const HotelsList = ({ data }) => {
  return (
    <div className={styles['hotels-list']}>
      {data.map((dataItem, index) => (
        <div className={styles['hotels-list--item']} key={index}>
          <HotelsListItem {...dataItem} />
        </div>
      ))}
    </div>
  );
};

export default HotelsList;
