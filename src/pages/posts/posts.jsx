import React from 'react';
import { JobPost } from 'components/JobPost';

export const Posts = () => {
  const jobCategories = [
    { label: 'Apple', value: 1 },
    { label: 'Facebook', value: 2 },
    { label: 'Netflix', value: 3 },
    { label: 'Tesla', value: 4 },
    { label: 'Amazon', value: 5 },
    { label: 'Alphabet', value: 6 },
  ];
  const jobTypes=[]

  return (
    <div className="row">
      <div className="col-12 col-xs-12">
        <div className="card">
          <div className="card-body">
            <JobPost jobCategories={jobCategories} />
          </div>
        </div>
      </div>
    </div>
  );
};
