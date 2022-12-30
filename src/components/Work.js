import { Component } from 'react';

import Section from './Section';
import WorkEntry from './WorkEntry';
import uniqid from 'uniqid';

export default class Work extends Component {
  constructor(props) {
    super(props);

    this.state = {
      entries: [
        {
          id: uniqid(),
          company: 'The Obra Dinn',
          position: 'Captain of the Ship',
          startDate: { month: 3, year: 1790, present: false },
          endDate: { month: null, year: null, present: true },
          details: [
            {
              id: uniqid(),
              content: 'Headed multiple trips around the Atlantic',
            },
            { id: uniqid(), content: 'Responsible for everyone on the ship' },
            {
              id: uniqid(),
              content: 'Thwarted at least three mutinies against myself',
            },
            {
              id: uniqid(),
              content: 'Defeated monsters such as Krakens and Crab Soldiers',
            },
            { id: uniqid(), content: 'Survived till the end' },
          ],
        },
        {
          id: uniqid(),
          company: 'The Stargazer',
          position: 'First Mate',
          startDate: { month: 7, year: 1784, present: false },
          endDate: { month: 2, year: 1790, present: false },
          details: [
            {
              id: uniqid(),
              content: 'Ensured smooth sailing and crew satisfaction',
            },
            { id: uniqid(), content: 'Traveled the seven seas' },
            {
              id: uniqid(),
              content:
                'Had zero incidents involving vengeful sealife or electrified ocean crystals',
            },
          ],
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
        name="Work"
        entries={entries.map(
          ({ id, company, position, startDate, endDate, details }) => ({
            id,
            entry: (
              <WorkEntry
                company={company}
                position={position}
                startDate={startDate}
                endDate={endDate}
                details={details}
                handleDelete={() => this.deleteEntry(id)}
              />
            ),
          })
        )}
      />
    );
  }
}
