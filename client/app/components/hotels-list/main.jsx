import HotelsListItem from './hotels-list-item';

import styles from './main.scss';

const HotelsList = ({ data }) => {
  if (!data || !data.length) {
    return null;
  }

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

HotelsList.displayName = 'HotelsList';

HotelsList.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({})),
};

HotelsList.defaultProps = {
  data: [],
};

export default HotelsList;
