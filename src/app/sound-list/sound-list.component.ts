import { Component, OnInit } from '@angular/core'
import { SoundService } from '../sound.service'
import { MatCellDef, MatHeaderCellDef, MatHeaderRowDef, MatRowDef, MatTable } from '@angular/material/table'
import { MatIcon } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { NgIf } from '@angular/common'
import { ReactiveFormsModule } from '@angular/forms'


@Component({
  selector: 'app-sound-list',
  standalone: true,
  imports: [
    MatTableModule,
    MatTable,
    MatIcon,
    MatHeaderCellDef,
    MatCellDef,
    MatHeaderRowDef,
    MatRowDef,
    NgIf,
    ReactiveFormsModule
  ],
  templateUrl: './sound-list.component.html',
  styleUrl: './sound-list.component.scss'
})
export class SoundListComponent implements OnInit {
  sounds: any[] = [];
  selectedSound = '';

  constructor(private soundService: SoundService) { }

  ngOnInit(): void {
    this.soundService.getSounds().subscribe(sounds => {
      this.sounds = sounds;
    });
  }

  selectSound(sound: any): void {
    this.selectedSound = sound;
  }
}
