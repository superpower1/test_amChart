import React, {Component} from 'react';
import Select from 'react-select';

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' }
];

class ReactSelect extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      value:''
    }
  }

  handleChange = (value) => {
    this.setState({value})
  }

  render() {
    return (
      <div style={{width:"500px", height:"200px"}}>
        <Select
          value={this.state.value}
          onChange={this.handleChange}
          options={options}
        />
      </div>
    );
  }
}

export default ReactSelect;
