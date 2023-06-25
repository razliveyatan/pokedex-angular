import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-full-name-page',
  templateUrl: './full-name-page.component.html',
  styleUrls: ['./full-name-page.component.css']
})
export class FullNamePageComponent {  
  fullName:string;  
  constructor(private router: Router) {
      this.fullName = '';
    }

  onSubmit(): void {
    // Store the full name in local storage
    localStorage.setItem('fullName', this.fullName !== '' ? JSON.stringify(this.fullName) : '');

    // Redirect to the Birth Date page
    this.router.navigate(['/birth-date']);
  }
}