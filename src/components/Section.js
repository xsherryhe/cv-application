import { Component } from 'react';
import '../styles/Section.css';

import AddButton from './AddButton';
import EntryForm from './EntryForm';

export default class Section extends Component {
  constructor(props) {
    super(props);

    this.state = { newOn: false };

    ['showNew', 'hideNew', 'handleAdd'].forEach(
      (method) => (this[method] = this[method].bind(this))
    );
  }

  showNew() {
    this.props.disableAll();
    this.setState({ newOn: true });
  }

  hideNew() {
    this.props.enableAll();
    this.setState({ newOn: false });
  }

  handleAdd(inputValues) {
    this.hideNew();
    this.props.addEntry(inputValues);
  }

  render() {
    const { name, attributes, entries, inlineForm, shortForm } = this.props;
    const { newOn } = this.state;

    return (
      <section className={name.toLowerCase().split(' ').join('-')}>
        <h2>
          {name} <AddButton handleClick={this.showNew} />
        </h2>
        {newOn && (
          <div>
            <EntryForm
              inline={inlineForm}
              short={shortForm}
              startValues={Object.entries(attributes).reduce(
                (attributes, [attribute, type]) => ({
                  ...attributes,
                  [attribute]: {
                    value:
                      {
                        date: { month: '', year: new Date().getFullYear() },
                        list: [],
                      }[type] || '',
                    type,
                  },
                }),
                {}
              )}
              handleClose={this.hideNew}
              handleSubmit={this.handleAdd}
            />
          </div>
        )}
        {entries.map(({ id, entry }) => (
          <div key={id}>{entry}</div>
        ))}
      </section>
    );
  }
}

Section.defaultProps = { entries: [], inlineForm: false, shortForm: false };
