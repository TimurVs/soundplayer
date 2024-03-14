import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SoundListComponent } from './sound-list/sound-list.component'
// import { PlayerComponent } from './player/player.component'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SoundListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'soundplayer';
}
