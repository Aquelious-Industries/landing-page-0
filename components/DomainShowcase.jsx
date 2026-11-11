
import React from "react";

const domains = [
  {
    title: "Aquaculture",
    image:
      "https://images.unsplash.com/photo-1518467166778-b88f373ffec7?w=1000",
    active: true,
    href: "/aquaculture",
  },
  {
    title: "Aquatic Intelligence",
    image:
      "https://images.unsplash.com/photo-1530053969600-caed2596d242?w=1000",
    active: false,
  },
  {
    title: "Ocean Engineering",
    image:
      "https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=1000",
    active: false,
  },
  {
    title: "Defence & Maritime Security",
    image:
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=1000",
    active: false,
  },
  {
    title: "Environmental Intelligence",
    image:
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=1000",
    active: false,
  },
];

export default function DomainShowcase() {
  return (
    <section className="domain-section">

      <div className="domain-grid">
        {domains.map((domain, index) => {
          const Card = domain.active ? "a" : "div";

          return (
            <Card
              key={domain.title}
              href={domain.active ? domain.href : undefined}
              className={`domain-card ${
                domain.active ? "active" : "coming-soon"
              }`}
              style={{
                "--domain-image": `url("${domain.image}")`,
                "--card-index": index,
              }}
              aria-label={
                domain.active
                  ? `Explore ${domain.title}`
                  : `${domain.title} - Coming Soon`
              }
            >
              <div className="domain-image" />

              <div className="domain-overlay" />

              <div className="domain-content">
                <h3>{domain.title}</h3>

                {domain.active ? (
                  <span className="domain-arrow">↗</span>
                ) : (
                  <div className="coming-label">
                    <span className="coming-dot" />
                    COMING SOON
                  </div>
                )}
              </div>
            </Card>
          );
        })}
      </div>

      <style>{`
       
        .domain-heading {
          text-align: center;
          margin-bottom: 63px;
        }

        .domain-heading > span {
          font-size: 11px;
          letter-spacing: 3px;
          color: #777;
          font-weight: 500;
        }

        .domain-heading h2 {
          font-size: clamp(25px, 3vw, 38px);
          font-weight: 400;
          line-height: 1.3;
          color: #171717;
          margin-top: 18px;
        }

        .domain-grid {
          display: flex;
          width: 120%;
          height: 480px;
          overflow: hidden;
        }

        .domain-card {
          position: relative;
          display: block;
          flex: 1;
          min-width: 100px;
          height: 100%;
          overflow: hidden;
          text-decoration: none;
          color: white;
          cursor: default;
          transition: flex 0.65s cubic-bezier(.2,.8,.2,1);
          isolation: isolate;
          align-items: center;
          justify-content: center;
        }

        .domain-grid:hover .domain-card {
          flex: 0.85;
        }

        .domain-grid .domain-card:hover {
          flex: 1.5;
        }

        .domain-card.active {
          cursor: pointer;
        }

        .domain-image {
          position: absolute;
          inset: 0;
          z-index: -2;
          background-image: var(--domain-image);
          background-position: center;
          background-size: cover;
          transition: transform 0.8s ease;
        }

        .domain-card:hover .domain-image {
          transform: scale(1.07);
        }

        .domain-overlay {
          position: absolute;
          inset: 0;
          z-index: -1;
          background: linear-gradient(
            to bottom,
            rgba(0,0,0,0.12),
            rgba(0,0,0,0.48)
          );
          transition: background 0.4s ease;
        }

        .domain-card:hover .domain-overlay {
          background: rgba(0,0,0,0.60);
        }

        .domain-content {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
          padding: ;
          text-align: center;
        }

        .domain-content h3 {
          font-size: clamp(17px, 1.6vw, 27px);
          font-weight: 400;
          line-height: 1.0;
          margin: 0;
          color: white;
          transition: transform 0.4s ease;
        }

        .domain-card:hover .domain-content h3 {
          transform: translateY(-10px);
        }

        .domain-arrow {
          position: absolute;
          bottom: 25px;
          font-size: 27px;
          opacity: 0;
          transform: translateY(8px);
          transition: all 0.35s ease;
        }

        .domain-card.active:hover .domain-arrow {
          opacity: 1;
          transform: translateY(0);
        }

        .coming-label {
          position: absolute;
          bottom: 25px;
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 10px;
          letter-spacing: 2px;
          font-weight: 500;
          padding: 10px 15px;
          border: 1px solid rgba(255,255,255,0.55);
          background: rgba(0,0,0,0.25);
          backdrop-filter: blur(8px);
          opacity: 0;
          transform: translateY(8px);
          transition: all 0.35s ease;
          white-space: nowrap;
        }

        .coming-soon:hover .coming-label {
          opacity: 1;
          transform: translateY(0);
        }

        .coming-dot {
          height: 6px;
          width: 6px;
          border-radius: 50%;
          background: #d4b77a;
        }

        @media (max-width: 768px) {
          .domain-section {
            padding: 55px 5%;
          }

          .domain-heading {
            margin-bottom: 35px;
          }

          .domain-grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            height: auto;
            gap: 8px;
          }

          .domain-card,
          .domain-grid:hover .domain-card,
          .domain-grid .domain-card:hover {
            height: 230px;
            min-height: 230px;
            flex: unset;
          }

          .domain-card:last-child {
            grid-column: span 2;
          }

          .domain-content h3 {
            font-size: 19px;
          }

          .coming-label {
            opacity: 1;
            transform: none;
            font-size: 8px;
            padding: 7px 10px;
          }

          .domain-card:hover .domain-content h3 {
            transform: none;
          }

          .domain-arrow {
            opacity: 1;
            transform: none;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .domain-card,
          .domain-image,
          .domain-content h3,
          .domain-arrow,
          .coming-label {
            transition: none;
          }
        }
      `}</style>
    </section>
  );
}
