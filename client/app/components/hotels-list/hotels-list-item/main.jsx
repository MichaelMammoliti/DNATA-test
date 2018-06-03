import styles from './main.scss';

const getStyles = props => {
  return {
    backgroundImage: `url(${props.ImageUrl})`,
  };
};

const HotelListItem = (props) => {
  const {
    Name,
    Distance,
    EstablishmentType,
    ImageUrl,
    Location,
    MinCost,
    Stars,
    UserRating,
    UserRatingCount,
  } = props;

  return (
    <div className={styles['hotels-list-item']}>
      <div
        className={styles['hotels-list-item--image']}
        style={getStyles(props)}
      >
        {ImageUrl &&
          <img src={ImageUrl} alt='' />
        }
      </div>

      <div className={styles['hotels-list-item--body']}>
        <div className={styles['hotels-list-item--title']}>
          <span>{Name}</span>
        </div>

        <div className={styles['hotels-list-item--location']}>
          <span>Location: {Location}</span>
        </div>

        <div className={styles['hotels-list-item--distance']}>
          <span>Distance: {Number(Distance).toFixed(2)}mi</span>
        </div>

        <div className={styles['hotels-list-item--type']}>
          <span>Type: {EstablishmentType}</span>
        </div>

        <div className={styles['hotels-list-item--cost']}>
          <span>{MinCost}</span>
        </div>

        <div className={styles['hotels-list-item--rating']}>
          <span>{Stars} Stars</span><br/>
          <span>User Rating: {UserRating} ({UserRatingCount})</span>
        </div>
      </div>
    </div>
  );
};

HotelListItem.propTypes = {
  Distance: PropTypes.number,
  EstablishmentType: PropTypes.string,
  ImageUrl: PropTypes.string,
  Location: PropTypes.string,
  MinCost: PropTypes.number,
  Name: PropTypes.string,
  Stars: PropTypes.number,
  UserRating: PropTypes.number,
  UserRatingCount: PropTypes.number,
  // EstablishmentId: PropTypes.number,
  // ThumbnailUrl: PropTypes.string,
  // UserRatingTitle: PropTypes.string,
};

export default HotelListItem;
