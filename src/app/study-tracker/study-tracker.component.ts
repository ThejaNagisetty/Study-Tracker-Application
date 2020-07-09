import { Component, OnInit } from '@angular/core';

import { StudyService } from '../study.service';
import { Studies } from '../studies';

@Component({
  selector: 'app-study-tracker',
  templateUrl: './study-tracker.component.html',
  styleUrls: ['./study-tracker.component.css']
})
export class StudyTrackerComponent implements OnInit {
  

  public powers = ['Really Smart', 'Super Flexible',
            'Super Hot', 'Weather Changer'];

  public selectedStudy = '';

  public featuresToShow = {
    'Protocol Amendment Tracker' : {
      protocolAmmendmentCreation : '',
      protocolAmmendmentStatus : ''
    },
    'ICF Amendment Tracker' : {
      icfCreation : '',
      icfStatus : ''
    },
    'NoPHIS Checklist' : {
      noPhisChecklistCreation : '',
      noPhisChecklistStatus : ''
    },
    'HQ TMF TOC' : {
      hqTmfTocCreation : '',
      hqTmfTocStatus : ''
    },
    'C-TMF TOC' : {
      ctmfTocCreation : '',
      ctmfTocStatus : ''
    },
    'S-TMF TOC' : {
      stmfTocCreation : '',
      stmfTocStatus : ''
    },
    'Study Lead QC Checklist' : {
      studyLeadQCCheclistCreation : '',
      studyLeadQCCheclistStatus : ''
    },
    'eTMF Tracking Tool/eTRAC' : {
      etmftractingCreation : '',
      etmftractingStatus : ''
    },
    'eCTD Tracker/CSR Appendices' : {
      ectdtrackerCreation : '',
      ectdtrackerStatus : ''
    },
    'TMF Final QC and Archival' : {
      tmfFinalQCCreation : '',
      tmfFinalQCStatus : ''
    }
  }
  public studies;

  public showForm = false;



  public submitted = false;
  public StudyDetails : Studies;
  constructor(private studyService: StudyService) { 

  }


  onSubmit() { 

    this.studyService.updateStudyDetails(this.selectedStudy, this.StudyDetails ).subscribe((res) => {
      this.StudyDetails = res;
      this.submitted = true; 
    } )


  }


  ngOnInit() {

    this.studyService.getStudyIds().subscribe((studyIds) => {
      this.studies = studyIds;

    });


  }

  getStudyDetails() {
    this.studyService.getStudy(this.selectedStudy).subscribe((res) => {
   
      
      this.StudyDetails = res;
      this.showForm = true; 
      this.submitted = true; 
      
    })

    
   
  }

  getInformation(item, keyNo) {
    return this.StudyDetails[Object.keys(item)[keyNo]];
  }

  setInformation($e, obj, keyNo) {
    
    this.StudyDetails[Object.keys(obj)[keyNo]] = $e;

  }

  inputId(item, keyNo) {
    return Object.keys(item)[keyNo];
  }


}
