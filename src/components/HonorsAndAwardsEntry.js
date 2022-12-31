import { Component } from 'react';

import EditButton from './EditButton';
import DeleteButton from './DeleteButton';
import EntryForm from './EntryForm';
import DateComponent from './Date';

export default class HonorsAndAwardsEntry extends Component {
  constructor(props) {
    super(props);

    this.state = { values: this.props.values, editOn: false };

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
    const [content, date] = Object.values(values).map(({ value }) => value);
    return (
      <div>
        {editOn ? (
          <EntryForm
            short={true}
            startValues={values}
            handleClose={this.hideEdit}
            handleSubmit={this.updateValues}
          />
        ) : (
          <div className="entry">
            <h3 className="main">
              {content} - <DateComponent date={date} />
            </h3>
            <EditButton handleClick={this.showEdit} />
            {handleDelete && <DeleteButton handleClick={handleDelete} />}
          </div>
        )}
      </div>
    );
  }
}
