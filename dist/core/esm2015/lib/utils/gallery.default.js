/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ImageSize, GalleryAction, ThumbnailsMode, LoadingStrategy, SlidingDirection, ThumbnailsPosition, DotsPosition, CounterPosition } from '../models/constants';
/**
 * Initial state
 * @type {?}
 */
export const defaultState = {
    action: GalleryAction.INITIALIZED,
    isPlaying: false,
    hasNext: false,
    hasPrev: false,
    currIndex: 0,
    items: []
};
/** @type {?} */
export const defaultConfig = {
    nav: true,
    loop: true,
    zoomOut: 0,
    dots: false,
    thumb: true,
    dotsSize: 30,
    counter: true,
    gestures: true,
    autoPlay: false,
    thumbWidth: 120,
    thumbHeight: 90,
    panSensitivity: 25,
    disableThumb: false,
    playerInterval: 3000,
    imageSize: ImageSize.Contain,
    thumbMode: ThumbnailsMode.Strict,
    dotsPosition: DotsPosition.Bottom,
    counterPosition: CounterPosition.Top,
    thumbPosition: ThumbnailsPosition.Bottom,
    loadingStrategy: LoadingStrategy.Default,
    slidingDirection: SlidingDirection.Horizontal,
    navIcon: `<?xml version="1.0" encoding="UTF-8"?><svg width="512px" height="512px" enable-background="new 0 0 240.823 240.823" version="1.1" viewBox="0 0 240.823 240.823" xml:space="preserve" xmlns="http://www.w3.org/2000/svg"><path d="m183.19 111.82l-108.3-108.26c-4.752-4.74-12.451-4.74-17.215 0-4.752 4.74-4.752 12.439 0 17.179l99.707 99.671-99.695 99.671c-4.752 4.74-4.752 12.439 0 17.191 4.752 4.74 12.463 4.74 17.215 0l108.3-108.26c4.68-4.691 4.68-12.511-0.012-17.19z" fill="#fff"/></svg>`,
    loadingIcon: `<?xml version="1.0" encoding="UTF-8"?><svg stroke="#fff" viewBox="0 0 44 44" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd" stroke-width="2"><circle cx="22" cy="22" r="1"><animate attributeName="r" begin="0s" calcMode="spline" dur="1.8s" keySplines="0.165, 0.84, 0.44, 1" keyTimes="0; 1" repeatCount="indefinite" values="1; 20"/><animate attributeName="stroke-opacity" begin="0s" calcMode="spline" dur="1.8s" keySplines="0.3, 0.61, 0.355, 1" keyTimes="0; 1" repeatCount="indefinite" values="1; 0"/></circle><circle cx="22" cy="22" r="1"><animate attributeName="r" begin="-0.9s" calcMode="spline" dur="1.8s" keySplines="0.165, 0.84, 0.44, 1" keyTimes="0; 1" repeatCount="indefinite" values="1; 20"/><animate attributeName="stroke-opacity" begin="-0.9s" calcMode="spline" dur="1.8s" keySplines="0.3, 0.61, 0.355, 1" keyTimes="0; 1" repeatCount="indefinite" values="1; 0"/></circle></g></svg>`
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2FsbGVyeS5kZWZhdWx0LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG5neC1nYWxsZXJ5L2NvcmUvIiwic291cmNlcyI6WyJsaWIvdXRpbHMvZ2FsbGVyeS5kZWZhdWx0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULGFBQWEsRUFDYixjQUFjLEVBQ2QsZUFBZSxFQUNmLGdCQUFnQixFQUNoQixrQkFBa0IsRUFFbEIsWUFBWSxFQUNaLGVBQWUsRUFDaEIsTUFBTSxxQkFBcUIsQ0FBQzs7Ozs7QUFLN0IsTUFBTSxPQUFPLFlBQVksR0FBaUI7SUFDeEMsTUFBTSxFQUFFLGFBQWEsQ0FBQyxXQUFXO0lBQ2pDLFNBQVMsRUFBRSxLQUFLO0lBQ2hCLE9BQU8sRUFBRSxLQUFLO0lBQ2QsT0FBTyxFQUFFLEtBQUs7SUFDZCxTQUFTLEVBQUUsQ0FBQztJQUNaLEtBQUssRUFBRSxFQUFFO0NBQ1Y7O0FBRUQsTUFBTSxPQUFPLGFBQWEsR0FBa0I7SUFDMUMsR0FBRyxFQUFFLElBQUk7SUFDVCxJQUFJLEVBQUUsSUFBSTtJQUNWLE9BQU8sRUFBRSxDQUFDO0lBQ1YsSUFBSSxFQUFFLEtBQUs7SUFDWCxLQUFLLEVBQUUsSUFBSTtJQUNYLFFBQVEsRUFBRSxFQUFFO0lBQ1osT0FBTyxFQUFFLElBQUk7SUFDYixRQUFRLEVBQUUsSUFBSTtJQUNkLFFBQVEsRUFBRSxLQUFLO0lBQ2YsVUFBVSxFQUFFLEdBQUc7SUFDZixXQUFXLEVBQUUsRUFBRTtJQUNmLGNBQWMsRUFBRSxFQUFFO0lBQ2xCLFlBQVksRUFBRSxLQUFLO0lBQ25CLGNBQWMsRUFBRSxJQUFJO0lBQ3BCLFNBQVMsRUFBRSxTQUFTLENBQUMsT0FBTztJQUM1QixTQUFTLEVBQUUsY0FBYyxDQUFDLE1BQU07SUFDaEMsWUFBWSxFQUFFLFlBQVksQ0FBQyxNQUFNO0lBQ2pDLGVBQWUsRUFBRSxlQUFlLENBQUMsR0FBRztJQUNwQyxhQUFhLEVBQUUsa0JBQWtCLENBQUMsTUFBTTtJQUN4QyxlQUFlLEVBQUUsZUFBZSxDQUFDLE9BQU87SUFDeEMsZ0JBQWdCLEVBQUUsZ0JBQWdCLENBQUMsVUFBVTtJQUM3QyxPQUFPLEVBQUUscWVBQXFlO0lBQzllLFdBQVcsRUFBRSxrNUJBQWs1QjtDQUNoNkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIEltYWdlU2l6ZSxcclxuICBHYWxsZXJ5QWN0aW9uLFxyXG4gIFRodW1ibmFpbHNNb2RlLFxyXG4gIExvYWRpbmdTdHJhdGVneSxcclxuICBTbGlkaW5nRGlyZWN0aW9uLFxyXG4gIFRodW1ibmFpbHNQb3NpdGlvbixcclxuICBJbWFnZUxvYWRlck1vZGUsXHJcbiAgRG90c1Bvc2l0aW9uLFxyXG4gIENvdW50ZXJQb3NpdGlvblxyXG59IGZyb20gJy4uL21vZGVscy9jb25zdGFudHMnO1xyXG5pbXBvcnQgeyBHYWxsZXJ5U3RhdGUgfSBmcm9tICcuLi9tb2RlbHMvZ2FsbGVyeS5tb2RlbCc7XHJcbmltcG9ydCB7IEdhbGxlcnlDb25maWcgfSBmcm9tICcuLi9tb2RlbHMvY29uZmlnLm1vZGVsJztcclxuXHJcbi8qKiBJbml0aWFsIHN0YXRlICovXHJcbmV4cG9ydCBjb25zdCBkZWZhdWx0U3RhdGU6IEdhbGxlcnlTdGF0ZSA9IHtcclxuICBhY3Rpb246IEdhbGxlcnlBY3Rpb24uSU5JVElBTElaRUQsXHJcbiAgaXNQbGF5aW5nOiBmYWxzZSxcclxuICBoYXNOZXh0OiBmYWxzZSxcclxuICBoYXNQcmV2OiBmYWxzZSxcclxuICBjdXJySW5kZXg6IDAsXHJcbiAgaXRlbXM6IFtdXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZGVmYXVsdENvbmZpZzogR2FsbGVyeUNvbmZpZyA9IHtcclxuICBuYXY6IHRydWUsXHJcbiAgbG9vcDogdHJ1ZSxcclxuICB6b29tT3V0OiAwLFxyXG4gIGRvdHM6IGZhbHNlLFxyXG4gIHRodW1iOiB0cnVlLFxyXG4gIGRvdHNTaXplOiAzMCxcclxuICBjb3VudGVyOiB0cnVlLFxyXG4gIGdlc3R1cmVzOiB0cnVlLFxyXG4gIGF1dG9QbGF5OiBmYWxzZSxcclxuICB0aHVtYldpZHRoOiAxMjAsXHJcbiAgdGh1bWJIZWlnaHQ6IDkwLFxyXG4gIHBhblNlbnNpdGl2aXR5OiAyNSxcclxuICBkaXNhYmxlVGh1bWI6IGZhbHNlLFxyXG4gIHBsYXllckludGVydmFsOiAzMDAwLFxyXG4gIGltYWdlU2l6ZTogSW1hZ2VTaXplLkNvbnRhaW4sXHJcbiAgdGh1bWJNb2RlOiBUaHVtYm5haWxzTW9kZS5TdHJpY3QsXHJcbiAgZG90c1Bvc2l0aW9uOiBEb3RzUG9zaXRpb24uQm90dG9tLFxyXG4gIGNvdW50ZXJQb3NpdGlvbjogQ291bnRlclBvc2l0aW9uLlRvcCxcclxuICB0aHVtYlBvc2l0aW9uOiBUaHVtYm5haWxzUG9zaXRpb24uQm90dG9tLFxyXG4gIGxvYWRpbmdTdHJhdGVneTogTG9hZGluZ1N0cmF0ZWd5LkRlZmF1bHQsXHJcbiAgc2xpZGluZ0RpcmVjdGlvbjogU2xpZGluZ0RpcmVjdGlvbi5Ib3Jpem9udGFsLFxyXG4gIG5hdkljb246IGA8P3htbCB2ZXJzaW9uPVwiMS4wXCIgZW5jb2Rpbmc9XCJVVEYtOFwiPz48c3ZnIHdpZHRoPVwiNTEycHhcIiBoZWlnaHQ9XCI1MTJweFwiIGVuYWJsZS1iYWNrZ3JvdW5kPVwibmV3IDAgMCAyNDAuODIzIDI0MC44MjNcIiB2ZXJzaW9uPVwiMS4xXCIgdmlld0JveD1cIjAgMCAyNDAuODIzIDI0MC44MjNcIiB4bWw6c3BhY2U9XCJwcmVzZXJ2ZVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj48cGF0aCBkPVwibTE4My4xOSAxMTEuODJsLTEwOC4zLTEwOC4yNmMtNC43NTItNC43NC0xMi40NTEtNC43NC0xNy4yMTUgMC00Ljc1MiA0Ljc0LTQuNzUyIDEyLjQzOSAwIDE3LjE3OWw5OS43MDcgOTkuNjcxLTk5LjY5NSA5OS42NzFjLTQuNzUyIDQuNzQtNC43NTIgMTIuNDM5IDAgMTcuMTkxIDQuNzUyIDQuNzQgMTIuNDYzIDQuNzQgMTcuMjE1IDBsMTA4LjMtMTA4LjI2YzQuNjgtNC42OTEgNC42OC0xMi41MTEtMC4wMTItMTcuMTl6XCIgZmlsbD1cIiNmZmZcIi8+PC9zdmc+YCxcclxuICBsb2FkaW5nSWNvbjogYDw/eG1sIHZlcnNpb249XCIxLjBcIiBlbmNvZGluZz1cIlVURi04XCI/Pjxzdmcgc3Ryb2tlPVwiI2ZmZlwiIHZpZXdCb3g9XCIwIDAgNDQgNDRcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+PGcgZmlsbD1cIm5vbmVcIiBmaWxsLXJ1bGU9XCJldmVub2RkXCIgc3Ryb2tlLXdpZHRoPVwiMlwiPjxjaXJjbGUgY3g9XCIyMlwiIGN5PVwiMjJcIiByPVwiMVwiPjxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9XCJyXCIgYmVnaW49XCIwc1wiIGNhbGNNb2RlPVwic3BsaW5lXCIgZHVyPVwiMS44c1wiIGtleVNwbGluZXM9XCIwLjE2NSwgMC44NCwgMC40NCwgMVwiIGtleVRpbWVzPVwiMDsgMVwiIHJlcGVhdENvdW50PVwiaW5kZWZpbml0ZVwiIHZhbHVlcz1cIjE7IDIwXCIvPjxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9XCJzdHJva2Utb3BhY2l0eVwiIGJlZ2luPVwiMHNcIiBjYWxjTW9kZT1cInNwbGluZVwiIGR1cj1cIjEuOHNcIiBrZXlTcGxpbmVzPVwiMC4zLCAwLjYxLCAwLjM1NSwgMVwiIGtleVRpbWVzPVwiMDsgMVwiIHJlcGVhdENvdW50PVwiaW5kZWZpbml0ZVwiIHZhbHVlcz1cIjE7IDBcIi8+PC9jaXJjbGU+PGNpcmNsZSBjeD1cIjIyXCIgY3k9XCIyMlwiIHI9XCIxXCI+PGFuaW1hdGUgYXR0cmlidXRlTmFtZT1cInJcIiBiZWdpbj1cIi0wLjlzXCIgY2FsY01vZGU9XCJzcGxpbmVcIiBkdXI9XCIxLjhzXCIga2V5U3BsaW5lcz1cIjAuMTY1LCAwLjg0LCAwLjQ0LCAxXCIga2V5VGltZXM9XCIwOyAxXCIgcmVwZWF0Q291bnQ9XCJpbmRlZmluaXRlXCIgdmFsdWVzPVwiMTsgMjBcIi8+PGFuaW1hdGUgYXR0cmlidXRlTmFtZT1cInN0cm9rZS1vcGFjaXR5XCIgYmVnaW49XCItMC45c1wiIGNhbGNNb2RlPVwic3BsaW5lXCIgZHVyPVwiMS44c1wiIGtleVNwbGluZXM9XCIwLjMsIDAuNjEsIDAuMzU1LCAxXCIga2V5VGltZXM9XCIwOyAxXCIgcmVwZWF0Q291bnQ9XCJpbmRlZmluaXRlXCIgdmFsdWVzPVwiMTsgMFwiLz48L2NpcmNsZT48L2c+PC9zdmc+YFxyXG59O1xyXG4iXX0=