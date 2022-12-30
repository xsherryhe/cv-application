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

    const attributes = {
      company: 'text',
      position: 'text',
      startDate: 'date',
      endDate: 'date',
      details: 'list',
    };

    this.state = {
      values: Object.entries(attributes).reduce(
        (attributes, [attribute, type]) => ({
          ...attributes,
          [attribute]: { value: this.props[attribute], type },
        }),
        {}
      ),
      editOn: false,
    };

    ['showEdit', 'updateValues'].forEach((method) => {
      this[method] = this[method].bind(this);
    });
  }

  showEdit() {
    this.setState({ editOn: true });
  }

  updateValues(inputValues) {
    this.setState({ values: inputValues, editOn: false });
  }

  // TO DO: Add list type field set component
  render() {
    const { handleDelete } = this.props;
    const { values, editOn } = this.state;
    const [company, position, startDate, endDate, details] = Object.values(
      values
    ).map(({ value }) => value);

    return (
      <div>
        {editOn ? (
          <EntryForm startValues={values} handleSubmit={this.updateValues} />
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
