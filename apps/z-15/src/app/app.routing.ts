import { Routes } from "@angular/router";
import { loadRemoteModule } from '@angular-architects/module-federation';
import {environment} from "../environments/environment";
import {ShellComponent} from "./shell/shell.component";
import {AuthorizationGuard} from "ngx-virous";

export const routes: Routes = [
    {
        path:'',
        loadChildren: () => loadRemoteModule({
            type: 'module',
            remoteEntry: `${environment.mfe.login}remoteEntry.js`,
            exposedModule: './Module'
        }).then(m => m.SignInModule),
    },
  {
    path:'apps',
    component: ShellComponent,
    canActivate: [AuthorizationGuard]
  }
]
