import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieDetailComponent } from '../movie-detail/movie-detail.component';

@Component({
	selector: 'tmdb-modal',
	template: '',
	styleUrls: [],
})
export class ModalComponent {
	constructor(
		public dialog: MatDialog,
		public router: Router,
		public route: ActivatedRoute
	) {
		this.openDialog();
	}

	public openDialog(): void {
		const dialogRef = this.dialog.open(MovieDetailComponent, {});
		dialogRef.afterClosed().subscribe((result) => {
			console.log('The dialog was closed');
			this.router.navigate(['../'], { relativeTo: this.route });
		});
	}
}