import { Component } from 'react';
import '../styles/entry.css';

import EditButton from './EditButton';
import DeleteButton from './DeleteButton';
import DateRange from './DateRange';
import EntryForm from './EntryForm';

export default class EducationEntry extends Component {
  constructor(props) {
    super(props);

    const attributes = {
      school: 'text',
      major: 'text',
      gpa: 'text',
      startDate: 'date',
      endDate: 'date',
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

  render() {
    const { handleDelete } = this.props;
    const { values, editOn } = this.state;
    const [school, major, gpa, startDate, endDate] = Object.values(values).map(
      ({ value }) => value
    );

    return (
      <div>
        {editOn ? (
          <EntryForm startValues={values} handleSubmit={this.updateValues} />
        ) : (
          <div className="entry">
            <EditButton handleClick={this.showEdit} />
            <DeleteButton handleClick={handleDelete} />
            <h3 className="main">{school}</h3>
            <h4>Major: {major}</h4>
            <h4>GPA: {gpa}</h4>
            <h4>
              <DateRange start={startDate} end={endDate} />
            </h4>
          </div>
        )}
      </div>
    );
  }
}
