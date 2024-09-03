import React, { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import './alljobs.css';
import JobCard from '../job/job';

const AllJobs = () => {
  const [jobs] = useState([
    {
      title: 'Junior Full Stack Developer',
      company: 'ALTER WEB',
      description: 'Develop and maintain web applications using modern technologies.',
      image: 'images/alter.png',
    },
    {
      title: 'Marketing Content Creator',
      company: 'Tech Co.',
      description: 'Create and manage marketing content across various platforms.',
      image: 'images/marketing.png',
    },
    {
      title: 'Recruitment Specialist',
      company: 'HR Solutions',
      description: 'Handle recruitment processes and candidate management.',
      image: 'images/rekrutim.png',
    },
    {
      title: 'WordPress Developer',
      company: 'WebWorks',
      description: 'Build and customize WordPress websites for clients.',
      image: 'images/wordpress.png',
    },
    {
      title: 'Test Automation Developer',
      company: 'QA Labs',
      description: 'Design and implement automated tests for software products.',
      image: 'images/testautomation.png',
    },
  ]);
  
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredJobs = jobs.filter(job =>
    job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    job.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Container className="mt-4">
      <h2 className="mb-4" style={{color:"#067477"}}>Job Search</h2>
      <Form className="mb-4">
        <Form.Group style={{display:"flex",flexDirection:"row",gap:"1rem",alignItems:"flex-end"}}>
          <Form.Control
            type="text"
            placeholder="Keyword"
            value={searchTerm}
            onChange={handleSearchChange}
          />
     
          <Form.Control
            type="text"
            placeholder="All Roles"
          />
          <Form.Control
            type="text"
            placeholder="All Locations"
          />
       
        <Button variant="primary" className="search">Search</Button> 
        </Form.Group>
      </Form>
      <div>
        {filteredJobs.length > 0 ? (
          filteredJobs.map((job, index) => (
            <JobCard key={index} job={job} />
          ))
        ) : (
          <p>No jobs found</p>
        )}
      </div>
    </Container>
  );
};

export default AllJobs;
