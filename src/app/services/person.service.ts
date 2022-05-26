import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {BehaviorSubject, catchError, map, Observable, throwError} from 'rxjs';
import {environment} from "../../environments/environment";
import {Person} from "../models/person.model";

@Injectable({providedIn: 'root'})
export class PersonService {

  private apiServerUrl = environment.apiBaseUrl;
  private errorCode = new BehaviorSubject("");


  constructor(private http: HttpClient) {
  }

  public getPersonByPersonalIdAndDateOfBirth(personalId: string, dateOfBirth: string): Observable<Person> {
    return this.http
      .get<Person>(`${this.apiServerUrl}?personalId=${personalId}&dateOfBirth=${dateOfBirth}`)
      .pipe(
        map((person) => {
          this.errorCode.next("")
          return person
        }),
        catchError((error) => {
        this.errorCode.next("Nothing found!")
        return throwError("Nothing found!");
      }));
  }

  public getError(): Observable<string> {
    return this.errorCode.asObservable();
  }

}

