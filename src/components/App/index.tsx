import * as React from 'react';

export const App = () => {
  const [a] = React.useState(0);
  if (a === 0) {
    throw new Error('Fuck');
  }
  return (
    <div>
      <h1>Hello, world</h1>
    </div>
  );
};
