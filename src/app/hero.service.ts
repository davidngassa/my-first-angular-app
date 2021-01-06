import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs'
import {MessageService} from './message.service'
import {Hero} from './hero'
import {HEROES} from './mock-heroes'

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  getHeroes():Observable<Hero[]>{
    // TODO: send the message after fetching the heroes
    this.messageService.add('HeroService: fetched heroes')
    return of (HEROES)
  }

  constructor(private messageService: MessageService) { }
}
