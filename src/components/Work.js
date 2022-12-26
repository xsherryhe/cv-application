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
          startDate: new Date(1790, 3),
          endDate: 'Present',
          details: [
            'Headed multiple trips around the Atlantic',
            'Responsible for everyone on the ship',
            'Thwarted at least three mutinies against myself',
            'Defeated monsters such as Krakens and Crab Soldiers',
            'Survived till the end',
          ],
        },
        {
          id: uniqid(),
          company: 'The Stargazer',
          position: 'First Mate',
          startDate: new Date(1784, 7),
          endDate: new Date(1790, 2),
          details: [
            'Ensured smooth sailing and crew satisfaction',
            'Traveled the seven seas',
            'Had zero incidents involving vengeful sealife or electrified ocean crystals',
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
