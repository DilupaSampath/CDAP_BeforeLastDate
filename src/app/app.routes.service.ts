
import { Map1Component } from './views/maps/map1/map1.component';
import { ModalsComponent } from './views/modals/modals.component';
import { BasicTableComponent } from './views/tables/basic-table/basic-table.component';
import { Profile1Component } from './views/profile/profile1/profile1.component';
import { RouterModule, Route } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { NotFoundComponent } from './views/errors/not-found/not-found.component';
import { Dashboard1Component } from './views/dashboards/dashboard1/dashboard1.component';
import { NavigationComponent } from 'app/main-layout/navigation/navigation.component';
import { Tab2Component } from './shared/components/tabs/tab2/tab2.component';
import { Tab1Component } from './shared/components/tabs/tab1/tab1.component';
import { ResearchAreaComponent } from 'app/views/research-area/research-area.component';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { TestComponent } from './views/test/test.component';
import { LoginComponent } from 'app/views/login/login.component';
import { RegisterComponent } from 'app/views/register/register.component';


const routes: Route[] = [
  
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  
  { path: 'adminPage', component:AdminPageComponent },
    { path: 'login', component:LoginComponent },
    { path: 'register', component:RegisterComponent },
  { path: 'test', component:TestComponent },
  { path: 'asd', children:
    [
      { path: 'asd', component: NavigationComponent },
    ]
  },
  
  
  { path: 'dashboards', children:
    [
      { path: 'v1', component: Dashboard1Component },
    ]
  },
  { path: 'profiles', children:
    [
      { path: 'profile1', component: Profile1Component },
      { path: 'researchArea', component: ResearchAreaComponent }
    ]
  },
  { path: 'tables', children:
    [
      { path: 'table1', component: BasicTableComponent,  children:[
        {path: 'tab1', component: Tab1Component },
        {path: 'tab2', component: Tab2Component }
      ] }
    ]
  },
  { path: 'maps', children:
    [
      { path: 'map1', component: Map1Component},
    ]
  },

  { path: 'modals', component: ModalsComponent},
  { path: '**', component: NotFoundComponent },

];

export const AppRoutes: ModuleWithProviders = RouterModule.forRoot(routes);
