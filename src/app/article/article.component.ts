import { Component, Input, OnInit } from '@angular/core';
import { Article } from 'src/models/article.model';

@Component({
    selector: 'app-article',
    templateUrl: './article.component.html',
    styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {

    @Input()
    public article: Article = {
        header: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. ",
        imgUrl: "https://media.gettyimages.com/photos/newspaper-1945-headline-declaring-end-of-wwii-picture-id458716395?s=612x612",
        link: "https://www.google.com/",
        source: "Google"
    }

    constructor() { }

    ngOnInit(): void {
    }
}
