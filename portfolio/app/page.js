import Image from "next/image";

export default function Home() {
  return (
    <>
      {/* Header */}
      <div className="flex flex-col items-start justify-between gap-4 mb-8 md:flex-row md:items-center">
        <div>
          <h1 className="text-4xl font-bold tracking-tight text-white md:text-5xl">
            FABIO <span className="text-gold">LOPEZ</span>
          </h1>
          <p className="mt-1 text-xl font-medium tracking-widest uppercase text-gold">
            UEFA Pro Coach
          </p>
          <p className="max-w-xl mt-2 text-sm italic text-gray-400">
            &ldquo;Each coach must be prepared to use the game system that
            better adapts to the characteristics of the players in the
            team&rdquo;
          </p>
        </div>
        <div className="flex items-center gap-4">
          <a
            href="/Fabio cv 2026pdf.pdf"
            download
            className="flex items-center gap-2 px-6 py-2 transition-all duration-300 btn-gold hover:scale-105 hover:shadow-lg hover:shadow-gold/20"
          >
            <i className="fas fa-download"></i>
            Download CV
          </a>
          <div className="flex-shrink-0">
            <div className="w-32 h-32 overflow-hidden transition-all duration-300 border-4 rounded-full shadow-lg md:w-40 md:h-40 border-gold shadow-gold/20 hover:scale-105 hover:shadow-xl hover:shadow-gold/30">
              <Image
                src="./images/COACH.jpeg"
                alt="Fabio Lopez"
                width={160}
                height={160}
                className="object-cover w-full h-full"
                priority
              />
            </div>
          </div>
        </div>
      </div>

      {/* Profile */}
      <div className="mb-8 transition-all duration-300 card-dark hover:shadow-xl hover:shadow-gold/5">
        <h2 className="text-base section-title md:text-lg">
          <i className="mr-2 fas fa-user-tie text-gold animate-pulse"></i>{" "}
          Coaching Profile
        </h2>
        <p className="text-base text-gray-300">
          Italian football manager of Spanish descent with an international
          career spanning Europe, Asia, Africa and the Middle East. UEFA PRO
          licensed coach with extensive experience in team management, tactical
          development, player development and coaching education. Recognized for
          tactical reading of the game, problem solving, leadership and
          excellent communication skills.
        </p>
      </div>

      {/* Tactical Philosophy + Image */}
      <div className="grid gap-6 mb-8 md:grid-cols-2">
        <div className="flex flex-col transition-all duration-300 card-dark hover:shadow-xl hover:shadow-gold/5 hover:-translate-y-1">
          <h2 className="text-base section-title md:text-lg">
            <i className="mr-2 fas fa-futbol text-gold animate-bounce"></i>{" "}
            Tactical Philosophy (Vision)
          </h2>
          <p className="flex-1 space-y-3 text-sm italic leading-relaxed text-gray-300">
            &ldquo;My idea of football is very simple. It starts from the
            precise point that Real Madrid and Barcelona are only two.
          </p>
          <p className="flex-1 space-y-3 text-sm italic leading-relaxed text-gray-300">
            The rest are teams that have to do another type of football. It is
            clear that the coach must adapt to the players he has available and
            reason on technical tactical aspects, but ultimately, as I see it,
            the first rule is to not concede goals.
          </p>
          <p className="flex-1 space-y-3 text-sm italic leading-relaxed text-gray-300">
            Based on the quality of the team that I manage I focus a lot on
            attack options but with attention to the defense. My focus on the
            defensive phase is the main aspect of my vision of the game.
          </p>
          <p className="flex-1 space-y-3 text-sm italic leading-relaxed text-gray-300">
            Because if you are 0-0 to win the game you need a goal, while if you
            are losing 1-0 to win you need 2 goals. I do not think it&apos;s
            smart to think that a game is won by scoring many goals, you win a
            game with the right balance between the attacking game and the
            defensive game.&rdquo;
          </p>
        </div>

        <div className="flex items-center justify-center p-0 overflow-hidden transition-all duration-300 card-dark hover:shadow-xl hover:shadow-gold/5 hover:-translate-y-1">
          <Image
            src="./images/COACH Lopez.jpeg"
            alt="Football Tactics"
            width={800}
            height={600}
            className="object-cover w-full h-full transition-all duration-500 hover:scale-105"
            priority
          />
        </div>
      </div>

      {/* Teams Managed + Football Education & Licences */}
      <div className="grid gap-6 mb-8 md:grid-cols-2">
        <div className="transition-all duration-300 card-dark hover:shadow-xl hover:shadow-gold/5 hover:-translate-y-1">
          <h2 className="text-base section-title md:text-lg">
            <i className="mr-2 fas fa-flag text-gold animate-pulse"></i> Teams
            Managed
          </h2>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {[
              {
                year: "2025 – 2026",
                name: "FC FASSEL",
                country: "Liberia",
                flag: "https://flagcdn.com/w40/lr.png",
              },
              {
                year: "2024 – 2025",
                name: "PRETORIA CALLIES FC",
                country: "South Africa",
                flag: "https://flagcdn.com/w40/za.png",
              },
              {
                year: "2021 – 2024",
                name: "COACH EDUCATOR",
                country: "Vietnam",
                flag: "https://flagcdn.com/w40/vn.png",
              },
              {
                year: "2019 – 2021",
                name: "THANH HOA FC",
                country: "Vietnam",
                flag: "https://flagcdn.com/w40/vn.png",
              },
              {
                year: "2018 – 2019",
                name: "BORNEO FC",
                country: "Indonesia",
                flag: "https://flagcdn.com/w40/id.png",
              },
              {
                year: "2016 – 2018",
                name: "AL-AHLI SAUDI FC U23",
                country: "Saudi Arabia",
                flag: "https://flagcdn.com/w40/sa.png",
              },
              {
                year: "2016",
                name: "AL-OROUBA SC",
                country: "Oman",
                flag: "https://flagcdn.com/w40/om.png",
              },
              {
                year: "2015 – 2016",
                name: "BANGLADESH NATIONAL TEAM",
                country: "Bangladesh",
                flag: "https://flagcdn.com/w40/bd.png",
              },
              {
                year: "2013 – 2014",
                name: "BG SPORTS CLUB",
                country: "Maldives",
                flag: "https://flagcdn.com/w40/mv.png",
              },
              {
                year: "2011 – 2012",
                name: "PSMS MEDAN",
                country: "Indonesia",
                flag: "https://flagcdn.com/w40/id.png",
              },
              {
                year: "2010 – 2011",
                name: "SABAHA FA",
                country: "Malaysia",
                flag: "https://flagcdn.com/w40/my.png",
              },
              {
                year: "2008 – 2009",
                name: "FK SIAULIAI",
                country: "Lithuania",
                flag: "https://flagcdn.com/w40/lt.png",
              },
              {
                year: "2007 – 2008",
                name: "FK BANGA GARGŽDAI",
                country: "Lithuania",
                flag: "https://flagcdn.com/w40/lt.png",
              },
            ].map((team, idx) => (
              <div
                key={idx}
                className="flex items-start gap-2 p-2 transition-all duration-300 rounded-lg hover:pl-2 hover:text-gold hover:bg-gold/5"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={team.flag}
                  alt={`${team.country} flag`}
                  className="w-6 h-4 mt-0.5 rounded-sm shadow-sm object-cover"
                />
                <div>
                  <span className="font-bold text-gold">{team.year}</span>
                  <br />
                  {team.name}{" "}
                  <span className="text-xs text-gray-400">{team.country}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="transition-all duration-300 card-dark hover:shadow-xl hover:shadow-gold/5 hover:-translate-y-1">
          <h2 className="text-base section-title md:text-lg">
            <i className="mr-2 fas fa-graduation-cap text-gold animate-spin-slow"></i>{" "}
            Football Education &amp; Licences
          </h2>
          <ul className="space-y-3 text-gray-300">
            <li className="flex items-center gap-3 transition-all duration-300 hover:pl-2 hover:text-gold">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://flagcdn.com/w40/it.png"
                alt="Italy flag"
                className="object-cover w-6 h-4 rounded-sm shadow-sm"
              />
              <span>
                <span className="font-bold text-gold">2016</span> – UEFA PRO
                LICENSE
              </span>
            </li>
            <li className="flex items-center gap-3 transition-all duration-300 hover:pl-2 hover:text-gold">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://flagcdn.com/w40/it.png"
                alt="Italy flag"
                className="object-cover w-6 h-4 rounded-sm shadow-sm"
              />
              <span>
                <span className="font-bold text-gold">2008</span> – UEFA A
                LICENSE
              </span>
            </li>
            <li className="flex items-center gap-3 transition-all duration-300 hover:pl-2 hover:text-gold">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://flagcdn.com/w40/it.png"
                alt="Italy flag"
                className="object-cover w-6 h-4 rounded-sm shadow-sm"
              />
              <span>
                <span className="font-bold text-gold">2007</span> – UEFA B
                LICENSE
              </span>
            </li>
          </ul>
          <div className="mt-12 gold-line"></div>
          <h3 className="mb-3 text-sm font-semibold tracking-wider uppercase text-gold">
            Coaching Educator &amp; Speaker
          </h3>
          <ul className="space-y-2 text-sm text-gray-300 list-disc list-inside">
            <li className="transition-all duration-300 hover:pl-2 hover:text-gold">
              Sept 2009 – Training Methodology Academy (Italy)
            </li>
            <li className="transition-all duration-300 hover:pl-2 hover:text-gold">
              Mar 2010 – Tactics Training methodology (Italy)
            </li>
            <li className="transition-all duration-300 hover:pl-2 hover:text-gold">
              Sept 2010 – Tactics Training methodology (S.S. Lazio)
            </li>
            <li className="transition-all duration-300 hover:pl-2 hover:text-gold">
              Nov 2010 – Offensive/defensive phase 4-4-2
            </li>
            <li className="transition-all duration-300 hover:pl-2 hover:text-gold">
              Apr 2011 – Offensive/defensive phase 4-3-3
            </li>
            <li className="transition-all duration-300 hover:pl-2 hover:text-gold">
              2016 – Italian Coach Association Seminar – Tactics 4-1-1-4-1
            </li>
          </ul>
          <div className="mt-12 gold-line"></div>
          <h3 className="mb-3 text-sm font-semibold tracking-wider uppercase text-gold">
            Tactic Formations
          </h3>
          <div className="grid grid-cols-2 gap-3">
            <div className="p-3 transition-all duration-300 border rounded-lg bg-gold/5 border-gold/30 hover:border-gold hover:bg-gold/10">
              <div className="mb-1 text-3xl animate-bounce">⚽</div>
              <div className="font-semibold text-gold">4-3-3</div>
              <div className="text-xs text-gray-400">
                Attacking &amp; Possession
              </div>
            </div>
            <div className="p-3 transition-all duration-300 border rounded-lg bg-gold/5 border-gold/30 hover:border-gold hover:bg-gold/10">
              <div className="mb-1 text-3xl animate-bounce">⚽</div>
              <div className="font-semibold text-gold">4-2-2</div>
              <div className="text-xs text-gray-400">
                Defensive &amp; Counter
              </div>
            </div>
          </div>

          {/* Italy and UEFA Flags Section */}
          <div className="mt-16 gold-line"></div>
          <h3 className="mb-3 text-sm font-semibold tracking-wider uppercase text-gold">
            Flags Representation
          </h3>
          <div className="flex items-center gap-6 mt-3">
            <div className="flex items-center gap-2">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://flagcdn.com/w40/it.png"
                alt="Italy flag"
                className="object-cover w-20 h-20 rounded-sm shadow-md"
              />
              <span className="text-sm font-semibold text-gold">Italy</span>
            </div>
            <div className="flex items-center gap-2">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://upload.wikimedia.org/wikipedia/en/thumb/9/9d/UEFA_full_logo.svg/1280px-UEFA_full_logo.svg.png?utm_source=en.wikipedia.org&utm_campaign=index&utm_content=thumbnail"
                alt="UEFA flag"
                className="object-contain w-22 h-22"
              />
              <span className="text-sm font-semibold text-gold">UEFA</span>
            </div>
          </div>
        </div>
      </div>
      {/* Scouting + Strengths */}
      <div className="grid gap-6 mb-8 md:grid-cols-2">
        <div className="transition-all duration-300 card-dark hover:shadow-xl hover:shadow-gold/5 hover:-translate-y-1">
          <h2 className="text-base section-title md:text-lg">
            <i className="mr-2 fas fa-binoculars text-gold animate-pulse"></i>{" "}
            Scouting Career
          </h2>
          <p className="mb-4 text-sm text-gray-300">
            Fabio Lopez also had an important career as a scout with high skills
            to recognize players potentially ready for professional football,
            evaluating in detail each player in his teams discovered talents who
            have achieved goals to play in their Nationals Team.
          </p>
          <div className="space-y-2">
            <div className="flex justify-between p-3 transition-all duration-300 border bg-card rounded-xl border-border-dark hover:border-gold hover:bg-gold/5">
              <span className="font-bold text-gold">ATALANTA B.C.</span>
              <span className="text-gray-400">2003 – 2005</span>
            </div>
            <div className="flex justify-between p-3 transition-all duration-300 border bg-card rounded-xl border-border-dark hover:border-gold hover:bg-gold/5">
              <span className="font-bold text-gold">ACF FIORENTINA</span>
              <span className="text-gray-400">2005 – 2007</span>
            </div>
          </div>
          <div className="pt-3 mt-4 text-sm text-gray-300 border-t border-gold/30">
            <p className="transition-all duration-300 hover:pl-2 hover:text-gold">
              <span className="text-gold">▪</span> Eurolimpia A.S. Roma Academy{" "}
              <span className="text-gray-400">(1996)</span>
            </p>
            <p className="transition-all duration-300 hover:pl-2 hover:text-gold">
              <span className="text-gold">▪</span> A.S. Roma Academy{" "}
              <span className="text-gray-400">(2000)</span> – won provincial
              championship &amp; three regional tournaments.
            </p>
          </div>
        </div>

        <div className="transition-all duration-300 card-dark hover:shadow-xl hover:shadow-gold/5 hover:-translate-y-1">
          <h2 className="text-base section-title md:text-lg">
            <i className="mr-2 fas fa-star text-gold animate-spin-slow"></i> Key
            Strengths
          </h2>
          <ul className="grid grid-cols-2 gap-1 mb-4 text-sm text-gray-300">
            <li className="transition-all duration-300 hover:pl-2 hover:text-gold">
              ✓ Tactical Analysis &amp; Game Preparation
            </li>
            <li className="transition-all duration-300 hover:pl-2 hover:text-gold">
              ✓ Man Management &amp; Leadership
            </li>
            <li className="transition-all duration-300 hover:pl-2 hover:text-gold">
              ✓ Player Development &amp; Talent Scouting
            </li>
            <li className="transition-all duration-300 hover:pl-2 hover:text-gold">
              ✓ High Performance Culture
            </li>
            <li className="transition-all duration-300 hover:pl-2 hover:text-gold">
              ✓ Long Term Planning &amp; Goal Setting
            </li>
            <li className="transition-all duration-300 hover:pl-2 hover:text-gold">
              ✓ Problem Solving &amp; Decision Making
            </li>
          </ul>
          <div className="gold-line"></div>
          <h3 className="mt-2 text-sm font-semibold tracking-wider uppercase text-gold">
            Values
          </h3>
          <div className="flex flex-wrap gap-2 mt-2">
            {[
              "Integrity & Discipline",
              "Respect & Teamwork",
              "Continuous Development",
              "Leadership & Communication",
              "Commitment to Results",
            ].map((v, i) => (
              <span
                key={i}
                className="bg-gold text-[#0b0a09] font-semibold px-3 py-0.5 rounded-full text-xs transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-gold/30 cursor-default"
              >
                {v}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Skills */}
      <div className="mb-8 transition-all duration-300 card-dark hover:shadow-xl hover:shadow-gold/5">
        <h2 className="text-base section-title md:text-lg">
          <i className="mr-2 fas fa-chart-line text-gold animate-pulse"></i>{" "}
          Coaching &amp; Management Skills
        </h2>
        <div className="grid gap-4 md:grid-cols-2">
          {[
            { name: "Tactical Analysis", level: 95 },
            { name: "Man Management", level: 92 },
            { name: "Player Development", level: 90 },
            { name: "Scouting & Evaluation", level: 88 },
            { name: "Game Preparation", level: 93 },
            { name: "Leadership", level: 96 },
          ].map((skill) => (
            <div
              key={skill.name}
              className="transition-all duration-300 hover:pl-2"
            >
              <div className="flex items-center justify-between">
                <span className="text-sm">{skill.name}</span>
                <span className="text-xs text-gold animate-pulse">
                  ⚽ {skill.level}%
                </span>
              </div>
              <div className="relative skill-bar-bg">
                <div
                  className="transition-all duration-1000 ease-out skill-bar-fill"
                  style={{ width: `${skill.level}%` }}
                >
                  <span className="absolute right-0 -mt-1 text-xs text-gold animate-bounce">
                    ⚽
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 4 Coaching Images */}
      <div className="grid grid-cols-2 gap-4 mb-8 md:grid-cols-4">
        <div className="p-2 overflow-hidden transition-all duration-300 card-dark hover:shadow-xl hover:shadow-gold/5 hover:-translate-y-1">
          <Image
            src="./images/F.L.jpeg"
            alt="Coaching on the field"
            width={300}
            height={200}
            className="object-cover w-full h-48 transition-all duration-500 rounded-xl hover:scale-105"
          />
        </div>
        <div className="p-2 overflow-hidden transition-all duration-300 card-dark hover:shadow-xl hover:shadow-gold/5 hover:-translate-y-1">
          <Image
            src="./images/FABIO.jpeg"
            alt="Coaching on the field"
            width={300}
            height={200}
            className="object-cover w-full h-48 transition-all duration-500 rounded-xl hover:scale-105"
          />
        </div>
        <div className="p-2 overflow-hidden transition-all duration-300 card-dark hover:shadow-xl hover:shadow-gold/5 hover:-translate-y-1">
          <Image
            src="./images/COACH.jpeg"
            alt="Coaching on the field"
            width={300}
            height={200}
            className="object-cover w-full h-48 transition-all duration-500 rounded-xl hover:scale-105"
          />
        </div>
        <div className="p-2 overflow-hidden transition-all duration-300 card-dark hover:shadow-xl hover:shadow-gold/5 hover:-translate-y-1">
          <Image
            src="./images/Lopez.jpeg"
            alt="Coaching on the field"
            width={300}
            height={200}
            className="object-cover w-full h-48 transition-all duration-500 rounded-xl hover:scale-105"
          />
        </div>
      </div>

      {/* Testimonial */}
      <div className="flex flex-col justify-center mb-8 transition-all duration-300 card-dark hover:shadow-xl hover:shadow-gold/5 hover:-translate-y-1">
        <p className="text-lg italic text-center text-gray-300 transition-all duration-300 hover:text-gold">
          &ldquo;Fabio is an exceptional coach who delivers high-quality work on
          time. His tactical awareness and problem-solving skills are
          outstanding.&rdquo;
        </p>
        <p className="mt-2 font-bold text-center transition-all duration-300 text-gold hover:pl-2">
          &mdash; UEFA
        </p>
      </div>

      {/* Footer */}
      <div className="flex flex-wrap items-center justify-between gap-4 pt-4 mt-8 border-t border-gold/30">
        <div className="flex gap-6 text-2xl">
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-[#1877f2] transition-all duration-300 hover:scale-125 hover:rotate-12"
            aria-label="Facebook"
          >
            <i className="fab fa-facebook-f"></i>
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-[#E4405F] transition-all duration-300 hover:scale-125 hover:rotate-12"
            aria-label="Instagram"
          >
            <i className="fab fa-instagram"></i>
          </a>
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-[#0A66C2] transition-all duration-300 hover:scale-125 hover:rotate-12"
            aria-label="LinkedIn"
          >
            <i className="fab fa-linkedin-in"></i>
          </a>
        </div>
        <div className="text-sm text-gray-400">
          <span className="text-gold">✉</span> Hellofabio@gmail.com &middot;{" "}
          <span className="text-gold">📞</span> +1 333 189 4571
        </div>
        <div className="text-xs text-gray-500">
          &copy; 2026 Fabio Lopez &middot; UEFA Pro
        </div>
      </div>
    </>
  );
}
