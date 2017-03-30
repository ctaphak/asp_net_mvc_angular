import * as angular from "angular";

module App {
    "use strict";

    const ApplicationName:string = "secureApp";
    
    const app = angular.module(ApplicationName, [
        "ngRoute",
        "ui.router"
    ]);
}

