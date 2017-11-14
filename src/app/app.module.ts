import { AuthService } from './services/auth/auth.service';
import { AuthGuard } from './guards/auth.guard';
import { environment } from './../environments/environment';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {SplitButtonModule, ButtonModule} from 'primeng/primeng';

import { todoRoutes } from './configs/todo-routes';

import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { TodoComponent } from './components/todo/todo.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { TodoCreatorComponent } from './components/todo-creator/todo-creator.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ChatBoxComponent } from './components/chat-box/chat-box.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TodoComponent,
    TodoListComponent,
    TodoCreatorComponent,
    LoginComponent,
    DashboardComponent,
    ProfileComponent,
    ChatBoxComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(todoRoutes),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    BrowserAnimationsModule
  ],
  providers: [
    AuthGuard,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
