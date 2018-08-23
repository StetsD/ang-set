import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
	providedIn: 'root'
})
export class HeroService {

	constructor(public messageService: MessageService) { }

	getHeroes(): Observable<Hero[]> {
		console.log(this.messageService);
		this.messageService.add('HeroService: fetched heroes');
		console.log(this.messageService);
		return of(HEROES);
	}

}
