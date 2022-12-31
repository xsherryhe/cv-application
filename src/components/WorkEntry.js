import { Component } from 'react';
import '../styles/entry.css';

import EditButton from './EditButton';
import DeleteButton from './DeleteButton';
import DateRange from './DateRange';
import List from './List';
import EntryForm from './EntryForm';

export default class WorkEntry extends Component {
  constructor(props) {
    super(props);

    this.state = { values: this.props.values, editOn: false };

    ['showEdit', 'hideEdit', 'updateValues'].forEach((method) => {
      this[method] = this[method].bind(this);
    });
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
    const [company, position, startDate, endDate, details] = Object.values(
      values
    ).map(({ value }) => value);

    return (
      <div>
        {editOn ? (
          <EntryForm
            startValues={values}
            handleClose={this.hideEdit}
            handleSubmit={this.updateValues}
          />
        ) : (
          <div className="entry">
            <EditButton handleClick={this.showEdit} />
            <DeleteButton handleClick={handleDelete} />
            <h3 className="main">{company}</h3>
            <h4>{position}</h4>
            <h4>
              <DateRange start={startDate} end={endDate} />
            </h4>
            <List items={details} />
          </div>
        )}
      </div>
    );
  }
}
