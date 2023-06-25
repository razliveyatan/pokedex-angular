import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-birth-date-page',
  templateUrl: './birth-date-page.component.html',
  styleUrls: ['./birth-date-page.component.css']
})
export class BirthDatePageComponent {
  birthDate: string;

  constructor(private router: Router,) {
    this.birthDate = '';
  }  
  
  ngOnInit() {
     const fullName = localStorage.getItem('fullName');
    if (!fullName) {
      this.router.navigate(['/full-name']); 
    } 
  }
  onSubmit():void {
    // Store the full name in local storage
    localStorage.setItem('birthDate', this.birthDate !== null ? this.birthDate : '');

    // Route to Pokemon List page
    this.router.navigate(['/pokemon-list']);
  }
}