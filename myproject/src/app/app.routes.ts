import {Routes, RouterModule} from "@angular/router";
import {LoginComponent} from "./login/login.component";
import {SignupComponent} from "./signup/signup.component";
import {EmailComponent} from "./email/email.component";
import {MembersComponent} from "./members/members.component";
import {ModuleWithProviders} from "@angular/core";
import {AuthGuardService} from "./auth-guard.service";
export const router: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'login-email', component: EmailComponent },
  { path: 'members', component: MembersComponent, canActivate: [AuthGuardService] }

]

export const routes: ModuleWithProviders = RouterModule.forRoot(router);
