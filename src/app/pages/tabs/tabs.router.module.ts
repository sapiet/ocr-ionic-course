import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'book-list',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../book-list/book-list.module').then(m => m.BookListPageModule)
          }
        ]
      },
      {
        path: 'cd-list',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../cd-list/cd-list.module').then(m => m.CdListPageModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: '/tabs/book-list',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/book-list',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
