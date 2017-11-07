import { AuthGuard } from './../guards/auth.guard';
import { DashboardComponent } from '../pages/dashboard/dashboard.component';
import { LoginComponent } from '../pages/login/login.component';

export const todoRoutes = [
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: 'dashboard', component: DashboardComponent, canActivate:[AuthGuard] },
    { path: 'login', component: LoginComponent }
];