import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import HotelsActions from './state/actions';

import HotelsList from '../../components/hotels-list';

import styles from './main.scss';

const sortByValues = [
  'Distance',
  'Stars',
  'MinCost',
  'UserRating',
];

class HotelsContainer extends React.Component {
  constructor(props) {
    super(props);

    this.userInteractionTimeout = undefined;

    this.handleFilterByChange = this.handleFilterByChange.bind(this);
    this.handleSortByChange = this.handleSortByChange.bind(this);
    this.handleUserInteration = this.handleUserInteration.bind(this);
  }

  // Lifecycle
  // =============================================
  componentDidMount() {
    this.props.actions.fetchData();
  }

  // Getters
  // =============================================
  getSelectedFilterValue(filter = {}) {
    return filter.value;
  }

  // Events
  // =============================================
  handleFilterByChange(event) {
    const { filters } = this.props;
    const { attributes, value } = event.target;
    const key = attributes.name.value;

    const params = {
      filterBy: {
        ...filters.filterBy,
        [key]: value,
      },
    };

    if (value === '' || typeof value === 'undefined') {
      delete params.filterBy[key];
    }

    this.props.actions.fetchData(params);
  }

  handleSortByChange(event) {
    const { filters } = this.props;
    const params = {
      filterBy: {
        ...filters.filterBy,
      },
      sortBy: event.target.value,
    };

    this.props.actions.fetchData(params);
  }

  handleUserInteration(event, type) {
    event.persist();

    const callbacks = {
      filterBy: this.handleFilterByChange,
      sortBy: this.handleSortByChange,
    };

    if (!callbacks[type]) {
      return;
    }

    window.clearTimeout(this.userInteractionTimeout);

    this.userInteractionTimeout = window.setTimeout(() => {
      callbacks[type](event);
    }, 500);
  }

  // Render
  // =============================================
  render() {
    const { data, fetchDataRequestStatus } = this.props;

    return (
      <div className={styles['hotels-container']}>
        <div className={styles['hotels-header']}>
          <p>Stars</p>
          <select
            onChange={event => this.handleUserInteration(event, 'filterBy')}
            name='Stars'
          >
            {[...Array(5)].map((item, index) =>
              <option key={index} value={(index + 1)}>
                {(index + 1)}
              </option>
            )}
          </select>
        </div>

        <div className={styles['hotels-header']}>
          <p>userRatings</p>
          <select
            onChange={event => this.handleUserInteration(event, 'filterBy')}
            name='UserRating'
          >
            {[...Array(10)].map((item, index) =>
              <option key={index} value={(index + 1)}>
                {(index + 1)}
              </option>
            )}
          </select>
        </div>

        <div className={styles['hotels-header']}>
          <p>MinCost</p>
          <select
            onChange={event => this.handleUserInteration(event, 'filterBy')}
            name='MinCost'
          >
            {[...Array(50)].map((item, index) =>
              <option key={index} value={(index + 1) * 200}>
                {(index + 1) * 200}
              </option>
            )}
          </select>
        </div>

        <div className={styles['hotels-header']}>
          <p>Name</p>
          <input
            type='text'
            name='Name'
            onChange={event => this.handleUserInteration(event, 'filterBy')}
          />
        </div>

        <div className={styles['hotels-header']}>
          <p>Sort</p>
          <select
            onChange={event => this.handleUserInteration(event, 'sortBy')}
            name='Sort'
          >
            {sortByValues.map((item, index) =>
              <option key={index} value={(index + 1) * 200}>
                {item}
              </option>
            )}
          </select>
        </div>

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
  filters: PropTypes.shape({}),
  actions: PropTypes.shape({
    fetchData: PropTypes.func,
    sortBy: PropTypes.func,
  }),
  fetchDataRequestStatus: PropTypes.oneOf(['success', 'pending', 'fail']),
};

export default connect(mapStateToProps, mapDispatchToProps)(HotelsContainer);
