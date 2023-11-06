import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageLayoutComponent } from './Components/page-layout/page-layout.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { PrimaryButtonComponent } from './components/primary-button/primary-button.component';
import { SecondaryButtonComponent } from './components/secondary-button/secondary-button.component';
import { NavLinkComponent } from './components/nav-link/nav-link.component';
import { ResponsiveNavLinkComponent } from './components/responsive-nav-link/responsive-nav-link.component';
import { TextInputComponent } from './components/text-input/text-input.component';
import { InputLabelComponent } from './components/input-label/input-label.component';
import { InputErrorComponent } from './components/input-error/input-error.component';
import { ToggleButtonComponent } from './components/toggle-button/toggle-button.component';
import { CheckboxComponent } from './components/checkbox/checkbox.component';
import { AppLayoutComponent } from './shared/app-layout/app-layout.component';
import { PrincipalComponent } from './pages/principal/principal.component';
import { EducationComponent } from './pages/education/education.component';
import { WorkComponent } from './pages/work/work.component';
import { TechnologiesComponent } from './pages/technologies/technologies.component';
import { ProyectsComponent } from './pages/proyects/proyects.component';
import { FooterComponent } from './components/footer/footer.component';
import { SocialMediaIconComponent } from './components/social-media-icon/social-media-icon.component';
import { NavIconComponent } from './components/nav-icon/nav-icon.component';
import { ThemeSwitcherComponent } from './shared/theme-switcher/theme-switcher.component';

@NgModule({
  declarations: [
    AppComponent,
    PageLayoutComponent,
    SideBarComponent,
    NavBarComponent,
    PrimaryButtonComponent,
    SecondaryButtonComponent,
    NavLinkComponent,
    ResponsiveNavLinkComponent,
    TextInputComponent,
    InputLabelComponent,
    InputErrorComponent,
    ToggleButtonComponent,
    CheckboxComponent,
    AppLayoutComponent,
    PrincipalComponent,
    EducationComponent,
    WorkComponent,
    TechnologiesComponent,
    ProyectsComponent,
    FooterComponent,
    SocialMediaIconComponent,
    NavIconComponent,
    ThemeSwitcherComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
