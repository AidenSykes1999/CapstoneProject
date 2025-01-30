import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'foodie-admin';

  isEnabled:boolean = false; 
clicked(){ }

newrest:any;
newRestAdded(newrest:any){
  console.log(newrest)
  this.newrest = newrest;
}
}