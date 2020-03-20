import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  ChangeDetectionStrategy
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SearchCriteria } from '../../models/headline.model';
import { distinctUntilChanged, debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-headlines-form',
  templateUrl: './headlines-form.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./headlines-form.component.scss']
})
export class HeadlinesFormComponent implements OnInit {
  form: FormGroup;
  minPageSize = 1;
  maxPageSize = 100;
  defaultPageSize = 20;
  multiple = true;

  @Output() receiveHeadlines: EventEmitter<SearchCriteria> = new EventEmitter();

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.form = this.fb.group({
      topic: [''],
      category: ['general'],
      country: ['us'],
      pageSize: [
        this.defaultPageSize,
        Validators.compose([
          Validators.min(this.minPageSize),
          Validators.max(this.maxPageSize)
        ])
      ]
    });

    this.form.valueChanges
      .pipe(distinctUntilChanged(), debounceTime(100))
      .subscribe((formData: SearchCriteria) => {
        this.receiveHeadlines.emit(formData);
      });
  }
}
