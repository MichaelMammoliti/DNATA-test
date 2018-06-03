import styles from './main.scss';

// <p>{props.EstablishmentId}</p>

const HotelListItem = ({
  Name,
  Distance,
  EstablishmentType,
  ImageUrl,
  ThumbnailUrl,
  Location,
  MinCost,
  Stars,
  UserRating,
  UserRatingCount,
  UserRatingTitle,
}) => (
  <div className={styles['hotels-list-item']}>

    <div className={styles['hotels-list-item--title']}>
      <span>Name: {Name}</span>
    </div>

    <div className={styles['hotels-list-item--distance']}>
      <span>Distance: {Distance}</span>
    </div>

    <div className={styles['hotels-list-item--type']}>
      <span>EstablishmentType: {EstablishmentType}</span>
    </div>


    <div className={styles['hotels-list-item--images']}>
      <img src={ImageUrl} alt='' />
      <img src={ThumbnailUrl} alt='' />
    </div>

    <div className={styles['hotels-list-item--location']}>
      <span>Location: {Location}</span>
    </div>
    <div className={styles['hotels-list-item--cost']}>
      <span>MinCost: {MinCost}</span>
    </div>

    <div className={styles['hotels-list-item--rating']}>
      <span>Stars: {Stars}</span><br/>
      <span>UserRating: {UserRating}</span><br/>
      <span>UserRatingCount: {UserRatingCount}</span><br/>
      <span>UserRatingTitle: {UserRatingTitle}</span><br/>
    </div>
  </div>
);

HotelListItem.propTypes = {
  Distance: PropTypes.number,
  // EstablishmentId: PropTypes.number,
  EstablishmentType: PropTypes.string,
  ImageUrl: PropTypes.string,
  Location: PropTypes.string,
  MinCost: PropTypes.number,
  Name: PropTypes.string,
  Stars: PropTypes.number,
  ThumbnailUrl: PropTypes.string,
  UserRating: PropTypes.number,
  UserRatingCount: PropTypes.number,
  UserRatingTitle: PropTypes.string,
};

export default HotelListItem;
