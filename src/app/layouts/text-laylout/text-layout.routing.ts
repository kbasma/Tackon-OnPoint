import { Routes } from '@angular/router';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { UserComponent } from '../../pages/_user/user.component';
import { TableComponent } from '../../pages/_table/table.component';
import { TypographyComponent } from '../../pages/_typography/typography.component';
import { IconsComponent } from '../../pages/_icons/icons.component';
import { MapsComponent } from '../../pages/_maps/maps.component';
import { NotificationsComponent } from '../../pages/_notifications/notifications.component';
import { UpgradeComponent } from '../../pages/_upgrade/upgrade.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'user',           component: UserComponent },
    { path: 'table',          component: TableComponent },
    { path: 'typography',     component: TypographyComponent },
    { path: 'icons',          component: IconsComponent },
    { path: 'maps',           component: MapsComponent },
    { path: 'notifications',  component: NotificationsComponent },
    { path: 'upgrade',        component: UpgradeComponent }
];
