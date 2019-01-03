import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { DictionaryComponent } from './dictionary/dictionary.component';
import { SearchListComponent } from './search-list/search-list.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'dictionary/:currentWord', component: DictionaryComponent },
  { path: 'dictionary/:currentWord/:searchKey', component: DictionaryComponent },
  { path: 'dictionary', component: DictionaryComponent },
  { path: 'app-search-list', component: SearchListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
