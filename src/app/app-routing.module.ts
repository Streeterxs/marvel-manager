import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'character',
        loadChildren: () => import('./modules/characters/characters.module').then(m => m.CharactersModule)
      },
      {
        path: '**',
        pathMatch: 'full',
        redirectTo: 'character'
      },
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'character'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
