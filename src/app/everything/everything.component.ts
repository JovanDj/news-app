import {Component, OnDestroy, OnInit} from '@angular/core';
import {EverythingService} from '../services/everything.service';
import {FormGroup} from '@angular/forms';
import {FormlyFieldConfig} from '@ngx-formly/core';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-everything',
  templateUrl: './everything.component.html',
  styleUrls: ['./everything.component.scss']
})
export class EverythingComponent implements OnInit, OnDestroy {
  showSpinner: Boolean = false;

  // Store subscriptions here
  everythingSub: Subscription = new Subscription();

  all: any;
  pageSize = '10';

  constructor(private everythingService: EverythingService) {
  }

  form = new FormGroup({});
  model = {
    topic: '',
    category: ['general'],
    language: ['en'],
    page: '1',
    pageSize: '10'
  };

  fields: FormlyFieldConfig[] = [{
    fieldGroupClassName: 'row',

    fieldGroup: [
      {
        className: 'col-md-3 offset-md-3',
        key: 'q',
        type: 'input',
        templateOptions: {
          type: 'text',
          label: 'Topic',
          placeholder: 'Enter topic',
          required: true
        }
      },
      {
        className: 'col-md-3',
        key: 'language',
        type: 'select',
        templateOptions: {
          label: 'Language',
          multiple: true,
          options: [
            {label: 'Arabic', value: 'ar'},
            {label: 'German', value: 'de'},
            {label: 'English', value: 'en'},
            {label: 'Spanish', value: 'es'},
            {label: 'French', value: 'fr'},
            {label: 'Hebrew', value: 'he'},
            {label: 'Italian', value: 'it'},
            {label: 'Dutch', value: 'nl'},
            {label: 'Norwegian', value: 'no'},
            {label: 'Portuguese', value: 'pt'},
            {label: 'Russian', value: 'ru'},
            {label: 'Swedish', value: 'se'},
            {label: '???', value: 'ud'},
            {label: 'Chinese', value: 'zh'}
          ]
        }
      }]
  }];

  getEverything(searchCriteria: any) {
    this.everythingSub = this.everythingService.getEverything(searchCriteria).subscribe(
      everything => {
        this.all = everything;
      }
    );
  }


  ngOnInit() {

  }

  ngOnDestroy() {
    if (this.everythingSub) {
      this.everythingSub.unsubscribe();

    }
  }


}
