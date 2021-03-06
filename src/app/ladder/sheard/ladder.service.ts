import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { poprawnyZawodnik } from '../../turnieje/zapisz-sie/form-zapisz-sie/form-zapisz-sie.component';
import { Modeloo } from '../../zarzadzaj/shared/modeloo.model';

@Injectable()
export class LadderService {

  // turniej: Observable<poprawnyZawodnik[]>;
  constructor(public db: AngularFirestore) { }

  getZawonikow(current: string, waga: string, pas: string, plec: string, gi?: string) {
    // ('/turnieje/'+ current+'/zapisani/gi/zawodnicy/',ref => {return ref.where('','==','')});

    let zawoCollection = this.db.collection<poprawnyZawodnik>('/turnieje/' + current + '/zapisani/'+gi+'/zawodnicy/', ref => {
      return ref.where('waga', '==', waga).where('pas', '==', pas).where('plec', '==', plec)
    });
    let turniej = zawoCollection.snapshotChanges().map(actions => {
      return actions.map(a => {
        const data = a.payload.doc.data() as poprawnyZawodnik;
        const id = a.payload.doc.id;
        return { id, ...data };
      })
    });

    return turniej;
  }
  
  getzawo(current: string, waga: string, pas: string, plec: string){
    
    let zawoCollection = this.db.collection<poprawnyZawodnik>('/turnieje/' + current +'/'+pas+'/'+waga+'/'+plec);
    let turniej = zawoCollection.snapshotChanges().map(actions => {
      return actions.map(a => {
        const data = a.payload.doc.data() as poprawnyZawodnik;
        const id = a.payload.doc.id;
        return { id, ...data };
      })
    });

    return turniej;

  }


  getTur() {
    let turniejCollection = this.db.collection<Modeloo[]>('/turnieje');
     let turniej = turniejCollection.snapshotChanges().map(actions => {
      return actions.map(a => {
        const data = a.payload.doc.data() as Modeloo;
        const id = a.payload.doc.id;
        return { id, ...data };
      })
    });
    
    return turniej;
  }

}
