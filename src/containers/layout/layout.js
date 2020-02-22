import React from 'react';

export default function Layout(props) {
  return (
    <div>
      <nav>NavBar</nav>
      {props.children}
    </div>
  );
}
