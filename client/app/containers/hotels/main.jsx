import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import HotelsActions from './state/actions';

import HotelsList from '../../components/hotels-list';
import HotelsFilters from '../../components/hotels-filters';

import styles from './main.scss';

class HotelsContainer extends React.Component {
  constructor(props) {
    super(props);

    this.timeout = undefined;

    this.handleUserInteraction = this.handleUserInteraction.bind(this);
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
  getFilterParameters(selectedItem) {
    const { filters, sort } = this.props.params;
    const { value, inputName } = selectedItem;

    const params = {
      filters: {
        ...filters,
        [inputName]: value,
      },
      sort,
    };

    if (value === '' || typeof value === 'undefined') {
      delete params.filters[inputName];
    }

    return params;
  }

  getSortParameters(selectedItem) {
    const { filters } = this.props.params;

    return {
      filters,
      sort: selectedItem.value,
    };
  }

  handleUserInteraction(selectedItem) {
    window.clearTimeout(this.timeout);

    this.timeout = window.setTimeout(() => {
      let params;

      if (selectedItem.inputName === 'Sort') {
        params = this.getSortParameters(selectedItem);
      } else {
        params = this.getFilterParameters(selectedItem);
      }

      this.props.actions.fetchData(params);
    }, 500);
  }

  // Render
  // =============================================
  render() {
    const { data, fetchDataRequestStatus } = this.props;

    return (
      <div className={styles['hotels-container']}>

        <HotelsFilters onInputChange={this.handleUserInteraction} />

        {fetchDataRequestStatus === 'pending' &&
          <div className={styles['hotels-container--pending']}>
            <span>Requesting data...</span>
          </div>
        }

        {fetchDataRequestStatus === 'success' && !!data.length &&
          <div className={styles['hotels-container--success']}>
            <HotelsList data={data} />
          </div>
        }

        {fetchDataRequestStatus === 'success' && !data.length &&
          <div className={styles['hotels-container--success-no-data']}>
            <span>no data available, try changing filters</span>
          </div>
        }

        {fetchDataRequestStatus === 'fail' &&
          <div className={styles['hotels-container--fail']}>
            <span>Unable to fetch hotels.</span>
          </div>
        }

        {
          /*
            we could render a pagination and create a request based on this
            OR
            we display a CTA with an onClick event which shows more result (manual interaction)
            OR
            on scroll, we load more data (automatic, similar to facebook)
         */
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
  params: PropTypes.shape({
    filters: PropTypes.object,
    sort: PropTypes.string,
  }),
  actions: PropTypes.shape({
    fetchData: PropTypes.func,
    sortBy: PropTypes.func,
  }),
  fetchDataRequestStatus: PropTypes.oneOf(['success', 'pending', 'fail']),
};

export default connect(mapStateToProps, mapDispatchToProps)(HotelsContainer);
