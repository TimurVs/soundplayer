// import { Component, OnDestroy, OnInit } from '@angular/core'
// import { SoundService } from '../sound.service'
// import { NgIf } from '@angular/common'
// import { FormsModule } from '@angular/forms'
//
// @Component({
//   selector: 'app-player',
//   standalone: true,
//   imports: [
//     NgIf,
//     FormsModule
//   ],
//   templateUrl: './player.component.html',
//   styleUrl: './player.component.scss'
// })
// export class PlayerComponent implements OnInit, OnDestroy {
//   selectedSound: any | null = null;
//   audioPlayer: HTMLAudioElement = new Audio();
//   playing: boolean = false;
//   volume: number = 0.5;
//
//
//   constructor(private soundService: SoundService) { }
//
//   ngOnInit(): void {
//     this.soundService.selectedSound$.subscribe(sound => {
//       this.selectedSound = sound;
//       if (sound) {
//         this.playSound(sound.fileName);
//       } else {
//         this.stopSound();
//       }
//     });
//   }
//
//   ngOnDestroy(): void {
//     this.stopSound();
//   }
//
//   playSound(fileName: string): void {
//     this.stopSound();
//     this.audioPlayer.src = `assets/sounds/${fileName}`;
//     this.audioPlayer.load();
//     this.setVolume();
//     this.audioPlayer.play()
//       .then(() => {
//         this.playing = true;
//       })
//       .catch(error => {
//         console.error('Error playing sound:', error);
//       });
//   }
//
//   stopSound(): void {
//     this.audioPlayer.pause();
//     // this.audioPlayer.currentTime = 3;
//     this.playing = false;
//   }
//
//   togglePause(): void {
//     if (this.playing) {
//       this.audioPlayer.pause();
//       this.playing = false;
//     } else {
//       this.audioPlayer.play()
//         .then(() => {
//           this.playing = true;
//         })
//         .catch(error => {
//           console.error('Error playing sound:', error);
//         });
//       this.playing = true;
//     }
//   }
//
//   setVolume(): void {
//     this.audioPlayer.volume = this.volume;
//   }
// }
