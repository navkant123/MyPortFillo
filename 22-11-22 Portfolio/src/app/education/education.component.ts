import { Component, OnInit } from '@angular/core';
import { Education } from '../models/models';

@Component({
  selector: 'education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css'],
})
export class EducationComponent implements OnInit {
  educationList: Education[] = [
    {
      institute: "Technocrats Institute of Technology, Bhopal",
      course: 'BE in Electronics and communication Engineering',
      duration: '2016-2020',
      score: '89%',
    },
    {
      institute: 'R. K. College (Madhubani)',
      course: 'HSC',
      duration: '2013-2015',
      score: '72%',
    },
    {
      institute: 'B Y J H School Paharaj Asthan Khaira',
      course: 'SSC',
      duration: '2012-2013',
      score: '77%',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
