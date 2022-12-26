import { Component } from 'react';

import Section from './Section';
import EducationEntry from './EducationEntry';
import uniqid from 'uniqid';

export default class Education extends Component {
  constructor(props) {
    super(props);

    this.state = {
      entries: [
        {
          id: uniqid(),
          school: 'Beast Naval Academy',
          major: 'Siren Studies',
          gpa: '4.0 / 4.0',
          startDate: new Date(1780, 7),
          endDate: new Date(1784, 5),
        },
      ],
    };

    ['deleteEntry'].forEach(
      (method) => (this[method] = this[method].bind(this))
    );
  }

  deleteEntry(deleteId) {
    this.setState({
      entries: this.state.entries.filter(({ id }) => id !== deleteId),
    });
  }

  render() {
    const { entries } = this.state;
    return (
      <Section
        name="Education"
        entries={entries.map(
          ({ id, school, major, gpa, startDate, endDate }) => ({
            id,
            entry: (
              <EducationEntry
                school={school}
                major={major}
                gpa={gpa}
                startDate={startDate}
                endDate={endDate}
                handleDelete={() => this.deleteEntry(id)}
              />
            ),
          })
        )}
      />
    );
  }
}
