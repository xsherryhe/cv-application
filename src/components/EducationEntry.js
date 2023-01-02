import { Component } from 'react';
import '../styles/entry.css';

import EditButton from './EditButton';
import DeleteButton from './DeleteButton';
import DateRange from './DateRange';
import EntryForm from './EntryForm';

export default class EducationEntry extends Component {
  constructor(props) {
    super(props);

    this.state = { values: this.props.values, editOn: false };

    ['showEdit', 'hideEdit', 'updateValues'].forEach((method) => {
      this[method] = this[method].bind(this);
    });
  }

  showEdit() {
    this.props.disableAll();
    this.setState({ editOn: true });
  }

  hideEdit() {
    this.props.enableAll();
    this.setState({ editOn: false });
  }

  updateValues(inputValues) {
    this.hideEdit();
    this.setState({ values: inputValues });
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
          <EntryForm
            startValues={values}
            handleClose={this.hideEdit}
            handleSubmit={this.updateValues}
          />
        ) : (
          <div className="entry">
            <EditButton handleClick={this.showEdit} />
            <DeleteButton handleClick={handleDelete} />
            <h3 className="main">{school}</h3>
            <h4 className="major">Major: {major}</h4>
            <div className="gpa">GPA: {gpa}</div>
            <div className="date-range">
              <DateRange start={startDate} end={endDate} />
            </div>
          </div>
        )}
      </div>
    );
  }
}
