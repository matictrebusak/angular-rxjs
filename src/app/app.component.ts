import { Component, OnInit } from '@angular/core';
import { OpenaiService } from './openai.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'angular-rxjs';

  constructor(private openAi: OpenaiService) {}
  
  ngOnInit() {
    this.openAi.init();
  }
}
