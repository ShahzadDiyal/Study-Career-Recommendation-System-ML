import '../css/feature.css'

const features = [
  { img: 'generative.png', title: 'AI/ML-based recommendations' },
  { img: 'question.png', title: 'Personalized suggestions' },
  { img: 'tap.png', title: 'Easy-to-use interface' },
  { img: 'review.png', title: 'Real-time feedback or scoring' },
  { img: 'progress-tracking.png', title: 'Progress Tracking & Analytics' },
  { img: 'calendar.png', title: 'Smart Scheduling & Reminders' }
];

const Features = () => {
  return (
    <div className="feature-container">
      <p className="heading">Key Features</p>
      <p className="feature-description">
        Personalized learning paths, intelligent course suggestions, progress tracking, adaptive algorithms, content relevance, student insights, real-time feedback, and seamless integration.
      </p>
      <div className="card-grid">
        {features.map((feature, index) => (
          <div key={index} className="card">
            <img className='image' src={feature.img} alt={feature.title} />
            <p className="card-title">{feature.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
