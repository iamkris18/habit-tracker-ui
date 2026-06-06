import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-welcome-component',
  imports: [],
  templateUrl: './welcome-component.html',
  styleUrl: './welcome-component.css',
})
export class WelcomeComponent{
  username='';

  constructor(private route: ActivatedRoute){}
  ngOnInit(){
    this.username = this.route.snapshot.params['username'];

  }


}
