import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { ArticleDetailsComponent } from './layout/article-details/article-details.component';
import { BookDetailsComponent } from './layout/book-details/book-details.component';
import { BooksComponent } from './layout/books/books.component';
import { FooterComponent } from './layout/footer/footer.component';
import { ProjectDetailsComponent } from './layout/project-details/project-details.component';
import { ProjectsComponent } from './layout/projects/projects.component';
import { UploaderComponent } from './layout/uploader/uploader.component';
import { HomepageComponent } from './homepage/homepage.component';
import { CartComponent } from './cart/cart.component';
import { ExperimentsComponent } from './layout/experiments/experiments.component';
<<<<<<< HEAD
=======
import { AboutComponent } from './about/about.component';
>>>>>>> a67e40f (about component added)

const routes: Routes = [

{ path:'projects', component:ProjectsComponent},
{ path:'', component:HomepageComponent },
{ path:'signup', component:SignupComponent },
{ path:'login', component:LoginComponent },
{ path:'footerpage', component:FooterComponent },
{ path:'books', component:BooksComponent },
{ path:'experiments', component:ExperimentsComponent },
{ path:'book-details', component:BookDetailsComponent },
{ path:'project-details', component:ProjectDetailsComponent },
{ path:'article-details', component:ArticleDetailsComponent },
{ path:'uploader', component:UploaderComponent },
<<<<<<< HEAD
{ path:'cart', component:CartComponent }
=======
{ path:'cart', component:CartComponent },
{ path:'about', component:AboutComponent}
>>>>>>> a67e40f (about component added)
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
