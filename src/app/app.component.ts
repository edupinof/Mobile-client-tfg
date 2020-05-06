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

  cambiarcolor() {
    let color = (<HTMLInputElement>document.getElementById("colorPicker")).value;
    const usersRef = firebase.database().ref('/');
console.log(color);

    usersRef.child('configuracion').set({
     'background-body': color
    });  
  }

    onSearchChange(searchValue: string): void {  
      if (searchValue[0] === '(') {
        const usersRef = firebase.database().ref('/');
      usersRef.child('stocksName').set({
       'name': searchValue
      });
      } else {
      this.stocksValue = [];
      this.apiService.getStockList(searchValue).subscribe((ans) => {
      let data = JSON.parse(JSON.stringify(ans));
        data.data.forEach(element => {
          console.log(element);
          this.stocksValue.push(element);
        });
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
