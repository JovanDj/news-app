import {Component} from '@angular/core';
import {RequestsService} from './services/requests.service';
import {FormGroup} from '@angular/forms';
import {FormlyFieldConfig} from '@ngx-formly/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  fetchingData: Boolean;

  categories = ['business', 'entertainment', 'gaming', 'general', 'healt-and-medical', 'music',
    'politics', 'science-and-nature', 'sport', 'technology'];
  headlines: any;

  constructor(private req: RequestsService) {
  }

  form = new FormGroup({});
  model = {topic: ''};
  fields: FormlyFieldConfig[] = [{
    key: 'topic',
    type: 'input',
    templateOptions: {
      type: 'text',
      label: 'Topic',
      placeholder: 'Enter topic',
      required: true,
    },

  }];

  submit(model) {
    console.log(model);
  }


  getHeadlines(formData) {
    this.fetchingData = true;

    this.req.getHeadlines(formData).subscribe(
      data => {
        console.log(data);
        this.headlines = data;
        this.fetchingData = false;

      },
      error => {
        console.log(error);
      });
  }

}
