import React from 'react';
import { Card, Image } from 'react-bootstrap';

const JobCard = ({ job }) => {
  return (
    <Card className="mb-3">
      <Card.Body>
        <div className="d-flex align-items-stretch">
          <div className="me-3">
            <Image src={job.image} alt={job.title} style={{ width: '80px' }} />
          </div>
          <div>
            <Card.Title>{job.title}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">{job.company}</Card.Subtitle>
            <Card.Text>{job.description}</Card.Text>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
};

export default JobCard;
