import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { environment } from '../environments/environment';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatInputModule, MatToolbarModule, MatCardModule, MatFormFieldModule, MatOptionModule } from '@angular/material';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatTableModule } from '@angular/material/table';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FormComponent } from './form/form.component';

import { GarageService } from './garage.service';
import { TableComponent } from './table/table.component';

import { routes } from '../routes';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FormComponent,
    TableComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase, 'databaseInterface'),
    AngularFireModule,
    AngularFirestoreModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatToolbarModule,
    MatCardModule,
    MatFormFieldModule,
    MatOptionModule,
    MatSelectModule,
    RouterModule.forRoot(routes),
    MatButtonToggleModule,
    MatTableModule
  ],
  providers: [GarageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
