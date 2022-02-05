import { Component, OnInit } from '@angular/core';
import { Article } from 'src/models/article.model';
import { NewsGrabberService } from 'src/services/news-grabber.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

    public articles: Article[] = [
        {
            header: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. ",
            imgUrl: "https://media.gettyimages.com/photos/newspaper-1945-headline-declaring-end-of-wwii-picture-id458716395?s=612x612",
            link: "https://www.google.com/",
            source: "Google"
        },
        {
            header: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. ",
            imgUrl: "https://media.gettyimages.com/photos/newspaper-1945-headline-declaring-end-of-wwii-picture-id458716395?s=612x612",
            link: "https://www.google.com/",
            source: "Google"
        },
        {
            header: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. ",
            imgUrl: "https://media.gettyimages.com/photos/newspaper-1945-headline-declaring-end-of-wwii-picture-id458716395?s=612x612",
            link: "https://www.google.com/",
            source: "Google"
        },
        {
            header: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. ",
            imgUrl: "https://media.gettyimages.com/photos/newspaper-1945-headline-declaring-end-of-wwii-picture-id458716395?s=612x612",
            link: "https://www.google.com/",
            source: "Google"
        },
        {
            header: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. ",
            imgUrl: "https://media.gettyimages.com/photos/newspaper-1945-headline-declaring-end-of-wwii-picture-id458716395?s=612x612",
            link: "https://www.google.com/",
            source: "Google"
        },
        {
            header: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. ",
            imgUrl: "https://media.gettyimages.com/photos/newspaper-1945-headline-declaring-end-of-wwii-picture-id458716395?s=612x612",
            link: "https://www.google.com/",
            source: "Google"
        }
    ];

    constructor(private newsGrabberService: NewsGrabberService) { }

    ngOnInit(): void {
        this.newsGrabberService.getNews().subscribe((data: Article[]) => {
            this.articles = data;
        });
    }
}
