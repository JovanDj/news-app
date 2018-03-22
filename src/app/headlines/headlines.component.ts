import {Component, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {RequestsService} from '../services/requests.service';
import {FormlyFieldConfig} from '@ngx-formly/core';

@Component({
  selector: 'app-headlines',
  templateUrl: './headlines.component.html',
  styleUrls: ['./headlines.component.scss']
})
export class HeadlinesComponent implements OnInit {

  showSpinner: Boolean;

  categories = ['business', 'entertainment', 'gaming', 'general', 'health-and-medical', 'music',
    'politics', 'science-and-nature', 'sport', 'technology'];
  headlines: any;

  constructor(private req: RequestsService) {
  }

  form = new FormGroup({});
  model = {topic: '', category: ['general'], country: ['us']};


  fields: FormlyFieldConfig[] = [{
    fieldGroupClassName: 'row',
    fieldGroup: [
      {
        className: 'col-4',
        key: 'topic',
        type: 'input',
        templateOptions: {
          type: 'text',
          label: 'Topic',
          placeholder: 'Enter topic',
        }
      },
      {
        className: 'col-4',

        key: 'category',
        type: 'select',
        templateOptions: {
          label: 'Category',
          multiple: true,
          options: [
            {label: 'Business', value: 'business'},
            {label: 'Entertainment', value: 'entertainment'},
            {label: 'Gaming', value: 'gaming'},
            {label: 'General', value: 'general'},
            {label: 'Music', value: 'music'},
            {label: 'Politics', value: 'politics'},
            {label: 'Health and medical', value: 'health-and-medical'},
            {label: 'Science and nature', value: 'science-and-nature'},
            {label: 'Sport', value: 'sport'},
            {label: 'Technology', value: 'technology'}]
        }
      },
      {
        className: 'col-4',
        key: 'country',
        type: 'select',
        templateOptions: {
          label: 'Country',
          multiple: true,
          options: [
            {label: 'United Arab Emirates', value: 'ae'},
            {label: 'Argentina', value: 'ar'},
            {label: 'Serbia', value: 'rs'},
            {label: 'Germany', value: 'de'},
            {label: 'United Kingdom of Great Britain and Northern Ireland', value: 'gb'},
            {label: 'United States of America', value: 'us'},
            {label: 'Hungary', value: 'hu'},
            {label: 'Romania', value: 'ro'}
          ]
        }
      }]
  }];

  submit(model) {
    console.log(model);
  }


  getHeadlines(formData) {
    this.showSpinner = true;
    console.log(formData);
    this.req.getHeadlines(formData).subscribe(
      data => {
        console.log(data);
        this.headlines = data;
        this.showSpinner = false;
      },
      error => {
        console.log(error);
      });
  }

  ngOnInit() {
  }
}
