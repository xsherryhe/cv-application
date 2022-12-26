import { Component } from 'react';

import Section from './Section';
import HonorsAndAwardsEntry from './HonorsAndAwardsEntry';
import uniqid from 'uniqid';

export default class HonorsAndAwards extends Component {
  constructor(props) {
    super(props);

    this.state = {
      entries: [
        {
          id: uniqid(),
          content: 'Most Detailed Insurance Log Award',
          date: new Date(1808, 1),
        },
        {
          id: uniqid(),
          content: 'Best Leader of a Fictional Ship Award',
          date: new Date(2018, 9),
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
        name="Honors and Awards"
        entries={entries.map(({ id, content, date }) => ({
          id,
          entry: (
            <HonorsAndAwardsEntry
              content={content}
              date={date}
              handleDelete={() => this.deleteEntry(id)}
            />
          ),
        }))}
      />
    );
  }
}
