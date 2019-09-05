import { Component, OnInit, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
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

  @Output() receiveHeadlines: EventEmitter<SearchCriteria> = new EventEmitter();

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      topic: [''],
      category: [['general']],
      country: [['us']]
    });

    this.form.valueChanges
      .pipe(
        distinctUntilChanged(),
        debounceTime(400)
      )
      .subscribe((formData: SearchCriteria) => {
        this.receiveHeadlines.emit(formData);
      });
  }

  ngOnInit() {}
}
