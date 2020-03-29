import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {DynamicDatabase, HomeComponent} from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NgxStripeModule } from 'ngx-stripe';

import {MatCardModule, MatFormFieldModule  ,MatInputModule  ,MatButtonModule ,MatTreeModule , MatIconModule , MatProgressBarModule} from '@angular/material';
import { ResetComponent } from './reset/reset.component';
import { TopTenProductsComponent } from './top-ten-products/top-ten-products.component';
import { HomeFooterComponent } from './home-footer/home-footer.component';
import { ProfilComponent } from './profil/profil.component';
import { DiscussionShortcutComponent } from './discussion-shortcut/discussion-shortcut.component';
import { EditComponent } from './edit/edit.component';
import { EditFormComponent } from './edit-form/edit-form.component';
import { BlockingComponent } from './blocking/blocking.component';
import { CategoriesComponent } from './categories/categories.component';
import { EditPublicationComponent } from './edit-publication/edit-publication.component';
import { BlockingModalComponent } from './blocking-modal/blocking-modal.component';
import { EditPostsComponent } from './edit-posts/edit-posts.component';
import { EditSalesComponent } from './edit-sales/edit-sales.component';
import { EditAlertsComponent } from './edit-alerts/edit-alerts.component';
import { EditStoriesComponent } from './edit-stories/edit-stories.component';
import { NewsFilComponent } from './news-fil/news-fil.component';
import { HomeRightComponent } from './home-right/home-right.component';
import { HomeLeftComponent } from './home-left/home-left.component';
import { LoginFooterComponent } from './login-footer/login-footer.component';
import { PostModalComponent } from './post-modal/post-modal.component';
import { SellModalComponent } from './sell-modal/sell-modal.component';
import { AlertModalComponent } from './alert-modal/alert-modal.component';
import { PostOptionDropdownComponent } from './post-option-dropdown/post-option-dropdown.component';
import { SellOptionDropdownComponent } from './sell-option-dropdown/sell-option-dropdown.component';
import { AlertOptionDropdownComponent } from './alert-option-dropdown/alert-option-dropdown.component';
import { PostPublicationComponent } from './post-publication/post-publication.component';
import { SellPublicationComponent } from './sell-publication/sell-publication.component';
import { AlertPublicationComponent } from './alert-publication/alert-publication.component';
import { StoriesListComponent } from './home-left/stories-list/stories-list.component';
import { StorieItemComponent } from './home-left/stories-list/storie-item/storie-item.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { MainPaymentComponent } from './main-payment/main-payment.component';
import {  ReactiveFormsModule } from '@angular/forms';
import { PaymentService } from "./main-payment/payment.service";
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    NavbarComponent,
    ResetComponent,
    TopTenProductsComponent,
    HomeFooterComponent,
    ProfilComponent,
    DiscussionShortcutComponent,
    EditComponent,
    EditFormComponent,
    BlockingComponent,
    CategoriesComponent,
    EditPublicationComponent,
    BlockingModalComponent,
    EditPostsComponent,
    EditSalesComponent,
    EditAlertsComponent,
    EditStoriesComponent,
    NewsFilComponent,
    HomeRightComponent,
    HomeLeftComponent,
    LoginFooterComponent,
    PostModalComponent,
    SellModalComponent,
    AlertModalComponent,
    PostOptionDropdownComponent,
    SellOptionDropdownComponent,
    AlertOptionDropdownComponent,
    PostPublicationComponent,
    SellPublicationComponent,
    AlertPublicationComponent,
    StoriesListComponent,
    StorieItemComponent,
    MainPaymentComponent,

  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatFormFieldModule,
    FormsModule,
    MatInputModule,
    MatButtonModule,
    MatTreeModule,
    MatIconModule,
    MatProgressBarModule,
    CarouselModule,
    ReactiveFormsModule,
    HttpClientModule

  ],
  providers: [DynamicDatabase,PaymentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
