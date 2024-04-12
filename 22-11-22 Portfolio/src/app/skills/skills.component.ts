import { Component, OnInit } from '@angular/core';
import { Skill } from '../models/models';

@Component({
  selector: 'skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
})
export class SkillsComponent implements OnInit {
  skills: Skill[] = [
    {
      name: 'SpringBoot, Spring-MVC',
      level: 'Expert',
      rating: 85,
    },
    {
      name: 'GitHub, GitBash, Eclispe /STS /InteliJ',
      level: 'Expert',
      rating: 95,
    },
    {
      name: 'SpringData-JPA, Rest / Soap, JSON / XML',
      level: 'Expert',
      rating: 95,
    },
    {
      name: 'JAVA, MySQL WorkBench, PostMan, Swagger, Jira',
      level: 'Expert',
      rating: 97,
    },
    {
      name: 'SAP Hybris, Spring-JDBC, Junit',
      level: 'Expert',
      rating: 95,
    },
    {
      name: 'Tomcat Server, Jenkins',
      level: 'Intermediate',
      rating: 75,
    },
    {
      name: 'Jenkins, AWS (EC2), DSA',
      level: 'Intermediate',
      rating: 65,
    },
    {
      name: 'Angular',
      level: 'Beginer',
      rating: 45,
    },

  ];
  constructor() {}

  ngOnInit(): void {}
}
