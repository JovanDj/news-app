import { Component } from '@angular/core';
import { RequestsService } from './services/requests.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'News App';
  subtitle = 'Search for news from various sources';
  fetchingData: Boolean;

  categories = ['business', 'entertainment', 'gaming', 'general', 'healt-and-medical', 'music',
    'politics', 'science-and-nature', 'sport', 'technology'];
  headlines: any;
  rForm: FormGroup;

  constructor(private req: RequestsService, private fb: FormBuilder) {
    this.createForm();
  }

  createForm() {
    this.rForm = this.fb.group({
      topic: [null],
      category: [null]
    });
  }

  getHeadlines(formData) {
    this.fetchingData = true;
    this.title = 'Fetching data, please wait.';

    this.req.getHeadlines(formData).subscribe(
      data => {
        console.log(data);
        this.headlines = data;
        this.title = 'News App';
        this.fetchingData = false;

      },
      error => {
        console.log(error);
      });
  }

}
