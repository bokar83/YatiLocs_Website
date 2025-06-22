// components/SectionDivider.js
export default function SectionDivider() {
    return (
      <div className="relative w-full h-12 sm:h-16 bg-backgroundLight overflow-hidden -mt-1">
        <svg
          className="absolute inset-0 w-full h-full rotate-180"
          viewBox="0 0 1440 320"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="#F1E9DB"
            fillOpacity="1"
            d="M0,160L48,170.7C96,181,192,203,288,202.7C384,203,480,181,576,165.3C672,149,768,139,864,122.7C960,107,1056,85,1152,85.3C1248,85,1344,107,1392,117.3L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
    );
  }
  