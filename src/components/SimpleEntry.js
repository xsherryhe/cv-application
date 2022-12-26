import { Component } from 'react';

import EditButton from './EditButton';
import DeleteButton from './DeleteButton';
import SimpleEntryForm from './SimpleEntryForm';

export default class SimpleEntry extends Component {
  constructor(props) {
    super(props);

    this.state = { content: this.props.content, editOn: false };
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
    const { inputType, handleDelete } = this.props;
    const { content, editOn } = this.state;
    return (
      <div className="entry">
        {editOn ? (
          <SimpleEntryForm
            startValue={content}
            inputType={inputType}
            handleSubmit={this.updateContent}
          />
        ) : (
          <div className="main">{content}</div>
        )}
        {!editOn && <EditButton handleClick={this.showEdit} />}
        {!editOn && handleDelete && <DeleteButton handleClick={handleDelete} />}
      </div>
    );
  }
}

SimpleEntry.defaultProps = {
  inputType: 'text',
  handleDelete: false,
};
