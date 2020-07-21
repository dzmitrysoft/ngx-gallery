/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, ChangeDetectionStrategy, HostBinding, Output, EventEmitter } from '@angular/core';
import { LoadingStrategy, GalleryItemType } from '../models/constants';
export class GalleryItemComponent {
    constructor() {
        this.Types = GalleryItemType;
        /**
         * Stream that emits when an error occurs
         */
        this.error = new EventEmitter();
    }
    /**
     * @return {?}
     */
    get isActive() {
        return this.index === this.currIndex;
    }
    /**
     * @return {?}
     */
    get load() {
        switch (this.config.loadingStrategy) {
            case LoadingStrategy.Preload:
                return true;
            case LoadingStrategy.Lazy:
                return this.currIndex === this.index;
            default:
                return this.currIndex === this.index || this.currIndex === this.index - 1 || this.currIndex === this.index + 1;
        }
    }
}
GalleryItemComponent.decorators = [
    { type: Component, args: [{
                selector: 'gallery-item',
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: `
    <ng-container *ngIf="load" [ngSwitch]="type">

      <ng-container *ngSwitchCase="Types.Image">

        <gallery-image [src]="data.src"
                       [loadingIcon]="config.loadingIcon"
                       [loadingError]="config.loadingError"
                       (error)="error.emit($event)"></gallery-image>

        <div class="g-template g-item-template">
          <ng-container *ngTemplateOutlet="config.itemTemplate;
          context: { index: this.index, currIndex: this.currIndex, type: this.type, data: this.data }">
          </ng-container>
        </div>

      </ng-container>

      <gallery-video *ngSwitchCase="Types.Video"
                     [src]="data.src"
                     [poster]="data.poster"
                     [pause]="currIndex !== index"
                     (error)="error.emit($event)"></gallery-video>

      <gallery-iframe *ngSwitchCase="Types.Youtube"
                      [src]="data.src"
                      [pause]="currIndex !== index"></gallery-iframe>

      <gallery-iframe *ngSwitchCase="Types.Iframe"
                      [src]="data.src"></gallery-iframe>

      <ng-container *ngSwitchDefault>

        <div class="g-template g-item-template">
          <ng-container *ngTemplateOutlet="config.itemTemplate;
          context: { index: this.index, currIndex: this.currIndex, type: this.type, data: this.data }">
          </ng-container>
        </div>

      </ng-container>

    </ng-container>
  `
            }] }
];
GalleryItemComponent.propDecorators = {
    config: [{ type: Input }],
    index: [{ type: Input }],
    currIndex: [{ type: Input }],
    type: [{ type: Input }],
    data: [{ type: Input }],
    error: [{ type: Output }],
    isActive: [{ type: HostBinding, args: ['class.g-active-item',] }]
};
if (false) {
    /** @type {?} */
    GalleryItemComponent.prototype.Types;
    /**
     * Gallery config
     * @type {?}
     */
    GalleryItemComponent.prototype.config;
    /**
     * Item's index in the gallery
     * @type {?}
     */
    GalleryItemComponent.prototype.index;
    /**
     * Gallery current index
     * @type {?}
     */
    GalleryItemComponent.prototype.currIndex;
    /**
     * Item's type 'image', 'video', 'youtube', 'iframe'
     * @type {?}
     */
    GalleryItemComponent.prototype.type;
    /**
     * Item's data, this object contains the data required to display the content (e.g. src path)
     * @type {?}
     */
    GalleryItemComponent.prototype.data;
    /**
     * Stream that emits when an error occurs
     * @type {?}
     */
    GalleryItemComponent.prototype.error;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2FsbGVyeS1pdGVtLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuZ3gtZ2FsbGVyeS9jb3JlLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvZ2FsbGVyeS1pdGVtLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsdUJBQXVCLEVBQUUsV0FBVyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFN0csT0FBTyxFQUFFLGVBQWUsRUFBRSxlQUFlLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQWlEdkUsTUFBTSxPQUFPLG9CQUFvQjtJQS9DakM7UUFpRFcsVUFBSyxHQUFHLGVBQWUsQ0FBQzs7OztRQWtCdkIsVUFBSyxHQUFHLElBQUksWUFBWSxFQUFTLENBQUM7SUFpQjlDLENBQUM7Ozs7SUFmQyxJQUF3QyxRQUFRO1FBQzlDLE9BQU8sSUFBSSxDQUFDLEtBQUssS0FBSyxJQUFJLENBQUMsU0FBUyxDQUFDO0lBQ3ZDLENBQUM7Ozs7SUFFRCxJQUFJLElBQUk7UUFDTixRQUFRLElBQUksQ0FBQyxNQUFNLENBQUMsZUFBZSxFQUFFO1lBQ25DLEtBQUssZUFBZSxDQUFDLE9BQU87Z0JBQzFCLE9BQU8sSUFBSSxDQUFDO1lBQ2QsS0FBSyxlQUFlLENBQUMsSUFBSTtnQkFDdkIsT0FBTyxJQUFJLENBQUMsU0FBUyxLQUFLLElBQUksQ0FBQyxLQUFLLENBQUM7WUFDdkM7Z0JBQ0UsT0FBTyxJQUFJLENBQUMsU0FBUyxLQUFLLElBQUksQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDLFNBQVMsS0FBSyxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsSUFBSSxJQUFJLENBQUMsU0FBUyxLQUFLLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDO1NBQ2xIO0lBQ0gsQ0FBQzs7O1lBbEZGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsY0FBYztnQkFDeEIsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07Z0JBQy9DLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBMENUO2FBQ0Y7OztxQkFNRSxLQUFLO29CQUdMLEtBQUs7d0JBR0wsS0FBSzttQkFHTCxLQUFLO21CQUdMLEtBQUs7b0JBR0wsTUFBTTt1QkFFTixXQUFXLFNBQUMscUJBQXFCOzs7O0lBcEJsQyxxQ0FBaUM7Ozs7O0lBR2pDLHNDQUErQjs7Ozs7SUFHL0IscUNBQXVCOzs7OztJQUd2Qix5Q0FBMkI7Ozs7O0lBRzNCLG9DQUFzQjs7Ozs7SUFHdEIsb0NBQW1COzs7OztJQUduQixxQ0FBNEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgSG9zdEJpbmRpbmcsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEdhbGxlcnlDb25maWcgfSBmcm9tICcuLi9tb2RlbHMvY29uZmlnLm1vZGVsJztcclxuaW1wb3J0IHsgTG9hZGluZ1N0cmF0ZWd5LCBHYWxsZXJ5SXRlbVR5cGUgfSBmcm9tICcuLi9tb2RlbHMvY29uc3RhbnRzJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnZ2FsbGVyeS1pdGVtJyxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxuICB0ZW1wbGF0ZTogYFxyXG4gICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImxvYWRcIiBbbmdTd2l0Y2hdPVwidHlwZVwiPlxyXG5cclxuICAgICAgPG5nLWNvbnRhaW5lciAqbmdTd2l0Y2hDYXNlPVwiVHlwZXMuSW1hZ2VcIj5cclxuXHJcbiAgICAgICAgPGdhbGxlcnktaW1hZ2UgW3NyY109XCJkYXRhLnNyY1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgW2xvYWRpbmdJY29uXT1cImNvbmZpZy5sb2FkaW5nSWNvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgW2xvYWRpbmdFcnJvcl09XCJjb25maWcubG9hZGluZ0Vycm9yXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAoZXJyb3IpPVwiZXJyb3IuZW1pdCgkZXZlbnQpXCI+PC9nYWxsZXJ5LWltYWdlPlxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiZy10ZW1wbGF0ZSBnLWl0ZW0tdGVtcGxhdGVcIj5cclxuICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nVGVtcGxhdGVPdXRsZXQ9XCJjb25maWcuaXRlbVRlbXBsYXRlO1xyXG4gICAgICAgICAgY29udGV4dDogeyBpbmRleDogdGhpcy5pbmRleCwgY3VyckluZGV4OiB0aGlzLmN1cnJJbmRleCwgdHlwZTogdGhpcy50eXBlLCBkYXRhOiB0aGlzLmRhdGEgfVwiPlxyXG4gICAgICAgICAgPC9uZy1jb250YWluZXI+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8L25nLWNvbnRhaW5lcj5cclxuXHJcbiAgICAgIDxnYWxsZXJ5LXZpZGVvICpuZ1N3aXRjaENhc2U9XCJUeXBlcy5WaWRlb1wiXHJcbiAgICAgICAgICAgICAgICAgICAgIFtzcmNdPVwiZGF0YS5zcmNcIlxyXG4gICAgICAgICAgICAgICAgICAgICBbcG9zdGVyXT1cImRhdGEucG9zdGVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgW3BhdXNlXT1cImN1cnJJbmRleCAhPT0gaW5kZXhcIlxyXG4gICAgICAgICAgICAgICAgICAgICAoZXJyb3IpPVwiZXJyb3IuZW1pdCgkZXZlbnQpXCI+PC9nYWxsZXJ5LXZpZGVvPlxyXG5cclxuICAgICAgPGdhbGxlcnktaWZyYW1lICpuZ1N3aXRjaENhc2U9XCJUeXBlcy5Zb3V0dWJlXCJcclxuICAgICAgICAgICAgICAgICAgICAgIFtzcmNdPVwiZGF0YS5zcmNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgW3BhdXNlXT1cImN1cnJJbmRleCAhPT0gaW5kZXhcIj48L2dhbGxlcnktaWZyYW1lPlxyXG5cclxuICAgICAgPGdhbGxlcnktaWZyYW1lICpuZ1N3aXRjaENhc2U9XCJUeXBlcy5JZnJhbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgW3NyY109XCJkYXRhLnNyY1wiPjwvZ2FsbGVyeS1pZnJhbWU+XHJcblxyXG4gICAgICA8bmctY29udGFpbmVyICpuZ1N3aXRjaERlZmF1bHQ+XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJnLXRlbXBsYXRlIGctaXRlbS10ZW1wbGF0ZVwiPlxyXG4gICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdUZW1wbGF0ZU91dGxldD1cImNvbmZpZy5pdGVtVGVtcGxhdGU7XHJcbiAgICAgICAgICBjb250ZXh0OiB7IGluZGV4OiB0aGlzLmluZGV4LCBjdXJySW5kZXg6IHRoaXMuY3VyckluZGV4LCB0eXBlOiB0aGlzLnR5cGUsIGRhdGE6IHRoaXMuZGF0YSB9XCI+XHJcbiAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIDwvbmctY29udGFpbmVyPlxyXG5cclxuICAgIDwvbmctY29udGFpbmVyPlxyXG4gIGBcclxufSlcclxuZXhwb3J0IGNsYXNzIEdhbGxlcnlJdGVtQ29tcG9uZW50IHtcclxuXHJcbiAgcmVhZG9ubHkgVHlwZXMgPSBHYWxsZXJ5SXRlbVR5cGU7XHJcblxyXG4gIC8qKiBHYWxsZXJ5IGNvbmZpZyAqL1xyXG4gIEBJbnB1dCgpIGNvbmZpZzogR2FsbGVyeUNvbmZpZztcclxuXHJcbiAgLyoqIEl0ZW0ncyBpbmRleCBpbiB0aGUgZ2FsbGVyeSAqL1xyXG4gIEBJbnB1dCgpIGluZGV4OiBudW1iZXI7XHJcblxyXG4gIC8qKiBHYWxsZXJ5IGN1cnJlbnQgaW5kZXggKi9cclxuICBASW5wdXQoKSBjdXJySW5kZXg6IG51bWJlcjtcclxuXHJcbiAgLyoqIEl0ZW0ncyB0eXBlICdpbWFnZScsICd2aWRlbycsICd5b3V0dWJlJywgJ2lmcmFtZScgKi9cclxuICBASW5wdXQoKSB0eXBlOiBzdHJpbmc7XHJcblxyXG4gIC8qKiBJdGVtJ3MgZGF0YSwgdGhpcyBvYmplY3QgY29udGFpbnMgdGhlIGRhdGEgcmVxdWlyZWQgdG8gZGlzcGxheSB0aGUgY29udGVudCAoZS5nLiBzcmMgcGF0aCkgKi9cclxuICBASW5wdXQoKSBkYXRhOiBhbnk7XHJcblxyXG4gIC8qKiBTdHJlYW0gdGhhdCBlbWl0cyB3aGVuIGFuIGVycm9yIG9jY3VycyAqL1xyXG4gIEBPdXRwdXQoKSBlcnJvciA9IG5ldyBFdmVudEVtaXR0ZXI8RXJyb3I+KCk7XHJcblxyXG4gIEBIb3N0QmluZGluZygnY2xhc3MuZy1hY3RpdmUtaXRlbScpIGdldCBpc0FjdGl2ZSgpIHtcclxuICAgIHJldHVybiB0aGlzLmluZGV4ID09PSB0aGlzLmN1cnJJbmRleDtcclxuICB9XHJcblxyXG4gIGdldCBsb2FkKCkge1xyXG4gICAgc3dpdGNoICh0aGlzLmNvbmZpZy5sb2FkaW5nU3RyYXRlZ3kpIHtcclxuICAgICAgY2FzZSBMb2FkaW5nU3RyYXRlZ3kuUHJlbG9hZDpcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgY2FzZSBMb2FkaW5nU3RyYXRlZ3kuTGF6eTpcclxuICAgICAgICByZXR1cm4gdGhpcy5jdXJySW5kZXggPT09IHRoaXMuaW5kZXg7XHJcbiAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY3VyckluZGV4ID09PSB0aGlzLmluZGV4IHx8IHRoaXMuY3VyckluZGV4ID09PSB0aGlzLmluZGV4IC0gMSB8fCB0aGlzLmN1cnJJbmRleCA9PT0gdGhpcy5pbmRleCArIDE7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxufVxyXG4iXX0=