import { HttpClient } from '@angular/common/http';
import { environment } from './../../../../environments/environment';
import { Injectable } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TrackService {
  // dataTracksTrending$: Observable<TrackModel[]> = of([]);
  // dataTracksRandom$: Observable<any> = of([]);
  private readonly URL = environment.api;
  constructor(private httpClient: HttpClient) {
    /**
     * @return Devolver todas las canciones!! molona!!
     */
  }
  getAllTracks$(): Observable<any> {
    return this.httpClient.get(`${this.URL}/tracks`);
  }
}
