import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';

@Injectable()
export class PicService {
    constructor(private http: HttpClient) { }

    public getPics() {
        const options = {
            headers: {
                'Content-Type': 'application/json',
            },
        };
        const url = 'https://api.ngbook.net/fruit';
        const picPrefix = 'https://ngbook.js.org/assets/imgs/net/';
        return this.http.post(url, null, options).pipe(
            map((d: any) => {
                let data = d.data;
                if (data && data.length) {
                    data.forEach((item, index) => {
                        item.pic = picPrefix + item.pic;
                        item.index = index;
                    });
                }
                return data;
            })
        );
    }
}
