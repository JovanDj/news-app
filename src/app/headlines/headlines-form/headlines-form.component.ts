import { Component, OnInit, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-headlines-form',
  templateUrl: './headlines-form.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./headlines-form.component.scss']
})
export class HeadlinesFormComponent implements OnInit {
  form: FormGroup;
  multiple = false;

  @Output() receiveHeadlines: EventEmitter<any> = new EventEmitter();

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      topic: [''],
      category: [['general']],
      country: [['us']]
    });
  }

  submitForm(formData: any) {
    this.receiveHeadlines.emit(formData);
  }

  ngOnInit() {}
}
