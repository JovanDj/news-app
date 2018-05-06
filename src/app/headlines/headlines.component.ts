import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {HeadlinesService} from '../services/headlines.service';
import {FormlyFieldConfig} from '@ngx-formly/core';
import {Subscription} from 'rxjs';
import {Headline} from '../models/headline.model';


@Component({
  selector: 'app-headlines',
  templateUrl: './headlines.component.html',
  styleUrls: ['./headlines.component.scss']
})
export class HeadlinesComponent implements OnInit, OnDestroy {

  // Control spinner with this
  showSpinner: Boolean = false;

  // Store subscriptions here
  headlinesSub: Subscription = new Subscription();

  // Put results of http request here
  headline: Headline = {} as Headline;

  constructor(private req: HeadlinesService) {
  }

  form = new FormGroup({});
  model = {topic: '', category: ['general'], country: ['us']};

  fields: FormlyFieldConfig[] = [{
    fieldGroupClassName: 'row',
    fieldGroup: [
      {
        className: 'col-md-3 offset-md-3',
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
        className: 'col-md-3',
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
      },
      {
        className: 'col-md-6 offset-md-3',
        key: 'topic',
        type: 'input',
        templateOptions: {
          type: 'text',
          label: 'Topic',
          placeholder: 'Enter topic',
        }
      }]
  }];

  getHeadlines(formData: any) {
    this.showSpinner = true;

    this.headlinesSub = this.req.getHeadlines(formData).subscribe(
      data => {
        this.headline = data;
        this.showSpinner = false;
        console.log(data);
      });
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    // Unsubscribe from subscriptions when component is destroyed to prevent memory leaks
    if (this.headlinesSub) {
      this.headlinesSub.unsubscribe();

    }
  }
}
