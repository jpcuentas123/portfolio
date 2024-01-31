export interface IExperience {
  title: string
  company: string
  initial_date: string
  end_date: string
  description: { [key: string]: string }
  responsibilities: string[]
  technologies: { title: string }[]
}

export interface IProject {
  title: string
  company: string
  initial_date: string
  end_date: string
  description: { [key: string]: string }
  responsibilities: string[]
  technologies: { title: string }[]
}

export interface IExperiencesAndProjects {
  experiences: IExperience[]
  projects: IProject[]
}

const experiencesData: IExperiencesAndProjects = {
  experiences: [
    {
      title: 'Full Stack Developer',
      company: 'Instaleap',
      initial_date: '2022',
      end_date: '2023',
      description: {
        en: 'I worked as a full stack developer at <b>Instaleap</b>, defining and developing new features for the admin of the e-commerce app.',
        es: 'Yo trabajé como full stack developer en <b>Instaleap</b>, definiendo y desarrollando nuevas features para el admin del e-commerce app.',
      },
      responsibilities: [
        `Create and maintain E-commerce Admin Application
        `,
        `Follow Agile methodology to quickly develop new features.`,
        `
        Define new features and create new tasks.`,
        `
        I contributed to defining and developing new features and improvements to the UX/UI of their admin panel, reducing the number of support tickets and user requests for actions that couldn't be performed without the admin panel.`,
        `
        I defined and developed a module that posed a scalability and performance challenge.`,
        `
        Additionally, I played a key role in defining a clear and scalable solution for one of the company's challenges in its picking system, establishing the foundation for a system that will serve as a competitive advantage for the company.`,
        `
        I used React.js, Redux, Redux Toolkit, Jest, Testing-library, Node.js, AWS, Antd, and Jira
        `,
      ],
      technologies: [],
    },
    {
      title: 'Full Stack Developer',
      company: 'Melt Studio',
      initial_date: '2021',
      end_date: 'Present',
      description: {
        en: "I worked as a full stack developer at <b>Melt Studio</b>, a company that develops web applications. I'm responsible for developing the frontend and backend of the applications, as well as the integration with the APIs of the real estate portals.",
        es: 'Yo trabajé como desarrollador full stack en <b>Melt Studio</b>, una empresa que desarrolla aplicaciones web. Me encargo de desarrollar el frontend y el backend de las aplicaciones, así como la integración con las APIs.',
      },
      responsibilities: [
        `Define, develop, and maintain web applications.`,
        `
        Mentoring, leading developers, and making technical decisions.`,
        `
        I used React.js, Redux, Next.js, Redux Toolkit, Jest, Testing-library, Firebase, Node.js, GraphQl, Material UI, and Pivotal Tracker.`,
      ],
      technologies: [],
    },
    {
      title: 'Full Stack Developer',
      company: 'Krones',
      initial_date: '2020',
      end_date: '2021',
      description: {
        en: 'I worked as a full stack developer at <b>Krones</b>, a company that develops machines for the beverage industry. I was responsible for developing the frontend and backend of an application that manages the production of the machines.',
        es: 'Trabajé como desarrollador full stack en <b>Krones</b>, una empresa que desarrolla máquinas para la industria de bebidas. Desarrollé el frontend y el backend de una aplicación que gestiona la producción de las máquinas.',
      },
      responsibilities: [
        'Lead the definition, design, and development of the machine maintenance status 	monitoring platform for this company in Latin America.',
      ],
      technologies: [],
    },
    {
      title: 'Full Stack Developer',
      company: 'Itseil',
      initial_date: '2020',
      end_date: '2021',
      description: {
        en: 'I worked as a full stack developer at <b>Itseil</b>, a company that develops web applications for the real estate market. I was responsible for developing the frontend and backend of the applications, as well as the integration with the APIs of the real estate portals.',
        es: 'Trabajé como desarrollador full stack en <b>Itseil</b>, una empresa que desarrolla aplicaciones web. Me encargaba de desarrollar el frontend y el backend de las aplicaciones, así como la integración con las APIs.',
      },
      responsibilities: [
        'Lead the definition, design, and development of machine maintenance status monitoring software in Latin America.',
      ],
      technologies: [],
    },
    {
      title: 'Freelance',
      company: 'Workana',
      initial_date: '2018',
      end_date: '2020',
      description: {
        en: 'I worked as a freelance developer on the <b>Workana</b> platform, where I developed web applications for different clients.',
        es: 'Trabajé como desarrollador freelance en la plataforma <b>Workana</b>, donde desarrollé aplicaciones web para diferentes clientes.',
      },
      responsibilities: [
        'Freelancer in Workana for 2 years. Defining, designing, and developing different projects.',
      ],
      technologies: [],
    },
  ],
  projects: [
    {
      title: 'Suscripciones',
      company: 'MeltStudio',
      initial_date: '2020',
      end_date: '2021',
      description: {
        en: 'Suscripciones | Platform for managing subscriptions.',
        es: 'Suscripciones | Plataforma para la gestión de suscripciones.',
      },
      responsibilities: [],
      technologies: [
        {
          title: 'HTML',
        },
        {
          title: 'CSS',
        },
        {
          title: 'React',
        },
        {
          title: 'Next js',
        },
        {
          title: 'Redux',
        },
        {
          title: 'Node',
        },
        {
          title: 'Express',
        },
        {
          title: 'Firebase',
        },
        {
          title: 'Redux Saga',
        },
      ],
    },
    {
      title: 'Santas Carnitas',
      company: 'Santas Carnitas',
      initial_date: '2020',
      end_date: '2021',
      description: {
        en: 'Santas Carnitas | Online store for the sale of meat products.',
        es: 'Santas Carnitas | Plataforma para venta de carnes online.',
      },
      responsibilities: [],
      technologies: [
        {
          title: 'Html',
        },
        {
          title: 'Css',
        },
        {
          title: 'React',
        },
        {
          title: 'Redux',
        },
        {
          title: 'Php',
        },
        {
          title: 'Myslql',
        },
        {
          title: 'Adobe XD',
        },
        {
          title: 'Otros...',
        },
      ],
    },
  ],
}

export default experiencesData
