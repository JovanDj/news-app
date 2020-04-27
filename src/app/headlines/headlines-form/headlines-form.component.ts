import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Output
} from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { debounceTime, distinctUntilChanged, tap } from "rxjs/operators";
import { SearchCriteria } from "../../models/headline.model";

@Component({
  selector: "app-headlines-form",
  templateUrl: "./headlines-form.component.html",
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ["./headlines-form.component.scss"]
})
export class HeadlinesFormComponent {
  form: FormGroup;
  minPageSize = 1;
  maxPageSize = 100;
  defaultPageSize = 10;
  multiple = true;

  @Output() receiveHeadlines: EventEmitter<SearchCriteria> = new EventEmitter();

  constructor(private fb: FormBuilder) {
    this.formInit();

    this.form.valueChanges
      .pipe(
        debounceTime(400),
        distinctUntilChanged(),
        tap((formData: SearchCriteria) => {
          this.receiveHeadlines.emit(formData);
        })
      )
      .subscribe();
  }

  private formInit(): void {
    this.form = this.fb.group({
      topic: [""],
      category: ["general"],
      country: ["us"],
      pageSize: [
        this.defaultPageSize,
        Validators.compose([
          Validators.min(this.minPageSize),
          Validators.max(this.maxPageSize)
        ])
      ]
    });
  }
}
