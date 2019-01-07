import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule }    from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';
import {MatSidenavModule} from '@angular/material';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material';
import {MatIconModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'; 
import { SideNavbarComponent } from './side-navbar/side-navbar.component';
import { MatListModule } from '@angular/material';
import { AppComponent } from './app.component';
import { ExpectedDataComponent } from './expected-data/expected-data.component';
import {MatDividerModule} from '@angular/material';
import { MatCardModule } from '@angular/material';
import { MatGridListModule } from '@angular/material';
import { StudyInfoComponent } from './study-info/study-info.component';
import { AccordComponent } from './accord/accord.component';
import { CdrpService } from './cdrp.service';
import { IconsComponent } from './icons/icons.component';
import {MatExpansionModule} from '@angular/material/expansion';
import { MatTabsModule } from '@angular/material';
import { IdrpCheckComponent } from './idrp-check/idrp-check.component';
import { DataTrajectoryComponent } from './data-trajectory/data-trajectory.component';
import { AppliedVisitsComponent } from './applied-visits/applied-visits.component';
import { CriticalDataComponent } from './critical-data/critical-data.component';
import { ChartsModule } from 'ng2-charts'; 
import {MatDialogModule, MAT_DIALOG_DATA} from '@angular/material';
import {MatFormFieldModule,MatInputModule,MatButtonModule} from '@angular/material';
import { AddExpectedDataComponent } from './add-expected-data/add-expected-data.component';
import { MapExpectedDataFormsComponent } from './map-expected-data-forms/map-expected-data-forms.component';



const appRoutes:Routes = [
  
  {
    path:'nav',
    component: SideNavbarComponent,
    children:[
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'study'
      },
      {
        path:'study',
        component:StudyInfoComponent
      },
      {
        path:'next',
        component: ExpectedDataComponent
      }

    ]
   
  },
  {
      path:'next',
      component: ExpectedDataComponent
  },
  {
    path:'',
    component:AccordComponent
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'study'
  },
  {
    path:'study',
    component:StudyInfoComponent
  }
 /* {
    path:'home',
    component:AccordComponent,
    children:[
      {
        path:'',
        component:StudyInfoComponent
      },
      {
        path:'nav',
        component:SideNavbarComponent
      },
      {
        path:'next',
        component: ExpectedDataComponent
       }
    ] 
   
  }*/
]

@NgModule({
  declarations: [
    AppComponent,
    SideNavbarComponent,
    ExpectedDataComponent,
    StudyInfoComponent,
    IconsComponent,
    AccordComponent,
    IdrpCheckComponent,
    DataTrajectoryComponent,
    AppliedVisitsComponent,
    CriticalDataComponent,
    AddExpectedDataComponent,
    MapExpectedDataFormsComponent
   
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    MatSidenavModule,
    MatCheckboxModule,
    MatRadioModule,
    MatIconModule,
    MatListModule,
    MatDividerModule,
    MatCardModule,
    MatGridListModule,
    MatExpansionModule,
    MatTabsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    BrowserAnimationsModule,
    ChartsModule,
    HttpModule,
    HttpClientModule
  ],
  entryComponents:[AddExpectedDataComponent,MapExpectedDataFormsComponent],
  providers: [CdrpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
