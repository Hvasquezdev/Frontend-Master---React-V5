import React, { useState, FunctionComponent, SetStateAction, Dispatch } from "react";

const useDropdown = (label: string, defaultState: string, options: string[]) => {
  const [state, setState] = useState(defaultState);
  const id = `use-dropdown-${label.replace(" ", "").toLowerCase()}`;

  const Dropdown: FunctionComponent = () => {
    return (
      <label htmlFor={id}>
        {label}
        <select
          name={id}
          id={id}
          value={state}
          onChange={(e) => setState(e.target.value)}
          onBlur={(e) => setState(e.target.value)}
          disabled={options.length === 0}
        >
          <option>All</option>
          {options.map((opt) => {
            return (
              <option key={opt} value={opt}>
                {opt}
              </option>
            );
          })}
        </select>
      </label>
    );
  };

  return [state, Dropdown, setState] as [string, FunctionComponent, Dispatch<SetStateAction<string>>];
};

export default useDropdown;
