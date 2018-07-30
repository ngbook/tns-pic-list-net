"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var http_1 = require("@angular/common/http");
var operators_1 = require("rxjs/operators");
var core_1 = require("@angular/core");
var PicService = /** @class */ (function () {
    function PicService(http) {
        this.http = http;
    }
    PicService.prototype.getPics = function () {
        var options = {
            headers: {
                'Content-Type': 'application/json',
            },
        };
        var url = 'https://api.ngbook.net/fruit';
        var picPrefix = 'https://ngbook.js.org/assets/imgs/net/';
        return this.http.post(url, null, options).pipe(operators_1.map(function (d) {
            var data = d.data;
            if (data && data.length) {
                data.forEach(function (item, index) {
                    item.pic = picPrefix + item.pic;
                    item.index = index;
                });
            }
            return data;
        }));
    };
    PicService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], PicService);
    return PicService;
}());
exports.PicService = PicService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGljLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJwaWMuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDZDQUFrRDtBQUNsRCw0Q0FBcUM7QUFDckMsc0NBQTJDO0FBRzNDO0lBQ0ksb0JBQW9CLElBQWdCO1FBQWhCLFNBQUksR0FBSixJQUFJLENBQVk7SUFBSSxDQUFDO0lBRWxDLDRCQUFPLEdBQWQ7UUFDSSxJQUFNLE9BQU8sR0FBRztZQUNaLE9BQU8sRUFBRTtnQkFDTCxjQUFjLEVBQUUsa0JBQWtCO2FBQ3JDO1NBQ0osQ0FBQztRQUNGLElBQU0sR0FBRyxHQUFHLDhCQUE4QixDQUFDO1FBQzNDLElBQU0sU0FBUyxHQUFHLHdDQUF3QyxDQUFDO1FBQzNELE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsSUFBSSxFQUFFLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FDMUMsZUFBRyxDQUFDLFVBQUMsQ0FBTTtZQUNQLElBQUksSUFBSSxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUM7WUFDbEIsRUFBRSxDQUFDLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO2dCQUN0QixJQUFJLENBQUMsT0FBTyxDQUFDLFVBQUMsSUFBSSxFQUFFLEtBQUs7b0JBQ3JCLElBQUksQ0FBQyxHQUFHLEdBQUcsU0FBUyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUM7b0JBQ2hDLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO2dCQUN2QixDQUFDLENBQUMsQ0FBQztZQUNQLENBQUM7WUFDRCxNQUFNLENBQUMsSUFBSSxDQUFDO1FBQ2hCLENBQUMsQ0FBQyxDQUNMLENBQUM7SUFDTixDQUFDO0lBdkJRLFVBQVU7UUFEdEIsaUJBQVUsRUFBRTt5Q0FFaUIsaUJBQVU7T0FEM0IsVUFBVSxDQXdCdEI7SUFBRCxpQkFBQztDQUFBLEFBeEJELElBd0JDO0FBeEJZLGdDQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IG1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFBpY1NlcnZpY2Uge1xuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cENsaWVudCkgeyB9XG5cbiAgICBwdWJsaWMgZ2V0UGljcygpIHtcbiAgICAgICAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgdXJsID0gJ2h0dHBzOi8vYXBpLm5nYm9vay5uZXQvZnJ1aXQnO1xuICAgICAgICBjb25zdCBwaWNQcmVmaXggPSAnaHR0cHM6Ly9uZ2Jvb2suanMub3JnL2Fzc2V0cy9pbWdzL25ldC8nO1xuICAgICAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QodXJsLCBudWxsLCBvcHRpb25zKS5waXBlKFxuICAgICAgICAgICAgbWFwKChkOiBhbnkpID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgZGF0YSA9IGQuZGF0YTtcbiAgICAgICAgICAgICAgICBpZiAoZGF0YSAmJiBkYXRhLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICBkYXRhLmZvckVhY2goKGl0ZW0sIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtLnBpYyA9IHBpY1ByZWZpeCArIGl0ZW0ucGljO1xuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5pbmRleCA9IGluZGV4O1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICAgICAgICB9KVxuICAgICAgICApO1xuICAgIH1cbn1cbiJdfQ==