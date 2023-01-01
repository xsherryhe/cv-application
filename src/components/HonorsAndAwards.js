import { Component } from 'react';

import Section from './Section';
import HonorsAndAwardsEntry from './HonorsAndAwardsEntry';
import uniqid from 'uniqid';

export default class HonorsAndAwards extends Component {
  constructor(props) {
    super(props);

    this.attributes = { content: 'text', date: 'date' };

    this.state = {
      entries: [
        {
          content: 'Most Detailed Insurance Log Award',
          date: { year: 1808, month: 1 },
        },
        {
          content: 'Best Leader of a Fictional Ship Award',
          date: { year: 2018, month: 9 },
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
        name="Honors and Awards"
        shortForm={true}
        attributes={this.attributes}
        addEntry={this.addEntry}
        entries={entries.map((entry) => ({
          id: entry.id,
          entry: (
            <HonorsAndAwardsEntry
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
