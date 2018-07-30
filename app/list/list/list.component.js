"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var pic_service_1 = require("~/services/pic.service");
var ListComponent = /** @class */ (function () {
    function ListComponent(picService) {
        this.picService = picService;
    }
    ListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.picService.getPics()
            .subscribe(function (data) {
            console.log(data);
            _this.picItems = data;
        });
    };
    ListComponent = __decorate([
        core_1.Component({
            selector: "list",
            moduleId: module.id,
            templateUrl: "./list.component.html",
            styleUrls: ['./list.component.scss']
        }),
        __metadata("design:paramtypes", [pic_service_1.PicService])
    ], ListComponent);
    return ListComponent;
}());
exports.ListComponent = ListComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJsaXN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF5RTtBQUN6RSxzREFBb0Q7QUFhcEQ7SUFHSSx1QkFBb0IsVUFBc0I7UUFBdEIsZUFBVSxHQUFWLFVBQVUsQ0FBWTtJQUMxQyxDQUFDO0lBRUQsZ0NBQVEsR0FBUjtRQUFBLGlCQVFDO1FBUEcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLEVBQUU7YUFDcEIsU0FBUyxDQUNOLFVBQUEsSUFBSTtZQUNBLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDbEIsS0FBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7UUFDekIsQ0FBQyxDQUNKLENBQUM7SUFDVixDQUFDO0lBZFEsYUFBYTtRQU56QixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLE1BQU07WUFDaEIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSx1QkFBdUI7WUFDcEMsU0FBUyxFQUFFLENBQUMsdUJBQXVCLENBQUM7U0FDdkMsQ0FBQzt5Q0FJa0Msd0JBQVU7T0FIakMsYUFBYSxDQWV6QjtJQUFELG9CQUFDO0NBQUEsQUFmRCxJQWVDO0FBZlksc0NBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgVmlld0NoaWxkLCBFbGVtZW50UmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBQaWNTZXJ2aWNlIH0gZnJvbSAnfi9zZXJ2aWNlcy9waWMuc2VydmljZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgUGljSXRlbSB7XG4gICAgbmFtZTogc3RyaW5nO1xuICAgIHBpYzogc3RyaW5nO1xufVxuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJsaXN0XCIsXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICB0ZW1wbGF0ZVVybDogXCIuL2xpc3QuY29tcG9uZW50Lmh0bWxcIixcbiAgICBzdHlsZVVybHM6IFsnLi9saXN0LmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgTGlzdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAgcGljSXRlbXM6IFBpY0l0ZW1bXTtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcGljU2VydmljZTogUGljU2VydmljZSkge1xuICAgIH1cblxuICAgIG5nT25Jbml0KCkge1xuICAgICAgICB0aGlzLnBpY1NlcnZpY2UuZ2V0UGljcygpXG4gICAgICAgICAgICAuc3Vic2NyaWJlKFxuICAgICAgICAgICAgICAgIGRhdGEgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5waWNJdGVtcyA9IGRhdGE7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgKTtcbiAgICB9XG59XG4iXX0=