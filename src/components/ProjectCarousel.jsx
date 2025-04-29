import { Fragment, h } from "preact";
import { useEffect, useRef } from "preact/hooks";
import { register } from "swiper/element/bundle";
import "./ProjectCarousel.scss";

// Register Swiper custom elements
register();

const ProjectCarousel = ({ projects = [] }) => {
  const swiperElRef = useRef(null);
  
  // If no projects, don't render the carousel
  if (!projects || projects.length === 0) {
    return null;
  }

  // Limit to max 5 projects to show
  const displayProjects = projects.slice(0, 5);

  // Swiper parameters
  const swiperParams = {
    slidesPerView: 1,
    spaceBetween: 20,
    grabCursor: true,
    loop: displayProjects.length > 1,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
    },
    pagination: {
      clickable: true,
    },
    navigation: true,
    preventClicks: false,
    preventClicksPropagation: false,
    breakpoints: {
      640: {
        slidesPerView: displayProjects.length > 1 ? 2 : 1,
      },
      1024: {
        slidesPerView: Math.min(3, displayProjects.length),
      },
    }
  };

  // Setup swiper once component is mounted
  useEffect(() => {
    const swiperEl = swiperElRef.current;
    
    if (swiperEl) {
      Object.assign(swiperEl, swiperParams);
      swiperEl.initialize();
    }

    return () => {
      if (swiperEl && swiperEl.swiper) {
        swiperEl.swiper.destroy();
      }
    };
  }, [displayProjects]);

  return (
    <div className="project-carousel">
      <swiper-container ref={swiperElRef} init="false">
        {displayProjects.map((project, index) => (
          <swiper-slide key={index}>
            <div className="project-image">
              <img 
                src={project.data?.image || "/placeholder_640_360.png"} 
                alt={project.data?.title || "Project image"} 
                loading="lazy"
                onError={(e) => { e.target.src = "/placeholder_640_360.png" }}
              />
            </div>
            <div className="project-content-below">
              <h3>{(project.data?.title || "Untitled Project").slice(0, 20)}{(project.data?.title || "").length > 20 ? "..." : ""}</h3>
              {project.data?.description && (
                <p className="project-description">{project.data.description}</p>
              )}
              {project.data?.author && (
                <p className="project-author">by {project.data.author}</p>
              )}
              <a 
                href={`/portfolio/${project.id}`} 
                className="project-link button has-icon"
              >
                Ver más
              </a>
            </div>
          </swiper-slide>
        ))}
      </swiper-container>
    </div>
  );
};

export default ProjectCarousel; 