import { NgModule, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomPreload } from './app-preload';
import { TodoComponent } from './components/todos-component/todos.component';
import { ReadmeComponent } from './components/readme/readme.component';

export const routes: Routes = [
  { path: '', redirectTo: '/directions', pathMatch: 'full' },
  { path: 'directions', component: ReadmeComponent},
  {
    path: 'todos',
    component: TodoComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes, {
  enableTracing: false,
  preloadingStrategy: CustomPreload
})

@NgModule({
  imports: [routing],
  providers: [CustomPreload],
  exports: [RouterModule],
})
export class AppRoutingModule {}