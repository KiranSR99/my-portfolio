import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { Container } from './testing/container/container';
import { Test } from './testing/test/test';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { 
        path: 'container', 
        component: Container,
        children: [
            { path: 'test', component: Test }
        ] 
    },
    { path: '**', redirectTo: '' }
];
