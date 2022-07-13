import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AdminLayoutRoutes } from './text-layout.routing';

import { DashboardComponent }       from '../../pages/dashboard/dashboard.component';
import { UserComponent }            from '../../pages/_user/user.component';
import { TableComponent }           from '../../pages/_table/table.component';
import { TypographyComponent }      from '../../pages/_typography/typography.component';
import { IconsComponent }           from '../../pages/_icons/icons.component';
import { MapsComponent }            from '../../pages/_maps/maps.component';
import { NotificationsComponent }   from '../../pages/_notifications/notifications.component';
import { UpgradeComponent }         from '../../pages/_upgrade/upgrade.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    NgbModule
  ],
  declarations: [
    DashboardComponent,
    UserComponent,
    TableComponent,
    UpgradeComponent,
    TypographyComponent,
    IconsComponent,
    MapsComponent,
    NotificationsComponent,
  ]
})

export class TextLayoutModule {}
