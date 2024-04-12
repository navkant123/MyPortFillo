import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'personal-information',
  templateUrl: './personal-information.component.html',
  styleUrls: ['./personal-information.component.css'],
})
export class PersonalInformationComponent implements OnInit {
  myData: string[][] = [
    ['Name', 'Navkant Yadav'],
    ['DOB', '03/06/1997'],
    ['Work Exp', '3.4 Years'],
    ['Education', 'B.E. (2020)'],
    ['Interests', 'Watching Movie'],
  ];

  aboutMe: string[] = [
    'Hi, I am a Software Developer with 3+ years of experience, specializing in backend development, API creation, and website enhancement',
    'Throughout my tenure at LTIMindtree and Infosys Ltd., I have honed my skills in Java programming, Spring Boot, Hibernate, MySQL, and SAP Hybris',
    ' I thrive in dynamic environments, collaborating with cross-functional teams to deliver innovative solutions that meet client needs and drive business growth',
    'Delivered all tickets withing deadlines. Always eager to learn new technologies.',
    'Currently, working as SSE of Infosys Ltd.',
  ];

  constructor() {}

  ngOnInit(): void {}
}
