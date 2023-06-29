import { Component } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import { TrackService } from '@modules/tracks/services/track.service';
import { Subscription } from 'rxjs'; //programacion reactiva
@Component({
  selector: 'app-tracks-page',
  templateUrl: './tracks-page.component.html',
  styleUrls: ['./tracks-page.component.css'],
})
export class TracksPageComponent {
  tracksTrending: Array<TrackModel> = []
  tracksRandom: Array<TrackModel> = []

  listObservers$: Array<Subscription> = [];



  constructor(private trackService: TrackService) {

  }
  ngOnInit(): void {
    // // const {data}: any = (dataRaw as any).default;
    // const observer1$ = this.trackService.dataTracksTrending$.subscribe(response => {
    //   console.log('Recibiendo dataTracksTrending', response);
    //   this.tracksTrending = response;
    //   this.tracksRandom = response;
    // })
    // const observer2$ = this.trackService.dataTracksRandom$.subscribe(response => {
    //   console.log('Cancion random entrando 😘', response);
    //   this.tracksRandom = [... this.tracksRandom, ...response] //concatenar arreglos con spread operator (...)
    // })
    // // this.mockTracksList = data;
    // // console.log(data);
    // this.listObservers$ = [observer1$, observer2$];

    this.trackService.getAllTracks$().subscribe(response => {
      console.log('☣️☣️☣️☣️--> ', response);
    })
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    // console.log('☣️ BOOOOOMMMMMM!!');
    // this.listObservers$.forEach(u => u.unsubscribe());
  }
}
