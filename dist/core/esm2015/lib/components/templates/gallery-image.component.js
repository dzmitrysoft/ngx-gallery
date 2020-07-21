/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, HostBinding, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { animate, style, transition, trigger } from '@angular/animations';
import { BehaviorSubject } from 'rxjs';
export class GalleryImageComponent {
    /**
     * @param {?} _sanitizer
     */
    constructor(_sanitizer) {
        this._sanitizer = _sanitizer;
        /**
         * Stream that emits the state
         */
        this._state = new BehaviorSubject('loading');
        this.state = this._state.asObservable();
        /**
         * Progress value
         */
        this.progress = 0;
        /**
         * Stream that emits when an error occurs
         */
        this.error = new EventEmitter();
    }
    /**
     * @return {?}
     */
    get imageLoadSuccess() {
        return !!this.imageUrl;
    }
    /**
     * @return {?}
     */
    get imageLoadFailed() {
        return !!this.loadError;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (this.loadingIcon) {
            this.loaderTemplate = this._sanitizer.bypassSecurityTrustHtml(this.loadingIcon);
        }
        if (this.loadingError) {
            this.errorTemplate = this._sanitizer.bypassSecurityTrustHtml(this.loadingError);
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this._state.complete();
    }
    /**
     * @param {?} __0
     * @return {?}
     */
    onProgress({ loaded, total }) {
        this.progress = loaded * 100 / total;
    }
    /**
     * @param {?} blobUrl
     * @return {?}
     */
    onLoaded(blobUrl) {
        this.imageUrl = this._sanitizer.bypassSecurityTrustStyle(`url("${blobUrl}")`);
        this._state.next('success');
    }
    /**
     * @param {?} err
     * @return {?}
     */
    onError(err) {
        this.loadError = err;
        this._state.next('failed');
        this.error.emit(err);
    }
}
GalleryImageComponent.decorators = [
    { type: Component, args: [{
                selector: 'gallery-image',
                changeDetection: ChangeDetectionStrategy.OnPush,
                animations: [
                    trigger('fadeIn', [
                        transition(':enter', [
                            style({ opacity: 0 }),
                            animate('300ms ease-in', style({ opacity: 1 }))
                        ])
                    ])
                ],
                template: `
    <ng-container [lazyImage]="src"
                  (progress)="onProgress($event)"
                  (loaded)="onLoaded($event)"
                  (error)="onError($event)"
                  [ngSwitch]="state | async">

      <div *ngSwitchCase="'success'"
           @fadeIn
           class="g-image-item"
           [style.backgroundImage]="imageUrl">
      </div>

      <div *ngSwitchCase="'failed'"
           class="g-image-error-message">
        <div *ngIf="errorTemplate; else defaultError"
             [innerHTML]="errorTemplate"></div>
        <ng-template #defaultError>
          <ng-container *ngIf="isThumbnail; else isLarge">
            <h4>⚠</h4>
          </ng-container>
          <ng-template #isLarge>
            <h2>⚠</h2>
            <p>Unable to load the image!</p>
          </ng-template>
        </ng-template>
      </div>

      <ng-container *ngSwitchCase="'loading'">
        <div *ngIf="loaderTemplate; else defaultLoader"
             class="g-loading"
             [innerHTML]="loaderTemplate">
        </div>
        <ng-template #defaultLoader>
          <div *ngIf="isThumbnail" class="g-thumb-loading"></div>
        </ng-template>
      </ng-container>
    </ng-container>
  `
            }] }
];
/** @nocollapse */
GalleryImageComponent.ctorParameters = () => [
    { type: DomSanitizer }
];
GalleryImageComponent.propDecorators = {
    isThumbnail: [{ type: Input }],
    src: [{ type: Input }],
    loadingIcon: [{ type: Input }],
    loadingError: [{ type: Input }],
    error: [{ type: Output }],
    imageLoadSuccess: [{ type: HostBinding, args: ['class.g-image-loaded',] }],
    imageLoadFailed: [{ type: HostBinding, args: ['class.g-image-error',] }]
};
if (false) {
    /**
     * Stream that emits the state
     * @type {?}
     * @private
     */
    GalleryImageComponent.prototype._state;
    /** @type {?} */
    GalleryImageComponent.prototype.state;
    /**
     * Progress value
     * @type {?}
     */
    GalleryImageComponent.prototype.progress;
    /**
     * Is thumbnail
     * @type {?}
     */
    GalleryImageComponent.prototype.isThumbnail;
    /**
     * Image source URL
     * @type {?}
     */
    GalleryImageComponent.prototype.src;
    /**
     * Loaded image URL
     * @type {?}
     */
    GalleryImageComponent.prototype.imageUrl;
    /**
     * Custom loader template
     * @type {?}
     */
    GalleryImageComponent.prototype.loadingIcon;
    /**
     * Custom loader safe template
     * @type {?}
     */
    GalleryImageComponent.prototype.loaderTemplate;
    /**
     * Custom error template
     * @type {?}
     */
    GalleryImageComponent.prototype.loadingError;
    /**
     * Custom error safe template
     * @type {?}
     */
    GalleryImageComponent.prototype.errorTemplate;
    /**
     * Stream that emits when an error occurs
     * @type {?}
     */
    GalleryImageComponent.prototype.error;
    /**
     * loading error
     * @type {?}
     */
    GalleryImageComponent.prototype.loadError;
    /**
     * @type {?}
     * @private
     */
    GalleryImageComponent.prototype._sanitizer;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2FsbGVyeS1pbWFnZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Abmd4LWdhbGxlcnkvY29yZS8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL3RlbXBsYXRlcy9nYWxsZXJ5LWltYWdlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsV0FBVyxFQUFVLE1BQU0sRUFBRSxZQUFZLEVBQUUsdUJBQXVCLEVBQWEsTUFBTSxlQUFlLENBQUM7QUFDaEksT0FBTyxFQUFFLFlBQVksRUFBdUIsTUFBTSwyQkFBMkIsQ0FBQztBQUM5RSxPQUFPLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxVQUFVLEVBQUUsT0FBTyxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDMUUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQXNEdkMsTUFBTSxPQUFPLHFCQUFxQjs7OztJQXdDaEMsWUFBb0IsVUFBd0I7UUFBeEIsZUFBVSxHQUFWLFVBQVUsQ0FBYzs7OztRQXJDM0IsV0FBTSxHQUFHLElBQUksZUFBZSxDQUFtQyxTQUFTLENBQUMsQ0FBQztRQUNsRixVQUFLLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLEVBQUUsQ0FBQzs7OztRQUc1QyxhQUFRLEdBQUcsQ0FBQyxDQUFDOzs7O1FBcUJILFVBQUssR0FBRyxJQUFJLFlBQVksRUFBUyxDQUFDO0lBYTVDLENBQUM7Ozs7SUFURCxJQUF5QyxnQkFBZ0I7UUFDdkQsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUN6QixDQUFDOzs7O0lBRUQsSUFBd0MsZUFBZTtRQUNyRCxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDO0lBQzFCLENBQUM7Ozs7SUFLRCxRQUFRO1FBQ04sSUFBSSxJQUFJLENBQUMsV0FBVyxFQUFFO1lBQ3BCLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyx1QkFBdUIsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7U0FDakY7UUFDRCxJQUFJLElBQUksQ0FBQyxZQUFZLEVBQUU7WUFDckIsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLHVCQUF1QixDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztTQUNqRjtJQUNILENBQUM7Ozs7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUN6QixDQUFDOzs7OztJQUVELFVBQVUsQ0FBQyxFQUFDLE1BQU0sRUFBRSxLQUFLLEVBQW9DO1FBQzNELElBQUksQ0FBQyxRQUFRLEdBQUcsTUFBTSxHQUFHLEdBQUcsR0FBRyxLQUFLLENBQUM7SUFDdkMsQ0FBQzs7Ozs7SUFFRCxRQUFRLENBQUMsT0FBZTtRQUN0QixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsd0JBQXdCLENBQUMsUUFBUSxPQUFPLElBQUksQ0FBQyxDQUFDO1FBQzlFLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQzlCLENBQUM7Ozs7O0lBRUQsT0FBTyxDQUFDLEdBQVU7UUFDaEIsSUFBSSxDQUFDLFNBQVMsR0FBRyxHQUFHLENBQUM7UUFDckIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDM0IsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDdkIsQ0FBQzs7O1lBekhGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsZUFBZTtnQkFDekIsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07Z0JBQy9DLFVBQVUsRUFBRTtvQkFDVixPQUFPLENBQUMsUUFBUSxFQUFFO3dCQUNoQixVQUFVLENBQUMsUUFBUSxFQUFFOzRCQUNuQixLQUFLLENBQUMsRUFBQyxPQUFPLEVBQUUsQ0FBQyxFQUFDLENBQUM7NEJBQ25CLE9BQU8sQ0FBQyxlQUFlLEVBQUUsS0FBSyxDQUFDLEVBQUMsT0FBTyxFQUFFLENBQUMsRUFBQyxDQUFDLENBQUM7eUJBQzlDLENBQUM7cUJBQ0gsQ0FBQztpQkFDSDtnQkFDRCxRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBc0NUO2FBQ0Y7Ozs7WUF0RFEsWUFBWTs7OzBCQWtFbEIsS0FBSztrQkFHTCxLQUFLOzBCQUtMLEtBQUs7MkJBS0wsS0FBSztvQkFLTCxNQUFNOytCQUlOLFdBQVcsU0FBQyxzQkFBc0I7OEJBSWxDLFdBQVcsU0FBQyxxQkFBcUI7Ozs7Ozs7O0lBakNsQyx1Q0FBMkY7O0lBQzNGLHNDQUE0Qzs7Ozs7SUFHNUMseUNBQWE7Ozs7O0lBR2IsNENBQThCOzs7OztJQUc5QixvQ0FBcUI7Ozs7O0lBRXJCLHlDQUFvQjs7Ozs7SUFHcEIsNENBQTZCOzs7OztJQUU3QiwrQ0FBeUI7Ozs7O0lBR3pCLDZDQUE4Qjs7Ozs7SUFFOUIsOENBQXdCOzs7OztJQUd4QixzQ0FBNEM7Ozs7O0lBRTVDLDBDQUFpQjs7Ozs7SUFVTCwyQ0FBZ0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBIb3N0QmluZGluZywgT25Jbml0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBEb21TYW5pdGl6ZXIsIFNhZmVIdG1sLCBTYWZlU3R5bGUgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcclxuaW1wb3J0IHsgYW5pbWF0ZSwgc3R5bGUsIHRyYW5zaXRpb24sIHRyaWdnZXIgfSBmcm9tICdAYW5ndWxhci9hbmltYXRpb25zJztcclxuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0IH0gZnJvbSAncnhqcyc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2dhbGxlcnktaW1hZ2UnLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxyXG4gIGFuaW1hdGlvbnM6IFtcclxuICAgIHRyaWdnZXIoJ2ZhZGVJbicsIFtcclxuICAgICAgdHJhbnNpdGlvbignOmVudGVyJywgW1xyXG4gICAgICAgIHN0eWxlKHtvcGFjaXR5OiAwfSksXHJcbiAgICAgICAgYW5pbWF0ZSgnMzAwbXMgZWFzZS1pbicsIHN0eWxlKHtvcGFjaXR5OiAxfSkpXHJcbiAgICAgIF0pXHJcbiAgICBdKVxyXG4gIF0sXHJcbiAgdGVtcGxhdGU6IGBcclxuICAgIDxuZy1jb250YWluZXIgW2xhenlJbWFnZV09XCJzcmNcIlxyXG4gICAgICAgICAgICAgICAgICAocHJvZ3Jlc3MpPVwib25Qcm9ncmVzcygkZXZlbnQpXCJcclxuICAgICAgICAgICAgICAgICAgKGxvYWRlZCk9XCJvbkxvYWRlZCgkZXZlbnQpXCJcclxuICAgICAgICAgICAgICAgICAgKGVycm9yKT1cIm9uRXJyb3IoJGV2ZW50KVwiXHJcbiAgICAgICAgICAgICAgICAgIFtuZ1N3aXRjaF09XCJzdGF0ZSB8IGFzeW5jXCI+XHJcblxyXG4gICAgICA8ZGl2ICpuZ1N3aXRjaENhc2U9XCInc3VjY2VzcydcIlxyXG4gICAgICAgICAgIEBmYWRlSW5cclxuICAgICAgICAgICBjbGFzcz1cImctaW1hZ2UtaXRlbVwiXHJcbiAgICAgICAgICAgW3N0eWxlLmJhY2tncm91bmRJbWFnZV09XCJpbWFnZVVybFwiPlxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIDxkaXYgKm5nU3dpdGNoQ2FzZT1cIidmYWlsZWQnXCJcclxuICAgICAgICAgICBjbGFzcz1cImctaW1hZ2UtZXJyb3ItbWVzc2FnZVwiPlxyXG4gICAgICAgIDxkaXYgKm5nSWY9XCJlcnJvclRlbXBsYXRlOyBlbHNlIGRlZmF1bHRFcnJvclwiXHJcbiAgICAgICAgICAgICBbaW5uZXJIVE1MXT1cImVycm9yVGVtcGxhdGVcIj48L2Rpdj5cclxuICAgICAgICA8bmctdGVtcGxhdGUgI2RlZmF1bHRFcnJvcj5cclxuICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJpc1RodW1ibmFpbDsgZWxzZSBpc0xhcmdlXCI+XHJcbiAgICAgICAgICAgIDxoND7imqA8L2g0PlxyXG4gICAgICAgICAgPC9uZy1jb250YWluZXI+XHJcbiAgICAgICAgICA8bmctdGVtcGxhdGUgI2lzTGFyZ2U+XHJcbiAgICAgICAgICAgIDxoMj7imqA8L2gyPlxyXG4gICAgICAgICAgICA8cD5VbmFibGUgdG8gbG9hZCB0aGUgaW1hZ2UhPC9wPlxyXG4gICAgICAgICAgPC9uZy10ZW1wbGF0ZT5cclxuICAgICAgICA8L25nLXRlbXBsYXRlPlxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIDxuZy1jb250YWluZXIgKm5nU3dpdGNoQ2FzZT1cIidsb2FkaW5nJ1wiPlxyXG4gICAgICAgIDxkaXYgKm5nSWY9XCJsb2FkZXJUZW1wbGF0ZTsgZWxzZSBkZWZhdWx0TG9hZGVyXCJcclxuICAgICAgICAgICAgIGNsYXNzPVwiZy1sb2FkaW5nXCJcclxuICAgICAgICAgICAgIFtpbm5lckhUTUxdPVwibG9hZGVyVGVtcGxhdGVcIj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8bmctdGVtcGxhdGUgI2RlZmF1bHRMb2FkZXI+XHJcbiAgICAgICAgICA8ZGl2ICpuZ0lmPVwiaXNUaHVtYm5haWxcIiBjbGFzcz1cImctdGh1bWItbG9hZGluZ1wiPjwvZGl2PlxyXG4gICAgICAgIDwvbmctdGVtcGxhdGU+XHJcbiAgICAgIDwvbmctY29udGFpbmVyPlxyXG4gICAgPC9uZy1jb250YWluZXI+XHJcbiAgYFxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIEdhbGxlcnlJbWFnZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcclxuXHJcbiAgLyoqIFN0cmVhbSB0aGF0IGVtaXRzIHRoZSBzdGF0ZSAqL1xyXG4gIHByaXZhdGUgcmVhZG9ubHkgX3N0YXRlID0gbmV3IEJlaGF2aW9yU3ViamVjdDwnbG9hZGluZycgfCAnc3VjY2VzcycgfCAnZmFpbGVkJz4oJ2xvYWRpbmcnKTtcclxuICByZWFkb25seSBzdGF0ZSA9IHRoaXMuX3N0YXRlLmFzT2JzZXJ2YWJsZSgpO1xyXG5cclxuICAvKiogUHJvZ3Jlc3MgdmFsdWUgKi9cclxuICBwcm9ncmVzcyA9IDA7XHJcblxyXG4gIC8qKiBJcyB0aHVtYm5haWwgKi9cclxuICBASW5wdXQoKSBpc1RodW1ibmFpbDogYm9vbGVhbjtcclxuXHJcbiAgLyoqIEltYWdlIHNvdXJjZSBVUkwgKi9cclxuICBASW5wdXQoKSBzcmM6IHN0cmluZztcclxuICAvKiogTG9hZGVkIGltYWdlIFVSTCAqL1xyXG4gIGltYWdlVXJsOiBTYWZlU3R5bGU7XHJcblxyXG4gIC8qKiBDdXN0b20gbG9hZGVyIHRlbXBsYXRlICovXHJcbiAgQElucHV0KCkgbG9hZGluZ0ljb246IHN0cmluZztcclxuICAvKiogQ3VzdG9tIGxvYWRlciBzYWZlIHRlbXBsYXRlICovXHJcbiAgbG9hZGVyVGVtcGxhdGU6IFNhZmVIdG1sO1xyXG5cclxuICAvKiogQ3VzdG9tIGVycm9yIHRlbXBsYXRlICovXHJcbiAgQElucHV0KCkgbG9hZGluZ0Vycm9yOiBzdHJpbmc7XHJcbiAgLyoqIEN1c3RvbSBlcnJvciBzYWZlIHRlbXBsYXRlICovXHJcbiAgZXJyb3JUZW1wbGF0ZTogU2FmZUh0bWw7XHJcblxyXG4gIC8qKiBTdHJlYW0gdGhhdCBlbWl0cyB3aGVuIGFuIGVycm9yIG9jY3VycyAqL1xyXG4gIEBPdXRwdXQoKSBlcnJvciA9IG5ldyBFdmVudEVtaXR0ZXI8RXJyb3I+KCk7XHJcbiAgLyoqIGxvYWRpbmcgZXJyb3IgKi9cclxuICBsb2FkRXJyb3I6IEVycm9yO1xyXG5cclxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmctaW1hZ2UtbG9hZGVkJykgZ2V0IGltYWdlTG9hZFN1Y2Nlc3MoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gISF0aGlzLmltYWdlVXJsO1xyXG4gIH1cclxuXHJcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5nLWltYWdlLWVycm9yJykgZ2V0IGltYWdlTG9hZEZhaWxlZCgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiAhIXRoaXMubG9hZEVycm9yO1xyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfc2FuaXRpemVyOiBEb21TYW5pdGl6ZXIpIHtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgaWYgKHRoaXMubG9hZGluZ0ljb24pIHtcclxuICAgICAgdGhpcy5sb2FkZXJUZW1wbGF0ZSA9IHRoaXMuX3Nhbml0aXplci5ieXBhc3NTZWN1cml0eVRydXN0SHRtbCh0aGlzLmxvYWRpbmdJY29uKTtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLmxvYWRpbmdFcnJvcikge1xyXG4gICAgICB0aGlzLmVycm9yVGVtcGxhdGUgPSB0aGlzLl9zYW5pdGl6ZXIuYnlwYXNzU2VjdXJpdHlUcnVzdEh0bWwodGhpcy5sb2FkaW5nRXJyb3IpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKSB7XHJcbiAgICB0aGlzLl9zdGF0ZS5jb21wbGV0ZSgpO1xyXG4gIH1cclxuXHJcbiAgb25Qcm9ncmVzcyh7bG9hZGVkLCB0b3RhbH06IHsgbG9hZGVkOiBudW1iZXIsIHRvdGFsOiBudW1iZXIgfSkge1xyXG4gICAgdGhpcy5wcm9ncmVzcyA9IGxvYWRlZCAqIDEwMCAvIHRvdGFsO1xyXG4gIH1cclxuXHJcbiAgb25Mb2FkZWQoYmxvYlVybDogc3RyaW5nKSB7XHJcbiAgICB0aGlzLmltYWdlVXJsID0gdGhpcy5fc2FuaXRpemVyLmJ5cGFzc1NlY3VyaXR5VHJ1c3RTdHlsZShgdXJsKFwiJHtibG9iVXJsfVwiKWApO1xyXG4gICAgdGhpcy5fc3RhdGUubmV4dCgnc3VjY2VzcycpO1xyXG4gIH1cclxuXHJcbiAgb25FcnJvcihlcnI6IEVycm9yKSB7XHJcbiAgICB0aGlzLmxvYWRFcnJvciA9IGVycjtcclxuICAgIHRoaXMuX3N0YXRlLm5leHQoJ2ZhaWxlZCcpO1xyXG4gICAgdGhpcy5lcnJvci5lbWl0KGVycik7XHJcbiAgfVxyXG5cclxufVxyXG4iXX0=