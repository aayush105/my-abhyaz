import React from 'react';

const Home = () => {
  return (
    <div className="container mx-auto mt-8">
      <div className="text-center">
        <h1 className="display-4 font-weight-bold mb-4">Welcome to Abhyaz - A Learning Platform</h1>
        <p className="lead text-muted mb-8">
          Abhyaz is dedicated to providing high-quality learning resources and courses to help you grow your skills.
        </p>
      </div>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
        <div className="col">
          <div className="card h-100">
            <div className="card-body">
              <h2 className="card-title h4 font-weight-bold mb-2">Web Development Fundamentals</h2>
              <p className="card-text text-muted">Learn the basics of web development with HTML, CSS, and JavaScript.</p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100">
            <div className="card-body">
              <h2 className="card-title h4 font-weight-bold mb-2">Digital Marketing Mastery</h2>
              <p className="card-text text-muted">Master the art of digital marketing with our comprehensive courses.</p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100">
            <div className="card-body">
              <h2 className="card-title h4 font-weight-bold mb-2">Data Science Essentials</h2>
              <p className="card-text text-muted">Explore the world of data science and analytics with our expert-led courses.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
