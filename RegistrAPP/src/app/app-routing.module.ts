import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AutorizadoGuard } from './autorizado.guard';
import { NoAutorizadoGuard } from './no-autorizado.guard';
import { NotFoundPage } from './not-found/not-found.page';

const routes: Routes = [
  { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)},
  { path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginPageModule) },
  { path: 'register', loadChildren: () => import('./register/register.module').then(m => m.RegisterPageModule) },
  { path: 'reset-password', loadChildren: () => import('./reset-password/reset-password.module').then(m => m.ResetPasswordPageModule) },
  { path: 'profile', loadChildren: () => import('./profile/profile.module').then(m => m.ProfilePageModule) },
  {
    path: 'profile',
    loadChildren: () => import('./profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: '',
    loadChildren: () => import('./ruta/ruta.module').then( m => m.RutaPageModule),
    canActivate:[AutorizadoGuard]
  },
  {
    path: 'menuhr',
    loadChildren: () => import('./menuhr/menuhr.module').then( m => m.MenuhrPageModule)
  },
  {
    path: 'notificaciones',
    loadChildren: () => import('./notificaciones/notificaciones.module').then( m => m.NotificacionesPageModule)
  },

  {
    path: 'registro-horario',
    loadChildren: () => import('./registro-horario/registro-horario.module').then( m => m.RegistroHorarioPageModule)
  },
  {
    path: 'ayuda',
    loadChildren: () => import('./ayuda/ayuda.module').then( m => m.AyudaPageModule)
  },
  {
    path: '**',
    component: NotFoundPage,
    loadChildren: () => import('./not-found/not-found.module').then( m => m.NotFoundPageModule)
  },

];


@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
