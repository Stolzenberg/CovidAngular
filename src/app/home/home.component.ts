import { Component, OnInit } from '@angular/core';
import { Article } from 'src/models/article.model';
import { NewsGrabberService } from 'src/services/news-grabber.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

    public articles: Article[] = [];

    constructor(private newsGrabberService: NewsGrabberService) { }

    ngOnInit(): void {
        this.newsGrabberService.getNews().subscribe((data: Article[]) => {
            this.articles = data;
        });
    }
}
