export default function Header() {
  return (
    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
      <div>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white">
          FABIO <span className="text-gold">LOPEZ</span>
        </h1>
        <p className="text-xl font-medium text-gold uppercase tracking-widest mt-1">
          UEFA Pro Coach
        </p>
        <p className="text-sm text-gray-400 max-w-xl mt-2 italic">
          “Each coach must be prepared to use the game system that better adapts
          to the characteristics of the players in the team”
        </p>
      </div>
      <div className="flex gap-3 flex-wrap">
        <a href="#" className="btn-gold">
          <i className="fas fa-eye mr-2"></i>View Work
        </a>
        <a href="#" className="btn-gold">
          <i className="fas fa-download mr-2"></i>Download CV
        </a>
      </div>
    </div>
  );
}
