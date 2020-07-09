import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { StudyTrackerComponent } from './study-tracker/study-tracker.component';

const routes: Routes = [
  { path: '', redirectTo: '/studyTracker', pathMatch: 'full' },
 
  { path: 'studyTracker', component: StudyTrackerComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
