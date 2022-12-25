import { Component } from 'react';
import '../styles/Name.css';

import EditButton from './EditButton';
import SingleInputForm from './SingleInputForm';

// TO DO: Move most of this architecture to SimpleEntry and add deletable prop on SimpleEntry
// Have Name and Contact components wrap SimpleEntry
export default class Name extends Component {
  constructor(props) {
    super(props);

    this.state = { content: 'Captain Robert Witterel', editOn: false };
    ['showEdit', 'updateContent'].forEach(
      (method) => (this[method] = this[method].bind(this))
    );
  }

  showEdit() {
    this.setState({ editOn: true });
  }

  updateContent(content) {
    this.setState({ content, editOn: false });
  }

  render() {
    const { content, editOn } = this.state;
    return (
      <div className="name">
        <h1>
          {editOn ? (
            <SingleInputForm
              startValue={content}
              handleSubmit={this.updateContent}
            />
          ) : (
            content
          )}
        </h1>
        {!editOn && <EditButton handleClick={this.showEdit} />}
      </div>
    );
  }
}
