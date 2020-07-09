import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';





@Injectable({ providedIn: 'root' })
export class StudyService {


  private studyUrl = "http://localhost:8080/api/studies";
  private studyIdsUrl = "http://localhost:8080/api/study/ids";
  public updateURL = "http://localhost:8080/api/studies";

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient) { }

 

  getStudy(studyId : string) : any {
     
      return this.http.get(this.studyUrl + '/' + studyId).pipe(map(this.extractObserverData), catchError(this.handleError('getStudy', [])));
  }

  

  getStudyIds() {
    return this.http.get(this.studyIdsUrl).pipe(map(this.extractObserverData), catchError(this.handleError('getStudyIds', [])));
  }

  updateStudyDetails(studyId, requestBody): any {
    
    return this.http.put(this.updateURL + '/' + studyId, requestBody ).pipe(map(this.extractObserverData));
  }

  private extractObserverData(res: Response) {
    
    return res;
}

  

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

     
      console.error(error); 

      
      return of(result as T);
    };
  }

 
}
