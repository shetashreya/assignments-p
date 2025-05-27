import React from 'react';
import UserBadge from './UserBadge';
import StatusToggle from './StatusToggle';
import TaskList from './TaskList';
import ProfileViewer from './ProfileViewer';

const Showcase = () => {
  return (
    <div style={{ padding: '2rem', maxWidth: '800px', margin: 'auto' }}>
      <h1>Component Showcase</h1>

      <section>
        <h2>UserBadge</h2>
        <UserBadge name="Alex" role="Admin" isVerified={true} />
        <UserBadge name="Josh" role="Member" isVerified={false} />
      </section>

      <section>
        <h2>StatusToggle</h2>
        <StatusToggle />
      </section>

      <section>
        <h2>TaskList</h2>
        <TaskList />
      </section>

      <section>
        <h2>ProfileViewer</h2>
        <ProfileViewer name="Ava" email="avavolkov@mail.com" isPremiumUser={true} />
        <ProfileViewer name="Julet" email="jjulet@mail.com" isPremiumUser={false} />
      </section>
    </div>
  );
};

export default Showcase;
