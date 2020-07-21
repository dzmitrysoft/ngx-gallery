/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, TemplateRef, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Gallery } from '../services/gallery.service';
import { IframeItem, ImageItem, VideoItem, YoutubeItem } from './templates/items.model';
export class GalleryComponent {
    /**
     * @param {?} _gallery
     */
    constructor(_gallery) {
        this._gallery = _gallery;
        this.nav = this._gallery.config.nav;
        this.dots = this._gallery.config.dots;
        this.loop = this._gallery.config.loop;
        this.thumb = this._gallery.config.thumb;
        this.zoomOut = this._gallery.config.zoomOut;
        this.counter = this._gallery.config.counter;
        this.dotsSize = this._gallery.config.dotsSize;
        this.autoPlay = this._gallery.config.autoPlay;
        this.gestures = this._gallery.config.gestures;
        this.thumbWidth = this._gallery.config.thumbWidth;
        this.thumbHeight = this._gallery.config.thumbHeight;
        this.disableThumb = this._gallery.config.disableThumb;
        this.panSensitivity = this._gallery.config.panSensitivity;
        this.playerInterval = this._gallery.config.playerInterval;
        this.itemTemplate = this._gallery.config.itemTemplate;
        this.thumbTemplate = this._gallery.config.thumbTemplate;
        this.thumbMode = this._gallery.config.thumbMode;
        this.imageSize = this._gallery.config.imageSize;
        this.dotsPosition = this._gallery.config.dotsPosition;
        this.counterPosition = this._gallery.config.counterPosition;
        this.slidingDirection = this._gallery.config.slidingDirection;
        this.loadingStrategy = this._gallery.config.loadingStrategy;
        this.thumbPosition = this._gallery.config.thumbPosition;
        // Inputs used by the lightbox
        /**
         * Destroy gallery ref on component destroy event
         */
        this.destroyRef = true;
        /**
         * Skip initializing the config with components inputs (Lightbox mode)
         */
        this.skipInitConfig = false;
        this.itemClick = new EventEmitter();
        this.thumbClick = new EventEmitter();
        this.playingChange = new EventEmitter();
        this.indexChange = new EventEmitter();
        this.itemsChange = new EventEmitter();
        this.error = new EventEmitter();
        this._itemClick$ = Subscription.EMPTY;
        this._thumbClick$ = Subscription.EMPTY;
        this._itemChange$ = Subscription.EMPTY;
        this._indexChange$ = Subscription.EMPTY;
        this._playingChange$ = Subscription.EMPTY;
        this._playerListener$ = Subscription.EMPTY;
    }
    /**
     * @private
     * @return {?}
     */
    getConfig() {
        return {
            nav: this.nav,
            dots: this.dots,
            loop: this.loop,
            thumb: this.thumb,
            zoomOut: this.zoomOut,
            counter: this.counter,
            autoPlay: this.autoPlay,
            gestures: this.gestures,
            dotsSize: this.dotsSize,
            imageSize: this.imageSize,
            thumbMode: this.thumbMode,
            thumbWidth: this.thumbWidth,
            thumbHeight: this.thumbHeight,
            disableThumb: this.disableThumb,
            dotsPosition: this.dotsPosition,
            itemTemplate: this.itemTemplate,
            thumbTemplate: this.thumbTemplate,
            thumbPosition: this.thumbPosition,
            panSensitivity: this.panSensitivity,
            playerInterval: this.playerInterval,
            counterPosition: this.counterPosition,
            loadingStrategy: this.loadingStrategy,
            slidingDirection: this.slidingDirection
        };
    }
    /**
     * @param {?} i
     * @return {?}
     */
    onAction(i) {
        switch (i) {
            case 'next':
                this.galleryRef.next();
                break;
            case 'prev':
                this.galleryRef.prev();
                break;
            default:
                this.galleryRef.set((/** @type {?} */ (i)));
        }
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (this.galleryRef) {
            this.galleryRef.setConfig(this.getConfig());
            if (changes.items && changes.items.currentValue !== changes.items.previousValue) {
                this.load(this.items);
            }
        }
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        // Get gallery instance by id
        if (this.skipInitConfig) {
            this.galleryRef = this._gallery.ref(this.id);
        }
        else {
            this.galleryRef = this._gallery.ref(this.id, this.getConfig());
        }
        // Load gallery items
        this.load(this.items);
        // Activate player listener
        this._playerListener$ = this.galleryRef.activatePlayer().subscribe();
        // Subscribes to events on demand
        if (this.indexChange.observers.length) {
            this._indexChange$ = this.galleryRef.indexChanged.subscribe((state) => this.indexChange.emit(state));
        }
        if (this.itemsChange.observers.length) {
            this._itemChange$ = this.galleryRef.itemsChanged.subscribe((state) => this.itemsChange.emit(state));
        }
        if (this.playingChange.observers.length) {
            this._playingChange$ = this.galleryRef.playingChanged.subscribe((state) => this.playingChange.emit(state));
        }
        // Start playing if auto-play is set to true
        if (this.autoPlay) {
            this.play();
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this._itemClick$.unsubscribe();
        this._thumbClick$.unsubscribe();
        this._itemChange$.unsubscribe();
        this._indexChange$.unsubscribe();
        this._playingChange$.unsubscribe();
        this._playerListener$.unsubscribe();
        if (this.destroyRef) {
            this.galleryRef.destroy();
        }
    }
    /**
     * @param {?} i
     * @return {?}
     */
    onItemClick(i) {
        this.itemClick.emit(i);
        this.galleryRef.itemClick.next(i);
    }
    /**
     * @param {?} i
     * @return {?}
     */
    onThumbClick(i) {
        this.galleryRef.set(i);
        this.thumbClick.emit(i);
        this.galleryRef.thumbClick.next(i);
    }
    /**
     * @param {?} err
     * @return {?}
     */
    onError(err) {
        this.error.emit(err);
        this.galleryRef.error.next(err);
    }
    /**
     * @param {?} items
     * @return {?}
     */
    load(items) {
        this.galleryRef.load(items);
    }
    /**
     * @param {?} item
     * @param {?=} active
     * @return {?}
     */
    add(item, active) {
        this.galleryRef.add(item, active);
    }
    /**
     * @param {?} data
     * @param {?=} active
     * @return {?}
     */
    addImage(data, active) {
        this.add(new ImageItem(data), active);
    }
    /**
     * @param {?} data
     * @param {?=} active
     * @return {?}
     */
    addVideo(data, active) {
        this.add(new VideoItem(data), active);
    }
    /**
     * @param {?} data
     * @param {?=} active
     * @return {?}
     */
    addIframe(data, active) {
        this.add(new IframeItem(data), active);
    }
    /**
     * @param {?} data
     * @param {?=} active
     * @return {?}
     */
    addYoutube(data, active) {
        this.add(new YoutubeItem(data), active);
    }
    /**
     * @param {?} i
     * @return {?}
     */
    remove(i) {
        this.galleryRef.remove(i);
    }
    /**
     * @return {?}
     */
    next() {
        this.galleryRef.next();
    }
    /**
     * @return {?}
     */
    prev() {
        this.galleryRef.prev();
    }
    /**
     * @param {?} i
     * @return {?}
     */
    set(i) {
        this.galleryRef.set(i);
    }
    /**
     * @return {?}
     */
    reset() {
        this.galleryRef.reset();
    }
    /**
     * @param {?=} interval
     * @return {?}
     */
    play(interval) {
        this.galleryRef.play(interval);
    }
    /**
     * @return {?}
     */
    stop() {
        this.galleryRef.stop();
    }
}
GalleryComponent.decorators = [
    { type: Component, args: [{
                selector: 'gallery',
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: `
    <gallery-core [state]="galleryRef.state | async"
                  [config]="galleryRef.config | async"
                  (action)="onAction($event)"
                  (itemClick)="onItemClick($event)"
                  (thumbClick)="onThumbClick($event)"
                  (error)="onError($event)"></gallery-core>
    <ng-content></ng-content>
  `,
                styles: ["::ng-deep gallery-core[dotsPosition=top] gallery-dots{top:0}::ng-deep gallery-core[dotsPosition=bottom] gallery-dots{bottom:0}::ng-deep gallery-dots{margin:7px;position:absolute;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%)}::ng-deep .g-dot{cursor:pointer;z-index:20}::ng-deep .g-dot:hover .g-dot-inner{opacity:1}::ng-deep .g-dot-active .g-dot-inner{opacity:1;-webkit-transform:scale(1.5)!important;transform:scale(1.5)!important}::ng-deep .g-dot-inner{background-color:#fff;opacity:.6;width:30%;height:30%;border-radius:50%;box-shadow:0 0 1px #000;transition:.2s}::ng-deep .g-dot,::ng-deep .g-dot-inner,::ng-deep gallery-dots{display:flex;justify-content:center;align-items:center}::ng-deep .g-nav-next,::ng-deep .g-nav-prev{position:absolute;top:50%;width:30px;height:40px;cursor:pointer;z-index:999}::ng-deep .g-nav-next{right:.5em;-webkit-transform:translateY(-50%) perspective(1px);transform:translateY(-50%) perspective(1px)}::ng-deep .g-nav-prev{left:.5em;-webkit-transform:translateY(-50%) perspective(1px) scale(-1,-1);transform:translateY(-50%) perspective(1px) scale(-1,-1)}@media only screen and (max-width:480px){::ng-deep .g-nav-next{right:.2em}::ng-deep .g-nav-prev{left:.2em}}::ng-deep .g-items-container{height:100%}::ng-deep .g-slider{position:absolute;transition:transform .4s cubic-bezier(.5,0,.5,1);transition:transform .4s cubic-bezier(.5,0,.5,1),-webkit-transform .4s cubic-bezier(.5,0,.5,1)}::ng-deep gallery-core[slidingDirection=horizontal] .g-slider{flex-direction:row}::ng-deep gallery-core[slidingDirection=vertical] .g-slider{flex-direction:column}::ng-deep gallery-thumbs{display:block;z-index:1;overflow:unset}::ng-deep .g-thumbs-container{position:relative;z-index:206;width:100%;height:100%;left:0;top:0;display:flex;overflow:unset}::ng-deep gallery-core[disableThumb=true] gallery-thumb{cursor:default}::ng-deep gallery-core[thumbPosition=bottom] gallery-thumbs .g-slider,::ng-deep gallery-core[thumbPosition=top] gallery-thumbs .g-slider{flex-direction:row;top:0;left:50%}::ng-deep gallery-core[thumbPosition=bottom] gallery-thumb,::ng-deep gallery-core[thumbPosition=top] gallery-thumb{padding:1px 0 1px 1px}::ng-deep gallery-core[thumbPosition=left] gallery-thumbs .g-slider,::ng-deep gallery-core[thumbPosition=right] gallery-thumbs .g-slider{flex-direction:column;top:50%;left:0}::ng-deep gallery-core[thumbPosition=left] gallery-thumb,::ng-deep gallery-core[thumbPosition=right] gallery-thumb{padding:0 1px 1px}::ng-deep gallery-core[thumbPosition=top]{flex-direction:column}::ng-deep gallery-core[thumbPosition=left]{flex-direction:row}::ng-deep gallery-core[thumbPosition=right]{flex-direction:row-reverse}::ng-deep gallery-core[thumbPosition=bottom]{flex-direction:column-reverse}::ng-deep gallery-thumb.g-active-thumb .g-thumb-loading{background-color:#464646}::ng-deep .g-thumb-loading{position:relative;overflow:hidden;height:100%;background-color:#262626}::ng-deep .g-thumb-loading::before{content:\"\";position:absolute;top:0;right:0;bottom:0;left:50%;z-index:1;width:500%;margin-left:-250%;-webkit-animation:.8s linear infinite phAnimation;animation:.8s linear infinite phAnimation;background:linear-gradient(to right,rgba(255,255,255,0) 46%,rgba(255,255,255,.35) 50%,rgba(255,255,255,0) 54%) 50% 50%}@-webkit-keyframes phAnimation{0%{-webkit-transform:translate3d(-30%,0,0);transform:translate3d(-30%,0,0)}100%{-webkit-transform:translate3d(30%,0,0);transform:translate3d(30%,0,0)}}@keyframes phAnimation{0%{-webkit-transform:translate3d(-30%,0,0);transform:translate3d(-30%,0,0)}100%{-webkit-transform:translate3d(30%,0,0);transform:translate3d(30%,0,0)}}::ng-deep gallery-core[counterPosition=top] .g-counter{top:0;border-bottom-left-radius:4px;border-bottom-right-radius:4px}::ng-deep gallery-core[counterPosition=bottom] .g-counter{bottom:0;border-top-left-radius:4px;border-top-right-radius:4px}::ng-deep .g-counter{z-index:50;position:absolute;left:50%;-webkit-transform:translateX(-50%) perspective(1px);transform:translateX(-50%) perspective(1px);font-size:12px;padding:4px 10px;color:#fff;background-color:rgba(0,0,0,.5)}::ng-deep gallery[gallerize] gallery-item{cursor:pointer}::ng-deep gallery-item,::ng-deep gallery-thumb{position:relative;height:100%;width:100%;display:block;overflow:hidden}::ng-deep gallery-item h2,::ng-deep gallery-item h4,::ng-deep gallery-thumb h2,::ng-deep gallery-thumb h4{color:coral;margin:0}::ng-deep gallery-item h2,::ng-deep gallery-thumb h2{font-size:3.5em;margin-bottom:.3em}::ng-deep gallery-item h4,::ng-deep gallery-thumb h4{font-size:1.6em}::ng-deep gallery-item{z-index:10}::ng-deep gallery-item iframe,::ng-deep gallery-item video{position:absolute;width:100%;height:100%}::ng-deep gallery-thumb{opacity:.5;cursor:pointer;transition:opacity .3s cubic-bezier(.5,0,.5,1)}::ng-deep gallery-thumb.g-active-thumb{opacity:1}::ng-deep .g-image-item{background-position:center center;background-repeat:no-repeat;background-size:cover;width:100%;height:100%}::ng-deep .g-image-error-message,::ng-deep .g-template{position:absolute;z-index:10;left:0;top:0;right:0;bottom:0;color:#fff;display:flex;align-items:center;justify-content:center;flex-direction:column}::ng-deep .g-loading{position:absolute;-webkit-transform:translate3d(-50%,-50%,0);transform:translate3d(-50%,-50%,0);left:50%;top:50%;width:80px;height:80px}::ng-deep gallery-core[imageSize=contain] gallery-slider .g-image-item{background-size:contain}::ng-deep gallery-image{display:flex;justify-content:center;align-items:center;height:100%}::ng-deep gallery{position:relative;z-index:1;overflow:hidden;display:block;height:500px;background-color:#000}::ng-deep gallery *{box-sizing:border-box}::ng-deep gallery,::ng-deep gallery-core{position:relative;overflow:hidden}::ng-deep .g-box,::ng-deep .g-slider,::ng-deep gallery-core{display:flex;height:100%;width:100%}::ng-deep gallery[fluid]{-webkit-transform:translateX(-50vw);transform:translateX(-50vw);width:100vw;left:50%}::ng-deep gallery[fluid][fluid=false]{-webkit-transform:none;transform:none;width:initial;left:initial}::ng-deep .g-no-transition{transition:unset!important}::ng-deep .g-box,::ng-deep gallery-slider{overflow:hidden;position:relative;display:flex;flex-direction:column;flex:1;order:1;height:100%}::ng-deep .g-btn-close svg,::ng-deep gallery-nav svg{width:100%;height:100%;-webkit-filter:drop-shadow(0 0 1px #000);filter:drop-shadow(0 0 1px #000);transition:opacity .2s linear;opacity:.6}::ng-deep .g-btn-close svg:hover,::ng-deep gallery-nav svg:hover{opacity:1}"]
            }] }
];
/** @nocollapse */
GalleryComponent.ctorParameters = () => [
    { type: Gallery }
];
GalleryComponent.propDecorators = {
    id: [{ type: Input }],
    items: [{ type: Input }],
    nav: [{ type: Input }],
    dots: [{ type: Input }],
    loop: [{ type: Input }],
    thumb: [{ type: Input }],
    zoomOut: [{ type: Input }],
    counter: [{ type: Input }],
    dotsSize: [{ type: Input }],
    autoPlay: [{ type: Input }],
    gestures: [{ type: Input }],
    thumbWidth: [{ type: Input }],
    thumbHeight: [{ type: Input }],
    disableThumb: [{ type: Input }],
    panSensitivity: [{ type: Input }],
    playerInterval: [{ type: Input }],
    itemTemplate: [{ type: Input }],
    thumbTemplate: [{ type: Input }],
    thumbMode: [{ type: Input }],
    imageSize: [{ type: Input }],
    dotsPosition: [{ type: Input }],
    counterPosition: [{ type: Input }],
    slidingDirection: [{ type: Input }],
    loadingStrategy: [{ type: Input }],
    thumbPosition: [{ type: Input }],
    destroyRef: [{ type: Input }],
    skipInitConfig: [{ type: Input }],
    itemClick: [{ type: Output }],
    thumbClick: [{ type: Output }],
    playingChange: [{ type: Output }],
    indexChange: [{ type: Output }],
    itemsChange: [{ type: Output }],
    error: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    GalleryComponent.prototype.galleryRef;
    /** @type {?} */
    GalleryComponent.prototype.id;
    /** @type {?} */
    GalleryComponent.prototype.items;
    /** @type {?} */
    GalleryComponent.prototype.nav;
    /** @type {?} */
    GalleryComponent.prototype.dots;
    /** @type {?} */
    GalleryComponent.prototype.loop;
    /** @type {?} */
    GalleryComponent.prototype.thumb;
    /** @type {?} */
    GalleryComponent.prototype.zoomOut;
    /** @type {?} */
    GalleryComponent.prototype.counter;
    /** @type {?} */
    GalleryComponent.prototype.dotsSize;
    /** @type {?} */
    GalleryComponent.prototype.autoPlay;
    /** @type {?} */
    GalleryComponent.prototype.gestures;
    /** @type {?} */
    GalleryComponent.prototype.thumbWidth;
    /** @type {?} */
    GalleryComponent.prototype.thumbHeight;
    /** @type {?} */
    GalleryComponent.prototype.disableThumb;
    /** @type {?} */
    GalleryComponent.prototype.panSensitivity;
    /** @type {?} */
    GalleryComponent.prototype.playerInterval;
    /** @type {?} */
    GalleryComponent.prototype.itemTemplate;
    /** @type {?} */
    GalleryComponent.prototype.thumbTemplate;
    /** @type {?} */
    GalleryComponent.prototype.thumbMode;
    /** @type {?} */
    GalleryComponent.prototype.imageSize;
    /** @type {?} */
    GalleryComponent.prototype.dotsPosition;
    /** @type {?} */
    GalleryComponent.prototype.counterPosition;
    /** @type {?} */
    GalleryComponent.prototype.slidingDirection;
    /** @type {?} */
    GalleryComponent.prototype.loadingStrategy;
    /** @type {?} */
    GalleryComponent.prototype.thumbPosition;
    /**
     * Destroy gallery ref on component destroy event
     * @type {?}
     */
    GalleryComponent.prototype.destroyRef;
    /**
     * Skip initializing the config with components inputs (Lightbox mode)
     * @type {?}
     */
    GalleryComponent.prototype.skipInitConfig;
    /** @type {?} */
    GalleryComponent.prototype.itemClick;
    /** @type {?} */
    GalleryComponent.prototype.thumbClick;
    /** @type {?} */
    GalleryComponent.prototype.playingChange;
    /** @type {?} */
    GalleryComponent.prototype.indexChange;
    /** @type {?} */
    GalleryComponent.prototype.itemsChange;
    /** @type {?} */
    GalleryComponent.prototype.error;
    /**
     * @type {?}
     * @private
     */
    GalleryComponent.prototype._itemClick$;
    /**
     * @type {?}
     * @private
     */
    GalleryComponent.prototype._thumbClick$;
    /**
     * @type {?}
     * @private
     */
    GalleryComponent.prototype._itemChange$;
    /**
     * @type {?}
     * @private
     */
    GalleryComponent.prototype._indexChange$;
    /**
     * @type {?}
     * @private
     */
    GalleryComponent.prototype._playingChange$;
    /**
     * @type {?}
     * @private
     */
    GalleryComponent.prototype._playerListener$;
    /**
     * @type {?}
     * @private
     */
    GalleryComponent.prototype._gallery;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2FsbGVyeS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Abmd4LWdhbGxlcnkvY29yZS8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2dhbGxlcnkuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULEtBQUssRUFDTCxNQUFNLEVBS04sV0FBVyxFQUNYLFlBQVksRUFDWix1QkFBdUIsRUFDeEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLFlBQVksRUFBb0IsTUFBTSxNQUFNLENBQUM7QUFDdEQsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBR3RELE9BQU8sRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxXQUFXLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQWdCeEYsTUFBTSxPQUFPLGdCQUFnQjs7OztJQW1EM0IsWUFBb0IsUUFBaUI7UUFBakIsYUFBUSxHQUFSLFFBQVEsQ0FBUztRQTlDNUIsUUFBRyxHQUFZLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQztRQUN4QyxTQUFJLEdBQVksSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDO1FBQzFDLFNBQUksR0FBWSxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUM7UUFDMUMsVUFBSyxHQUFZLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQztRQUM1QyxZQUFPLEdBQVcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDO1FBQy9DLFlBQU8sR0FBWSxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUM7UUFDaEQsYUFBUSxHQUFXLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQztRQUNqRCxhQUFRLEdBQVksSUFBSSxDQUFD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TTs0QkFDTixNQUFNOzBCQUNOLE1BQU07MEJBQ04sTUFBTTtvQkFDTixNQUFNOzs7O0lBeENQLHNDQUF1Qjs7SUFDdkIsOEJBQW9COztJQUNwQixpQ0FBK0I7O0lBQy9CLCtCQUFpRDs7SUFDakQsZ0NBQW1EOztJQUNuRCxnQ0FBbUQ7O0lBQ25ELGlDQUFxRDs7SUFDckQsbUNBQXdEOztJQUN4RCxtQ0FBeUQ7O0lBQ3pELG9DQUEwRDs7SUFDMUQsb0NBQTJEOztJQUMzRCxvQ0FBMkQ7O0lBQzNELHNDQUE4RDs7SUFDOUQsdUNBQWdFOztJQUNoRSx3Q0FBbUU7O0lBQ25FLDBDQUFzRTs7SUFDdEUsMENBQXNFOztJQUN0RSx3Q0FBNEU7O0lBQzVFLHlDQUE4RTs7SUFDOUUscUNBQXVFOztJQUN2RSxxQ0FBeUU7O0lBQ3pFLHdDQUE0RTs7SUFDNUUsMkNBQWtGOztJQUNsRiw0Q0FBNkY7O0lBQzdGLDJDQUFnRzs7SUFDaEcseUNBQWlHOzs7OztJQUtqRyxzQ0FBMkI7Ozs7O0lBRzNCLDBDQUFnQzs7SUFFaEMscUNBQWlEOztJQUNqRCxzQ0FBa0Q7O0lBQ2xELHlDQUEyRDs7SUFDM0QsdUNBQXlEOztJQUN6RCx1Q0FBeUQ7O0lBQ3pELGlDQUFtRDs7Ozs7SUFFbkQsdUNBQTJEOzs7OztJQUMzRCx3Q0FBNEQ7Ozs7O0lBQzVELHdDQUE0RDs7Ozs7SUFDNUQseUNBQTZEOzs7OztJQUM3RCwyQ0FBK0Q7Ozs7O0lBQy9ELDRDQUFnRTs7Ozs7SUFFcEQsb0NBQXlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBDb21wb25lbnQsXHJcbiAgSW5wdXQsXHJcbiAgT3V0cHV0LFxyXG4gIE9uSW5pdCxcclxuICBPbkNoYW5nZXMsXHJcbiAgT25EZXN0cm95LFxyXG4gIFNpbXBsZUNoYW5nZXMsXHJcbiAgVGVtcGxhdGVSZWYsXHJcbiAgRXZlbnRFbWl0dGVyLFxyXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5XHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiwgU3Vic2NyaXB0aW9uTGlrZSB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBHYWxsZXJ5IH0gZnJvbSAnLi4vc2VydmljZXMvZ2FsbGVyeS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgR2FsbGVyeVJlZiB9IGZyb20gJy4uL3NlcnZpY2VzL2dhbGxlcnktcmVmJztcclxuaW1wb3J0IHsgR2FsbGVyeUVycm9yLCBHYWxsZXJ5SXRlbSwgR2FsbGVyeVN0YXRlIH0gZnJvbSAnLi4vbW9kZWxzL2dhbGxlcnkubW9kZWwnO1xyXG5pbXBvcnQgeyBJZnJhbWVJdGVtLCBJbWFnZUl0ZW0sIFZpZGVvSXRlbSwgWW91dHViZUl0ZW0gfSBmcm9tICcuL3RlbXBsYXRlcy9pdGVtcy5tb2RlbCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2dhbGxlcnknLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxyXG4gIHN0eWxlVXJsczogWycuLi9zdHlsZXMvZ2FsbGVyeS5zY3NzJ10sXHJcbiAgdGVtcGxhdGU6IGBcclxuICAgIDxnYWxsZXJ5LWNvcmUgW3N0YXRlXT1cImdhbGxlcnlSZWYuc3RhdGUgfCBhc3luY1wiXHJcbiAgICAgICAgICAgICAgICAgIFtjb25maWddPVwiZ2FsbGVyeVJlZi5jb25maWcgfCBhc3luY1wiXHJcbiAgICAgICAgICAgICAgICAgIChhY3Rpb24pPVwib25BY3Rpb24oJGV2ZW50KVwiXHJcbiAgICAgICAgICAgICAgICAgIChpdGVtQ2xpY2spPVwib25JdGVtQ2xpY2soJGV2ZW50KVwiXHJcbiAgICAgICAgICAgICAgICAgICh0aHVtYkNsaWNrKT1cIm9uVGh1bWJDbGljaygkZXZlbnQpXCJcclxuICAgICAgICAgICAgICAgICAgKGVycm9yKT1cIm9uRXJyb3IoJGV2ZW50KVwiPjwvZ2FsbGVyeS1jb3JlPlxyXG4gICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxyXG4gIGBcclxufSlcclxuZXhwb3J0IGNsYXNzIEdhbGxlcnlDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcywgT25EZXN0cm95IHtcclxuXHJcbiAgZ2FsbGVyeVJlZjogR2FsbGVyeVJlZjtcclxuICBASW5wdXQoKSBpZDogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIGl0ZW1zOiBHYWxsZXJ5SXRlbSBbXTtcclxuICBASW5wdXQoKSBuYXY6IGJvb2xlYW4gPSB0aGlzLl9nYWxsZXJ5LmNvbmZpZy5uYXY7XHJcbiAgQElucHV0KCkgZG90czogYm9vbGVhbiA9IHRoaXMuX2dhbGxlcnkuY29uZmlnLmRvdHM7XHJcbiAgQElucHV0KCkgbG9vcDogYm9vbGVhbiA9IHRoaXMuX2dhbGxlcnkuY29uZmlnLmxvb3A7XHJcbiAgQElucHV0KCkgdGh1bWI6IGJvb2xlYW4gPSB0aGlzLl9nYWxsZXJ5LmNvbmZpZy50aHVtYjtcclxuICBASW5wdXQoKSB6b29tT3V0OiBudW1iZXIgPSB0aGlzLl9nYWxsZXJ5LmNvbmZpZy56b29tT3V0O1xyXG4gIEBJbnB1dCgpIGNvdW50ZXI6IGJvb2xlYW4gPSB0aGlzLl9nYWxsZXJ5LmNvbmZpZy5jb3VudGVyO1xyXG4gIEBJbnB1dCgpIGRvdHNTaXplOiBudW1iZXIgPSB0aGlzLl9nYWxsZXJ5LmNvbmZpZy5kb3RzU2l6ZTtcclxuICBASW5wdXQoKSBhdXRvUGxheTogYm9vbGVhbiA9IHRoaXMuX2dhbGxlcnkuY29uZmlnLmF1dG9QbGF5O1xyXG4gIEBJbnB1dCgpIGdlc3R1cmVzOiBib29sZWFuID0gdGhpcy5fZ2FsbGVyeS5jb25maWcuZ2VzdHVyZXM7XHJcbiAgQElucHV0KCkgdGh1bWJXaWR0aDogbnVtYmVyID0gdGhpcy5fZ2FsbGVyeS5jb25maWcudGh1bWJXaWR0aDtcclxuICBASW5wdXQoKSB0aHVtYkhlaWdodDogbnVtYmVyID0gdGhpcy5fZ2FsbGVyeS5jb25maWcudGh1bWJIZWlnaHQ7XHJcbiAgQElucHV0KCkgZGlzYWJsZVRodW1iOiBib29sZWFuID0gdGhpcy5fZ2FsbGVyeS5jb25maWcuZGlzYWJsZVRodW1iO1xyXG4gIEBJbnB1dCgpIHBhblNlbnNpdGl2aXR5OiBudW1iZXIgPSB0aGlzLl9nYWxsZXJ5LmNvbmZpZy5wYW5TZW5zaXRpdml0eTtcclxuICBASW5wdXQoKSBwbGF5ZXJJbnRlcnZhbDogbnVtYmVyID0gdGhpcy5fZ2FsbGVyeS5jb25maWcucGxheWVySW50ZXJ2YWw7XHJcbiAgQElucHV0KCkgaXRlbVRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+ID0gdGhpcy5fZ2FsbGVyeS5jb25maWcuaXRlbVRlbXBsYXRlO1xyXG4gIEBJbnB1dCgpIHRodW1iVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT4gPSB0aGlzLl9nYWxsZXJ5LmNvbmZpZy50aHVtYlRlbXBsYXRlO1xyXG4gIEBJbnB1dCgpIHRodW1iTW9kZTogJ3N0cmljdCcgfCAnZnJlZScgPSB0aGlzLl9nYWxsZXJ5LmNvbmZpZy50aHVtYk1vZGU7XHJcbiAgQElucHV0KCkgaW1hZ2VTaXplOiAnY292ZXInIHwgJ2NvbnRhaW4nID0gdGhpcy5fZ2FsbGVyeS5jb25maWcuaW1hZ2VTaXplO1xyXG4gIEBJbnB1dCgpIGRvdHNQb3NpdGlvbjogJ3RvcCcgfCAnYm90dG9tJyA9IHRoaXMuX2dhbGxlcnkuY29uZmlnLmRvdHNQb3NpdGlvbjtcclxuICBASW5wdXQoKSBjb3VudGVyUG9zaXRpb246ICd0b3AnIHwgJ2JvdHRvbScgPSB0aGlzLl9nYWxsZXJ5LmNvbmZpZy5jb3VudGVyUG9zaXRpb247XHJcbiAgQElucHV0KCkgc2xpZGluZ0RpcmVjdGlvbjogJ2hvcml6b250YWwnIHwgJ3ZlcnRpY2FsJyA9IHRoaXMuX2dhbGxlcnkuY29uZmlnLnNsaWRpbmdEaXJlY3Rpb247XHJcbiAgQElucHV0KCkgbG9hZGluZ1N0cmF0ZWd5OiAncHJlbG9hZCcgfCAnbGF6eScgfCAnZGVmYXVsdCcgPSB0aGlzLl9nYWxsZXJ5LmNvbmZpZy5sb2FkaW5nU3RyYXRlZ3k7XHJcbiAgQElucHV0KCkgdGh1bWJQb3NpdGlvbjogJ3RvcCcgfCAnbGVmdCcgfCAncmlnaHQnIHwgJ2JvdHRvbScgPSB0aGlzLl9nYWxsZXJ5LmNvbmZpZy50aHVtYlBvc2l0aW9uO1xyXG5cclxuICAvLyBJbnB1dHMgdXNlZCBieSB0aGUgbGlnaHRib3hcclxuXHJcbiAgLyoqIERlc3Ryb3kgZ2FsbGVyeSByZWYgb24gY29tcG9uZW50IGRlc3Ryb3kgZXZlbnQgKi9cclxuICBASW5wdXQoKSBkZXN0cm95UmVmID0gdHJ1ZTtcclxuXHJcbiAgLyoqIFNraXAgaW5pdGlhbGl6aW5nIHRoZSBjb25maWcgd2l0aCBjb21wb25lbnRzIGlucHV0cyAoTGlnaHRib3ggbW9kZSkgKi9cclxuICBASW5wdXQoKSBza2lwSW5pdENvbmZpZyA9IGZhbHNlO1xyXG5cclxuICBAT3V0cHV0KCkgaXRlbUNsaWNrID0gbmV3IEV2ZW50RW1pdHRlcjxudW1iZXI+KCk7XHJcbiAgQE91dHB1dCgpIHRodW1iQ2xpY2sgPSBuZXcgRXZlbnRFbWl0dGVyPG51bWJlcj4oKTtcclxuICBAT3V0cHV0KCkgcGxheWluZ0NoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8R2FsbGVyeVN0YXRlPigpO1xyXG4gIEBPdXRwdXQoKSBpbmRleENoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8R2FsbGVyeVN0YXRlPigpO1xyXG4gIEBPdXRwdXQoKSBpdGVtc0NoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8R2FsbGVyeVN0YXRlPigpO1xyXG4gIEBPdXRwdXQoKSBlcnJvciA9IG5ldyBFdmVudEVtaXR0ZXI8R2FsbGVyeUVycm9yPigpO1xyXG5cclxuICBwcml2YXRlIF9pdGVtQ2xpY2skOiBTdWJzY3JpcHRpb25MaWtlID0gU3Vic2NyaXB0aW9uLkVNUFRZO1xyXG4gIHByaXZhdGUgX3RodW1iQ2xpY2skOiBTdWJzY3JpcHRpb25MaWtlID0gU3Vic2NyaXB0aW9uLkVNUFRZO1xyXG4gIHByaXZhdGUgX2l0ZW1DaGFuZ2UkOiBTdWJzY3JpcHRpb25MaWtlID0gU3Vic2NyaXB0aW9uLkVNUFRZO1xyXG4gIHByaXZhdGUgX2luZGV4Q2hhbmdlJDogU3Vic2NyaXB0aW9uTGlrZSA9IFN1YnNjcmlwdGlvbi5FTVBUWTtcclxuICBwcml2YXRlIF9wbGF5aW5nQ2hhbmdlJDogU3Vic2NyaXB0aW9uTGlrZSA9IFN1YnNjcmlwdGlvbi5FTVBUWTtcclxuICBwcml2YXRlIF9wbGF5ZXJMaXN0ZW5lciQ6IFN1YnNjcmlwdGlvbkxpa2UgPSBTdWJzY3JpcHRpb24uRU1QVFk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX2dhbGxlcnk6IEdhbGxlcnkpIHtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZ2V0Q29uZmlnKCkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgbmF2OiB0aGlzLm5hdixcclxuICAgICAgZG90czogdGhpcy5kb3RzLFxyXG4gICAgICBsb29wOiB0aGlzLmxvb3AsXHJcbiAgICAgIHRodW1iOiB0aGlzLnRodW1iLFxyXG4gICAgICB6b29tT3V0OiB0aGlzLnpvb21PdXQsXHJcbiAgICAgIGNvdW50ZXI6IHRoaXMuY291bnRlcixcclxuICAgICAgYXV0b1BsYXk6IHRoaXMuYXV0b1BsYXksXHJcbiAgICAgIGdlc3R1cmVzOiB0aGlzLmdlc3R1cmVzLFxyXG4gICAgICBkb3RzU2l6ZTogdGhpcy5kb3RzU2l6ZSxcclxuICAgICAgaW1hZ2VTaXplOiB0aGlzLmltYWdlU2l6ZSxcclxuICAgICAgdGh1bWJNb2RlOiB0aGlzLnRodW1iTW9kZSxcclxuICAgICAgdGh1bWJXaWR0aDogdGhpcy50aHVtYldpZHRoLFxyXG4gICAgICB0aHVtYkhlaWdodDogdGhpcy50aHVtYkhlaWdodCxcclxuICAgICAgZGlzYWJsZVRodW1iOiB0aGlzLmRpc2FibGVUaHVtYixcclxuICAgICAgZG90c1Bvc2l0aW9uOiB0aGlzLmRvdHNQb3NpdGlvbixcclxuICAgICAgaXRlbVRlbXBsYXRlOiB0aGlzLml0ZW1UZW1wbGF0ZSxcclxuICAgICAgdGh1bWJUZW1wbGF0ZTogdGhpcy50aHVtYlRlbXBsYXRlLFxyXG4gICAgICB0aHVtYlBvc2l0aW9uOiB0aGlzLnRodW1iUG9zaXRpb24sXHJcbiAgICAgIHBhblNlbnNpdGl2aXR5OiB0aGlzLnBhblNlbnNpdGl2aXR5LFxyXG4gICAgICBwbGF5ZXJJbnRlcnZhbDogdGhpcy5wbGF5ZXJJbnRlcnZhbCxcclxuICAgICAgY291bnRlclBvc2l0aW9uOiB0aGlzLmNvdW50ZXJQb3NpdGlvbixcclxuICAgICAgbG9hZGluZ1N0cmF0ZWd5OiB0aGlzLmxvYWRpbmdTdHJhdGVneSxcclxuICAgICAgc2xpZGluZ0RpcmVjdGlvbjogdGhpcy5zbGlkaW5nRGlyZWN0aW9uXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgb25BY3Rpb24oaTogc3RyaW5nIHwgbnVtYmVyKSB7XHJcbiAgICBzd2l0Y2ggKGkpIHtcclxuICAgICAgY2FzZSAnbmV4dCc6XHJcbiAgICAgICAgdGhpcy5nYWxsZXJ5UmVmLm5leHQoKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSAncHJldic6XHJcbiAgICAgICAgdGhpcy5nYWxsZXJ5UmVmLnByZXYoKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgZGVmYXVsdDpcclxuICAgICAgICB0aGlzLmdhbGxlcnlSZWYuc2V0KDxudW1iZXI+aSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XHJcbiAgICBpZiAodGhpcy5nYWxsZXJ5UmVmKSB7XHJcbiAgICAgIHRoaXMuZ2FsbGVyeVJlZi5zZXRDb25maWcodGhpcy5nZXRDb25maWcoKSk7XHJcblxyXG4gICAgICBpZiAoY2hhbmdlcy5pdGVtcyAmJiBjaGFuZ2VzLml0ZW1zLmN1cnJlbnRWYWx1ZSAhPT0gY2hhbmdlcy5pdGVtcy5wcmV2aW91c1ZhbHVlKSB7XHJcbiAgICAgICAgdGhpcy5sb2FkKHRoaXMuaXRlbXMpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIC8vIEdldCBnYWxsZXJ5IGluc3RhbmNlIGJ5IGlkXHJcbiAgICBpZiAodGhpcy5za2lwSW5pdENvbmZpZykge1xyXG4gICAgICB0aGlzLmdhbGxlcnlSZWYgPSB0aGlzLl9nYWxsZXJ5LnJlZih0aGlzLmlkKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuZ2FsbGVyeVJlZiA9IHRoaXMuX2dhbGxlcnkucmVmKHRoaXMuaWQsIHRoaXMuZ2V0Q29uZmlnKCkpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIExvYWQgZ2FsbGVyeSBpdGVtc1xyXG4gICAgdGhpcy5sb2FkKHRoaXMuaXRlbXMpO1xyXG5cclxuICAgIC8vIEFjdGl2YXRlIHBsYXllciBsaXN0ZW5lclxyXG4gICAgdGhpcy5fcGxheWVyTGlzdGVuZXIkID0gdGhpcy5nYWxsZXJ5UmVmLmFjdGl2YXRlUGxheWVyKCkuc3Vic2NyaWJlKCk7XHJcblxyXG4gICAgLy8gU3Vic2NyaWJlcyB0byBldmVudHMgb24gZGVtYW5kXHJcbiAgICBpZiAodGhpcy5pbmRleENoYW5nZS5vYnNlcnZlcnMubGVuZ3RoKSB7XHJcbiAgICAgIHRoaXMuX2luZGV4Q2hhbmdlJCA9IHRoaXMuZ2FsbGVyeVJlZi5pbmRleENoYW5nZWQuc3Vic2NyaWJlKChzdGF0ZTogR2FsbGVyeVN0YXRlKSA9PiB0aGlzLmluZGV4Q2hhbmdlLmVtaXQoc3RhdGUpKTtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLml0ZW1zQ2hhbmdlLm9ic2VydmVycy5sZW5ndGgpIHtcclxuICAgICAgdGhpcy5faXRlbUNoYW5nZSQgPSB0aGlzLmdhbGxlcnlSZWYuaXRlbXNDaGFuZ2VkLnN1YnNjcmliZSgoc3RhdGU6IEdhbGxlcnlTdGF0ZSkgPT4gdGhpcy5pdGVtc0NoYW5nZS5lbWl0KHN0YXRlKSk7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5wbGF5aW5nQ2hhbmdlLm9ic2VydmVycy5sZW5ndGgpIHtcclxuICAgICAgdGhpcy5fcGxheWluZ0NoYW5nZSQgPSB0aGlzLmdhbGxlcnlSZWYucGxheWluZ0NoYW5nZWQuc3Vic2NyaWJlKChzdGF0ZTogR2FsbGVyeVN0YXRlKSA9PiB0aGlzLnBsYXlpbmdDaGFuZ2UuZW1pdChzdGF0ZSkpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFN0YXJ0IHBsYXlpbmcgaWYgYXV0by1wbGF5IGlzIHNldCB0byB0cnVlXHJcbiAgICBpZiAodGhpcy5hdXRvUGxheSkge1xyXG4gICAgICB0aGlzLnBsYXkoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCkge1xyXG4gICAgdGhpcy5faXRlbUNsaWNrJC51bnN1YnNjcmliZSgpO1xyXG4gICAgdGhpcy5fdGh1bWJDbGljayQudW5zdWJzY3JpYmUoKTtcclxuICAgIHRoaXMuX2l0ZW1DaGFuZ2UkLnVuc3Vic2NyaWJlKCk7XHJcbiAgICB0aGlzLl9pbmRleENoYW5nZSQudW5zdWJzY3JpYmUoKTtcclxuICAgIHRoaXMuX3BsYXlpbmdDaGFuZ2UkLnVuc3Vic2NyaWJlKCk7XHJcbiAgICB0aGlzLl9wbGF5ZXJMaXN0ZW5lciQudW5zdWJzY3JpYmUoKTtcclxuICAgIGlmICh0aGlzLmRlc3Ryb3lSZWYpIHtcclxuICAgICAgdGhpcy5nYWxsZXJ5UmVmLmRlc3Ryb3koKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG9uSXRlbUNsaWNrKGk6IG51bWJlcikge1xyXG4gICAgdGhpcy5pdGVtQ2xpY2suZW1pdChpKTtcclxuICAgIHRoaXMuZ2FsbGVyeVJlZi5pdGVtQ2xpY2submV4dChpKTtcclxuICB9XHJcblxyXG4gIG9uVGh1bWJDbGljayhpOiBudW1iZXIpIHtcclxuICAgIHRoaXMuZ2FsbGVyeVJlZi5zZXQoaSk7XHJcbiAgICB0aGlzLnRodW1iQ2xpY2suZW1pdChpKTtcclxuICAgIHRoaXMuZ2FsbGVyeVJlZi50aHVtYkNsaWNrLm5leHQoaSk7XHJcbiAgfVxyXG5cclxuICBvbkVycm9yKGVycjogR2FsbGVyeUVycm9yKSB7XHJcbiAgICB0aGlzLmVycm9yLmVtaXQoZXJyKTtcclxuICAgIHRoaXMuZ2FsbGVyeVJlZi5lcnJvci5uZXh0KGVycik7XHJcbiAgfVxyXG5cclxuICBsb2FkKGl0ZW1zOiBHYWxsZXJ5SXRlbVtdKSB7XHJcbiAgICB0aGlzLmdhbGxlcnlSZWYubG9hZChpdGVtcyk7XHJcbiAgfVxyXG5cclxuICBhZGQoaXRlbTogR2FsbGVyeUl0ZW0sIGFjdGl2ZT86IGJvb2xlYW4pIHtcclxuICAgIHRoaXMuZ2FsbGVyeVJlZi5hZGQoaXRlbSwgYWN0aXZlKTtcclxuICB9XHJcblxyXG4gIGFkZEltYWdlKGRhdGE6IGFueSwgYWN0aXZlPzogYm9vbGVhbikge1xyXG4gICAgdGhpcy5hZGQobmV3IEltYWdlSXRlbShkYXRhKSwgYWN0aXZlKTtcclxuICB9XHJcblxyXG4gIGFkZFZpZGVvKGRhdGE6IGFueSwgYWN0aXZlPzogYm9vbGVhbikge1xyXG4gICAgdGhpcy5hZGQobmV3IFZpZGVvSXRlbShkYXRhKSwgYWN0aXZlKTtcclxuICB9XHJcblxyXG4gIGFkZElmcmFtZShkYXRhOiBhbnksIGFjdGl2ZT86IGJvb2xlYW4pIHtcclxuICAgIHRoaXMuYWRkKG5ldyBJZnJhbWVJdGVtKGRhdGEpLCBhY3RpdmUpO1xyXG4gIH1cclxuXHJcbiAgYWRkWW91dHViZShkYXRhOiBhbnksIGFjdGl2ZT86IGJvb2xlYW4pIHtcclxuICAgIHRoaXMuYWRkKG5ldyBZb3V0dWJlSXRlbShkYXRhKSwgYWN0aXZlKTtcclxuICB9XHJcblxyXG4gIHJlbW92ZShpOiBudW1iZXIpIHtcclxuICAgIHRoaXMuZ2FsbGVyeVJlZi5yZW1vdmUoaSk7XHJcbiAgfVxyXG5cclxuICBuZXh0KCkge1xyXG4gICAgdGhpcy5nYWxsZXJ5UmVmLm5leHQoKTtcclxuICB9XHJcblxyXG4gIHByZXYoKSB7XHJcbiAgICB0aGlzLmdhbGxlcnlSZWYucHJldigpO1xyXG4gIH1cclxuXHJcbiAgc2V0KGk6IG51bWJlcikge1xyXG4gICAgdGhpcy5nYWxsZXJ5UmVmLnNldChpKTtcclxuICB9XHJcblxyXG4gIHJlc2V0KCkge1xyXG4gICAgdGhpcy5nYWxsZXJ5UmVmLnJlc2V0KCk7XHJcbiAgfVxyXG5cclxuICBwbGF5KGludGVydmFsPzogbnVtYmVyKSB7XHJcbiAgICB0aGlzLmdhbGxlcnlSZWYucGxheShpbnRlcnZhbCk7XHJcbiAgfVxyXG5cclxuICBzdG9wKCkge1xyXG4gICAgdGhpcy5nYWxsZXJ5UmVmLnN0b3AoKTtcclxuICB9XHJcbn1cclxuIl19