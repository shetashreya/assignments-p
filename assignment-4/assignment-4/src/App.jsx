import React, { useState } from 'react';
import UserBadge from './components/UserBadge';
import StatusToggle from './components/StatusToggle';
import TaskList from './components/TaskList';
import ProfileViewer from './components/ProfileViewer';
import Showcase from './components/Showcase';

const App = () => {
  const [selectedTask, setSelectedTask] = useState(null);

  const renderComponent = () => {
    switch (selectedTask) {
      case 'task1':
        return (
          <>
            <h2> Task 1: User Badge</h2>
            <UserBadge name="Alex" role="Admin" isVerified={true} />
            <UserBadge name="Josh" role="User" isVerified={false} />
          </>
        );
      case 'task2':
        return (
          <>
            <h2>Task 2: Status Toggle</h2>
            <StatusToggle />
          </>
        );
      case 'task3':
        return (
          <>
            <h2>Task 3: Task List</h2>
            <TaskList />
          </>
        );
      case 'task4':
        return (
          <>
            <h2>Task 4: Profile Viewer</h2>
            <ProfileViewer name="Ava" email="avavolkov@mail.com" isPremiumUser={true} />
            <ProfileViewer name="Julet" email="jjulet@mail.com" isPremiumUser={false} />
          </>
        );
      case 'task5':
        return (
          <>
            <h2>Task 5: Showcase</h2>
            <Showcase />
          </>
        );
      default:
        return <p>select tasks </p>;
    }
  };

  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial' }}>
      <h1>Assignment-4</h1>
      
      <div style={{ marginBottom: '1rem' }}>
        <button onClick={() => setSelectedTask('task1')}>Task 1</button>{' '}
        <button onClick={() => setSelectedTask('task2')}>Task 2</button>{' '}
        <button onClick={() => setSelectedTask('task3')}>Task 3</button>{' '}
        <button onClick={() => setSelectedTask('task4')}>Task 4</button>{' '}
        <button onClick={() => setSelectedTask('task5')}>Task 5</button>
      </div>

      <hr />

      <div style={{ marginTop: '2rem' }}>
        {renderComponent()}
      </div>
    </div>
  );
};

export default App;
