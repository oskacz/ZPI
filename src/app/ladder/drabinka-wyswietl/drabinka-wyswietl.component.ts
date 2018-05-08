import { Component, OnInit } from '@angular/core';
import { poprawnyZawodnik } from '../../turnieje/zapisz-sie/form-zapisz-sie/form-zapisz-sie.component';
import { Modeloo } from '../../zarzadzaj/shared/modeloo.model';
import { AngularFirestore } from 'angularfire2/firestore';
import { LadderService } from '../sheard/ladder.service';
import { TurniejPodzialSerService } from '../../zarzadzaj/shared/turniej-podzial-ser.service';

@Component({
  selector: 'app-drabinka-wyswietl',
  templateUrl: './drabinka-wyswietl.component.html',
  styleUrls: ['./drabinka-wyswietl.component.css']
})
export class DrabinkaWyswietlComponent implements OnInit {

  public current = window.location.href.substr(window.location.href.lastIndexOf('/') + 1);
  zawColection: poprawnyZawodnik[];
  public poz1: string;
  public poz2: string;
  public poz3: string;
  public poz4: string;
  public poz5: string;
  public poz6: string;
  public poz7: string;
  public poz8: string;
  public poz9: string;
  public poz10: string;
  public poz11: string;
  public poz12: string;
  public poz13: string;
  public poz14: string;
  public poz15: string;
  public poz16: string;
  public q1:string;
  public q2:string;
  public q3:string;
  public q4:string;
  public q5:string;
  public q6:string;
  public q7:string;
  public q8:string;

  public sf1:string;
  public sf2:string;
  public sf3:string;
  public sf4:string;

  public fi1:string;
  public fi2:string;
  public zwyciezca:string;

  public nazwaturnieju: string;
  zawColection1: poprawnyZawodnik[];
  zawColection2: poprawnyZawodnik[];
  zawColection3: poprawnyZawodnik[];
  zawColection4: poprawnyZawodnik[];
  zawColection5: poprawnyZawodnik[];

  zawColection6: poprawnyZawodnik[];
  zawColection7: poprawnyZawodnik[];
  zawColection8: poprawnyZawodnik[];
  zawColection9: poprawnyZawodnik[];
  zawColection10: poprawnyZawodnik[];
  turnieje: Modeloo;
  public url:string[] = window.location.href.split('/');

  constructor(private db: AngularFirestore, private ladServ: LadderService, private podzielone: TurniejPodzialSerService) {
    ladServ.getTur().subscribe(data => { this.turnieje = data.filter(turn => turn.id == this.current)[0];});
    ladServ.getzawo(this.current, this.url[5], this.url[4], 'man').subscribe(data => { this.zawColection = data });
    setTimeout(() => {
      this.fukcja()
      this.nazwaturnieju=this.turnieje.nazwa
          }, 3000);
          
   }

  ngOnInit() {
  }
  fukcja() {
    for (let zaw of this.zawColection) {
      if (zaw.pozycjaStartowa == '0') {
        this.poz1 = zaw.nazwa
      } if (zaw.pozycjaStartowa == '1') {
        this.poz2 = zaw.nazwa
      } if (zaw.pozycjaStartowa == '2') {
        this.poz3 = zaw.nazwa
      } if (zaw.pozycjaStartowa == '3') {
        this.poz4 = zaw.nazwa
      } if (zaw.pozycjaStartowa == '4') {
        this.poz5 = zaw.nazwa
      } if (zaw.pozycjaStartowa == '5') {
        this.poz6 = zaw.nazwa
      } if (zaw.pozycjaStartowa == '6') {
        this.poz7 = zaw.nazwa
      } if (zaw.pozycjaStartowa == '7') {
        this.poz8 = zaw.nazwa
      } if (zaw.pozycjaStartowa == '8') {
        this.poz9 = zaw.nazwa
      } if (zaw.pozycjaStartowa == '9') {
        this.poz10 = zaw.nazwa
      } if (zaw.pozycjaStartowa == '10') {
        this.poz11 = zaw.nazwa
      } if (zaw.pozycjaStartowa == '11') {
        this.poz12 = zaw.nazwa
      } if (zaw.pozycjaStartowa == '12') {
        this.poz13 = zaw.nazwa
      } if (zaw.pozycjaStartowa == '13') {
        this.poz14 = zaw.nazwa
      } if (zaw.pozycjaStartowa == '14') {
        this.poz15 = zaw.nazwa
      } if (zaw.pozycjaStartowa == '15') {
        this.poz16 = zaw.nazwa
      }if(zaw.pierwszyoQ=='true'){
        this.q1=zaw.nazwa
      }if(zaw.drugioQ=='true'){
        this.q2=zaw.nazwa
      }if(zaw.trzecioQ=='true'){
        this.q3=zaw.nazwa
      }
      if(zaw.czwartyoQ=='true'){
        this.q4=zaw.nazwa
      }
      if(zaw.piatyoQ=='true'){
        this.q5=zaw.nazwa
      }
      if(zaw.szustyoQ=='true'){
        this.q6=zaw.nazwa
      }
      if(zaw.siuoQ=='true'){
        this.q7=zaw.nazwa
      }if(zaw.osmyuoQ=='true'){
        this.q8=zaw.nazwa
      }if(zaw.pierwszySFinal =='true'){
        this.sf1=zaw.nazwa
      }if(zaw.drugiSFinal =='true'){
        this.sf2=zaw.nazwa
      }if(zaw.trzeciSFinal =='true'){
        this.sf3=zaw.nazwa
      }if(zaw.czwartySFinal =='true'){
        this.sf4=zaw.nazwa
      }if(zaw.pierwszyFinal =='true'){
        this.fi1=zaw.nazwa
      }if(zaw.drugiFinal =='true'){
        this.fi2=zaw.nazwa
      }if(zaw.winner =='true'){
        this.zwyciezca=zaw.nazwa
      }





    }

}
}