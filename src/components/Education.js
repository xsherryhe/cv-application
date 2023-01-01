import { Component } from 'react';

import Section from './Section';
import EducationEntry from './EducationEntry';
import uniqid from 'uniqid';

export default class Education extends Component {
  constructor(props) {
    super(props);

    this.attributes = {
      school: 'text',
      major: 'text',
      gpa: 'text',
      startDate: 'date',
      endDate: 'date',
    };

    this.state = {
      entries: [
        {
          school: 'Beast Naval Academy',
          major: 'Siren Studies',
          gpa: '4.0 / 4.0',
          startDate: { month: 7, year: 1780, present: false },
          endDate: { month: 5, year: 1784, present: false },
        },
      ].map((entry) => ({ ...entry, id: uniqid() })),
    };

    ['addEntry', 'deleteEntry'].forEach(
      (method) => (this[method] = this[method].bind(this))
    );
  }

  addEntry(inputValues) {
    const newEntry = Object.entries(inputValues).reduce(
      (entry, [attribute, { value }]) => ({ ...entry, [attribute]: value }),
      { id: uniqid() }
    );
    this.setState({ entries: [newEntry, ...this.state.entries] });
  }

  deleteEntry(deleteId) {
    return function () {
      this.setState({
        entries: this.state.entries.filter(({ id }) => id !== deleteId),
      });
    };
  }

  render() {
    const { entries } = this.state;
    return (
      <Section
        name="Education"
        attributes={this.attributes}
        addEntry={this.addEntry}
        entries={entries.map((entry) => ({
          id: entry.id,
          entry: (
            <EducationEntry
              values={Object.entries(this.attributes).reduce(
                (attributes, [attribute, type]) => ({
                  ...attributes,
                  [attribute]: { value: entry[attribute], type },
                }),
                {}
              )}
              handleDelete={this.deleteEntry(entry.id)}
            />
          ),
        }))}
      />
    );
  }
}
