import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Stats } from './model/stats';

@Component({
  selector: 'app-traitement',
  standalone: true,
  imports: [],
  templateUrl: './traitement.component.html',
  styleUrl: './traitement.component.scss',
})
export class TraitementComponent {
  constructor(private http: HttpClient) {}
  getData() {
    // https://online.turfinfo.api.pmu.fr/rest/client/1/programme/15022020/R1/C1/rapports-definitifs
    //https://online.turfinfo.api.pmu.fr/rest/client/61/programme/04042022/R6/C4/performances-detaillees/pretty
    this.http
      .get(
        'https://offline.turfinfo.api.pmu.fr/rest/client/7/programme/12102019/R1/C1/participants'
      )
      .subscribe((data) => {
        let jsonObj = JSON.parse('' + data); // string to "any" object first
        let myStats = jsonObj as Stats;

        myStats.data.forEach((element: any) => {
          console.log(element);
        });
      });
  }
}
