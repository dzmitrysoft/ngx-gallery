/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, Input, Output, EventEmitter, Inject } from '@angular/core';
import { Subject, Subscription, zip, fromEvent } from 'rxjs';
import { tap, switchMap } from 'rxjs/operators';
import { DOCUMENT } from '@angular/common';
export class LazyImage {
    /**
     * @param {?} document
     */
    constructor(document) {
        this.document = document;
        this._imageLoader$ = new Subject();
        this._loaderSub$ = Subscription.EMPTY;
        this.loaded = new EventEmitter();
        this.error = new EventEmitter();
        this._loaderSub$ = this._imageLoader$.pipe(switchMap((imageSrc) => this.nativeLoader(imageSrc))).subscribe();
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (changes['src'] && changes['src'].previousValue !== changes['src'].currentValue) {
            this.loadImage(this.src);
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this._loaderSub$.unsubscribe();
        this._imageLoader$.complete();
    }
    /**
     * @param {?} imagePath
     * @return {?}
     */
    loadImage(imagePath) {
        this._imageLoader$.next(imagePath);
    }
    /**
     * Native image loader, does not emit progress
     * @param {?} url
     * @return {?}
     */
    nativeLoader(url) {
        /** @type {?} */
        const img = this.document.createElement('img');
        // Stop previously loading
        img.src = url;
        // Image load success
        /** @type {?} */
        const loadSuccess = fromEvent(img, 'load').pipe(tap(() => this.loaded.emit(url)));
        // Image load failed
        /** @type {?} */
        const loadError = fromEvent(img, 'error').pipe(tap(() => this.error.emit(new Error(`[lazyImage]: The image ${url} did not load`))));
        return zip(loadSuccess, loadError);
    }
}
LazyImage.decorators = [
    { type: Directive, args: [{
                selector: '[lazyImage]'
            },] }
];
/** @nocollapse */
LazyImage.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] }
];
LazyImage.propDecorators = {
    src: [{ type: Input, args: ['lazyImage',] }],
    loaded: [{ type: Output }],
    error: [{ type: Output }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF6eS1pbWFnZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuZ3gtZ2FsbGVyeS9jb3JlLyIsInNvdXJjZXMiOlsibGliL2RpcmVjdGl2ZXMvbGF6eS1pbWFnZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUF1QyxZQUFZLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3BILE9BQU8sRUFBRSxPQUFPLEVBQWMsWUFBWSxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDekUsT0FBTyxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNoRCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFLM0MsTUFBTSxPQUFPLFNBQVM7Ozs7SUFVcEIsWUFBc0MsUUFBYTtRQUFiLGFBQVEsR0FBUixRQUFRLENBQUs7UUFSM0Msa0JBQWEsR0FBRyxJQUFJLE9BQU8sRUFBVSxDQUFDO1FBQ3RDLGdCQUFXLEdBQUcsWUFBWSxDQUFDLEtBQUssQ0FBQztRQUkvQixXQUFNLEdBQUcsSUFBSSxZQUFZLEVBQVUsQ0FBQztRQUNwQyxVQUFLLEdBQUcsSUFBSSxZQUFZLEVBQVMsQ0FBQztRQUcxQyxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUN4QyxTQUFTLENBQUMsQ0FBQyxRQUFnQixFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQzdELENBQUMsU0FBUyxFQUFFLENBQUM7SUFDaEIsQ0FBQzs7Ozs7SUFFRCxXQUFXLENBQUMsT0FBc0I7UUFDaEMsSUFBSSxPQUFPLENBQUMsS0FBSyxDQUFDLElBQUksT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLGFBQWEsS0FBSyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsWUFBWSxFQUFFO1lBQ2xGLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQzFCO0lBQ0gsQ0FBQzs7OztJQUVELFdBQVc7UUFDVCxJQUFJLENBQUMsV0FBVyxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQy9CLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDaEMsQ0FBQzs7Ozs7SUFFRCxTQUFTLENBQUMsU0FBaUI7UUFDekIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDckMsQ0FBQzs7Ozs7O0lBTUQsWUFBWSxDQUFDLEdBQVc7O2NBQ2hCLEdBQUcsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUM7UUFDOUMsMEJBQTBCO1FBQzFCLEdBQUcsQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDOzs7Y0FFUixXQUFXLEdBQUcsU0FBUyxDQUFDLEdBQUcsRUFBRSxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQzdDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUNqQzs7O2NBRUssU0FBUyxHQUFHLFNBQVMsQ0FBQyxHQUFHLEVBQUUsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUM1QyxHQUFHLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxLQUFLLENBQUMsMEJBQTBCLEdBQUcsZUFBZSxDQUFDLENBQUMsQ0FBQyxDQUNwRjtRQUNELE9BQU8sR0FBRyxDQUFDLFdBQVcsRUFBRSxTQUFTLENBQUMsQ0FBQztJQUNyQyxDQUFDOzs7WUFuREYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxhQUFhO2FBQ3hCOzs7OzRDQVdjLE1BQU0sU0FBQyxRQUFROzs7a0JBTDNCLEtBQUssU0FBQyxXQUFXO3FCQUVqQixNQUFNO29CQUNOLE1BQU07Ozs7Ozs7SUFOUCxrQ0FBOEM7Ozs7O0lBQzlDLGdDQUF5Qzs7SUFFekMsd0JBQWdDOztJQUVoQywyQkFBOEM7O0lBQzlDLDBCQUE0Qzs7Ozs7SUFFaEMsNkJBQXVDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBJbnB1dCwgT3V0cHV0LCBPbkRlc3Ryb3ksIFNpbXBsZUNoYW5nZXMsIE9uQ2hhbmdlcywgRXZlbnRFbWl0dGVyLCBJbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgU3ViamVjdCwgT2JzZXJ2YWJsZSwgU3Vic2NyaXB0aW9uLCB6aXAsIGZyb21FdmVudCB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyB0YXAsIHN3aXRjaE1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuaW1wb3J0IHsgRE9DVU1FTlQgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5cclxuQERpcmVjdGl2ZSh7XHJcbiAgc2VsZWN0b3I6ICdbbGF6eUltYWdlXSdcclxufSlcclxuZXhwb3J0IGNsYXNzIExhenlJbWFnZSBpbXBsZW1lbnRzIE9uQ2hhbmdlcywgT25EZXN0cm95IHtcclxuXHJcbiAgcHJpdmF0ZSBfaW1hZ2VMb2FkZXIkID0gbmV3IFN1YmplY3Q8c3RyaW5nPigpO1xyXG4gIHByaXZhdGUgX2xvYWRlclN1YiQgPSBTdWJzY3JpcHRpb24uRU1QVFk7XHJcblxyXG4gIEBJbnB1dCgnbGF6eUltYWdlJykgc3JjOiBzdHJpbmc7XHJcblxyXG4gIEBPdXRwdXQoKSBsb2FkZWQgPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZz4oKTtcclxuICBAT3V0cHV0KCkgZXJyb3IgPSBuZXcgRXZlbnRFbWl0dGVyPEVycm9yPigpO1xyXG5cclxuICBjb25zdHJ1Y3RvcihASW5qZWN0KERPQ1VNRU5UKSBwcml2YXRlIGRvY3VtZW50OiBhbnkpIHtcclxuICAgIHRoaXMuX2xvYWRlclN1YiQgPSB0aGlzLl9pbWFnZUxvYWRlciQucGlwZShcclxuICAgICAgc3dpdGNoTWFwKChpbWFnZVNyYzogc3RyaW5nKSA9PiB0aGlzLm5hdGl2ZUxvYWRlcihpbWFnZVNyYykpXHJcbiAgICApLnN1YnNjcmliZSgpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xyXG4gICAgaWYgKGNoYW5nZXNbJ3NyYyddICYmIGNoYW5nZXNbJ3NyYyddLnByZXZpb3VzVmFsdWUgIT09IGNoYW5nZXNbJ3NyYyddLmN1cnJlbnRWYWx1ZSkge1xyXG4gICAgICB0aGlzLmxvYWRJbWFnZSh0aGlzLnNyYyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpIHtcclxuICAgIHRoaXMuX2xvYWRlclN1YiQudW5zdWJzY3JpYmUoKTtcclxuICAgIHRoaXMuX2ltYWdlTG9hZGVyJC5jb21wbGV0ZSgpO1xyXG4gIH1cclxuXHJcbiAgbG9hZEltYWdlKGltYWdlUGF0aDogc3RyaW5nKSB7XHJcbiAgICB0aGlzLl9pbWFnZUxvYWRlciQubmV4dChpbWFnZVBhdGgpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogTmF0aXZlIGltYWdlIGxvYWRlciwgZG9lcyBub3QgZW1pdCBwcm9ncmVzc1xyXG4gICAqIEBwYXJhbSB1cmxcclxuICAgKi9cclxuICBuYXRpdmVMb2FkZXIodXJsOiBzdHJpbmcpOiBPYnNlcnZhYmxlPGFueT4ge1xyXG4gICAgY29uc3QgaW1nID0gdGhpcy5kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcclxuICAgIC8vIFN0b3AgcHJldmlvdXNseSBsb2FkaW5nXHJcbiAgICBpbWcuc3JjID0gdXJsO1xyXG4gICAgLy8gSW1hZ2UgbG9hZCBzdWNjZXNzXHJcbiAgICBjb25zdCBsb2FkU3VjY2VzcyA9IGZyb21FdmVudChpbWcsICdsb2FkJykucGlwZShcclxuICAgICAgdGFwKCgpID0+IHRoaXMubG9hZGVkLmVtaXQodXJsKSlcclxuICAgICk7XHJcbiAgICAvLyBJbWFnZSBsb2FkIGZhaWxlZFxyXG4gICAgY29uc3QgbG9hZEVycm9yID0gZnJvbUV2ZW50KGltZywgJ2Vycm9yJykucGlwZShcclxuICAgICAgdGFwKCgpID0+IHRoaXMuZXJyb3IuZW1pdChuZXcgRXJyb3IoYFtsYXp5SW1hZ2VdOiBUaGUgaW1hZ2UgJHt1cmx9IGRpZCBub3QgbG9hZGApKSlcclxuICAgICk7XHJcbiAgICByZXR1cm4gemlwKGxvYWRTdWNjZXNzLCBsb2FkRXJyb3IpO1xyXG4gIH1cclxuXHJcbn1cclxuIl19