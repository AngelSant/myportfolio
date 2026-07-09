import { profile } from "@/data/profile";

export default function SobreMiPage() {
  return (
    <section className="aboutPage">
      <div className="aboutHero">
        <div className="aboutImage">
          <span>Imagen personal / ilustración profesional</span>
        </div>

        <div className="aboutIntro">
          <p className="eyebrow">Sobre mí</p>
          <h1>
            {profile.fullName.split(" ")[0]}{" "}
            <span>{profile.fullName.split(" ").slice(1).join(" ")}</span>
          </h1>

          <h2>{profile.degree}</h2>
          <p className="role">{profile.role}</p>

          <p>{profile.about.professionalProfile}</p>
          <p>{profile.about.value}</p>
        </div>
      </div>

      <div className="aboutGrid">
        <article className="aboutCard aboutCardLarge">
          <p className="sectionLabel">Experiencia profesional</p>
          <h2>Experiencia construyendo soluciones reales</h2>

          <div className="timeline">
            {profile.experience.map((item) => (
              <div className="timelineItem" key={item.company}>
                <div className="timelineDot" />

                <div>
                  <p className="timelinePeriod">{item.period}</p>
                  <h3>{item.position}</h3>
                  <h4>{item.company}</h4>
                  <p>{item.description}</p>

                  <ul>
                    {item.highlights.map((highlight) => (
                      <li key={highlight}>{highlight}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </article>

        <aside className="aboutSide">
          <article className="aboutCard">
            <p className="sectionLabel">Educación</p>
            {profile.education.map((item) => (
              <div key={item.institution}>
                <h3>{item.degree}</h3>
                <p>{item.institution}</p>
                <span className="smallBadge">{item.status}</span>
              </div>
            ))}
          </article>

          <article className="aboutCard">
            <p className="sectionLabel">Aptitudes</p>
            <div className="chipList">
              {profile.aptitudes.map((item) => (
                <span className="chip" key={item}>
                  {item}
                </span>
              ))}
            </div>
          </article>
        </aside>
      </div>

      <section className="skillsSection">
        <div className="pageHeader compact">
          <p className="eyebrow">Stack técnico</p>
          <h2>Lenguajes, frameworks y herramientas</h2>
          <p>
            Tecnologías que he utilizado en proyectos móviles, web, backend,
            cloud, bases de datos y flujos de desarrollo.
          </p>
        </div>

        <div className="skillsGrid">
          {profile.techSkills.map((group) => (
            <article className="skillCard" key={group.category}>
              <h3>{group.category}</h3>

              <div className="chipList">
                {group.items.map((item) => (
                  <span className="chip" key={item}>
                    {item}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="aboutObjective">
        <p className="eyebrow">Objetivo profesional</p>
        <h2>Crear productos útiles, escalables y bien diseñados</h2>
        <p>{profile.about.objective}</p>
      </section>
    </section>
  );
}
