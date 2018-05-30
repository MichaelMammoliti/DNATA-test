import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import HotelsActions from './state/actions';

import HotelsList from '../../components/hotels-list';

import styles from './main.scss';

class HotelsContainer extends React.Component {
  componentDidMount() {
    this.props.actions.fetchData({
      amount: 20,
      page: 0,
    });
  }

  render() {
    const { data, fetchDataRequestStatus } = this.props;

    return (
      <div className={styles['hotels-container']}>
        {fetchDataRequestStatus === 'pending' &&
          <div className={styles['hotels-container--pending']}>
            <span>Requesting data...</span>
          </div>
        }

        {fetchDataRequestStatus === 'success' &&
          <div className={styles['hotels-container--success']}>
            <HotelsList data={data} />
          </div>
        }

        {fetchDataRequestStatus === 'fail' &&
          <div className={styles['hotels-container--fail']}>
            <span>Unable to fetch hotels.</span>
          </div>
        }
      </div>
    );
  }
}

const mapStateToProps = ({ hotels }) => ({ ...hotels });

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(HotelsActions, dispatch),
});

HotelsContainer.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({})),
  actions: PropTypes.shape({
    fetchData: PropTypes.func,
  }),
  fetchDataRequestStatus: PropTypes.oneOf(['success', 'pending', 'fail']),
};

export default connect(mapStateToProps, mapDispatchToProps)(HotelsContainer);
