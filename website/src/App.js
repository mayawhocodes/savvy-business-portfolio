import './App.css';

function App() {
  const OWNER = {
    name: "Maya Murphy",
    navLinks: ["Projects", "Blog", "About", "Connect"],
    personalStatement:
      "A software engineer breaking barriers through leadership, development, and design.",
    featuredExperiences: [
      "Hack4Impact",
      "Girls Who Code",
      "Regenize"
    ],
    experienceStats: [
      { number: 3, description: "published applications" },
      { number: 100, description: "students across the US" },
      { number: 42, description: "components built in React" }
    ],
    featuredProjects: [
      { photo: "link1", name: "Gen Connect" },
      { photo: "link2", name: "Very Funny Dad" },
      { photo: "link1", name: "Bread $tack" }
    ],
    contactDetails: [
      "mayaandtech@gmail.com",
      "mayaandtech.info/",
      "linkedin.com/maya-and-tech"
    ],
    projectOpportunities:
      "I am currently focused on Chefstant and will be available for work until July 2023.",
    footerLinks: [
      { name: "Projects", links: ["Gen Connect", "Very Funny Dad", "Bread $tack"] },
      { name: "About", links: ["Experience", "Education", "Motto"] },
      { name: "Blog", links: [] },
      { name: "Connect", links: [] }
    ]
  };

  return (
    <div>
      {/* Header Component */}
      <header>

        {/* NavBar Component */}
        <div>
          <nav className="nav-bar">
            <div className="nav-left">
              <h1 className="nav-name">{OWNER.name}</h1>
            </div>
            <div className="nav-right">
              <div className="nav-links"><ul className="nav-links">{OWNER.navLinks.map(item => <li>{item}</li>)}</ul></div>
              <div className="nav-button"><button className="nav-button">GET IN TOUCH</button></div>
            </div>
          </nav>
        </div>
       
        {/* PortfolioGreeting Component */}
        {/* <div>
          <div id="owner-img"></div>
          <p>{OWNER.personalStatement}</p>
        </div> */}
      </header>
      <main>
        {/* FeaturedExperiences Component */}
        {/* <div>{OWNER.featuredExperiences.map(item => <h3>{item}</h3>)}</div> */}

        {/* ExperienceStats Component */}
        {/* <div>
          <ul>{OWNER.experienceStats.map(item => <li>{item.number} {item.description}</li>)}</ul>
        </div> */}

        {/* FeaturedProjects Component */}
        {/* Project Component as list item */}
        {/* <div>
          <h2>Featured Projects</h2>
          <ul>{OWNER.featuredProjects.map(item => <li>{item.photo} {item.name}</li>)}</ul>
        </div> */}

        {/* Connect Component */}
        {/* <div>
          <h2>Let's Connect</h2>
          <form>
            <div>
              <label for="name">NAME:</label>
              <input type="text" name="name" id="name" required></input>
            </div>

            <div>
              <label for="email">EMAIL:</label>
              <input type="email" name="email" id="email" required></input>
            </div>

            <div>
              <label for="name">MESSAGE:</label>
              <input type="text" name="message" id="mesage" required></input>
            </div>

            <div>
              <input type="submit" value="SEND" required></input>
            </div>
          </form>
        </div> */}

      </main>
      {/* Footer Component */}
      {/* <footer>
       
        <div>
          <h3>{OWNER.name}</h3>
          <p>{OWNER.personalStatement}</p>
          <p>&copy;2022 {OWNER.name}. All rights reserved.</p>
        </div>

        
        <div>
          <ul>
            {OWNER.footerLinks.map(
              item =>
                <li> {item.name}
                  <ul>
                    {item.links.map(
                      link => <li>{link}</li>
                    )}
                  </ul>
                </li>
            )}
          </ul>
        </div>

      </footer> */}
    </div>
  );
}

export default App;
