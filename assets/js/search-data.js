// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-blog",
          title: "blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-people",
          title: "people",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/people/";
          },
        },{id: "nav-services",
          title: "services",
          description: "A developing portfolio of services as our consultancy grows.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-repositories",
          title: "repositories",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/repositories/";
          },
        },{id: "nav-contact",
          title: "contact",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/contact/";
          },
        },{id: "post-a-few-notes-from-the-saudi-training",
        
          title: "A Few Notes from the Saudi Training",
        
        description: "Reflections on delivering a 4-day executive training programme",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/sauditraining/";
          
        },
      },{id: "post-amodellis-and-the-future-of-transport-modelling",
        
          title: "Amodellis and the Future of Transport Modelling",
        
        description: "A personal reflection on why this company now exists, and where we are heading.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/firstpost/";
          
        },
      },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-submitted-a-1st-round-funding-proposal-to-smarter-transport-systems-ai-in-transport-with-dr-fu-qian-from-the-university-of-birmingham-fingers-crossed",
          title: 'Submitted a 1st-round funding proposal to Smarter Transport Systems – AI in Transport...',
          description: "",
          section: "News",},{id: "news-completed-a-four-day-travel-demand-modelling-training-for-senior-officers-from-saudi-arabia-s-ministry-of-interior",
          title: 'Completed a four-day travel demand modelling training for senior officers from Saudi Arabia’s...',
          description: "",
          section: "News",},{id: "news-official-launch-of-the-amodellis-website-more-updates-coming-soon",
          title: 'Official launch of the Amodellis website — more updates coming soon.',
          description: "",
          section: "News",},{id: "projects-project-1",
          title: 'project 1',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{id: "projects-project-2",
          title: 'project 2',
          description: "a project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project/";
            },},{id: "projects-project-3-with-very-long-name",
          title: 'project 3 with very long name',
          description: "a project that redirects to another website",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_project/";
            },},{id: "projects-project-4",
          title: 'project 4',
          description: "another without an image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_project/";
            },},{id: "projects-project-5",
          title: 'project 5',
          description: "a project with a background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/5_project/";
            },},{id: "projects-project-6",
          title: 'project 6',
          description: "a project with no image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/6_project/";
            },},{id: "projects-project-7",
          title: 'project 7',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/7_project/";
            },},{id: "projects-project-8",
          title: 'project 8',
          description: "an other project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/8_project/";
            },},{id: "projects-project-9",
          title: 'project 9',
          description: "another project with an image 🎉",
          section: "Projects",handler: () => {
              window.location.href = "/projects/9_project/";
            },},{id: "projects-transport-data-analytics",
          title: 'Transport Data Analytics',
          description: "Timetable parsing, Journey time metrics, Accessibility KPIs, Performance Dashboards",
          section: "Projects",handler: () => {
              window.location.href = "/projects/service_analytics/";
            },},{id: "projects-public-transport-modelling",
          title: 'Public Transport Modelling',
          description: "Bus and rail network models, timetable and service analytics",
          section: "Projects",handler: () => {
              window.location.href = "/projects/service_pt/";
            },},{id: "projects-ai-enabled-transport-research",
          title: 'AI-Enabled Transport Research',
          description: "Artificial intelligence, open-source modelling, collaborative research",
          section: "Projects",handler: () => {
              window.location.href = "/projects/service_research/";
            },},{id: "projects-traffic-amp-revenue-studies",
          title: 'Traffic &amp;amp; Revenue Studies',
          description: "Managed lanes, toll raods, pricing strategies, growth models",
          section: "Projects",handler: () => {
              window.location.href = "/projects/service_tandr/";
            },},{id: "projects-discrete-choice-analysis",
          title: 'Discrete Choice Analysis',
          description: "Stated preference, revealed preference, advanced choice models, willingness-to-pay measures, welfare",
          section: "Projects",handler: () => {
              window.location.href = "/projects/service_valuation/";
            },},{id: "projects-demand-modelling",
          title: 'Demand Modelling',
          description: "Variable demand models, 4-stage models, activity-based models, elasticty models, model audit",
          section: "Projects",handler: () => {
              window.location.href = "/projects/service_vdm/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%79%6F%75@%65%78%61%6D%70%6C%65.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-inspire',
        title: 'Inspire HEP',
        section: 'Socials',
        handler: () => {
          window.open("https://inspirehep.net/authors/1010907", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Socials',
        handler: () => {
          window.open("/feed.xml", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=qc6CJjYAAAAJ", "_blank");
        },
      },{
        id: 'social-custom_social',
        title: 'Custom_social',
        section: 'Socials',
        handler: () => {
          window.open("https://www.alberteinstein.com/", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
