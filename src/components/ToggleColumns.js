import React from 'react'

export const ToggleColumns = (props) => {
  const onCheckboxClick = ({ target }) => {
    props.onCheckboxClick(target.id, target.checked);
  }

  return (
    <div className="toggle-columns">
      { 
        Object.keys(props.columns).map((each, index) => {
          return ( 
          <div key={index}>
            <label htmlFor={each}>
              {each}
            </label>
            <input
              id={each}
              name={each}
              checked={props.columns[each]}
              onChange={onCheckboxClick}
              type="checkbox" />
          </div>)
        })
      }
    </div>
  );
}
