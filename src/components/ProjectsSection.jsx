import { ArrowRight } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Smart Inventory & Stock Management Platform",
    description:
      "A full-stack web application built using PHP, MySQL, Laravel, HTML/CSS, JavaScript, and Bootstrap. Designed to manage product inventory with supplier management, stock tracking, and automatic low-stock alerts to streamline business operations.",
    image: "/projects/inventory_system.png",
    tags: ["PHP", "Laravel", "MySQL", "Bootstrap"],
  },
  {
    id: 2,
    title: "Comprehensive Student Information Management System",
    description:
      "An academic project built with Laravel, MySQL, and Blade templating to handle student data, attendance, and results. Designed to improve efficiency and accuracy in educational administration.",
    image: "/projects/student_system.png",
    tags: ["Laravel", "MySQL", "Blade", "Bootstrap"],
  },
  {
    id: 3,
    title: "E-Commerce Sports Equipment Platform",
    description:
      "An e-commerce platform for sports products, featuring product catalogs, shopping cart functionality, and order management. Developed using PHP, MySQL, Laravel, and Bootstrap for a secure and responsive user experience.",
    image: "/projects/sports_shop.png",
    tags: ["PHP", "Laravel", "MySQL", "Bootstrap"],
  },
  {
    id: 4,
    title: "API Integration & Authentication Implementations",
    description:
      "A set of mini-projects showcasing integration with third-party RESTful APIs using JSON and authentication techniques. Demonstrates ability to connect external services and handle real-time data efficiently.",
    image: "/projects/api_projects.png",
    tags: ["RESTful APIs", "JSON", "Authentication"],
  },
  {
    id: 5,
    title: "Medical Cost Prediction Using Data Analytics",
    description:
      "A predictive data analysis project developed with Python and Pandas to forecast medical expenses based on demographic and health data. Applied regression models and data cleaning techniques for accurate prediction results.",
    image: "/projects/medical_cost.png",
    tags: ["Python", "Pandas", "Machine Learning"],
  },
  {
    id: 6,
    title: "LPL 2024 Cricket Analytics Dashboard (Power BI)",
    description:
      "A dynamic Power BI dashboard designed to analyze Lanka Premier League 2024 data, featuring match insights, player performance visualization, and comparative analytics across teams.",
    image: "/projects/lpl_dashboard.png",
    tags: ["Power BI", "Data Visualization", "Analytics"],
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary">Projects</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          A selection of my academic and professional projects showcasing my
          expertise in full-stack web development, API integration, and data
          analytics.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-2">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/vidushan21"
          >
            Check My GitHub <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
