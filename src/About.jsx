import React from 'react'
import "./About.css"

function About() {
  return (
    <> 
    <div className="about">

  <div className="heading-tagline">
    <h2>About Us – EquipNet</h2>
    <span className="tagline">
      EquipNet – Connecting India’s Scientific Infrastructure to Innovators Nationwide.
    </span>
  </div>

  <div className="about-content">

    <p>
      EquipNet is a national digital platform designed to facilitate discovery and structured access to publicly funded scientific research equipment across India. The platform addresses a critical systemic gap in the research ecosystem, where world-class infrastructure exists but remains fragmented and difficult to access.
    </p>

    <p>
      India has invested significant public funds in advanced scientific laboratories and high-end instruments across institutions such as IITs, IISc, IISERs, NITs, central and state universities, and national research laboratories. These include electron microscopes, spectrometers, chromatography systems, and biomedical imaging platforms essential for scientific discovery and technological development.
    </p>

    <p>
      EquipNet creates a centralized discovery layer that aggregates metadata about government-funded research instruments. Users can search by research domain, equipment type, location, and availability. The platform improves transparency and reduces duplication of infrastructure investments.
    </p>

    <p>
      The platform serves academic researchers, postgraduate and undergraduate students, startups, MSMEs, and independent innovators. Many of these users cannot afford equipment costing tens of lakhs to several crores. EquipNet enables them to identify existing facilities and request supervised access through official channels.
    </p>

    <p className="highlight-box">
      EquipNet does not own or operate equipment. It does not conduct research or commercial testing. All access decisions remain with hosting institutions. EquipNet functions strictly as a discovery and facilitation platform.
    </p>

    <p>
      The platform supports institutions by increasing equipment utilization, improving facility visibility, and enabling data-driven resource management. Aggregated anonymized data can help policymakers optimize national research infrastructure investments.
    </p>

    <p>
      EquipNet is designed for scalability and interoperability with institutional databases, national research portals, and digital governance platforms. Future integration with policy dashboards and digital identity systems is envisioned.
    </p>

    <p>
      The mission of EquipNet is to enhance research productivity, foster collaboration, and ensure equitable access to publicly funded scientific infrastructure. The platform supports India’s objectives in science, innovation, and industrial development.
    </p>

    <p>
      EquipNet envisions a future where every researcher and innovator can easily discover and access the tools necessary for scientific inquiry, transforming fragmented infrastructure into a connected national research ecosystem.
    </p>

  </div>

</div>
    </>
  );
}

export default About;