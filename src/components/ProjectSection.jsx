import './ProjectSection.css';
import property1 from '../assets/property1.webp';
import property2 from '../assets/property2.jpg';
import property3 from '../assets/property3.jpg';

function ProjectSection() {
  const projects = [
    {
      title: "Skyline Heights",
      description: "A luxurious residential project in the heart of the city.",
      image: "https://img-v3.deepdreamgenerator.com/3273321/1sfpfa_478761cadcfb827aafe018c6a998f7621c38759b.jpg?v=2?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Green Valley",
      description: "Eco-friendly villas surrounded by lush greenery.",
      image: "https://prodlifestyleasia-uploads.s3.amazonaws.com/wp-content/uploads/2016/08/5-eco-friendly-buildings-making-Singapore-greener-than-ever-806x537.jpg?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Ocean View",
      description: "Premium apartments with a view of the ocean.",
      image: "https://www.luxurylifestylemag.co.uk/wp-content/uploads/2024/11/Ocean-House-Exterior.jpg?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Mountain Retreat",
      description: "Luxury cabins in a serene mountain setting.",
      image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/07/f4/45/fb/getlstd-property-photo.jpg?w=900&h=500&s=1"
    },
    {
      title: "Urban Nest",
      description: "Modern apartments designed for urban living.",
      image: "https://i.ytimg.com/vi/gXl3X0b6d7Y/hqdefault.jpg?v=60a491cf"
    },
    {
      title: "Palm Grove Villas",
      description: "Exclusive beachfront villas with private pools.",
      image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/5b/e7/33/the-palm-grove-villas.jpg?w=2000&h=-1&s=1"
    },
    {
      title: "Luxury Apex",
      description: "A luxurious Apex is a project in the heart of the city.",
      image: property1, 
    },
    {
      title: "Luxury Conclave",
      description: "A luxurious Conclave is a project in rural area.",
      image: property2, 
    },
    {
      title: "Luxury Nation",
      description: "A luxurious Conclave is a project in urban area.",
      image: property3, 
    },
  ];

  return (
    <section id="projects" className="projects-section">
      <div className="projects-container">
        <h2>Our Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div className="project-card" key={index}>
              <img src={project.image} alt={project.title} />
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>
            </div>
          ))}
         
        </div>
      </div>
    </section>
  );
}

export default ProjectSection;
