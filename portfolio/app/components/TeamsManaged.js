export default function TeamsManaged() {
  const teams = [
    { year: "2025 – 2026", name: "FC FASSEL", country: "Liberia" },
    {
      year: "2024 – 2025",
      name: "PRETORIA CALLIES FC",
      country: "South Africa",
    },
    { year: "2021 – 2024", name: "COACH EDUCATOR", country: "Vietnam" },
    { year: "2019 – 2021", name: "THANH HOA FC", country: "Vietnam" },
    { year: "2018 – 2019", name: "BORNEO FC", country: "Indonesia" },
    {
      year: "2016 – 2018",
      name: "AL-AHLI SAUDI FC U23",
      country: "Saudi Arabia",
    },
    { year: "2016", name: "AL-OROUBA SC", country: "Oman" },
    {
      year: "2015 – 2016",
      name: "BANGLADESH NATIONAL TEAM",
      country: "Bangladesh",
    },
    { year: "2013 – 2014", name: "BG SPORTS CLUB", country: "Maldives" },
    { year: "2011 – 2012", name: "PSMS MEDAN", country: "Indonesia" },
    { year: "2010 – 2011", name: "SABAHA FA", country: "Malaysia" },
    { year: "2008 – 2009", name: "FK SIAULIAI", country: "Lithuania" },
    { year: "2007 – 2008", name: "FK BANGA GARGŽDAI", country: "Lithuania" },
  ];

  return (
    <div className="card-dark my-8">
      <h2 className="section-title">
        <i className="fas fa-flag mr-2 text-gold"></i> Teams Managed
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
        {teams.map((team, idx) => (
          <div key={idx}>
            <span className="text-gold font-bold">{team.year}</span>
            <br />
            {team.name}{" "}
            <span className="text-xs text-gray-400">{team.country}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
