import { Component, OnInit } from '@angular/core';
import  *  as  books  from  '../../../assets/book.json';
@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  books: any = (books as any).default;
  constructor() { }

  ngOnInit(): void {
    console.log(this.books);
  }

}
