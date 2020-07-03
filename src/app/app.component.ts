import { Component } from '@angular/core';
import * as firebase from 'firebase';
import { environment } from 'src/environments/environment';
import { ApiService } from './api.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Mobile-client-tfg';
  stocksValue = [];
  constructor(private apiService: ApiService ) {
   firebase.initializeApp(environment.firebaseConfig)
    const dbRefObject = firebase.database().ref().child('background-body');
    dbRefObject.on('value', snap => {
      console.log(snap.val());
    });
  }
  // selectColor(color){
  //   const usersRef = firebase.database().ref('/');
    
  //   usersRef.child('configuracion').set({
  //    'background-body': color
  //   });
  // }

  selectBgImage(){
    let url = (<HTMLInputElement>document.getElementById("imgUrl")).value;
    
    const usersRef = firebase.database().ref('/');
    
    usersRef.child('background-image').set({
     'url': url
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
  locateNews(num) {
    const usersRef = firebase.database().ref('/');
    usersRef.child('news').set({
     'block': num
    });
  }
  locateWeather(num) {
    const usersRef = firebase.database().ref('/');
    usersRef.child('weather').set({
     'block': num
    });
  }
  locateSanto(num) {
    const usersRef = firebase.database().ref('/');
    usersRef.child('santo').set({
     'block': num
    });
  }
  locateAffirmation(num) {
    const usersRef = firebase.database().ref('/');
    usersRef.child('motivation').set({
     'block': num
    });
  }

  locateTwitter(num) {
    const usersRef = firebase.database().ref('/');
    usersRef.child('twitter').set({
     'block': num
    });
  }

  cambiarcolor() {
    let color = (<HTMLInputElement>document.getElementById("colorPicker")).value;
    const usersRef = firebase.database().ref('/');
console.log(color);

    usersRef.child('configuracion').set({
     'background-body': color
    });  
  }

  cambiarcolorFuente(){
    let color = (<HTMLInputElement>document.getElementById("colorFontPicker")).value;
    const usersRef = firebase.database().ref('/');
console.log(color);

    usersRef.child('color-font').set({
     'color': color
    });  
  }
    onSearchChange(searchValue: string): void {  
      if (searchValue) {
        const usersRef = firebase.database().ref('/');
      usersRef.child('stocksName').set({
       'name': searchValue
      });
      } 

    }
    onSearchChangeTW(searchValue: string): void {
      if (searchValue) {
        const usersRef = firebase.database().ref('/');
      usersRef.child('TwitterName').set({
       'name': searchValue
      });
      } 
    }
    setStock(){
      console.log("seleccionado");
      
      const usersRef = firebase.database().ref('/');
      usersRef.child('stocks').set({
       'name': ''
      });
    }
}
