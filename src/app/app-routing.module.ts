import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/tabs/tabs.module').then(m => m.TabsPageModule)
  },
  { path: 'book-list', loadChildren: './book-list/book-list.module#BookListPageModule' },
  { path: 'cd-list', loadChildren: './cd-list/cd-list.module#CdListPageModule' },
  { path: 'lend-book', loadChildren: './lend-book/lend-book.module#LendBookPageModule' },
  { path: 'lend-cd', loadChildren: './lend-cd/lend-cd.module#LendCdPageModule' },
  { path: 'settings', loadChildren: './settings/settings.module#SettingsPageModule' }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
