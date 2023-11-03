import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TitleComponent } from './title/title.component';
import { LogoMainComponent } from './logo-main/logo-main.component';
import { SubTitleComponent } from './sub-title/sub-title.component';
import { ArrowsComponent } from './arrows/arrows.component';
import { MainHeaderComponent } from './main-header/main-header.component';
import { SkillsContainerComponent } from './skills-container/skills-container.component';
import { ExperienceContainerComponent } from './experience-container/experience-container.component';

@NgModule({
  declarations: [
    AppComponent,
    TitleComponent,
    LogoMainComponent,
    SubTitleComponent,
    ArrowsComponent,
    MainHeaderComponent,
    SkillsContainerComponent,
    ExperienceContainerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
