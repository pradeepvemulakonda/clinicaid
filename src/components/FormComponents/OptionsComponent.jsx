import React from 'react';

export const OptionsComponent = options =>
  options.map(option =>
    <option key={option.key} value={option.value}>
      {option.key}
    </option>
  );
