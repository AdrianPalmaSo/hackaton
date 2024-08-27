// Placeholder to host a component
import React from 'react';

const Hours = () => {
  const today = new Date().getDay();
  let hours;

  if (today >= 1 && today <= 5) {
    // Lunes a Viernes
    hours = '10 a.m. - 4 p.m.';
  } else {
    // Sábado y Domingo
    hours = '9 a.m. - 8 p.m.';
  }

  return (
    <div>
      <h2>Today's Hours</h2>
      <p>{hours}</p>
    </div>
  );
};

export default Hours;