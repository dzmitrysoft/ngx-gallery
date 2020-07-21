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
export class GalleryModule {
    /**
     * @param {?} config
     * @return {?}
     */
    static withConfig(config) {
        return {
            ngModule: GalleryModule,
            providers: [
                {
                    provide: GALLERY_CONFIG,
                    useValue: config
                }
            ]
        };
    }
}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2FsbGVyeS5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Abmd4LWdhbGxlcnkvY29yZS8iLCJzb3VyY2VzIjpbImxpYi9nYWxsZXJ5Lm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBdUIsTUFBTSxlQUFlLENBQUM7QUFDOUQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBcUIsZ0JBQWdCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUUzRSxPQUFPLEVBQWlCLGNBQWMsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBRXRFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQ2xFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBQ3pFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBQzNFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBQzNFLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBQy9FLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBQy9FLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBRWpGLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBQzNFLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQzdFLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLGdEQUFnRCxDQUFDO0FBQ3ZGLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLGdEQUFnRCxDQUFDO0FBQ3ZGLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLGlEQUFpRCxDQUFDO0FBRXpGLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUNwRCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUE2QmxELE1BQU0sT0FBTyxhQUFhOzs7OztJQUN4QixNQUFNLENBQUMsVUFBVSxDQUFDLE1BQXFCO1FBRXJDLE9BQU87WUFDTCxRQUFRLEVBQUUsYUFBYTtZQUN2QixTQUFTLEVBQUU7Z0JBQ1Q7b0JBQ0UsT0FBTyxFQUFFLGNBQWM7b0JBQ3ZCLFFBQVEsRUFBRSxNQUFNO2lCQUNqQjthQUNGO1NBQ0YsQ0FBQztJQUNKLENBQUM7OztZQXZDRixRQUFRLFNBQUM7Z0JBQ1IsT0FBTyxFQUFFO29CQUNQLFlBQVk7b0JBQ1osZ0JBQWdCO2lCQUNqQjtnQkFDRCxZQUFZLEVBQUU7b0JBQ1osZ0JBQWdCO29CQUNoQixtQkFBbUI7b0JBQ25CLG9CQUFvQjtvQkFDcEIsb0JBQW9CO29CQUNwQixzQkFBc0I7b0JBQ3RCLHVCQUF1QjtvQkFDdkIsc0JBQXNCO29CQUN0QixxQkFBcUI7b0JBQ3JCLG9CQUFvQjtvQkFDcEIscUJBQXFCO29CQUNyQixxQkFBcUI7b0JBQ3JCLHNCQUFzQjtvQkFDdEIsU0FBUztvQkFDVCxRQUFRO2lCQUNUO2dCQUNELE9BQU8sRUFBRTtvQkFDUCxnQkFBZ0I7b0JBQ2hCLFNBQVM7b0JBQ1QsUUFBUTtpQkFDVDthQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgSFRUUF9JTlRFUkNFUFRPUlMsIEh0dHBDbGllbnRNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XHJcblxyXG5pbXBvcnQgeyBHYWxsZXJ5Q29uZmlnLCBHQUxMRVJZX0NPTkZJRyB9IGZyb20gJy4vbW9kZWxzL2NvbmZpZy5tb2RlbCc7XHJcblxyXG5pbXBvcnQgeyBHYWxsZXJ5Q29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2dhbGxlcnkuY29tcG9uZW50JztcclxuaW1wb3J0IHsgR2FsbGVyeU5hdkNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9nYWxsZXJ5LW5hdi5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBHYWxsZXJ5Q29yZUNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9nYWxsZXJ5LWNvcmUuY29tcG9uZW50JztcclxuaW1wb3J0IHsgR2FsbGVyeURvdHNDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvZ2FsbGVyeS1kb3RzLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEdhbGxlcnlUaHVtYnNDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvZ2FsbGVyeS10aHVtYnMuY29tcG9uZW50JztcclxuaW1wb3J0IHsgR2FsbGVyeVNsaWRlckNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9nYWxsZXJ5LXNsaWRlci5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBHYWxsZXJ5Q291bnRlckNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9nYWxsZXJ5LWNvdW50ZXIuY29tcG9uZW50JztcclxuXHJcbmltcG9ydCB7IEdhbGxlcnlJdGVtQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2dhbGxlcnktaXRlbS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBHYWxsZXJ5VGh1bWJDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvZ2FsbGVyeS10aHVtYi5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBHYWxsZXJ5SW1hZ2VDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvdGVtcGxhdGVzL2dhbGxlcnktaW1hZ2UuY29tcG9uZW50JztcclxuaW1wb3J0IHsgR2FsbGVyeVZpZGVvQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3RlbXBsYXRlcy9nYWxsZXJ5LXZpZGVvLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEdhbGxlcnlJZnJhbWVDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvdGVtcGxhdGVzL2dhbGxlcnktaWZyYW1lLmNvbXBvbmVudCc7XHJcblxyXG5pbXBvcnQgeyBMYXp5SW1hZ2UgfSBmcm9tICcuL2RpcmVjdGl2ZXMvbGF6eS1pbWFnZSc7XHJcbmltcG9ydCB7IFRhcENsaWNrIH0gZnJvbSAnLi9kaXJlY3RpdmVzL3RhcC1jbGljayc7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGltcG9ydHM6IFtcclxuICAgIENvbW1vbk1vZHVsZSxcclxuICAgIEh0dHBDbGllbnRNb2R1bGVcclxuICBdLFxyXG4gIGRlY2xhcmF0aW9uczogW1xyXG4gICAgR2FsbGVyeUNvbXBvbmVudCxcclxuICAgIEdhbGxlcnlOYXZDb21wb25lbnQsXHJcbiAgICBHYWxsZXJ5RG90c0NvbXBvbmVudCxcclxuICAgIEdhbGxlcnlDb3JlQ29tcG9uZW50LFxyXG4gICAgR2FsbGVyeVNsaWRlckNvbXBvbmVudCxcclxuICAgIEdhbGxlcnlDb3VudGVyQ29tcG9uZW50LFxyXG4gICAgR2FsbGVyeVRodW1ic0NvbXBvbmVudCxcclxuICAgIEdhbGxlcnlUaHVtYkNvbXBvbmVudCxcclxuICAgIEdhbGxlcnlJdGVtQ29tcG9uZW50LFxyXG4gICAgR2FsbGVyeUltYWdlQ29tcG9uZW50LFxyXG4gICAgR2FsbGVyeVZpZGVvQ29tcG9uZW50LFxyXG4gICAgR2FsbGVyeUlmcmFtZUNvbXBvbmVudCxcclxuICAgIExhenlJbWFnZSxcclxuICAgIFRhcENsaWNrXHJcbiAgXSxcclxuICBleHBvcnRzOiBbXHJcbiAgICBHYWxsZXJ5Q29tcG9uZW50LFxyXG4gICAgTGF6eUltYWdlLFxyXG4gICAgVGFwQ2xpY2ssXHJcbiAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgR2FsbGVyeU1vZHVsZSB7XHJcbiAgc3RhdGljIHdpdGhDb25maWcoY29uZmlnOiBHYWxsZXJ5Q29uZmlnKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgbmdNb2R1bGU6IEdhbGxlcnlNb2R1bGUsXHJcbiAgICAgIHByb3ZpZGVyczogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgIHByb3ZpZGU6IEdBTExFUllfQ09ORklHLFxyXG4gICAgICAgICAgdXNlVmFsdWU6IGNvbmZpZ1xyXG4gICAgICAgIH1cclxuICAgICAgXVxyXG4gICAgfTtcclxuICB9XHJcbn1cclxuIl19