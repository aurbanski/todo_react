import React from 'react'
import {partial} from '../../lib/utils'

export const TodoItem = (props) => {
  const handleToggle = partial(props.handleToggle, props.id);
  const handleRemove = partial(props.handleRemove, props.id)
  return (
    <li >
      <span className="delete-item"><a href="#" onClick={handleRemove}>x</a></span>
      <input onChange={handleToggle} type="checkbox" checked={props.isComplete}/>{props.name}
    </li>
  );
};

TodoItem.propTypes = {
  name: React.PropTypes.string.isRequired,
  isComplete: React.PropTypes.bool
}