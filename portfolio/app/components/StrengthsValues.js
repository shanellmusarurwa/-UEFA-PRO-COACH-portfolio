export default function StrengthsValues() {
  const strengths = [
    "Tactical Analysis & Game Preparation",
    "Man Management & Leadership",
    "Player Development & Talent Scouting",
    "High Performance Culture",
    "Long Term Planning & Goal Setting",
    "Problem Solving & Decision Making",
  ];

  const values = [
    "Integrity & Discipline",
    "Respect & Teamwork",
    "Continuous Development",
    "Leadership & Communication",
    "Commitment to Results",
  ];

  return (
    <div className="card-dark">
      <h2 className="section-title">
        <i className="fas fa-star mr-2 text-gold"></i> Key Strengths
      </h2>
      <ul className="grid grid-cols-2 gap-1 text-sm text-gray-300 mb-4">
        {strengths.map((s, i) => (
          <li key={i}>✓ {s}</li>
        ))}
      </ul>
      <div className="gold-line"></div>
      <h3 className="text-gold font-semibold text-sm uppercase tracking-wider mt-2">
        Values
      </h3>
      <div className="flex flex-wrap gap-2 mt-2">
        {values.map((v, i) => (
          <span
            key={i}
            className="bg-gold text-dark font-semibold px-3 py-0.5 rounded-full text-xs"
          >
            {v}
          </span>
        ))}
      </div>
    </div>
  );
}
