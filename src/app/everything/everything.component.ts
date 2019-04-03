import { Component, ChangeDetectionStrategy } from '@angular/core';
import { EverythingService } from '../services/everything.service';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-everything',
  templateUrl: './everything.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./everything.component.scss']
})
export class EverythingComponent {
  showSpinner: Boolean = false;

  // Store subscriptions here
  everything$: Observable<any>;

  constructor(private everythingService: EverythingService) {}

  form = new FormGroup({});
  model = {
    topic: '',
    category: ['general'],
    language: ['en'],
    page: '1',
    pageSize: '10'
  };

  fields: FormlyFieldConfig[] = [
    {
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
              { label: 'Arabic', value: 'ar' },
              { label: 'German', value: 'de' },
              { label: 'English', value: 'en' },
              { label: 'Spanish', value: 'es' },
              { label: 'French', value: 'fr' },
              { label: 'Hebrew', value: 'he' },
              { label: 'Italian', value: 'it' },
              { label: 'Dutch', value: 'nl' },
              { label: 'Norwegian', value: 'no' },
              { label: 'Portuguese', value: 'pt' },
              { label: 'Russian', value: 'ru' },
              { label: 'Swedish', value: 'se' },
              { label: '???', value: 'ud' },
              { label: 'Chinese', value: 'zh' }
            ]
          }
        }
      ]
    }
  ];

  getEverything(searchCriteria: any) {
    this.showSpinner = true;
    this.everything$ = this.everythingService.getEverything(searchCriteria).pipe(
      finalize(() => {
        this.showSpinner = false;
      })
    );
  }
}
