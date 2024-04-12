import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  
    downloadResume(): void {
      const link = document.createElement('a');
      link.setAttribute('target', '_blank');
      link.setAttribute('href', 'assets/NavkantYadavResumee.pdf'); // Assuming resume is in PDF format
      link.setAttribute('download', 'Navkant_CV(SoftwareDeveloper).pdf');
      document.body.appendChild(link);
      link.click();
      link.remove();
    }
  
  
  constructor() { }

  ngOnInit(): void {
  }

}

