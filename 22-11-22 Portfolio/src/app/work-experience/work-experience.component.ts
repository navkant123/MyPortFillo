import { Component, OnInit } from '@angular/core';
import { WorkExperience } from '../models/models';


@Component({
  selector: 'work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.css'],
})
export class WorkExperienceComponent implements OnInit {
  workExpList: WorkExperience[] = [
    {
      role: 'Senior System Engineer',
      company: 'Infosys Limited',
      duration: 'March 2023 - Now',
      description: [
        'Working to with the team.',
        'Created Website from scratch.',
        'Developed New Functionality.',
        'Made Website More Userfriendly.',
        'Working with the Client to Resolve all Issue.',
        'Understand the functionalit and Implemented same',
        'Fixed the existing Bug',
        'Found the root cause for defect',
        'Given the KT to New Team Member',
        'Delivered all the ticket on time',
      ],
    },
    {
      role: 'Engineer',
      company: 'LTIMindtree',
      duration: 'Dec 2020 - March 2023',
      description: [
        'Working to with the team.',
        'Created Website from scratch.',
        'Developed New Functionality.',
        'Made Website More Userfriendly.',
        'Working with the Client to Resolve all Issue.',
        'Understand the functionalit and Implemented same',
        'Fixed the existing Bug',
        'Found the root cause for defect',
        'Given the KT to New Team Member',
        'Delivered all the ticket on time',
      ],
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
