import { HeadlinesService } from './../../services/headlines.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-headlines-form',
  templateUrl: './headlines-form.component.html',
  styleUrls: ['./headlines-form.component.scss']
})
export class HeadlinesFormComponent implements OnInit {
  form: FormGroup;
  multiple = false;

  @Output() receiveHeadlines = new EventEmitter();

  constructor(private fb: FormBuilder, private headlinesService: HeadlinesService) {
    this.form = this.fb.group({
      topic: [''],
      category: [['general']],
      country: [['us']]
    });
  }

  submitForm(formData: any) {
    this.headlinesService.getHeadlines(formData).subscribe(data => {
      this.receiveHeadlines.emit(data);
    });
  }

  ngOnInit() {}
}
