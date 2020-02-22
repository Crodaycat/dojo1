import React from 'react';
import Layout from './containers/layout/layout';
import Tasks from './containers/taks/tasks';

function App() {
  return (
    <div>
      <Layout>
        <Tasks />
      </Layout>
    </div>
  );
}

export default App;
