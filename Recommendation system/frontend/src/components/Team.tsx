import '../css/team.css'


const teamMembers = [
  {
    name: 'Dr.MatiUllah Qureshi',
    role: 'Project Supervisor',
    github: 'https://github.com/ShahzadDiyal',
    linkedin: 'https://www.linkedin.com/in/your-profile/',
    image: 'about.png',
  },
  {
    name: 'Muhammad Shahzad',
    role: 'Project Developer',
    github: 'https://github.com/ShahzadDiyal',
    linkedin: 'https://www.linkedin.com/in/your-profile/',
    image: 'shahzad.png',
  },
];

const TeamSection = () => {
  return (
    <div className="team-section py-5">
      <h2 className="text-center text-white mb-2">Meet the Team</h2>
      <p className="text-center mb-3 text-white">
        Department of Computer Science, Govt College No.1 Dera Ismail Khan <br />
        Supervised by: Dr. MatiUllah Qureshi, Final Year Project Advisor and Supervisor
      </p>

      <div className="row justify-content-center">
        {teamMembers.map((member, index) => (
          <div className="col-md-4 team-card text-center mb-4" key={index}>
            <img
              src={member.image}
              alt={member.name}
              className="rounded-circle mb-3"
              style={{ width: '150px', height: '150px', objectFit: 'cover' }}
            />
            <h5 className="text-white">{member.name}</h5>
            <p className="text-white">{member.role}</p>
            <div>
              <a
                href={member.github}
                className="btn btn-dark btn-sm me-2"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
              <a
                href={member.linkedin}
                className="btn btn-primary btn-sm"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamSection;
