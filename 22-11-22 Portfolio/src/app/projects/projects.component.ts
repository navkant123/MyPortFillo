import { Component, OnInit } from '@angular/core';
import { Project } from '../models/models';

@Component({
  selector: 'projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent implements OnInit {
  projects: Project[] = [
    {
      title: 'B2B Commerce',
      technologies: 'Java, Spring-MVC, Hybernet, MySQL, SAP Hybris, Rest API, Swagger, Postman, HAC, BackOffice, SDLC',
      description: [
        'This Project is Based on hybris B2B Commerce. I am working on this project as SAP CC Developer. It Povides building solutions. This website is available in many countries like USA, UK, Italy, Brazil etc.',
        'Worked as a team to develop New Rest API and delivered it successfully.',
        'Developed and end to end Complete Order Simulation Functionality in ecommerce website, which will simulate the order and make application more userfriendly',
        'Worked on Restfull Web Services (Resource and Client) and have hands on Experience on it',
        'Hands on experience on Swagger and Postman.',
        'Responsible for Cart, Checkout, Order functionality.',
        'Responsible for analysing and understanding user stories through functionality specification documents and developing and executing it.',
        'Logging and tracking bugs in Jira Tool and Perform root cause analysis.',
        'Hands on experience on developing java based system with frameworks like Spring.',
        'Worked on Overall Hybris architecture, Impexs, Cronjob and out of the box features functionality Implementation.',
        'Involving in Importing IMPEX files through service layer.',
        'Involving in writing properties file and flexible search.',
        'Creating Item types, populating data models, modifying/adding cockpit and hmc configurations.',
        'Hands on experience in hybris (HAC, BackOffice).',
        'Perform customization of hybris Data Modeling as per project requirements.',
        'Actively involved in Scrum Meetings, Retrospective Meeting & Review with the clients .',
        'Developed and end to end Complete Avalara Tax functionality in ecommerce website, which will calculate the Tax on the basis of soem condition',
        'Developed and end to end Complete ASM functionality using Backend service',
        'Built the Ecommerce Website from Scratch.',
        'Was part of team to deliver all the task on time.',
      ],
    },
    {
      title: 'B2B / B2C Ecommerce',
      technologies: 'Java, SpringBoot, Spring-Data JPA, Hybernet, MySQL, Rest API, Swagger, Postman, SDLC, JDLC, JUNIT, ANT MAVEN',
      description: [
        'Worked as a team to develop New Rest API and delivered it successfully.',
        'Worked on Restfull Web Services (Resource and Client) and have hands on Experience on it',
        'Hands on experience on Swagger and Postman.',
        'Responsible for Cart, Checkout, Order functionality.',
        'Responsible for analysing and understanding user stories through functionality specification documents and developing and executing it.',
        'Logging and tracking bugs in Jira Tool and Perform root cause analysis.',
        'Hands on experience on developing java based system with frameworks like Spring.',
        'Actively involved in Scrum Meetings, Retrospective Meeting & Review with the clients .',
        'Developed and end to end Complete Avalara Tax functionality in ecommerce website, which will calculate the Tax on the basis of soem condition',
        'Built the Ecommerce Website from Scratch.',
        'Experience in Writing Junit Test Case using junit',
        'Developed Functionality which will show the estimated delivery date based on Zip code',
        'Developed the functionality which will display that product is available or not based on Zipcode',
        'Developed many functionality across the applicationa and fixed multiple bugs',
        'Was part of team to deliver all the task on time.',
      ],
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
