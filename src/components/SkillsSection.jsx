import { useState } from "react";
import { cn } from "@/lib/utils";

const skills = [
  // Frontend Development
  { name: "HTML / CSS", level: 95, category: "frontend" },
  { name: "JavaScript", level: 90, category: "frontend" },
  { name: "React", level: 85, category: "frontend" },
  { name: "Bootstrap", level: 90, category: "frontend" },
  { name: "Tailwind CSS", level: 85, category: "frontend" },

  // Backend Development
  { name: "PHP", level: 95, category: "backend" },
  { name: "Laravel", level: 90, category: "backend" },
  { name: "MySQL", level: 90, category: "backend" },
  { name: "RESTful APIs", level: 85, category: "backend" },
  { name: "Python", level: 80, category: "backend" },

  // Data & Analytics
  { name: "Pandas", level: 80, category: "data" },
  { name: "Power BI", level: 85, category: "data" },
  { name: "Data Visualization", level: 85, category: "data" },

  // Tools & Environments
  { name: "VS Code", level: 95, category: "tools" },
  { name: "Git / GitHub", level: 90, category: "tools" },
  { name: "Figma", level: 80, category: "tools" },
  { name: "API Testing Tools (Postman)", level: 85, category: "tools" },
];

const categories = [
  { key: "all", label: "All Skills" },
  { key: "frontend", label: "Frontend Development" },
  { key: "backend", label: "Backend Development" },
  { key: "data", label: "Data & Analytics" },
  { key: "tools", label: "Tools & Environments" },
];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );

  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary">Skills</span>
        </h2>

        {/* Category Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((cat, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(cat.key)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize text-sm md:text-base",
                activeCategory === cat.key
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-foreground hover:bg-secondary"
              )}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Skill Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, key) => (
            <div
              key={key}
              className="bg-card p-6 rounded-lg shadow-xs card-hover"
            >
              <div className="text-left mb-4">
                <h3 className="font-semibold text-lg">{skill.name}</h3>
              </div>

              <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                <div
                  className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]"
                  style={{ width: skill.level + "%" }}
                />
              </div>

              <div className="text-right mt-1">
                <span className="text-sm text-muted-foreground">
                  {skill.level}%
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
