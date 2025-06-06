export default function Projects() {
  const projects = [
    {
      title: "Frog Presence Prediction",
      year: "2025",
      description: "Predicted frog presence in south-eastern Australia with an 80%-accurate XGBoost model built from TerraClimate data, delivered for the EY Frog Biodiversity Challenge in my Analytics Practicum course.",
      link: "https://github.com/SibiVasudevan/frog-presence-prediction"
    },
    {
      title: "Text to SQL Application",
      year: "2025",
      description: "Enabled non-technical users to query data by building a Python app that turns plain English into SQL via Claude, served through a Flask REST API and CLI with SQLite back-end and production-grade error handling.",
      link: "https://github.com/SibiVasudevan/basic-text-to-sql"
    },
    {
      title: "Sentiment Analysis of Movie Reviews",
      year: "2025",
      description: "Built an end-to-end Python pipeline that classifies 50k IMDB reviews as positive or negative. Cleaned text (HTML stripping, stemming, stop-word removal), generated TF-IDF features, selected the top 4,000 terms via mutual information, and trained linear Logistic Regression and SVM models that reach 89% accuracy/F1 on a fixed hold-out set. Also includes visualizations.",
      link: "https://github.com/SibiVasudevan/movie-reviews-sentiment-analysis"
    },
    {
      title: "Electricity Demand Forecasting",
      year: "2024",
      description: "Built an electricity-demand model for 2015–2020 historical data, adding seasonal flags, holiday markers, and temperature ranges. Gradient-boosted regression achieved <5% MAE and <7% RMSE. Exploratory work highlighted temperature and holidays as primary drivers.",
      link: "https://docs.google.com/presentation/d/1FlK5fPMpHEVJcmWPld8iBJgoZhGrxT6X/edit?usp=sharing&ouid=103095319189812585157&rtpof=true&sd=true"
    },
    {
      title: "AI-Enabled Baggage Scanner",
      year: "2023",
      description: "Built a PyQt5 desktop suite that pseudo-colours single-energy X-ray images, isolates organic/metallic materials via a BM3D + H-Domes pipeline, and flags firearms with an SSDNet detector trained for 50,000 steps. The system processed 100+ validation scans and was deployed at the client site with live image-enhancement and operator tools (zoom, brightness, \"Threat detected\" alert).",
      link: "https://youtu.be/CdfguJdAzr4"
    }
  ];

  return (
    <article className="prose prose-slate dark:prose-invert max-w-none">
      <h1 className="mb-8 text-4xl font-bold">Projects</h1>

      <div className="space-y-12">
        {projects.map((project, index) => (
          <div key={index} className="group">
            <div className="flex items-baseline gap-4 mb-2">
              <h2 className="text-2xl font-semibold my-0">
                <a href={project.link} className="no-underline hover:underline">
                  {project.title}
                </a>
              </h2>
              <span className="text-sm text-muted-foreground">{project.year}</span>
            </div>
            <p className="text-muted-foreground mt-2">{project.description}</p>
          </div>
        ))}
      </div>


    </article>
  );
}
