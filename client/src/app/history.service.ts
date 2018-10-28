import { Conversion } from "./conversion";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class HistoryService {
  constructor() {}

  addConversion(conversion: Conversion) {
    const history = JSON.parse(localStorage.getItem("history"));
    if (history) {
      localStorage.setItem("history", JSON.stringify([...history, conversion]));
    } else {
      localStorage.setItem("history", JSON.stringify([conversion]));
    }
  }

  getHistory(): Conversion[] {
    return JSON.parse(localStorage.getItem("history"));
  }

  deleteFromHistory(index: number): Conversion[] {
    const prevHistory = JSON.parse(localStorage.getItem("history"));
    if (prevHistory.length === 1) {
      localStorage.removeItem("history");
      return [];
    }
    const postHistory = prevHistory.splice(index, 1);
    localStorage.setItem("history", JSON.stringify(prevHistory));
    return prevHistory;
  }
}
