import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Storylist.css';

function StoryList({ stories }) {
  return (
    <div className="row">
      {stories.map((story) => (
        <div key={story.id} className="col-md-4">
          <div className="card mb-4">
            <img src={require(`../image/${story.image}`)} className="card-img-top" alt={story.title} />
            <div className="card-body">
              <h5 className="card-title">{story.title}</h5>
              <p className="card-text">{story.body.slice(0, 100)}...</p>
              <Link to={`/story/${story.id}`} className="btn btn-neon">
                Lihat Detail
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default StoryList;
