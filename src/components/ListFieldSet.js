import '../styles/ListFieldSet.css';
import { humanReadable } from '../utilities';
import uniqid from 'uniqid';

import AddButton from './AddButton';
import InputField from './InputField';
import DeleteButton from './DeleteButton';

export default function ListFieldSet({ name, items, submitted, handleChange }) {
  function addItem() {
    handleChange([...items, { id: uniqid(), content: '' }]);
  }

  function deleteItem(deleteId) {
    return function () {
      handleChange(items.filter(({ id }) => id !== deleteId));
    };
  }

  function handleItemChange(changeId) {
    return function (inputValue) {
      const newItems = items.map((item) =>
        item.id === changeId ? { ...item, content: inputValue } : item
      );
      handleChange(newItems);
    };
  }

  return (
    <div className="field-set list">
      <label>{humanReadable(name)}</label>
      <AddButton handleClick={addItem} />
      <ul>
        {items.map(({ id, content }) => (
          <li key={id}>
            <div className="list-item-field">
              <InputField
                value={content}
                submitted={submitted}
                handleChange={handleItemChange(id)}
              />
              <DeleteButton handleClick={deleteItem(id)} />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
