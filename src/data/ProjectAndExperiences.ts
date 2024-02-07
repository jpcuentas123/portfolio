export interface IExperience {
  title: string
  company: string
  initial_date: string
  end_date: string
  description: { [key: string]: string }
  responsibilities: { [key: string]: string }[]
  technologies: { title: string }[]
  link: string
}

export interface IProject {
  title: string
  company: string
  initial_date: string
  end_date: string
  description: { [key: string]: string }
  responsibilities: { [key: string]: string }[]
  technologies: { title: string }[]
  link: string
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
        {
          en: 'Create new features and maintain E-commerce Admin Application',
          es: 'Crear nuevas funcionalidades y mantener el Admin del E-commerce',
        },

        {
          en: `
        Define new features and create new tasks.`,
          es: 'Definir nuevas features y crear nuevas tasks',
        },
        {
          en: `
        I contributed to defining and developing new features and improvements to the UX/UI of their admin panel, reducing the number of support tickets and user requests for actions that couldn't be performed without the admin panel.`,
          es: 'Contribuí en la definición y desarrollo en nuevas features y mejoras a la UX/UI de su admin panel, reduciendo el número de tickets a soporte técnico y peticiones de cambios por parte del cliente que de otra manera no podrían ser ejecutadas sin el admin panel',
        },
        {
          en: `
        I defined and developed a module that posed a scalability and performance challenge.`,
          es: 'Definí y desarrollé un module que suponía un reto en escala y rendimiento tanto en front-end como en el back-end',
        },
        {
          en: `
        Additionally, I played a key role in defining a clear and scalable solution for one of the company's challenges in its picking system, establishing the foundation for a system that will serve as a competitive advantage for the company.`,
          es: 'Adicionalmente, Jugué un rol clave definiendo una solución clara y escalable para uno de los retos en el sistema de picking de la compañía, sentando las bases para un sistema que va a ser una ventaja competitiva para la compañía',
        },
        {
          en: `
        I used React.js, Redux, Redux Toolkit, Jest, Testing-library, Node.js, AWS, Antd, and Jira
        `,
          es: 'Usé React.js, Redux, Redux Toolkit, Jest, Testing-library, Node.js, AWS, Antd, and Jira',
        },
      ],
      technologies: [],
      link: 'https://instaleap.io/es/',
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
        {
          en: `Define, develop, and maintain web applications.`,
          es: 'Definir, desarrollar y mantener Apps webs',
        },
        {
          en: `
        Mentoring, leading developers, and making technical decisions.`,
          es: 'Mentor, liderar developers y tomar decisiones técnicas',
        },
        {
          en: `
        I used React.js, Redux, Next.js, Redux Toolkit, Jest, Testing-library, Firebase, Node.js, GraphQl, Material UI, and Pivotal Tracker.`,
          es: 'Usé React.js, Redux, Next.js, Redux Toolkit, Jest, Testing-library, Firebase, Node.js, GraphQl, Material UI, and Pivotal Tracker.',
        },
      ],
      technologies: [],
      link: 'https://www.meltstudio.co/',
    },
    {
      title: 'Full Stack Developer',
      company: 'Krones',
      initial_date: '2020',
      end_date: '2021',
      description: {
        en: 'I worked as a full stack developer at <b>Krones</b>, a company that develops machines for the beverage industry. I was responsible for developing the frontend and backend of an application that track the machine maintenance status.',
        es: 'Trabajé como desarrollador full stack en <b>Krones</b>, una empresa que desarrolla máquinas para la industria de bebidas. Desarrollé el frontend y el backend de una aplicación que supervisa el estado de mantenimiento de las maquinas.',
      },
      responsibilities: [
        {
          en: 'Lead the definition, design, and development of the machine maintenance status 	monitoring platform for this company in Latin America.',
          es: 'Liderar la definición, diseño y desarrollo del software de seguimiento del estado de mantenimiento para las maquinas de esta compañía en la región',
        },
      ],
      technologies: [],
      link: 'https://www.krones.com/es/index.php',
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
        {
          en: 'Lead the definition, design, and developing different projects.',
          es: 'Liderar la definición, diseño y desarrollo de diferentes proyectos',
        },
      ],
      technologies: [],
      link: '',
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
        {
          en: 'Freelancer in Workana for 2 years. Defining, designing, and developing different projects.',
          es: 'Freelancer en Workana durante 2 años. Definiendo, diseñando y desarrollando diferentes proyectos',
        },
      ],
      technologies: [],
      link: 'https://www.workana.com/freelancer/687759c0bfcf18d398d6e575990bfc9b?ref=user_dropdown',
    },
  ],
  projects: [
    {
      title: 'CEO',
      company: 'HS',
      initial_date: '2023',
      end_date: 'current',
      description: {
        en: 'Lead the definition, design, and development of a platform to make study something more efficient',
        es: 'Liderar la definición, diseño y desarrollo de HS una plataforma para hacer del estudio algo mucho mas eficiente',
      },
      responsibilities: [],
      technologies: [
        {
          title: 'React',
        },
        {
          title: 'Redux',
        },
        {
          title: 'Node.JS',
        },
        {
          title: 'PostgreSQl',
        },
        {
          title: 'Figma',
        },
      ],
      link: '',
    },
    {
      title: 'Full Stack Developer',
      company: 'KPMT | Krones',
      initial_date: '2020',
      end_date: '2021',
      description: {
        en: 'Lead the definition, design, and development of the machine maintenance status 	monitoring platform for this company in Latin America.',
        es: 'Liderar la definición, diseño y desarrollo del software de seguimiento del estado de mantenimiento para las maquinas de esta compañía en la región',
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
          title: 'Redux',
        },
        {
          title: 'PHP',
        },
        {
          title: 'MySQL',
        },
        {
          title: 'ABODE XD',
        },
      ],
      link: '',
    },
    {
      title: 'Full Stack Developer',
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
          title: 'MySQL',
        },
        {
          title: 'Adobe XD',
        },
        {
          title: 'Otros...',
        },
      ],
      link: '',
    },
  ],
}

export default experiencesData
