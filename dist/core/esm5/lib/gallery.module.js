/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { GALLERY_CONFIG } from './models/config.model';
import { GalleryComponent } from './components/gallery.component';
import { GalleryNavComponent } from './components/gallery-nav.component';
import { GalleryCoreComponent } from './components/gallery-core.component';
import { GalleryDotsComponent } from './components/gallery-dots.component';
import { GalleryThumbsComponent } from './components/gallery-thumbs.component';
import { GallerySliderComponent } from './components/gallery-slider.component';
import { GalleryCounterComponent } from './components/gallery-counter.component';
import { GalleryItemComponent } from './components/gallery-item.component';
import { GalleryThumbComponent } from './components/gallery-thumb.component';
import { GalleryImageComponent } from './components/templates/gallery-image.component';
import { GalleryVideoComponent } from './components/templates/gallery-video.component';
import { GalleryIframeComponent } from './components/templates/gallery-iframe.component';
import { LazyImage } from './directives/lazy-image';
import { TapClick } from './directives/tap-click';
var GalleryModule = /** @class */ (function () {
    function GalleryModule() {
    }
    /**
     * @param {?} config
     * @return {?}
     */
    GalleryModule.withConfig = /**
     * @param {?} config
     * @return {?}
     */
    function (config) {
        return {
            ngModule: GalleryModule,
            providers: [
                {
                    provide: GALLERY_CONFIG,
                    useValue: config
                }
            ]
        };
    };
    GalleryModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                        HttpClientModule
                    ],
                    declarations: [
                        GalleryComponent,
                        GalleryNavComponent,
                        GalleryDotsComponent,
                        GalleryCoreComponent,
                        GallerySliderComponent,
                        GalleryCounterComponent,
                        GalleryThumbsComponent,
                        GalleryThumbComponent,
                        GalleryItemComponent,
                        GalleryImageComponent,
                        GalleryVideoComponent,
                        GalleryIframeComponent,
                        LazyImage,
                        TapClick
                    ],
                    exports: [
                        GalleryComponent,
                        LazyImage,
                        TapClick,
                    ]
                },] }
    ];
    return GalleryModule;
}());
export { GalleryModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2FsbGVyeS5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Abmd4LWdhbGxlcnkvY29yZS8iLCJzb3VyY2VzIjpbImxpYi9nYWxsZXJ5Lm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBdUIsTUFBTSxlQUFlLENBQUM7QUFDOUQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBcUIsZ0JBQWdCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUUzRSxPQUFPLEVBQWlCLGNBQWMsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBRXRFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQ2xFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBQ3pFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBQzNFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBQzNFLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBQy9FLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBQy9FLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBRWpGLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBQzNFLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQzdFLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLGdEQUFnRCxDQUFDO0FBQ3ZGLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLGdEQUFnRCxDQUFDO0FBQ3ZGLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLGlEQUFpRCxDQUFDO0FBRXpGLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUNwRCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFFbEQ7SUFBQTtJQXdDQSxDQUFDOzs7OztJQVpRLHdCQUFVOzs7O0lBQWpCLFVBQWtCLE1BQXFCO1FBRXJDLE9BQU87WUFDTCxRQUFRLEVBQUUsYUFBYTtZQUN2QixTQUFTLEVBQUU7Z0JBQ1Q7b0JBQ0UsT0FBTyxFQUFFLGNBQWM7b0JBQ3ZCLFFBQVEsRUFBRSxNQUFNO2lCQUNqQjthQUNGO1NBQ0YsQ0FBQztJQUNKLENBQUM7O2dCQXZDRixRQUFRLFNBQUM7b0JBQ1IsT0FBTyxFQUFFO3dCQUNQLFlBQVk7d0JBQ1osZ0JBQWdCO3FCQUNqQjtvQkFDRCxZQUFZLEVBQUU7d0JBQ1osZ0JBQWdCO3dCQUNoQixtQkFBbUI7d0JBQ25CLG9CQUFvQjt3QkFDcEIsb0JBQW9CO3dCQUNwQixzQkFBc0I7d0JBQ3RCLHVCQUF1Qjt3QkFDdkIsc0JBQXNCO3dCQUN0QixxQkFBcUI7d0JBQ3JCLG9CQUFvQjt3QkFDcEIscUJBQXFCO3dCQUNyQixxQkFBcUI7d0JBQ3JCLHNCQUFzQjt3QkFDdEIsU0FBUzt3QkFDVCxRQUFRO3FCQUNUO29CQUNELE9BQU8sRUFBRTt3QkFDUCxnQkFBZ0I7d0JBQ2hCLFNBQVM7d0JBQ1QsUUFBUTtxQkFDVDtpQkFDRjs7SUFjRCxvQkFBQztDQUFBLEFBeENELElBd0NDO1NBYlksYUFBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBNb2R1bGVXaXRoUHJvdmlkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IEhUVFBfSU5URVJDRVBUT1JTLCBIdHRwQ2xpZW50TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xyXG5cclxuaW1wb3J0IHsgR2FsbGVyeUNvbmZpZywgR0FMTEVSWV9DT05GSUcgfSBmcm9tICcuL21vZGVscy9jb25maWcubW9kZWwnO1xyXG5cclxuaW1wb3J0IHsgR2FsbGVyeUNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9nYWxsZXJ5LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEdhbGxlcnlOYXZDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvZ2FsbGVyeS1uYXYuY29tcG9uZW50JztcclxuaW1wb3J0IHsgR2FsbGVyeUNvcmVDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvZ2FsbGVyeS1jb3JlLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEdhbGxlcnlEb3RzQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2dhbGxlcnktZG90cy5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBHYWxsZXJ5VGh1bWJzQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2dhbGxlcnktdGh1bWJzLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEdhbGxlcnlTbGlkZXJDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvZ2FsbGVyeS1zbGlkZXIuY29tcG9uZW50JztcclxuaW1wb3J0IHsgR2FsbGVyeUNvdW50ZXJDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvZ2FsbGVyeS1jb3VudGVyLmNvbXBvbmVudCc7XHJcblxyXG5pbXBvcnQgeyBHYWxsZXJ5SXRlbUNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9nYWxsZXJ5LWl0ZW0uY29tcG9uZW50JztcclxuaW1wb3J0IHsgR2FsbGVyeVRodW1iQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2dhbGxlcnktdGh1bWIuY29tcG9uZW50JztcclxuaW1wb3J0IHsgR2FsbGVyeUltYWdlQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3RlbXBsYXRlcy9nYWxsZXJ5LWltYWdlLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEdhbGxlcnlWaWRlb0NvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy90ZW1wbGF0ZXMvZ2FsbGVyeS12aWRlby5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBHYWxsZXJ5SWZyYW1lQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3RlbXBsYXRlcy9nYWxsZXJ5LWlmcmFtZS5jb21wb25lbnQnO1xyXG5cclxuaW1wb3J0IHsgTGF6eUltYWdlIH0gZnJvbSAnLi9kaXJlY3RpdmVzL2xhenktaW1hZ2UnO1xyXG5pbXBvcnQgeyBUYXBDbGljayB9IGZyb20gJy4vZGlyZWN0aXZlcy90YXAtY2xpY2snO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBpbXBvcnRzOiBbXHJcbiAgICBDb21tb25Nb2R1bGUsXHJcbiAgICBIdHRwQ2xpZW50TW9kdWxlXHJcbiAgXSxcclxuICBkZWNsYXJhdGlvbnM6IFtcclxuICAgIEdhbGxlcnlDb21wb25lbnQsXHJcbiAgICBHYWxsZXJ5TmF2Q29tcG9uZW50LFxyXG4gICAgR2FsbGVyeURvdHNDb21wb25lbnQsXHJcbiAgICBHYWxsZXJ5Q29yZUNvbXBvbmVudCxcclxuICAgIEdhbGxlcnlTbGlkZXJDb21wb25lbnQsXHJcbiAgICBHYWxsZXJ5Q291bnRlckNvbXBvbmVudCxcclxuICAgIEdhbGxlcnlUaHVtYnNDb21wb25lbnQsXHJcbiAgICBHYWxsZXJ5VGh1bWJDb21wb25lbnQsXHJcbiAgICBHYWxsZXJ5SXRlbUNvbXBvbmVudCxcclxuICAgIEdhbGxlcnlJbWFnZUNvbXBvbmVudCxcclxuICAgIEdhbGxlcnlWaWRlb0NvbXBvbmVudCxcclxuICAgIEdhbGxlcnlJZnJhbWVDb21wb25lbnQsXHJcbiAgICBMYXp5SW1hZ2UsXHJcbiAgICBUYXBDbGlja1xyXG4gIF0sXHJcbiAgZXhwb3J0czogW1xyXG4gICAgR2FsbGVyeUNvbXBvbmVudCxcclxuICAgIExhenlJbWFnZSxcclxuICAgIFRhcENsaWNrLFxyXG4gIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIEdhbGxlcnlNb2R1bGUge1xyXG4gIHN0YXRpYyB3aXRoQ29uZmlnKGNvbmZpZzogR2FsbGVyeUNvbmZpZyk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgIG5nTW9kdWxlOiBHYWxsZXJ5TW9kdWxlLFxyXG4gICAgICBwcm92aWRlcnM6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICBwcm92aWRlOiBHQUxMRVJZX0NPTkZJRyxcclxuICAgICAgICAgIHVzZVZhbHVlOiBjb25maWdcclxuICAgICAgICB9XHJcbiAgICAgIF1cclxuICAgIH07XHJcbiAgfVxyXG59XHJcbiJdfQ==