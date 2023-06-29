import { Component } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import { MultimediaService } from '@shared/services/multimedia.service';
import { Subscription } from 'rxjs'; //programacion reactiva

@Component({
  selector: 'app-media-player',
  templateUrl: './media-player.component.html',
  styleUrls: ['./media-player.component.css']
})
export class MediaPlayerComponent  {
mockCover: TrackModel = {
  cover: 'https://i0.wp.com/findyoursounds.com/wp-content/uploads/2021/07/Gioli-Assia-deliver-sublime-new-single-Bebe.jpg?ssl=1',
  album: 'Gioli & Assia - Bebe (Oficial)',
  name: 'BEBE (Oficial)',
  url: 'https://www.youtube.com/watch?v=1QX6pQoYX04',
  _id: 1,
}

listObservers$: Array<Subscription> = [];

constructor(private multimediaService: MultimediaService) { }

ngOnInit(): void {
  //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
  //Add 'implements OnInit' to the class.
  const observer1$: Subscription = this.multimediaService.callback.subscribe((response: TrackModel) => {
    console.log('Recibiendo cancion', response);
     this.mockCover = response;
  })
    this.listObservers$ = [observer1$];
}

ngOnDestroy(): void {
  //Called once, before the instance is destroyed.
  //Add 'implements OnDestroy' to the class.
  console.log('☣️ BOOOOOMMMMMM!!');
  this.listObservers$.forEach(u => u.unsubscribe());
  //  this.multimediaService.callback.unsubscribe();
}
}
