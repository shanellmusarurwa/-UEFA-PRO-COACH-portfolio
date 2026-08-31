const skills = [
  { name: "Tactical Analysis", level: 95 },
  { name: "Man Management", level: 92 },
  { name: "Player Development", level: 90 },
  { name: "Scouting & Evaluation", level: 88 },
  { name: "Game Preparation", level: 93 },
  { name: "Leadership", level: 96 },
];

export default function Skills() {
  return (
    <div className="card-dark my-8">
      <h2 className="section-title">
        <i className="fas fa-chart-line mr-2 text-gold"></i> Coaching &
        Management Skills
      </h2>
      <div className="grid md:grid-cols-2 gap-4">
        {skills.map((skill) => (
          <div key={skill.name}>
            <span className="text-sm">{skill.name}</span>
            <div className="skill-bar-bg">
              <div
                className="skill-bar-fill"
                style={{ width: `${skill.level}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
