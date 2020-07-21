/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, Input, Output, EventEmitter, Inject } from '@angular/core';
import { Subject, Subscription, zip, fromEvent } from 'rxjs';
import { tap, switchMap } from 'rxjs/operators';
import { DOCUMENT } from '@angular/common';
var LazyImage = /** @class */ (function () {
    function LazyImage(document) {
        var _this = this;
        this.document = document;
        this._imageLoader$ = new Subject();
        this._loaderSub$ = Subscription.EMPTY;
        this.loaded = new EventEmitter();
        this.error = new EventEmitter();
        this._loaderSub$ = this._imageLoader$.pipe(switchMap(function (imageSrc) { return _this.nativeLoader(imageSrc); })).subscribe();
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    LazyImage.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes['src'] && changes['src'].previousValue !== changes['src'].currentValue) {
            this.loadImage(this.src);
        }
    };
    /**
     * @return {?}
     */
    LazyImage.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this._loaderSub$.unsubscribe();
        this._imageLoader$.complete();
    };
    /**
     * @param {?} imagePath
     * @return {?}
     */
    LazyImage.prototype.loadImage = /**
     * @param {?} imagePath
     * @return {?}
     */
    function (imagePath) {
        this._imageLoader$.next(imagePath);
    };
    /**
     * Native image loader, does not emit progress
     * @param url
     */
    /**
     * Native image loader, does not emit progress
     * @param {?} url
     * @return {?}
     */
    LazyImage.prototype.nativeLoader = /**
     * Native image loader, does not emit progress
     * @param {?} url
     * @return {?}
     */
    function (url) {
        var _this = this;
        /** @type {?} */
        var img = this.document.createElement('img');
        // Stop previously loading
        img.src = url;
        // Image load success
        /** @type {?} */
        var loadSuccess = fromEvent(img, 'load').pipe(tap(function () { return _this.loaded.emit(url); }));
        // Image load failed
        /** @type {?} */
        var loadError = fromEvent(img, 'error').pipe(tap(function () { return _this.error.emit(new Error("[lazyImage]: The image " + url + " did not load")); }));
        return zip(loadSuccess, loadError);
    };
    LazyImage.decorators = [
        { type: Directive, args: [{
                    selector: '[lazyImage]'
                },] }
    ];
    /** @nocollapse */
    LazyImage.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] }
    ]; };
    LazyImage.propDecorators = {
        src: [{ type: Input, args: ['lazyImage',] }],
        loaded: [{ type: Output }],
        error: [{ type: Output }]
    };
    return LazyImage;
}());
export { LazyImage };
if (false) {
    /**
     * @type {?}
     * @private
     */
    LazyImage.prototype._imageLoader$;
    /**
     * @type {?}
     * @private
     */
    LazyImage.prototype._loaderSub$;
    /** @type {?} */
    LazyImage.prototype.src;
    /** @type {?} */
    LazyImage.prototype.loaded;
    /** @type {?} */
    LazyImage.prototype.error;
    /**
     * @type {?}
     * @private
     */
    LazyImage.prototype.document;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF6eS1pbWFnZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuZ3gtZ2FsbGVyeS9jb3JlLyIsInNvdXJjZXMiOlsibGliL2RpcmVjdGl2ZXMvbGF6eS1pbWFnZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUF1QyxZQUFZLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3BILE9BQU8sRUFBRSxPQUFPLEVBQWMsWUFBWSxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDekUsT0FBTyxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNoRCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFM0M7SUFhRSxtQkFBc0MsUUFBYTtRQUFuRCxpQkFJQztRQUpxQyxhQUFRLEdBQVIsUUFBUSxDQUFLO1FBUjNDLGtCQUFhLEdBQUcsSUFBSSxPQUFPLEVBQVUsQ0FBQztRQUN0QyxnQkFBVyxHQUFHLFlBQVksQ0FBQyxLQUFLLENBQUM7UUFJL0IsV0FBTSxHQUFHLElBQUksWUFBWSxFQUFVLENBQUM7UUFDcEMsVUFBSyxHQUFHLElBQUksWUFBWSxFQUFTLENBQUM7UUFHMUMsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FDeEMsU0FBUyxDQUFDLFVBQUMsUUFBZ0IsSUFBSyxPQUFBLEtBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLEVBQTNCLENBQTJCLENBQUMsQ0FDN0QsQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUNoQixDQUFDOzs7OztJQUVELCtCQUFXOzs7O0lBQVgsVUFBWSxPQUFzQjtRQUNoQyxJQUFJLE9BQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsYUFBYSxLQUFLLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxZQUFZLEVBQUU7WUFDbEYsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDMUI7SUFDSCxDQUFDOzs7O0lBRUQsK0JBQVc7OztJQUFYO1FBQ0UsSUFBSSxDQUFDLFdBQVcsQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUMvQixJQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ2hDLENBQUM7Ozs7O0lBRUQsNkJBQVM7Ozs7SUFBVCxVQUFVLFNBQWlCO1FBQ3pCLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ3JDLENBQUM7SUFFRDs7O09BR0c7Ozs7OztJQUNILGdDQUFZOzs7OztJQUFaLFVBQWEsR0FBVztRQUF4QixpQkFhQzs7WUFaTyxHQUFHLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDO1FBQzlDLDBCQUEwQjtRQUMxQixHQUFHLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQzs7O1lBRVIsV0FBVyxHQUFHLFNBQVMsQ0FBQyxHQUFHLEVBQUUsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUM3QyxHQUFHLENBQUMsY0FBTSxPQUFBLEtBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFyQixDQUFxQixDQUFDLENBQ2pDOzs7WUFFSyxTQUFTLEdBQUcsU0FBUyxDQUFDLEdBQUcsRUFBRSxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQzVDLEdBQUcsQ0FBQyxjQUFNLE9BQUEsS0FBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxLQUFLLENBQUMsNEJBQTBCLEdBQUcsa0JBQWUsQ0FBQyxDQUFDLEVBQXhFLENBQXdFLENBQUMsQ0FDcEY7UUFDRCxPQUFPLEdBQUcsQ0FBQyxXQUFXLEVBQUUsU0FBUyxDQUFDLENBQUM7SUFDckMsQ0FBQzs7Z0JBbkRGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsYUFBYTtpQkFDeEI7Ozs7Z0RBV2MsTUFBTSxTQUFDLFFBQVE7OztzQkFMM0IsS0FBSyxTQUFDLFdBQVc7eUJBRWpCLE1BQU07d0JBQ04sTUFBTTs7SUEwQ1QsZ0JBQUM7Q0FBQSxBQXJERCxJQXFEQztTQWxEWSxTQUFTOzs7Ozs7SUFFcEIsa0NBQThDOzs7OztJQUM5QyxnQ0FBeUM7O0lBRXpDLHdCQUFnQzs7SUFFaEMsMkJBQThDOztJQUM5QywwQkFBNEM7Ozs7O0lBRWhDLDZCQUF1QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgSW5wdXQsIE91dHB1dCwgT25EZXN0cm95LCBTaW1wbGVDaGFuZ2VzLCBPbkNoYW5nZXMsIEV2ZW50RW1pdHRlciwgSW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFN1YmplY3QsIE9ic2VydmFibGUsIFN1YnNjcmlwdGlvbiwgemlwLCBmcm9tRXZlbnQgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgdGFwLCBzd2l0Y2hNYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcbmltcG9ydCB7IERPQ1VNRU5UIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuXHJcbkBEaXJlY3RpdmUoe1xyXG4gIHNlbGVjdG9yOiAnW2xhenlJbWFnZV0nXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBMYXp5SW1hZ2UgaW1wbGVtZW50cyBPbkNoYW5nZXMsIE9uRGVzdHJveSB7XHJcblxyXG4gIHByaXZhdGUgX2ltYWdlTG9hZGVyJCA9IG5ldyBTdWJqZWN0PHN0cmluZz4oKTtcclxuICBwcml2YXRlIF9sb2FkZXJTdWIkID0gU3Vic2NyaXB0aW9uLkVNUFRZO1xyXG5cclxuICBASW5wdXQoJ2xhenlJbWFnZScpIHNyYzogc3RyaW5nO1xyXG5cclxuICBAT3V0cHV0KCkgbG9hZGVkID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmc+KCk7XHJcbiAgQE91dHB1dCgpIGVycm9yID0gbmV3IEV2ZW50RW1pdHRlcjxFcnJvcj4oKTtcclxuXHJcbiAgY29uc3RydWN0b3IoQEluamVjdChET0NVTUVOVCkgcHJpdmF0ZSBkb2N1bWVudDogYW55KSB7XHJcbiAgICB0aGlzLl9sb2FkZXJTdWIkID0gdGhpcy5faW1hZ2VMb2FkZXIkLnBpcGUoXHJcbiAgICAgIHN3aXRjaE1hcCgoaW1hZ2VTcmM6IHN0cmluZykgPT4gdGhpcy5uYXRpdmVMb2FkZXIoaW1hZ2VTcmMpKVxyXG4gICAgKS5zdWJzY3JpYmUoKTtcclxuICB9XHJcblxyXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcclxuICAgIGlmIChjaGFuZ2VzWydzcmMnXSAmJiBjaGFuZ2VzWydzcmMnXS5wcmV2aW91c1ZhbHVlICE9PSBjaGFuZ2VzWydzcmMnXS5jdXJyZW50VmFsdWUpIHtcclxuICAgICAgdGhpcy5sb2FkSW1hZ2UodGhpcy5zcmMpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKSB7XHJcbiAgICB0aGlzLl9sb2FkZXJTdWIkLnVuc3Vic2NyaWJlKCk7XHJcbiAgICB0aGlzLl9pbWFnZUxvYWRlciQuY29tcGxldGUoKTtcclxuICB9XHJcblxyXG4gIGxvYWRJbWFnZShpbWFnZVBhdGg6IHN0cmluZykge1xyXG4gICAgdGhpcy5faW1hZ2VMb2FkZXIkLm5leHQoaW1hZ2VQYXRoKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIE5hdGl2ZSBpbWFnZSBsb2FkZXIsIGRvZXMgbm90IGVtaXQgcHJvZ3Jlc3NcclxuICAgKiBAcGFyYW0gdXJsXHJcbiAgICovXHJcbiAgbmF0aXZlTG9hZGVyKHVybDogc3RyaW5nKTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuICAgIGNvbnN0IGltZyA9IHRoaXMuZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XHJcbiAgICAvLyBTdG9wIHByZXZpb3VzbHkgbG9hZGluZ1xyXG4gICAgaW1nLnNyYyA9IHVybDtcclxuICAgIC8vIEltYWdlIGxvYWQgc3VjY2Vzc1xyXG4gICAgY29uc3QgbG9hZFN1Y2Nlc3MgPSBmcm9tRXZlbnQoaW1nLCAnbG9hZCcpLnBpcGUoXHJcbiAgICAgIHRhcCgoKSA9PiB0aGlzLmxvYWRlZC5lbWl0KHVybCkpXHJcbiAgICApO1xyXG4gICAgLy8gSW1hZ2UgbG9hZCBmYWlsZWRcclxuICAgIGNvbnN0IGxvYWRFcnJvciA9IGZyb21FdmVudChpbWcsICdlcnJvcicpLnBpcGUoXHJcbiAgICAgIHRhcCgoKSA9PiB0aGlzLmVycm9yLmVtaXQobmV3IEVycm9yKGBbbGF6eUltYWdlXTogVGhlIGltYWdlICR7dXJsfSBkaWQgbm90IGxvYWRgKSkpXHJcbiAgICApO1xyXG4gICAgcmV0dXJuIHppcChsb2FkU3VjY2VzcywgbG9hZEVycm9yKTtcclxuICB9XHJcblxyXG59XHJcbiJdfQ==