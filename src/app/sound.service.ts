import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SoundService {
  private sounds: any[] = [
    { id: 1, name: 'Sound 1', fileName: 'sound1.mp3' },
    { id: 2, name: 'Sound 2', fileName: 'sound2.mp3' },
    { id: 3, name: 'Sound 3', fileName: 'sound3.mp3' }
  ];

  // private selectedSoundSubject: BehaviorSubject<any | null> = new BehaviorSubject<any | null>(null);
  // public selectedSound$: Observable<any | null> = this.selectedSoundSubject.asObservable();

  // constructor() { }

  getSounds(): Observable<any[]> {
    return new Observable((observer) => {
      observer.next(this.sounds);
      observer.complete();
    });
  }

  // setSelectedSound(sound: any): void {
  //   this.selectedSoundSubject.next(sound);
  // }
}
