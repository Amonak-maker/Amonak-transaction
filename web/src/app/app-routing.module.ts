import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {ResetComponent} from "./reset/reset.component";
import {HomeComponent} from "./home/home.component";
import {ProfilComponent} from "./profil/profil.component";
import {DiscussionShortcutComponent} from "./discussion-shortcut/discussion-shortcut.component";
import {EditComponent} from "./edit/edit.component";
import {EditFormComponent} from "./edit-form/edit-form.component";


const routes: Routes = [
  { path: '',  component: LoginComponent },
  { path: 'reset',  component: ResetComponent },
  { path: 'home',  component: HomeComponent },
  { path: 'profil',  component: ProfilComponent },
  { path: 'discussionShortcut',  component: DiscussionShortcutComponent },
  { path: 'edit',  component: EditComponent },
  { path: 'editForm',  component: EditFormComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const rootingComponents = [LoginComponent, ResetComponent, HomeComponent, ProfilComponent, DiscussionShortcutComponent, EditFormComponent]
