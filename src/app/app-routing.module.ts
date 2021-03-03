import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Componente1TituloComponent } from './componente1-titulo/componente1-titulo.component';

const routes: Routes = [
{
  path: 'puto',
  component: Componente1TituloComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
