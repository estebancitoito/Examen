import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BooksComponent} from '../app/Components/books/books.component';
import { HomeComponent } from './Components/home/home.component';
import { NaggingComponent } from './Components/nagging/nagging.component';
import {MensajeComponent} from './Components/mensaje/mensaje.component';

const routes: Routes = [
  {path:"",component: HomeComponent},
  {path:'books', component: BooksComponent},
  {path:'nagging', component: NaggingComponent},
  {path:'sentMessage', component: MensajeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
