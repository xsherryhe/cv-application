import { Component } from 'react';

import EditButton from './EditButton';
import DeleteButton from './DeleteButton';
import EntryForm from './EntryForm';

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

  updateContent({ content }) {
    this.setState({ content: content.value, editOn: false });
  }

  render() {
    const { inputType, handleDelete } = this.props;
    const { content, editOn } = this.state;
    return (
      <div className="entry">
        {editOn ? (
          <EntryForm
            inline={true}
            startValues={{ content: { value: content, type: inputType } }}
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
