import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Ecom Web App';
  isDarkMode = false;
  lightMode = document.createElement("div").innerHTML = `Light Mode`;
  darkMode = document.createElement("div").innerHTML = `Dark Mode`;

  toggleTheme() {
    this.isDarkMode = ! this.isDarkMode;
    document.body.classList.toggle("dark-mode");
  }
}
