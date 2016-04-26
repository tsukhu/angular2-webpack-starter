import {Component,ViewEncapsulation} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {NavBarComponent} from '../nav-bar/navbar.component';
import {HomeComponent} from '../home/home.component';
import {UsersComponent} from '../users/users.component';
import {UserFormComponent} from '../users/user-form.component';
import {PostsComponent} from '../posts/posts.component';
import {NotFoundComponent} from '../not-found/not-found.component';
import {LoginComponent} from '../login/login.component';
import {PhonesComponent} from '../phones/phones.component';
import {PhoneComponent} from '../phones/phone.component';
import {GitExplorerComponent} from '../gitExplorer/gitExplorer.component';
import {TweetsComponent} from '../tweets/tweets.component';

import {DemoApp} from '../demo-app/demo-app';

@RouteConfig([
    { path: '/', name: 'Home', component: HomeComponent, useAsDefault: true },
    { path: '/users', name: 'Users', component: UsersComponent },
    { path: '/users/:id', name: 'EditUser', component: UserFormComponent },
    { path: '/users/new', name: 'NewUser', component: UserFormComponent },
    { path: '/posts', name: 'Posts', component: PostsComponent },
    { path: '/phones', name: 'Phones', component: PhonesComponent },
    { path: '/phones/:id', name: 'Phone', component: PhoneComponent },
    { path: '/not-found', name: 'NotFound', component: NotFoundComponent },
    { path: '/git-explorer/...', name: 'GitExplorer', component: GitExplorerComponent },
    { path: '/tweets', name: 'Tweets', component: TweetsComponent },
    { path: '/mat/...', name: 'Material', component: DemoApp },
    { path: '/login', name: 'Login', component: LoginComponent },
    { path: '/*other', name: 'Other', redirectTo: ['Home'] }
])
@Component({
    selector: 'my-app',
    template: require('./app.component.html'),
     encapsulation: ViewEncapsulation.None,
    styles: [ require('assets/css/bootstrap.css'),
              require('assets/css/styles.css')
              ],
    directives: [ROUTER_DIRECTIVES, NavBarComponent]
})

export class AppComponent {
}