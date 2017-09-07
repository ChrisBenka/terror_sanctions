import React from 'react';

function renderErrors(errors, name) {
  if (!errors || !errors[name]) return false;
  return errors[name].map(error => (
    <div key={error.name} className="error">
      {`${name.charAt(0).toUpperCase()}${name.substring(1)} ${error}`}
    </div>
  ),
  );
}

type Props = {
    name: string, 
    errors?: any, //  eslint-disable-line
}

const Errors = ({ errors, name }: Props) => (
  <div>
    {renderErrors(errors, name)}
  </div>
);

export default Errors;
