// this import should be first in order to load some required settings (like globals and reflect-metadata)
import {nativeScriptBootstrap} from "nativescript-angular/application";
import {AppComponent} from "./app.component";
import {NS_HTTP_PROVIDERS} from 'nativescript-angular/http';

nativeScriptBootstrap(AppComponent, [NS_HTTP_PROVIDERS]);