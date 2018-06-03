import classnames from 'classnames/bind';
import styles from './main.scss';

const cx = classnames.bind(styles);

class Select extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedItem: this.getSelectedItem(props.items),
      open: props.open,
    };

    this.handleItemClick = this.handleItemClick.bind(this);
    this.handleHeaderClick = this.handleHeaderClick.bind(this);
  }

  // Getters
  // =============================================
  getSelectedItem(items) {
    return items.find(item => !!item.selected) || {};
  }

  // Events
  // =============================================
  handleItemClick(item) {
    this.setState({
      selectedItem: item,
      open: !this.state.open,
    });

    this.props.onChange({
      ...item,
      inputName: this.props.name,
    });
  }

  handleHeaderClick() {
    this.setState({
      open: !this.state.open,
    });
  }

  // Render
  // =============================================
  render() {
    const { selectedItem, open } = this.state;
    const { items, label, placeholder } = this.props;

    return (
      <div
        className={cx('select', {
          open,
        })}
      >
        <div className={styles['select--label']}>
          <span>{label}</span>
        </div>

        <div className={styles['select--field']}>
          <div
            className={styles['select--header']}
            onClick={this.handleHeaderClick}
          >
            <span>{selectedItem.value || placeholder}</span>
          </div>

          {open &&
            <div className={styles['select--body-container']}>
              <div className={styles['select--body']}>
                {items.map((item, index) =>
                  <div
                    key={index}
                    className={cx('select--body-item', {
                      selected: selectedItem.value === item.value,
                    })}
                    onClick={() => this.handleItemClick(item)}
                  >
                    <span>{item.text}</span>
                  </div>
                )}
              </div>
            </div>
          }
        </div>
      </div>
    );
  }
}

Select.displayName = 'Select';

Select.defaultProps = {
  items: [],
  open: false,
  onChange: () => {},
};

Select.propTypes = {
  name: PropTypes.string,
  open: PropTypes.bool,
  label: PropTypes.string,
  onChange: PropTypes.func,
  selectedIndex: PropTypes.number,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  items: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.string,
    text: PropTypes.string,
  }))
};

export default Select;
