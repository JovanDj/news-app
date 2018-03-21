import { Component, OnInit } from '@angular/core';
import {FormGroup} from '@angular/forms';
import {RequestsService} from '../services/requests.service';
import {FormlyFieldConfig} from '@ngx-formly/core';

@Component({
  selector: 'app-headlines',
  templateUrl: './headlines.component.html',
  styleUrls: ['./headlines.component.scss']
})
export class HeadlinesComponent implements OnInit {

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

  ngOnInit() {
  }

}
