import { Component, Input } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import { MultimediaService } from '@shared/services/multimedia.service';

@Component({
  selector: 'app-card-player',
  templateUrl: './card-player.component.html',
  styleUrls: ['./card-player.component.css']
})
export class CardPlayerComponent {

@Input() mode: 'small' | 'big' = 'small';
@Input() track: TrackModel = {_id: 0 , name: '', album:'', url: '', cover: '' };

  constructor(private multimediaService: MultimediaService) { }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.

  }

  sendPlay(track: TrackModel): void{
    // console.log('enviando cancion al reproductor', track);
   this.multimediaService.callback.emit(track);
  }
}
