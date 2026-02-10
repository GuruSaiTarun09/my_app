import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { WellcomeComponent } from './wellcome/wellcome.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { CarsComponent } from './cars/cars.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { SquareComponent } from './square/square.component';
import { RectangleComponent } from './rectangle/rectangle.component';
import { CircleComponent } from './circle/circle.component';
import { BmiComponent } from './bmi/bmi.component';
import { DirectivesComponent } from './directives/directives.component';
import { ShoppingComponent } from './shopping/shopping.component';
import { MailComponent } from './mail/mail.component';
import { VehicleComponent } from './vehicle/vehicle.component';
import { AccountComponent } from './account/account.component';
import { GmailComponent } from './gmail/gmail.component';
import { WeatherComponent } from './weather/weather.component';
import { StudentdetailsComponent } from './studentdetails/studentdetails.component';
import { CreateVechicleComponent } from './create-vechicle/create-vechicle.component';
import { AdddeatailsComponent } from './adddeatails/adddeatails.component';
import { VechicleDetailsComponent } from './vechicle-details/vechicle-details.component';
import { AuthGuard } from './auth.guard';
import { CreateUserComponent } from './create-user/create-user.component';
import { CompanyDetailsComponent } from './company-details/company-details.component';
import { ParentComponent } from './parent/parent.component';
import { FlipkartComponent } from './flipkart/flipkart.component';
import { CartComponent } from './cart/cart.component';
import { NavComponent } from './nav/nav.component';
import { ItemsComponent } from './items/items.component';
import { NotifyGuard } from './notify.guard';
import { AdminGuard } from './admin.guard';
import { AboutCeoComponent } from './aboutus/about-ceo/about-ceo.component';
import { AboutCompanyComponent } from './aboutus/about-company/about-company.component';
import { OptimizationComponent } from './optimization/optimization.component';
import { HooksComponent } from './hooks/hooks.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {path: 'dashboard',component: DashboardComponent,canActivate:[AuthGuard],
    children: [
      { path: 'Home', component: HomeComponent },
      { path: 'wellcome', component: WellcomeComponent },
      { path: 'data-binding', component: DataBindingComponent },
      { path: 'cars', component: CarsComponent },
      { path: 'calculator', component: CalculatorComponent },
      { path: 'square', component: SquareComponent },
      { path: 'rectangle', component: RectangleComponent },
      { path: 'circle', component: CircleComponent },
      { path: 'bmi', component: BmiComponent },
      { path: 'directives', component: DirectivesComponent },
      { path: 'shopping', component: ShoppingComponent },
      { path: 'mail', component: MailComponent },
      { path: 'vehicle', component: VehicleComponent },
      { path: 'account', component: AccountComponent },
      { path: 'gmail', component: GmailComponent },
      { path: 'weather', component: WeatherComponent },
      { path: 'studentdetails', component: StudentdetailsComponent },
      { path:'create-vehicle',component:CreateVechicleComponent,canDeactivate:[NotifyGuard]},
      { path:'adddeatails',component:AdddeatailsComponent},
      { path:'vechicle-details/:id',component:VechicleDetailsComponent},
      { path:'edit-vehicle/:id',component:VechicleDetailsComponent,canActivate:[AdminGuard]},
      { path:'create-user',component:CreateUserComponent,canDeactivate:[NotifyGuard]},
      {path:'company-details',component:CompanyDetailsComponent},
      {path:'parent',component:ParentComponent},
      {path:'flipkart',component:FlipkartComponent},
      {path:'cart',component:CartComponent},
      {path:'nav',component:NavComponent},
      {path:'items',component:ItemsComponent},
      {path:'about-ceo',component:AboutCeoComponent},
      {path:'about-company',component:AboutCompanyComponent},
      {path:'optimization',component:OptimizationComponent},
      {path:'hooks',component:HooksComponent}
    ]
  },
  { path: '', component: LoginComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
