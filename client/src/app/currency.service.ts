import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { catchError, map, tap } from "rxjs/operators";
import { Currency } from "./currency";

const httpOptions = {
  headers: new HttpHeaders({ "Content-Type": "application/json" })
};

@Injectable({
  providedIn: "root"
})
export class CurrencyService {
  private key = "d7231acc54003b3ed29ef99592626cd8";
  private api = "https://api.nomics.com/v1";

  constructor(private http: HttpClient) {}

  private url(endpoint: string): string {
    return `${this.api}/${endpoint}?key=${this.key}`;
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * shamelessly STOLEN from angular.io
   * Angular is not my infrastructure of choice
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = "operation", result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  getRates(): Observable<Currency[]> {
    return this.http.get<Currency[]>(this.url("exchange-rates")).pipe(
      tap(rates => console.log("fetched rates! ", rates)),
      catchError(this.handleError("getRates", []))
    );
  }
}
