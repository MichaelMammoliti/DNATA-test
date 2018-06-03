import styles from './main.scss';

class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: props.value
    };

    this.handleChange = this.handleChange.bind(this);
  }

  // Events
  // =============================================
  handleChange(event) {
    const { name, onChange } = this.props;
    const { value } = event.target;

    this.setState({
      value,
    });

    onChange({
      value,
      inputName: name,
    });
  }

  // Render
  // =============================================
  render() {
    const {
      type,
      name,
      placeholder,
      label,
    } = this.props;

    const { value } = this.state;

    return (
      <div className={styles['input']}>
        <div className={styles['input--label']}>
          <span>{label}</span>
        </div>

        <div className={styles['input--field']}>
          <input
            type={type}
            name={name}
            defaultValue={value || ''}
            placeholder={placeholder}
            onChange={this.handleChange}
          />
        </div>
      </div>
    );
  }
}

Input.displayName = 'Input';

Input.defaultProps = {
  onChange: () => {},
  type: 'text',
  value: '',
};

Input.propTypes = {
  value: PropTypes.string,
  name: PropTypes.string,
  type: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
};

export default Input;
