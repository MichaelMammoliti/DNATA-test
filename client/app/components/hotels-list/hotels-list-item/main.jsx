import styles from './main.scss';

const HotelListItem = (props) => {
  return (
    <div className={styles['hotels-list-item']}>
      <p>{props.Distance}</p>
      <p>{props.EstablishmentId}</p>
      <p>{props.EstablishmentType}</p>
      <p>{props.ImageUrl}</p>
      <p>{props.Location}</p>
      <p>{props.MinCost}</p>
      <p>{props.Name}</p>
      <p>{props.Stars}</p>
      <p>{props.ThumbnailUrl}</p>
      <p>{props.UserRating}</p>
      <p>{props.UserRatingCount}</p>
      <p>{props.UserRatingTitle}</p>
    </div>
  );
};

HotelListItem.propTypes = {
  Distance: PropTypes.number,
  EstablishmentId: PropTypes.number,
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
