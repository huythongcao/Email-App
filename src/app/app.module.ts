import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EmailContentComponent } from './components/email-content/email-content.component';
import { HeaderComponent } from './components/header/header.component';
import { RouterModule } from '@angular/router';
import { EmailBoxComponent } from './components/email-box/email-box.component';
import { EmailPreviewComponent } from './components/email-preview/email-preview.component';
import { EmailDetailComponent } from './components/email-detail/email-detail.component';
import { MessagePipe } from './pipes/message.pipe';
import { ContactsComponent } from './components/contacts/contacts.component';
import { PreferencesComponent } from './components/preferences/preferences.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    EmailContentComponent,
    EmailBoxComponent,
    EmailPreviewComponent,
    EmailDetailComponent,
    MessagePipe,
    ContactsComponent,
    PreferencesComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {
        path: '',
        redirectTo: '/messages',
        pathMatch: 'full'
      },
      {
        path: 'messages',
        component: EmailContentComponent,
        children: [
          {
            path: ':folder',
            component: EmailPreviewComponent,
            children: [
              {
                path: ':id',
                component: EmailDetailComponent
                // outlet: 'second-outlet'
              }
            ]
          }
        ]
      },
      {
        path: 'contacts',
        component: ContactsComponent
      },
      {
        path: 'preferences',
        component: ContactsComponent
      },
      {
        path: '**',
        component: NotFoundComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
