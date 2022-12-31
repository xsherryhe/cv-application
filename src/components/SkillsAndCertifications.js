import { Component } from 'react';

import Section from './Section';
import SkillsAndCertificationsEntry from './SkillsAndCertificationsEntry';
import uniqid from 'uniqid';

export default class SkillsAndCertifications extends Component {
  constructor(props) {
    super(props);

    this.state = {
      entries: [
        'Nepotism',
        'Advanced mermaid interrogation techniques',
        'Passenger safety',
        'Telling people apart based on their shoes and socks',
      ].map((content) => ({ id: uniqid(), content })),
    };

    ['addEntry', 'deleteEntry'].forEach(
      (method) => (this[method] = this[method].bind(this))
    );
  }

  addEntry(inputValues) {
    this.setState({
      entries: [
        { content: inputValues.content.value, id: uniqid() },
        ...this.state.entries,
      ],
    });
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
        name="Skills and Certifications"
        inlineForm={true}
        attributes={{ content: 'text' }}
        addEntry={this.addEntry}
        entries={entries.map(({ id, content }) => ({
          id,
          entry: (
            <SkillsAndCertificationsEntry
              content={content}
              handleDelete={() => this.deleteEntry(id)}
            />
          ),
        }))}
      />
    );
  }
}
