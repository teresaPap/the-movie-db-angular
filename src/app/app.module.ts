import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { HttpClientModule } from '@angular/common/http';
import { MatDialogModule } from '@angular/material/dialog';
import { ModalComponent } from './modal/modal.component';
import { MaterialElevationDirective } from './directives/material-elevation.directive';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { MovieComponent } from './movie/movie.component';
import { ResultsComponent } from './search/results/results.component';
import { ErrorComponent } from './error/error.component';

@NgModule({
	declarations: [
		AppComponent,
		SearchComponent,
		ResultsComponent,
		ModalComponent,
		MaterialElevationDirective,
		MovieComponent,
		ErrorComponent,
	],
	imports: [
		BrowserModule,
		CommonModule,
		HttpClientModule,
		NoopAnimationsModule,
		ReactiveFormsModule,
		MatInputModule,
		MatFormFieldModule,
		MatIconModule,
		MatButtonModule,
		MatDialogModule,
		MatCardModule,
		MatPaginatorModule,
		AppRoutingModule,
	],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
