import React, { useState, useEffect } from 'react';
import { projectsData } from '../data';
import { projectsNav } from '../data';
import Project from './Project';

const Projects = () => {
  const [item, setItem] = useState({ name: 'all' });
  const [projects, setProjects] = useState([]);
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (item.name === 'all') {
      setProjects(projectsData);
    } else {
      const newProjects = projectsData.filter((project) => {
        return project.category.toLowerCase() === item.name;
      });

      setProjects(newProjects);
    }
  }, [item]);

  const handleClick = (e, index) => {
    setItem({ name: e.target.textContent.toLowerCase() });
    setActive(index);
  };

  return (
    <div>
      {/* nav */}
      <nav className='mb-12 max-w-xl mx-auto'>
        <ul className='flex flex-col md:flex-row justify-evenly items-center text-white'>
          {projectsNav.map((navItem, index) => (
            <li
              onClick={(e) => handleClick(e, index)}
              className={`${
                active === index ? 'active' : ''
              } cursor-pointer capitalize m-4`}
              key={index}
            >
              {navItem.name}
            </li>
          ))}
        </ul>
      </nav>

      {/* projects */}
      <section className='grid lg:grid-cols-3 
      gap-y-12 lg:gap-x-8 lg:gap-y-8'>
        {projects.map((project, index) => (
          <Project item={project} key={project.id} />
        ))}
      </section>
    </div>
  );
};

export default Projects;
