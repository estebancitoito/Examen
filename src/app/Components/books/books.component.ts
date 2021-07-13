import { Component, OnInit } from '@angular/core';
import { ArrayBooks, BooksList} from '../../Interfaces/array-books';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit {

  Array = BooksList;
  constructor() { }

  ngOnInit(): void {
  }

}
