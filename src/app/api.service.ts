import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  headers: { headers: HttpHeaders; };

  constructor(private httpClient: HttpClient) {
    this.headers = {
      headers: new HttpHeaders({
        "Content-Type":
          "application/json" 
      })
    };
   }

  getStockList(stockSearch){
    const uri = `https://api.worldtradingdata.com/api/v1/stock_search?search_term=${stockSearch}&page=1&api_token=htBe6i5KYZzbivSnp7GgcXvZxBnNO85dcmLqAhMBR0yYqk16g9KdbpfqHOwM`;
    return this.httpClient.get(uri);
  }
}
