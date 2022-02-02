import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';

import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { BooksComponent } from './layout/books/books.component';
import { ProjectsComponent } from './layout/projects/projects.component';

import { BookDetailsComponent } from './layout/book-details/book-details.component';
import { ProjectDetailsComponent } from './layout/project-details/project-details.component';
import { ArticleDetailsComponent } from './layout/article-details/article-details.component';
import { UploaderComponent } from './layout/uploader/uploader.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { CartComponent } from './cart/cart.component';
import { ExperimentsComponent } from './layout/experiments/experiments.component';
<<<<<<< HEAD
=======
import { AboutComponent } from './about/about.component';
>>>>>>> a67e40f (about component added)



@NgModule({
  declarations: [
    AppComponent,

    HeaderComponent,
    FooterComponent,
    
    LoginComponent,
    SignupComponent,
    BooksComponent,
    ProjectsComponent,
   ExperimentsComponent,
    BookDetailsComponent,
    ProjectDetailsComponent,
    ArticleDetailsComponent,
    UploaderComponent,
    HomepageComponent,
    ProductdetailsComponent,
<<<<<<< HEAD
  CartComponent
=======
  CartComponent,
  AboutComponent
>>>>>>> a67e40f (about component added)
  ],
  imports: [
    BrowserModule,
    
    AppRoutingModule,
    FormsModule,ReactiveFormsModule
   
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
