import { Component } from '@angular/core';
import * as firebase from 'firebase';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Mobile-client-tfg';
  constructor(  ) {
   firebase.initializeApp(environment.firebaseConfig)
    const dbRefObject = firebase.database().ref().child('background-body');
    dbRefObject.on('value', snap => {
      console.log(snap.val());
    });
  }
  selectColor(color){
    const usersRef = firebase.database().ref('/');
    
    usersRef.child('configuracion').set({
     'background-body': color
    });
  }

  locateDigitalClock(num) {
    const usersRef = firebase.database().ref('/');
    usersRef.child('digital-clock').set({
     'block': num
    });
  }

  locateStocks(num) {
    const usersRef = firebase.database().ref('/');
    usersRef.child('stocks').set({
     'block': num
    });
  }

  locateWeather(num) {
    const usersRef = firebase.database().ref('/');
    usersRef.child('weather').set({
     'block': num
    });
  }

  cambiarcolor() {
    let color = (<HTMLInputElement>document.getElementById("colorPicker")).value;
    const usersRef = firebase.database().ref('/');
console.log(color);

    usersRef.child('configuracion').set({
     'background-body': color
    });  }
}
