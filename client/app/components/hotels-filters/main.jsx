import styles from './main.scss';
import Select from '../select';
import Input from '../input';

const sortByValues = [
  'Distance',
  'Stars',
  'MinCost',
  'UserRating',
];

const sortDropdownItems = sortByValues.map(i => ({
  text: i,
  value: i,
}));

const starsDropdownItems = [...Array(6)].map((item, index) => ({
  text: `${index} stars`,
  value: `${index}`,
}));

const userRatingsDropdownItems = [...Array(11)].map((item, index) => ({
  text: `${index}`,
  value: `${index}`,
}));

const minCostDropdownItems = [...Array(11)].map((item, index) => ({
  text: `${index * 500}`,
  value: `${index * 500}`,
}));

const HotelsFilters = ({ onInputChange }) =>
  <div className={styles['hotels-filters']}>
    <div className={styles['hotels-filters--item']}>
      <Select
        name='Sort'
        label='Sort'
        placeholder='Sort'
        items={sortDropdownItems}
        onChange={onInputChange}
      />
    </div>

    <div className={styles['hotels-filters--item']}>
      <Select
        name='Stars'
        label='Stars'
        placeholder='Stars'
        items={starsDropdownItems}
        onChange={onInputChange}
      />
    </div>

    <div className={styles['hotels-filters--item']}>
      <Select
        name='UserRating'
        label='UserRating'
        placeholder='UserRating'
        items={userRatingsDropdownItems}
        onChange={onInputChange}
      />
    </div>

    <div className={styles['hotels-filters--item']}>
      <Select
        name='MinCost'
        label='MinCost'
        placeholder='MinCost'
        items={minCostDropdownItems}
        onChange={onInputChange}
      />
    </div>

    <div className={styles['hotels-filters--item']}>
      <Input
        type='text'
        name='Name'
        label='Name'
        placeholder='Name'
        onChange={onInputChange}
      />
    </div>
  </div>
;

HotelsFilters.displayName = 'HotelsFilters';

HotelsFilters.propTypes = {
  onInputChange: PropTypes.func,
};

HotelsFilters.defaultProps = {
  onInputChange: () => {},
};

export default HotelsFilters;
