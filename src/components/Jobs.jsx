import React from 'react';
import JobCard from './JobCard';

const Jobs = () => {
  const jobsData = [
    {
      title: 'Web Developer',
      description: 'Join our team as a skilled web developer. Contribute to exciting projects and shape the future of web development.',
      requirements: 'Experience with HTML, CSS, JavaScript, and frameworks like React or Angular.',
    },
    {
      title: 'SEO Specialist',
      description: 'We are looking for an SEO specialist to optimize our online presence and improve search engine rankings.',
      requirements: 'Proven experience in SEO, knowledge of keyword research, and familiarity with SEO tools.',
    },
    {
      title: 'Digital Marketing Manager',
      description: 'Lead our digital marketing efforts. Develop and execute online marketing strategies to drive brand awareness and customer engagement.',
      requirements: 'Previous experience in digital marketing, strong analytical skills, and knowledge of social media platforms.',
    },
    {
      title: 'Software Engineer',
      description: 'Exciting opportunity for a software engineer to work on cutting-edge projects. Join a dynamic team and contribute to innovative solutions.',
      requirements: 'Proficiency in programming languages like Java, C++, or Python. Experience with software development life cycle.',
    },
  ];

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Job Opportunities at Abhyaz</h2>
      <div className="d-flex flex-wrap">
        {jobsData.map((job, index) => (
          <div className="col-md-4" key={index} style={{marginRight:"10px", marginBottom: '20px', flex: '1' }}>
            <JobCard
              title={job.title}
              description={job.description}
              requirements={job.requirements}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Jobs;
