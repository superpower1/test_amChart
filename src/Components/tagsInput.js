import React, {Component} from 'react';
import TagsInput from 'react-tagsinput';
import 'react-tagsinput/react-tagsinput.css'

class tagsInput extends Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      tags:[]
    }
  }

  handleChange(tags) {
    this.setState({tags})
  }

  render() {
    return (
      <TagsInput value={this.state.tags} onChange={this.handleChange}/>
    );
  }
}

export default tagsInput;
