/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, HostBinding, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { animate, style, transition, trigger } from '@angular/animations';
import { BehaviorSubject } from 'rxjs';
var GalleryImageComponent = /** @class */ (function () {
    function GalleryImageComponent(_sanitizer) {
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
    Object.defineProperty(GalleryImageComponent.prototype, "imageLoadSuccess", {
        get: /**
         * @return {?}
         */
        function () {
            return !!this.imageUrl;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GalleryImageComponent.prototype, "imageLoadFailed", {
        get: /**
         * @return {?}
         */
        function () {
            return !!this.loadError;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    GalleryImageComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        if (this.loadingIcon) {
            this.loaderTemplate = this._sanitizer.bypassSecurityTrustHtml(this.loadingIcon);
        }
        if (this.loadingError) {
            this.errorTemplate = this._sanitizer.bypassSecurityTrustHtml(this.loadingError);
        }
    };
    /**
     * @return {?}
     */
    GalleryImageComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this._state.complete();
    };
    /**
     * @param {?} __0
     * @return {?}
     */
    GalleryImageComponent.prototype.onProgress = /**
     * @param {?} __0
     * @return {?}
     */
    function (_a) {
        var loaded = _a.loaded, total = _a.total;
        this.progress = loaded * 100 / total;
    };
    /**
     * @param {?} blobUrl
     * @return {?}
     */
    GalleryImageComponent.prototype.onLoaded = /**
     * @param {?} blobUrl
     * @return {?}
     */
    function (blobUrl) {
        this.imageUrl = this._sanitizer.bypassSecurityTrustStyle("url(\"" + blobUrl + "\")");
        this._state.next('success');
    };
    /**
     * @param {?} err
     * @return {?}
     */
    GalleryImageComponent.prototype.onError = /**
     * @param {?} err
     * @return {?}
     */
    function (err) {
        this.loadError = err;
        this._state.next('failed');
        this.error.emit(err);
    };
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
                    template: "\n    <ng-container [lazyImage]=\"src\"\n                  (progress)=\"onProgress($event)\"\n                  (loaded)=\"onLoaded($event)\"\n                  (error)=\"onError($event)\"\n                  [ngSwitch]=\"state | async\">\n\n      <div *ngSwitchCase=\"'success'\"\n           @fadeIn\n           class=\"g-image-item\"\n           [style.backgroundImage]=\"imageUrl\">\n      </div>\n\n      <div *ngSwitchCase=\"'failed'\"\n           class=\"g-image-error-message\">\n        <div *ngIf=\"errorTemplate; else defaultError\"\n             [innerHTML]=\"errorTemplate\"></div>\n        <ng-template #defaultError>\n          <ng-container *ngIf=\"isThumbnail; else isLarge\">\n            <h4>\u26A0</h4>\n          </ng-container>\n          <ng-template #isLarge>\n            <h2>\u26A0</h2>\n            <p>Unable to load the image!</p>\n          </ng-template>\n        </ng-template>\n      </div>\n\n      <ng-container *ngSwitchCase=\"'loading'\">\n        <div *ngIf=\"loaderTemplate; else defaultLoader\"\n             class=\"g-loading\"\n             [innerHTML]=\"loaderTemplate\">\n        </div>\n        <ng-template #defaultLoader>\n          <div *ngIf=\"isThumbnail\" class=\"g-thumb-loading\"></div>\n        </ng-template>\n      </ng-container>\n    </ng-container>\n  "
                }] }
    ];
    /** @nocollapse */
    GalleryImageComponent.ctorParameters = function () { return [
        { type: DomSanitizer }
    ]; };
    GalleryImageComponent.propDecorators = {
        isThumbnail: [{ type: Input }],
        src: [{ type: Input }],
        loadingIcon: [{ type: Input }],
        loadingError: [{ type: Input }],
        error: [{ type: Output }],
        imageLoadSuccess: [{ type: HostBinding, args: ['class.g-image-loaded',] }],
        imageLoadFailed: [{ type: HostBinding, args: ['class.g-image-error',] }]
    };
    return GalleryImageComponent;
}());
export { GalleryImageComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2FsbGVyeS1pbWFnZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Abmd4LWdhbGxlcnkvY29yZS8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL3RlbXBsYXRlcy9nYWxsZXJ5LWltYWdlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsV0FBVyxFQUFVLE1BQU0sRUFBRSxZQUFZLEVBQUUsdUJBQXVCLEVBQWEsTUFBTSxlQUFlLENBQUM7QUFDaEksT0FBTyxFQUFFLFlBQVksRUFBdUIsTUFBTSwyQkFBMkIsQ0FBQztBQUM5RSxPQUFPLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxVQUFVLEVBQUUsT0FBTyxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDMUUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUV2QztJQTRGRSwrQkFBb0IsVUFBd0I7UUFBeEIsZUFBVSxHQUFWLFVBQVUsQ0FBYzs7OztRQXJDM0IsV0FBTSxHQUFHLElBQUksZUFBZSxDQUFtQyxTQUFTLENBQUMsQ0FBQztRQUNsRixVQUFLLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLEVBQUUsQ0FBQzs7OztRQUc1QyxhQUFRLEdBQUcsQ0FBQyxDQUFDOzs7O1FBcUJILFVBQUssR0FBRyxJQUFJLFlBQVksRUFBUyxDQUFDO0lBYTVDLENBQUM7SUFURCxzQkFBeUMsbURBQWdCOzs7O1FBQXpEO1lBQ0UsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQztRQUN6QixDQUFDOzs7T0FBQTtJQUVELHNCQUF3QyxrREFBZTs7OztRQUF2RDtZQUNFLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUM7UUFDMUIsQ0FBQzs7O09BQUE7Ozs7SUFLRCx3Q0FBUTs7O0lBQVI7UUFDRSxJQUFJLElBQUksQ0FBQyxXQUFXLEVBQUU7WUFDcEIsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLHVCQUF1QixDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztTQUNqRjtRQUNELElBQUksSUFBSSxDQUFDLFlBQVksRUFBRTtZQUNyQixJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsdUJBQXVCLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO1NBQ2pGO0lBQ0gsQ0FBQzs7OztJQUVELDJDQUFXOzs7SUFBWDtRQUNFLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDekIsQ0FBQzs7Ozs7SUFFRCwwQ0FBVTs7OztJQUFWLFVBQVcsRUFBa0Q7WUFBakQsa0JBQU0sRUFBRSxnQkFBSztRQUN2QixJQUFJLENBQUMsUUFBUSxHQUFHLE1BQU0sR0FBRyxHQUFHLEdBQUcsS0FBSyxDQUFDO0lBQ3ZDLENBQUM7Ozs7O0lBRUQsd0NBQVE7Ozs7SUFBUixVQUFTLE9BQWU7UUFDdEIsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLHdCQUF3QixDQUFDLFdBQVEsT0FBTyxRQUFJLENBQUMsQ0FBQztRQUM5RSxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUM5QixDQUFDOzs7OztJQUVELHVDQUFPOzs7O0lBQVAsVUFBUSxHQUFVO1FBQ2hCLElBQUksQ0FBQyxTQUFTLEdBQUcsR0FBRyxDQUFDO1FBQ3JCLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQzNCLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ3ZCLENBQUM7O2dCQXpIRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGVBQWU7b0JBQ3pCLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO29CQUMvQyxVQUFVLEVBQUU7d0JBQ1YsT0FBTyxDQUFDLFFBQVEsRUFBRTs0QkFDaEIsVUFBVSxDQUFDLFFBQVEsRUFBRTtnQ0FDbkIsS0FBSyxDQUFDLEVBQUMsT0FBTyxFQUFFLENBQUMsRUFBQyxDQUFDO2dDQUNuQixPQUFPLENBQUMsZUFBZSxFQUFFLEtBQUssQ0FBQyxFQUFDLE9BQU8sRUFBRSxDQUFDLEVBQUMsQ0FBQyxDQUFDOzZCQUM5QyxDQUFDO3lCQUNILENBQUM7cUJBQ0g7b0JBQ0QsUUFBUSxFQUFFLDh4Q0FzQ1Q7aUJBQ0Y7Ozs7Z0JBdERRLFlBQVk7Ozs4QkFrRWxCLEtBQUs7c0JBR0wsS0FBSzs4QkFLTCxLQUFLOytCQUtMLEtBQUs7d0JBS0wsTUFBTTttQ0FJTixXQUFXLFNBQUMsc0JBQXNCO2tDQUlsQyxXQUFXLFNBQUMscUJBQXFCOztJQW1DcEMsNEJBQUM7Q0FBQSxBQTNIRCxJQTJIQztTQXZFWSxxQkFBcUI7Ozs7Ozs7SUFHaEMsdUNBQTJGOztJQUMzRixzQ0FBNEM7Ozs7O0lBRzVDLHlDQUFhOzs7OztJQUdiLDRDQUE4Qjs7Ozs7SUFHOUIsb0NBQXFCOzs7OztJQUVyQix5Q0FBb0I7Ozs7O0lBR3BCLDRDQUE2Qjs7Ozs7SUFFN0IsK0NBQXlCOzs7OztJQUd6Qiw2Q0FBOEI7Ozs7O0lBRTlCLDhDQUF3Qjs7Ozs7SUFHeEIsc0NBQTRDOzs7OztJQUU1QywwQ0FBaUI7Ozs7O0lBVUwsMkNBQWdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgSG9zdEJpbmRpbmcsIE9uSW5pdCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRG9tU2FuaXRpemVyLCBTYWZlSHRtbCwgU2FmZVN0eWxlIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XHJcbmltcG9ydCB7IGFuaW1hdGUsIHN0eWxlLCB0cmFuc2l0aW9uLCB0cmlnZ2VyIH0gZnJvbSAnQGFuZ3VsYXIvYW5pbWF0aW9ucyc7XHJcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCB9IGZyb20gJ3J4anMnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdnYWxsZXJ5LWltYWdlJyxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxuICBhbmltYXRpb25zOiBbXHJcbiAgICB0cmlnZ2VyKCdmYWRlSW4nLCBbXHJcbiAgICAgIHRyYW5zaXRpb24oJzplbnRlcicsIFtcclxuICAgICAgICBzdHlsZSh7b3BhY2l0eTogMH0pLFxyXG4gICAgICAgIGFuaW1hdGUoJzMwMG1zIGVhc2UtaW4nLCBzdHlsZSh7b3BhY2l0eTogMX0pKVxyXG4gICAgICBdKVxyXG4gICAgXSlcclxuICBdLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgICA8bmctY29udGFpbmVyIFtsYXp5SW1hZ2VdPVwic3JjXCJcclxuICAgICAgICAgICAgICAgICAgKHByb2dyZXNzKT1cIm9uUHJvZ3Jlc3MoJGV2ZW50KVwiXHJcbiAgICAgICAgICAgICAgICAgIChsb2FkZWQpPVwib25Mb2FkZWQoJGV2ZW50KVwiXHJcbiAgICAgICAgICAgICAgICAgIChlcnJvcik9XCJvbkVycm9yKCRldmVudClcIlxyXG4gICAgICAgICAgICAgICAgICBbbmdTd2l0Y2hdPVwic3RhdGUgfCBhc3luY1wiPlxyXG5cclxuICAgICAgPGRpdiAqbmdTd2l0Y2hDYXNlPVwiJ3N1Y2Nlc3MnXCJcclxuICAgICAgICAgICBAZmFkZUluXHJcbiAgICAgICAgICAgY2xhc3M9XCJnLWltYWdlLWl0ZW1cIlxyXG4gICAgICAgICAgIFtzdHlsZS5iYWNrZ3JvdW5kSW1hZ2VdPVwiaW1hZ2VVcmxcIj5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8ZGl2ICpuZ1N3aXRjaENhc2U9XCInZmFpbGVkJ1wiXHJcbiAgICAgICAgICAgY2xhc3M9XCJnLWltYWdlLWVycm9yLW1lc3NhZ2VcIj5cclxuICAgICAgICA8ZGl2ICpuZ0lmPVwiZXJyb3JUZW1wbGF0ZTsgZWxzZSBkZWZhdWx0RXJyb3JcIlxyXG4gICAgICAgICAgICAgW2lubmVySFRNTF09XCJlcnJvclRlbXBsYXRlXCI+PC9kaXY+XHJcbiAgICAgICAgPG5nLXRlbXBsYXRlICNkZWZhdWx0RXJyb3I+XHJcbiAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiaXNUaHVtYm5haWw7IGVsc2UgaXNMYXJnZVwiPlxyXG4gICAgICAgICAgICA8aDQ+4pqgPC9oND5cclxuICAgICAgICAgIDwvbmctY29udGFpbmVyPlxyXG4gICAgICAgICAgPG5nLXRlbXBsYXRlICNpc0xhcmdlPlxyXG4gICAgICAgICAgICA8aDI+4pqgPC9oMj5cclxuICAgICAgICAgICAgPHA+VW5hYmxlIHRvIGxvYWQgdGhlIGltYWdlITwvcD5cclxuICAgICAgICAgIDwvbmctdGVtcGxhdGU+XHJcbiAgICAgICAgPC9uZy10ZW1wbGF0ZT5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8bmctY29udGFpbmVyICpuZ1N3aXRjaENhc2U9XCInbG9hZGluZydcIj5cclxuICAgICAgICA8ZGl2ICpuZ0lmPVwibG9hZGVyVGVtcGxhdGU7IGVsc2UgZGVmYXVsdExvYWRlclwiXHJcbiAgICAgICAgICAgICBjbGFzcz1cImctbG9hZGluZ1wiXHJcbiAgICAgICAgICAgICBbaW5uZXJIVE1MXT1cImxvYWRlclRlbXBsYXRlXCI+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPG5nLXRlbXBsYXRlICNkZWZhdWx0TG9hZGVyPlxyXG4gICAgICAgICAgPGRpdiAqbmdJZj1cImlzVGh1bWJuYWlsXCIgY2xhc3M9XCJnLXRodW1iLWxvYWRpbmdcIj48L2Rpdj5cclxuICAgICAgICA8L25nLXRlbXBsYXRlPlxyXG4gICAgICA8L25nLWNvbnRhaW5lcj5cclxuICAgIDwvbmctY29udGFpbmVyPlxyXG4gIGBcclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBHYWxsZXJ5SW1hZ2VDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XHJcblxyXG4gIC8qKiBTdHJlYW0gdGhhdCBlbWl0cyB0aGUgc3RhdGUgKi9cclxuICBwcml2YXRlIHJlYWRvbmx5IF9zdGF0ZSA9IG5ldyBCZWhhdmlvclN1YmplY3Q8J2xvYWRpbmcnIHwgJ3N1Y2Nlc3MnIHwgJ2ZhaWxlZCc+KCdsb2FkaW5nJyk7XHJcbiAgcmVhZG9ubHkgc3RhdGUgPSB0aGlzLl9zdGF0ZS5hc09ic2VydmFibGUoKTtcclxuXHJcbiAgLyoqIFByb2dyZXNzIHZhbHVlICovXHJcbiAgcHJvZ3Jlc3MgPSAwO1xyXG5cclxuICAvKiogSXMgdGh1bWJuYWlsICovXHJcbiAgQElucHV0KCkgaXNUaHVtYm5haWw6IGJvb2xlYW47XHJcblxyXG4gIC8qKiBJbWFnZSBzb3VyY2UgVVJMICovXHJcbiAgQElucHV0KCkgc3JjOiBzdHJpbmc7XHJcbiAgLyoqIExvYWRlZCBpbWFnZSBVUkwgKi9cclxuICBpbWFnZVVybDogU2FmZVN0eWxlO1xyXG5cclxuICAvKiogQ3VzdG9tIGxvYWRlciB0ZW1wbGF0ZSAqL1xyXG4gIEBJbnB1dCgpIGxvYWRpbmdJY29uOiBzdHJpbmc7XHJcbiAgLyoqIEN1c3RvbSBsb2FkZXIgc2FmZSB0ZW1wbGF0ZSAqL1xyXG4gIGxvYWRlclRlbXBsYXRlOiBTYWZlSHRtbDtcclxuXHJcbiAgLyoqIEN1c3RvbSBlcnJvciB0ZW1wbGF0ZSAqL1xyXG4gIEBJbnB1dCgpIGxvYWRpbmdFcnJvcjogc3RyaW5nO1xyXG4gIC8qKiBDdXN0b20gZXJyb3Igc2FmZSB0ZW1wbGF0ZSAqL1xyXG4gIGVycm9yVGVtcGxhdGU6IFNhZmVIdG1sO1xyXG5cclxuICAvKiogU3RyZWFtIHRoYXQgZW1pdHMgd2hlbiBhbiBlcnJvciBvY2N1cnMgKi9cclxuICBAT3V0cHV0KCkgZXJyb3IgPSBuZXcgRXZlbnRFbWl0dGVyPEVycm9yPigpO1xyXG4gIC8qKiBsb2FkaW5nIGVycm9yICovXHJcbiAgbG9hZEVycm9yOiBFcnJvcjtcclxuXHJcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5nLWltYWdlLWxvYWRlZCcpIGdldCBpbWFnZUxvYWRTdWNjZXNzKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuICEhdGhpcy5pbWFnZVVybDtcclxuICB9XHJcblxyXG4gIEBIb3N0QmluZGluZygnY2xhc3MuZy1pbWFnZS1lcnJvcicpIGdldCBpbWFnZUxvYWRGYWlsZWQoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gISF0aGlzLmxvYWRFcnJvcjtcclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX3Nhbml0aXplcjogRG9tU2FuaXRpemVyKSB7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIGlmICh0aGlzLmxvYWRpbmdJY29uKSB7XHJcbiAgICAgIHRoaXMubG9hZGVyVGVtcGxhdGUgPSB0aGlzLl9zYW5pdGl6ZXIuYnlwYXNzU2VjdXJpdHlUcnVzdEh0bWwodGhpcy5sb2FkaW5nSWNvbik7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5sb2FkaW5nRXJyb3IpIHtcclxuICAgICAgdGhpcy5lcnJvclRlbXBsYXRlID0gdGhpcy5fc2FuaXRpemVyLmJ5cGFzc1NlY3VyaXR5VHJ1c3RIdG1sKHRoaXMubG9hZGluZ0Vycm9yKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCkge1xyXG4gICAgdGhpcy5fc3RhdGUuY29tcGxldGUoKTtcclxuICB9XHJcblxyXG4gIG9uUHJvZ3Jlc3Moe2xvYWRlZCwgdG90YWx9OiB7IGxvYWRlZDogbnVtYmVyLCB0b3RhbDogbnVtYmVyIH0pIHtcclxuICAgIHRoaXMucHJvZ3Jlc3MgPSBsb2FkZWQgKiAxMDAgLyB0b3RhbDtcclxuICB9XHJcblxyXG4gIG9uTG9hZGVkKGJsb2JVcmw6IHN0cmluZykge1xyXG4gICAgdGhpcy5pbWFnZVVybCA9IHRoaXMuX3Nhbml0aXplci5ieXBhc3NTZWN1cml0eVRydXN0U3R5bGUoYHVybChcIiR7YmxvYlVybH1cIilgKTtcclxuICAgIHRoaXMuX3N0YXRlLm5leHQoJ3N1Y2Nlc3MnKTtcclxuICB9XHJcblxyXG4gIG9uRXJyb3IoZXJyOiBFcnJvcikge1xyXG4gICAgdGhpcy5sb2FkRXJyb3IgPSBlcnI7XHJcbiAgICB0aGlzLl9zdGF0ZS5uZXh0KCdmYWlsZWQnKTtcclxuICAgIHRoaXMuZXJyb3IuZW1pdChlcnIpO1xyXG4gIH1cclxuXHJcbn1cclxuIl19