import { Component } from 'react';

import EditButton from './EditButton';
import DeleteButton from './DeleteButton';
import EntryForm from './EntryForm';

export default class SimpleEntry extends Component {
  constructor(props) {
    super(props);

    this.state = {
      values: {
        content: { value: this.props.content, type: this.props.inputType },
      },
      editOn: false,
    };
    ['showEdit', 'hideEdit', 'updateValues'].forEach(
      (method) => (this[method] = this[method].bind(this))
    );
  }

  showEdit() {
    this.setState({ editOn: true });
  }

  hideEdit() {
    this.setState({ editOn: false });
  }

  updateValues(inputValues) {
    this.setState({ values: inputValues, editOn: false });
  }

  render() {
    const { handleDelete } = this.props;
    const { values, editOn } = this.state;
    const content = values.content.value;
    return (
      <div>
        {editOn ? (
          <EntryForm
            inline={true}
            startValues={values}
            handleClose={this.hideEdit}
            handleSubmit={this.updateValues}
          />
        ) : (
          <div className="entry">
            <div className="main">{content}</div>
            <EditButton handleClick={this.showEdit} />
            {handleDelete && <DeleteButton handleClick={handleDelete} />}
          </div>
        )}
      </div>
    );
  }
}

SimpleEntry.defaultProps = {
  inputType: 'text',
  handleDelete: false,
};
