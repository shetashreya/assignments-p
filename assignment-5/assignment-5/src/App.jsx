import React from 'react';
import EnhancedForm from './components/EnhancedForm';
import ProjectCard from './components/ProjectCard';

const App = () => {
  const projects = [
    { title: 'Weather App', description: 'Shows weather by city', isLive: true },
    { title: 'Todo App', description: 'Track your daily tasks', isLive: false },
    { title: 'Blog Site', description: 'Write and share blogs', isLive: true },
    { title: 'Portfolio', description: 'My personal portfolio', isLive: false },
    { title: 'Chat App', description: 'Real-time messaging', isLive: true }
  ];

  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>React Assignment</h1>
      
      <h2 style={{ textAlign: 'center' }}>🔹 Enhanced Form</h2>
      <EnhancedForm />

      <h2 style={{ textAlign: 'center' }}>🔹 Project Cards</h2>
      <div style={{ maxWidth: '600px', margin: '0 auto' }}>
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            isLive={project.isLive}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
