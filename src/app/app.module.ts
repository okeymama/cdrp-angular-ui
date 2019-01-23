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
import { CreateDataTrajectoryComponent } from './create-data-trajectory/create-data-trajectory.component'
import { AddDataTrajectoryComponent } from './add-data-trajectory/add-data-trajectory.component';
import { CommentComponent } from './comment/comment.component';
import { DeletetrajectoryComponent } from './deletetrajectory/deletetrajectory.component';
import { AddFormsComponent } from './add-forms/add-forms.component'; 
import {MatTableModule} from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material';
import {MatSortModule} from '@angular/material/sort';
import { EditdatacategoryComponent } from './editdatacategory/editdatacategory.component';
import { AddIdrpChecksComponent } from './add-idrp-checks/add-idrp-checks.component';
import { CreateDuplicateTrajectoryComponent } from './create-duplicate-trajectory/create-duplicate-trajectory.component'; 
import { AssignSubjectComponent } from './assign-subject/assign-subject.component';
import { ManualassignsubjectComponent } from './manualassignsubject/manualassignsubject.component'; 
import { FilterPipe }from './filter.pipe';
import { BuisnessruleComponent } from './buisnessrule/buisnessrule.component';
import { RuleComponent } from './rule/rule.component';
import { ManualComponent } from './manual/manual.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { ModifyApplicableVisitsComponent } from './modify-applicable-visits/modify-applicable-visits.component';
import { AddNewVisitComponent } from './add-new-visit/add-new-visit.component';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown'; 
import { IdrpchecktemplateComponent } from './idrpchecktemplate/idrpchecktemplate.component';
import { CopyfromstudyComponent } from './copyfromstudy/copyfromstudy.component'; 

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
      },
      {
        path:'trajectory',
        component:AddDataTrajectoryComponent
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
    MapExpectedDataFormsComponent,
    CreateDataTrajectoryComponent,
    AddDataTrajectoryComponent,
    CommentComponent,
    DeletetrajectoryComponent,
    AddFormsComponent,
    EditdatacategoryComponent,
    CreateDuplicateTrajectoryComponent,
    AssignSubjectComponent,
    ManualassignsubjectComponent,
    BuisnessruleComponent,
    RuleComponent,
    ManualComponent,
    AddIdrpChecksComponent,
    ModifyApplicableVisitsComponent,
    AddNewVisitComponent,
    FilterPipe ,
    IdrpchecktemplateComponent,
    CopyfromstudyComponent
   
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
    MatTableModule,
    MatPaginatorModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSortModule,
    MatSnackBarModule,
    BrowserAnimationsModule,
    ChartsModule,
    HttpModule,
    HttpClientModule,
    NgMultiSelectDropDownModule.forRoot() 
  ],
  entryComponents:[
    AddExpectedDataComponent,
    MapExpectedDataFormsComponent,
    EditdatacategoryComponent,
    CreateDataTrajectoryComponent,
    CommentComponent,
    DeletetrajectoryComponent,
    AddFormsComponent,
    CreateDuplicateTrajectoryComponent,
    AddIdrpChecksComponent,
    ModifyApplicableVisitsComponent,
    AddNewVisitComponent,
    BuisnessruleComponent,
     ManualassignsubjectComponent ,
     AssignSubjectComponent
    
  ],
  providers: [CdrpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
