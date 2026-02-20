function People() {
  const people = [
    {
      nombre: "Carmen Collado",
      formacion: "Arquitecteca y Estudios",
      grado: "Doctorado",
      bio: "Diseñadora e investigadora en comunicación visual, centrada en narrativas gráficas, visualización de información y diseño editorial aplicado a proyectos de investigación social y cultural. Ha colaborado en plataformas digitales, exposiciones y publicaciones orientadas a públicos académicos y comunitarios.",
      foto: "https://placehold.co/400x400?text=Carmen+Collado",
      orcid: "",
      redes: [],
    },
    {
      nombre: "Miguel Navarrate",
      formacion: "Arquitectura y Estudios Urbanos",
      grado: "Maestría",
      bio: "Arquitecto e investigador enfocado en análisis urbano-crítico, cartografías sociales y estudios sobre infraestructura y poder. Su trabajo articula métodos espaciales, análisis documental y visualización de datos para examinar conflictos territoriales y procesos de transformación urbana en América Latina.",
      foto: "https://placehold.co/400x400?text=Miguel+Navarrate",
      orcid: "",
      redes: [],
    },
    {
      nombre: "Maritza García",
      formacion: "Geografía Humana",
      grado: "Doctorado",
      bio: "Geógrafa especializada en territorio, memoria y conflictos socioambientales. Su investigación aborda procesos de despojo, extractivismo y resistencias comunitarias mediante metodologías cualitativas, trabajo de campo y análisis cartográfico crítico, con énfasis en contextos rurales y periurbanos.",
      foto: "https://placehold.co/400x400?text=Maritza+García",
      orcid: "",
      redes: [],
    },
    {
      nombre: "Ana Elisa Astudillo Salazar",
      formacion: "Sociología y Antropología Social y Cultural",
      grado: "Doctorado",
      bio: "Socióloga y antropóloga social y cultural ecuatoriana, residente en Barcelona, especializada en investigación participativa, interdisciplinaria y orientada a soluciones, con enfoque multi-actor y socioambiental. Su trabajo se centra en el análisis crítico de conflictos, patrimonio cultural, memoria social, derecho a la ciudad y movimientos socioambientales. Actualmente es Project Manager del proyecto ERC Visual Trust en la Universidad de Barcelona, lidera una consultoría sobre los impactos socioculturales del despojo y la colonización en territorios indígenas del Caribe nicaragüense, y desarrolla investigación postdoctoral sobre movimientos de defensa del agua en los Andes ecuatorianos en el marco del proyecto Engaged Scholarship against Climate Change (VU Amsterdam).",
      foto: "https://placehold.co/400x400?text=Ana+Elisa",
      orcid: "https://orcid.org/0000-0002-0093-9208",
      redes: [
        "Colectivo Cuenca Ciudad para Vivir (CCCV) – http://www.cccv.ec/",
        "Observatori d'Antropologia del Conflicte Urbà (OACU) – https://observatoriconflicteurba.org/",
        "Asociación Multilemas – https://www.instagram.com/multilemas/"
      ],
    },
    {
      nombre: "Wendy Elizabeth Chávez Páez",
      formacion: "Economía y Gestión Pública",
      grado: "Maestría",
      bio: "Economista con maestrías en administración pública y asentamientos humanos. Investigadora junior y estudiante de doctorado en Cambio Cultural y Político en el Centro de Investigación para el Desarrollo de la Universidad de Bonn. Ha trabajado en la academia ecuatoriana, el sector público y organizaciones de la sociedad civil. Es miembro fundadora y vicepresidenta del Observatorio de Políticas Públicas de Guayaquil y de la Fundación Cerro Verde, organización que trabaja con comunidades ancestrales del Golfo de Guayaquil en la conservación del manglar. Actualmente es Co-PI y Project Manager del proyecto ENDOW-Ecuador, financiado por la National Science Foundation (NSF-IBSS-L#1743019).",
      foto: "https://placehold.co/400x400?text=Wendy+Chávez",
      orcid: "https://orcid.org/0009-0001-3624-8361",
      redes: [
        "Sitio web personal – https://wendychavez.info/"
      ],
    },
    {
      nombre: "Iker Luna",
      formacion: "Arquitectura Forense",
      grado: "Maestría",
      bio: "Arquitecto nicaragüense radicado en Costa Rica, que trabaja entre investigaciones espaciales de carácter investigativo y prácticas culturales. Con raíces en Centroamérica, examina distintas formas de violencia a través de investigaciones en archivos, cartografías y prácticas arquitectónicas. Su trabajo se expresa mediante exposiciones, escritos y plataformas web, a menudo en colaboración con artistas, investigadores e iniciativas de derechos humanos, poniendo énfasis en el conocimiento situado sobre cuestiones políticas regionales.",
      foto: "https://placehold.co/400x400?text=Iker+Luna",
      orcid: "https://orcid.org/0009-0003-6231-5550",
      redes: ["re/presentare", "EAQ", "CRA"],
    },
  ];

  return (
    <section id="people" className="about-box py-12 md:py-16">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {people.map((p, i) => (
            <div key={i} className="group flex flex-col">
              <div className="overflow-hidden rounded-xl p-4 transition-colors duration-200 hover:bg-neutral-800/30">
                <img
                  src={p.foto}
                  alt={p.nombre}
                  className="mb-3 h-auto w-full rounded-lg object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <h3 className="text-lg font-semibold">{p.nombre}</h3>
                <p className="mb-1 text-sm text-neutral-400">
                  <strong className="text-neutral-200">{p.formacion}</strong> · {p.grado}
                </p>
                <p className="mb-3 text-sm leading-relaxed">{p.bio}</p>
                {p.orcid && (
                  <p className="mb-1">
                    <a
                      href={p.orcid}
                      target="_blank"
                      rel="noreferrer"
                      className="link-underline text-sm text-blue-400"
                    >
                      ORCID
                    </a>
                  </p>
                )}
                {p.redes?.length > 0 && (
                  <p className="text-xs text-neutral-500">
                    {p.redes.join(" · ")}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default People;
