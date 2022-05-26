import {Component, OnInit} from '@angular/core';
import {PersonService} from "../../services/person.service";
import {Person} from "../../models/person.model";
import {Observable} from "rxjs";


@Component({
  selector: 'app-find-person-by-id-and-dob',
  templateUrl: './find-person-by-id-and-dob.component.html',
  styleUrls: ['./find-person-by-id-and-dob.component.scss']
})
export class FindPersonByIdAndDOBComponent implements OnInit {

  error$: Observable<string> = this.personService.getError()
  person$: Observable<Person> | undefined;
  inputValue1: string = '';
  inputValue2: string = '';

  constructor(private personService: PersonService) {
  }

  ngOnInit(): void {
  }

  searchPerson(): void {
    this.person$ = this.personService.getPersonByPersonalIdAndDateOfBirth(this.inputValue1, this.inputValue2)
  }
}



