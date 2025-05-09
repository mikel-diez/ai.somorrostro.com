import { h } from "preact";
import "./AsignaturaCard.scss";

const AsignaturaCard = ({ asignatura }) => {
  const handleImageError = (e) => {
    e.target.src = "/placeholder_640_360.png";
    e.target.onerror = null; // Prevent infinite loop
  };

  return (
    <div className="asignatura-card">
      <div className="asignatura-image">
        <img 
          src={asignatura.data?.image || "/placeholder_640_360.png"} 
          alt={asignatura.data?.title || "Asignatura image"} 
          loading="lazy"
          onError={handleImageError}
        />
      </div>
      <div className="asignatura-overlay">
        <div className="asignatura-content">
          <h3>{asignatura.data?.title || "Untitled Asignatura"}</h3>
          {asignatura.data?.description && (
            <p className="asignatura-description">{asignatura.data.description}</p>
          )}
          {asignatura.data?.professor && (
            <p className="asignatura-professor">Prof: {asignatura.data.professor}</p>
          )}
          <a 
            href={`/asignaturas/${asignatura.id.replace(/\//g, '--')}`} 
            className="asignatura-link button has-icon"
          >
            Ver más
          </a>
        </div>
      </div>
    </div>
  );
};

export default AsignaturaCard; 