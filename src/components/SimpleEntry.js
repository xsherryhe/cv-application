import { Component } from 'react';

import EditButton from './EditButton';
import DeleteButton from './DeleteButton';
import SingleInputForm from './SingleInputForm';

export default class SimpleEntry extends Component {
  constructor(props) {
    super(props);

    this.state = { content: this.props.startContent, editOn: false };
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
    const { deletable } = this.props;
    const { content, editOn } = this.state;
    return (
      <div className="entry">
        {editOn ? (
          <SingleInputForm
            startValue={content}
            handleSubmit={this.updateContent}
          />
        ) : (
          <div className="main">{content}</div>
        )}
        {!editOn && <EditButton handleClick={this.showEdit} />}
        {!editOn && deletable && <DeleteButton />}
      </div>
    );
  }
}

SimpleEntry.defaultProps = { startContent: '', deletable: false };
