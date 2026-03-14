import { Routes } from '@angular/router';
import { MainPage } from "./pages/main-page/main-page";
import { SelectPage } from "./pages/select-page/select-page";

export const routes: Routes = [
    {
        path: "home",
        component: MainPage,
        title: "Home",
        data: { sectionName: "Welcome page" }
    },
    {
        path: "select",
        component: SelectPage,
        title: "Select",
        data: {sectionName: "Select page"}
    },
    {
        path: "**",
        redirectTo: "/home",
    },
];
