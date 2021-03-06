
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routing }        from './app.routing';

import { AppComponent } from './app.component';
import { AppNavbarComponent } from './app-navbar/app-navbar.component';
import { HomepageComponent } from './homepage/homepage.component';
import { FooterComponent } from './footer/footer.component';
import { PanelSedziowskiComponent } from './panel-sedziowski/panel-sedziowski.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NonRouteLinkComponent } from './non-route-link/non-route-link.component';
import { FormsModule }    from '@angular/forms';
import { TurniejeComponent } from './turnieje/turnieje.component';
import { ListaTurniejiComponent } from './turnieje/lista-turnieji/lista-turnieji.component';
import { FormStworzTurniejComponent } from './turnieje/form-stworz-turniej/form-stworz-turniej.component';
import { TurniejService } from './turnieje/shared/turniej.service';
import { ZarzadzajComponent } from './zarzadzaj/zarzadzaj.component';
import { ZapisanyComponent } from './zarzadzaj/zapisany/zapisany.component';
import { MyeventComponent } from './zarzadzaj/myevent/myevent.component';
import { ListaZapisaneComponent } from './zarzadzaj/zapisany/lista-zapisane/lista-zapisane.component';
import { ZapisaneComponent } from './zarzadzaj/zapisany/zapisane/zapisane.component';
import { environment } from '../environments/environment';
export const firebaseConfig = environment.firebaseConfig;
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { FirebaseApp } from '@firebase/app-types';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireModule } from 'angularfire2';
import { MyeventListaComponent } from './zarzadzaj/myevent/myevent-lista/myevent-lista.component';
import { MyevenComponent } from './zarzadzaj/myevent/myeven/myeven.component';

import { ZapiszSieComponent } from './turnieje/zapisz-sie/zapisz-sie.component';
import { FormZapiszSieComponent } from './turnieje/zapisz-sie/form-zapisz-sie/form-zapisz-sie.component';
import { KategorieComponent } from './zarzadzaj/zapisany/zapisane/kategorie/kategorie.component';
import { DywizjeComponent } from './zarzadzaj/zapisany/zapisane/dywizje/dywizje.component';
import { KeysPipePipe } from './zarzadzaj/zapisany/zapisane/kategorie/keys-pipe.pipe';
import { ReactiveFormsModule } from '@angular/forms';
import { TurniejeService } from './turnieje/zapisz-sie/serwisy/turniej.service';
import { LadderComponent } from './ladder/ladder.component';
import { SixteenComponent } from './ladder/sixteen/sixteen.component';
import { KategorieService } from './turnieje/shared/kategorie.service';
import { TurniejDetailsComponent } from './turnieje/turniej-details/turniej-details.component';
import { LadderService } from './ladder/sheard/ladder.service';
import { GenerujLadderComponent } from './ladder/generuj-ladder/generuj-ladder.component';
import { TurniejPodzialComponent } from './zarzadzaj/shared/turniej-podzial/turniej-podzial.component';
import { TurniejPodzialSerService } from './zarzadzaj/shared/turniej-podzial-ser.service';
import { DrabinkaWyswietlComponent } from './ladder/drabinka-wyswietl/drabinka-wyswietl.component';
import { WynikionComponent } from './ladder/wynikion/wynikion.component';
import { WyniksenderComponent } from './panel-sedziowski/wyniksender/wyniksender.component';
import { KontaktComponent } from './kontakt/kontakt.component';
import { KontaktServService } from './kontakt/shared/kontakt-serv.service';
import { ListaDrabinekComponent } from './ladder/lista-drabinek/lista-drabinek.component';
import { ListaWynikiOnlineComponent } from './ladder/lista-wyniki-online/lista-wyniki-online.component';
import { ListaPytanComponent } from './kontakt/lista-pytan/lista-pytan.component';

import { RejestracjaServService } from './register/shared/rejestracja-serv.service';


declare var require: any;

@NgModule({
  declarations: [
    AppComponent,
    AppNavbarComponent,
    HomepageComponent,
    FooterComponent,
    PanelSedziowskiComponent,
    LoginComponent,
    RegisterComponent,
    NonRouteLinkComponent,
    TurniejeComponent,
    ListaTurniejiComponent,
    FormStworzTurniejComponent,
    ZarzadzajComponent,
    ZapisanyComponent,
    MyeventComponent,
    ListaZapisaneComponent,
    ZapisaneComponent,
    MyeventListaComponent,
    GenerujLadderComponent,
    MyevenComponent,
    WyniksenderComponent,
    ZapiszSieComponent,
    FormZapiszSieComponent,
    KategorieComponent,
    DywizjeComponent,
    KeysPipePipe,
    MyevenComponent,
    LadderComponent,
    SixteenComponent,

    TurniejDetailsComponent,

    TurniejPodzialComponent,

    DrabinkaWyswietlComponent,

    WynikionComponent,

    KontaktComponent,

    ListaDrabinekComponent,

    ListaWynikiOnlineComponent,

    ListaPytanComponent
    


  ],
  imports: [
    NgbModule.forRoot(),
    BrowserModule,
    routing,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    ReactiveFormsModule
    
  ],
  providers: [TurniejService,TurniejeService,KategorieService,LadderService,TurniejPodzialSerService , KontaktServService,RejestracjaServService],
  bootstrap: [AppComponent]
})
export class AppModule { }
