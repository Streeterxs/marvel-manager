import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '/character',
        loadChildren: () => import('./modules/characters/characters.module').then(m => m.CharactersModule)
      },
      {
        path: '**',
        redirectTo: '/character'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
