/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, ChangeDetectionStrategy, HostBinding, Output, EventEmitter } from '@angular/core';
import { LoadingStrategy, GalleryItemType } from '../models/constants';
var GalleryItemComponent = /** @class */ (function () {
    function GalleryItemComponent() {
        this.Types = GalleryItemType;
        /**
         * Stream that emits when an error occurs
         */
        this.error = new EventEmitter();
    }
    Object.defineProperty(GalleryItemComponent.prototype, "isActive", {
        get: /**
         * @return {?}
         */
        function () {
            return this.index === this.currIndex;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GalleryItemComponent.prototype, "load", {
        get: /**
         * @return {?}
         */
        function () {
            switch (this.config.loadingStrategy) {
                case LoadingStrategy.Preload:
                    return true;
                case LoadingStrategy.Lazy:
                    return this.currIndex === this.index;
                default:
                    return this.currIndex === this.index || this.currIndex === this.index - 1 || this.currIndex === this.index + 1;
            }
        },
        enumerable: true,
        configurable: true
    });
    GalleryItemComponent.decorators = [
        { type: Component, args: [{
                    selector: 'gallery-item',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: "\n    <ng-container *ngIf=\"load\" [ngSwitch]=\"type\">\n\n      <ng-container *ngSwitchCase=\"Types.Image\">\n\n        <gallery-image [src]=\"data.src\"\n                       [loadingIcon]=\"config.loadingIcon\"\n                       [loadingError]=\"config.loadingError\"\n                       (error)=\"error.emit($event)\"></gallery-image>\n\n        <div class=\"g-template g-item-template\">\n          <ng-container *ngTemplateOutlet=\"config.itemTemplate;\n          context: { index: this.index, currIndex: this.currIndex, type: this.type, data: this.data }\">\n          </ng-container>\n        </div>\n\n      </ng-container>\n\n      <gallery-video *ngSwitchCase=\"Types.Video\"\n                     [src]=\"data.src\"\n                     [poster]=\"data.poster\"\n                     [pause]=\"currIndex !== index\"\n                     (error)=\"error.emit($event)\"></gallery-video>\n\n      <gallery-iframe *ngSwitchCase=\"Types.Youtube\"\n                      [src]=\"data.src\"\n                      [pause]=\"currIndex !== index\"></gallery-iframe>\n\n      <gallery-iframe *ngSwitchCase=\"Types.Iframe\"\n                      [src]=\"data.src\"></gallery-iframe>\n\n      <ng-container *ngSwitchDefault>\n\n        <div class=\"g-template g-item-template\">\n          <ng-container *ngTemplateOutlet=\"config.itemTemplate;\n          context: { index: this.index, currIndex: this.currIndex, type: this.type, data: this.data }\">\n          </ng-container>\n        </div>\n\n      </ng-container>\n\n    </ng-container>\n  "
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
    return GalleryItemComponent;
}());
export { GalleryItemComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2FsbGVyeS1pdGVtLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuZ3gtZ2FsbGVyeS9jb3JlLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvZ2FsbGVyeS1pdGVtLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsdUJBQXVCLEVBQUUsV0FBVyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFN0csT0FBTyxFQUFFLGVBQWUsRUFBRSxlQUFlLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUV2RTtJQUFBO1FBaURXLFVBQUssR0FBRyxlQUFlLENBQUM7Ozs7UUFrQnZCLFVBQUssR0FBRyxJQUFJLFlBQVksRUFBUyxDQUFDO0lBaUI5QyxDQUFDO0lBZkMsc0JBQXdDLDBDQUFROzs7O1FBQWhEO1lBQ0UsT0FBTyxJQUFJLENBQUMsS0FBSyxLQUFLLElBQUksQ0FBQyxTQUFTLENBQUM7UUFDdkMsQ0FBQzs7O09BQUE7SUFFRCxzQkFBSSxzQ0FBSTs7OztRQUFSO1lBQ0UsUUFBUSxJQUFJLENBQUMsTUFBTSxDQUFDLGVBQWUsRUFBRTtnQkFDbkMsS0FBSyxlQUFlLENBQUMsT0FBTztvQkFDMUIsT0FBTyxJQUFJLENBQUM7Z0JBQ2QsS0FBSyxlQUFlLENBQUMsSUFBSTtvQkFDdkIsT0FBTyxJQUFJLENBQUMsU0FBUyxLQUFLLElBQUksQ0FBQyxLQUFLLENBQUM7Z0JBQ3ZDO29CQUNFLE9BQU8sSUFBSSxDQUFDLFNBQVMsS0FBSyxJQUFJLENBQUMsS0FBSyxJQUFJLElBQUksQ0FBQyxTQUFTLEtBQUssSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLElBQUksSUFBSSxDQUFDLFNBQVMsS0FBSyxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQzthQUNsSDtRQUNILENBQUM7OztPQUFBOztnQkFsRkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxjQUFjO29CQUN4QixlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtvQkFDL0MsUUFBUSxFQUFFLDBoREEwQ1Q7aUJBQ0Y7Ozt5QkFNRSxLQUFLO3dCQUdMLEtBQUs7NEJBR0wsS0FBSzt1QkFHTCxLQUFLO3VCQUdMLEtBQUs7d0JBR0wsTUFBTTsyQkFFTixXQUFXLFNBQUMscUJBQXFCOztJQWVwQywyQkFBQztDQUFBLEFBcEZELElBb0ZDO1NBckNZLG9CQUFvQjs7O0lBRS9CLHFDQUFpQzs7Ozs7SUFHakMsc0NBQStCOzs7OztJQUcvQixxQ0FBdUI7Ozs7O0lBR3ZCLHlDQUEyQjs7Ozs7SUFHM0Isb0NBQXNCOzs7OztJQUd0QixvQ0FBbUI7Ozs7O0lBR25CLHFDQUE0QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBIb3N0QmluZGluZywgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgR2FsbGVyeUNvbmZpZyB9IGZyb20gJy4uL21vZGVscy9jb25maWcubW9kZWwnO1xyXG5pbXBvcnQgeyBMb2FkaW5nU3RyYXRlZ3ksIEdhbGxlcnlJdGVtVHlwZSB9IGZyb20gJy4uL21vZGVscy9jb25zdGFudHMnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdnYWxsZXJ5LWl0ZW0nLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgICA8bmctY29udGFpbmVyICpuZ0lmPVwibG9hZFwiIFtuZ1N3aXRjaF09XCJ0eXBlXCI+XHJcblxyXG4gICAgICA8bmctY29udGFpbmVyICpuZ1N3aXRjaENhc2U9XCJUeXBlcy5JbWFnZVwiPlxyXG5cclxuICAgICAgICA8Z2FsbGVyeS1pbWFnZSBbc3JjXT1cImRhdGEuc3JjXCJcclxuICAgICAgICAgICAgICAgICAgICAgICBbbG9hZGluZ0ljb25dPVwiY29uZmlnLmxvYWRpbmdJY29uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICBbbG9hZGluZ0Vycm9yXT1cImNvbmZpZy5sb2FkaW5nRXJyb3JcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgIChlcnJvcik9XCJlcnJvci5lbWl0KCRldmVudClcIj48L2dhbGxlcnktaW1hZ2U+XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJnLXRlbXBsYXRlIGctaXRlbS10ZW1wbGF0ZVwiPlxyXG4gICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdUZW1wbGF0ZU91dGxldD1cImNvbmZpZy5pdGVtVGVtcGxhdGU7XHJcbiAgICAgICAgICBjb250ZXh0OiB7IGluZGV4OiB0aGlzLmluZGV4LCBjdXJySW5kZXg6IHRoaXMuY3VyckluZGV4LCB0eXBlOiB0aGlzLnR5cGUsIGRhdGE6IHRoaXMuZGF0YSB9XCI+XHJcbiAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIDwvbmctY29udGFpbmVyPlxyXG5cclxuICAgICAgPGdhbGxlcnktdmlkZW8gKm5nU3dpdGNoQ2FzZT1cIlR5cGVzLlZpZGVvXCJcclxuICAgICAgICAgICAgICAgICAgICAgW3NyY109XCJkYXRhLnNyY1wiXHJcbiAgICAgICAgICAgICAgICAgICAgIFtwb3N0ZXJdPVwiZGF0YS5wb3N0ZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICBbcGF1c2VdPVwiY3VyckluZGV4ICE9PSBpbmRleFwiXHJcbiAgICAgICAgICAgICAgICAgICAgIChlcnJvcik9XCJlcnJvci5lbWl0KCRldmVudClcIj48L2dhbGxlcnktdmlkZW8+XHJcblxyXG4gICAgICA8Z2FsbGVyeS1pZnJhbWUgKm5nU3dpdGNoQ2FzZT1cIlR5cGVzLllvdXR1YmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgW3NyY109XCJkYXRhLnNyY1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICBbcGF1c2VdPVwiY3VyckluZGV4ICE9PSBpbmRleFwiPjwvZ2FsbGVyeS1pZnJhbWU+XHJcblxyXG4gICAgICA8Z2FsbGVyeS1pZnJhbWUgKm5nU3dpdGNoQ2FzZT1cIlR5cGVzLklmcmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBbc3JjXT1cImRhdGEuc3JjXCI+PC9nYWxsZXJ5LWlmcmFtZT5cclxuXHJcbiAgICAgIDxuZy1jb250YWluZXIgKm5nU3dpdGNoRGVmYXVsdD5cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImctdGVtcGxhdGUgZy1pdGVtLXRlbXBsYXRlXCI+XHJcbiAgICAgICAgICA8bmctY29udGFpbmVyICpuZ1RlbXBsYXRlT3V0bGV0PVwiY29uZmlnLml0ZW1UZW1wbGF0ZTtcclxuICAgICAgICAgIGNvbnRleHQ6IHsgaW5kZXg6IHRoaXMuaW5kZXgsIGN1cnJJbmRleDogdGhpcy5jdXJySW5kZXgsIHR5cGU6IHRoaXMudHlwZSwgZGF0YTogdGhpcy5kYXRhIH1cIj5cclxuICAgICAgICAgIDwvbmctY29udGFpbmVyPlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPC9uZy1jb250YWluZXI+XHJcblxyXG4gICAgPC9uZy1jb250YWluZXI+XHJcbiAgYFxyXG59KVxyXG5leHBvcnQgY2xhc3MgR2FsbGVyeUl0ZW1Db21wb25lbnQge1xyXG5cclxuICByZWFkb25seSBUeXBlcyA9IEdhbGxlcnlJdGVtVHlwZTtcclxuXHJcbiAgLyoqIEdhbGxlcnkgY29uZmlnICovXHJcbiAgQElucHV0KCkgY29uZmlnOiBHYWxsZXJ5Q29uZmlnO1xyXG5cclxuICAvKiogSXRlbSdzIGluZGV4IGluIHRoZSBnYWxsZXJ5ICovXHJcbiAgQElucHV0KCkgaW5kZXg6IG51bWJlcjtcclxuXHJcbiAgLyoqIEdhbGxlcnkgY3VycmVudCBpbmRleCAqL1xyXG4gIEBJbnB1dCgpIGN1cnJJbmRleDogbnVtYmVyO1xyXG5cclxuICAvKiogSXRlbSdzIHR5cGUgJ2ltYWdlJywgJ3ZpZGVvJywgJ3lvdXR1YmUnLCAnaWZyYW1lJyAqL1xyXG4gIEBJbnB1dCgpIHR5cGU6IHN0cmluZztcclxuXHJcbiAgLyoqIEl0ZW0ncyBkYXRhLCB0aGlzIG9iamVjdCBjb250YWlucyB0aGUgZGF0YSByZXF1aXJlZCB0byBkaXNwbGF5IHRoZSBjb250ZW50IChlLmcuIHNyYyBwYXRoKSAqL1xyXG4gIEBJbnB1dCgpIGRhdGE6IGFueTtcclxuXHJcbiAgLyoqIFN0cmVhbSB0aGF0IGVtaXRzIHdoZW4gYW4gZXJyb3Igb2NjdXJzICovXHJcbiAgQE91dHB1dCgpIGVycm9yID0gbmV3IEV2ZW50RW1pdHRlcjxFcnJvcj4oKTtcclxuXHJcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5nLWFjdGl2ZS1pdGVtJykgZ2V0IGlzQWN0aXZlKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuaW5kZXggPT09IHRoaXMuY3VyckluZGV4O1xyXG4gIH1cclxuXHJcbiAgZ2V0IGxvYWQoKSB7XHJcbiAgICBzd2l0Y2ggKHRoaXMuY29uZmlnLmxvYWRpbmdTdHJhdGVneSkge1xyXG4gICAgICBjYXNlIExvYWRpbmdTdHJhdGVneS5QcmVsb2FkOlxyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICBjYXNlIExvYWRpbmdTdHJhdGVneS5MYXp5OlxyXG4gICAgICAgIHJldHVybiB0aGlzLmN1cnJJbmRleCA9PT0gdGhpcy5pbmRleDtcclxuICAgICAgZGVmYXVsdDpcclxuICAgICAgICByZXR1cm4gdGhpcy5jdXJySW5kZXggPT09IHRoaXMuaW5kZXggfHwgdGhpcy5jdXJySW5kZXggPT09IHRoaXMuaW5kZXggLSAxIHx8IHRoaXMuY3VyckluZGV4ID09PSB0aGlzLmluZGV4ICsgMTtcclxuICAgIH1cclxuICB9XHJcblxyXG59XHJcbiJdfQ==