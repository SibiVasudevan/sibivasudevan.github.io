import { Database, Cloud, BrainCircuit, BarChart3, Code2 } from "lucide-react";

export default function About() {
  const skills = [
    {
      category: "Programming & Development",
      icon: <Code2 className="w-5 h-5" />,
      items: ["Python", "SQL", "REST APIs"],
    },
    {
      category: "Data & Analytics",
      icon: <Database className="w-5 h-5" />,
      items: ["SQL", "Tableau", "Data Analysis", "Data Visualization"],
    },
    {
      category: "Cloud & Infrastructure",
      icon: <Cloud className="w-5 h-5" />,
      items: ["AWS", "Cloud Architecture", "DevOps"],
    },
    {
      category: "AI & Machine Learning",
      icon: <BrainCircuit className="w-5 h-5" />,
      items: ["Generative AI", "LLMs", "Machine Learning", "AI Applications"],
    },
    {
      category: "Business Intelligence",
      icon: <BarChart3 className="w-5 h-5" />,
      items: ["Tableau", "Data Storytelling", "Business Analytics"],
    },
  ];

  return (
    <article className="prose prose-slate dark:prose-invert max-w-none">
      <h1 className="mb-8 text-4xl font-bold">About</h1>

      <section className="mb-12">
        <p className="text-lg mb-6">
          I'm a data professional focused on extracting insights from complex datasets and building intelligent systems. My expertise spans data analytics, machine learning, and business intelligence solutions.
        </p>

        <p className="mb-6">
          I'm actively seeking opportunities to apply my skills and contribute to impactful projects. Feel free to explore my work and connect.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6">Skills & Expertise</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skills.map((skill, index) => (
            <div key={index} className="space-y-2">
              <div className="flex items-center gap-2 text-primary mb-2">
                {skill.icon}
                <h3 className="font-medium text-lg my-0">{skill.category}</h3>
              </div>
              <ul className="list-none p-0 space-y-1">
                {skill.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="text-muted-foreground">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Education</h2>
        <ul className="list-none p-0 space-y-4">
          <li className="flex gap-4">
            <span className="text-muted-foreground w-24">2025</span>
            <div>
              <p className="font-medium">MS in Business Analytics and AI</p>
              <p className="text-muted-foreground">University of Texas at Dallas</p>
            </div>
          </li>
          <li className="flex gap-4">
            <span className="text-muted-foreground w-24">2023</span>
            <div>
              <p className="font-medium">B.Tech in Electronics and Communication Engineering</p>
              <p className="text-muted-foreground">Vellore Institute of Technology, Chennai</p>
            </div>
          </li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Contact</h2>
        <p>
          The best way to reach me is via email at{" "}
          <a
            href="mailto:chakravarthy.sibi.v@gmail.com"
            className="font-medium no-underline hover:underline"
          >
            chakravarthy.sibi.v@gmail.com
          </a>
        </p>
        <p className="mt-4">
          You can also find me on{" "}
          <a
            href="https://www.linkedin.com/in/sibi-chakravarthy-v/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium no-underline hover:underline"
          >
            LinkedIn
          </a>
          {" "}and{" "}
          <a
            href="https://github.com/sibivasudevan"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium no-underline hover:underline"
          >
            GitHub
          </a>
        </p>
      </section>
    </article>
  );
}
