import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Article } from 'src/models/article.model';

@Injectable({
    providedIn: 'root'
})
export class NewsGrabberService {

    constructor(private http: HttpClient) { }

    getNews(): Observable<Article[]> {
        return this.http.get<Article[]>(environment.azure.getCovidInfo);
    }
}
