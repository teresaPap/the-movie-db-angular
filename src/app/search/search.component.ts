import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'tmdb-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  public searchForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.searchForm = this.fb.group({
      keyword: [
        '',
        [Validators.minLength(3), Validators.pattern('[a-zA-Z0-9]+')],
      ],
    });
  }

  ngOnInit(): void {}

  public submitSearchForm(): void {
    console.log(
      'value:',
      this.searchForm.controls['keyword'].value,
      'Errors:',
      this.searchForm.controls['keyword'].errors
    );
  }
}
