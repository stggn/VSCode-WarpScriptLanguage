import { AfterViewInit, ElementRef, EventEmitter, NgZone, OnInit, Renderer2 } from '@angular/core';
import { WarpViewComponent } from '../warp-view-component';
import { WarpViewModalComponent } from '../warp-view-modal/warp-view-modal.component';
import { Param } from '../../model/param';
import { WarpViewChartComponent } from '../warp-view-chart/warp-view-chart.component';
import { WarpViewAnnotationComponent } from '../warp-view-annotation/warp-view-annotation.component';
import { WarpViewMapComponent } from '../warp-view-map/warp-view-map.component';
import { WarpViewGtsPopupComponent } from '../warp-view-gts-popup/warp-view-gts-popup.component';
import { ChartBounds } from '../../model/chartBounds';
import { GTS } from '../../model/GTS';
import { DataModel } from '../../model/dataModel';
import { SizeService } from '../../services/resize.service';
/**
 *
 */
export declare class WarpViewPlotComponent extends WarpViewComponent implements OnInit, AfterViewInit {
    el: ElementRef;
    renderer: Renderer2;
    sizeService: SizeService;
    ngZone: NgZone;
    mainPlotDiv: ElementRef;
    timeClip: WarpViewModalComponent;
    modal: WarpViewModalComponent;
    chart: WarpViewChartComponent;
    gtsPopupModal: WarpViewGtsPopupComponent;
    annotation: WarpViewAnnotationComponent;
    map: WarpViewMapComponent;
    timeClipElement: ElementRef;
    GTSTree: ElementRef;
    controls: ElementRef;
    filterInput: ElementRef;
    tzSelector: ElementRef;
    line: ElementRef;
    main: ElementRef;
    private showLine;
    private left;
    type: string;
    gtsFilter: any;
    isAlone: boolean;
    initialChartHeight: number;
    initialMapHeight: number;
    warpViewChartResize: EventEmitter<any>;
    _options: Param;
    _toHide: number[];
    showChart: boolean;
    showMap: boolean;
    timeClipValue: string;
    kbdLastKeyPressed: string[];
    warningMessage: string;
    loading: boolean;
    gtsIdList: number[];
    private kbdCounter;
    private gtsFilterCount;
    private gtsBrowserIndex;
    private _gtsFilter;
    private _type;
    private chartBounds;
    private preventDefaultKeyList;
    private preventDefaultKeyListInModals;
    gtsList: DataModel | GTS[] | string;
    constructor(el: ElementRef, renderer: Renderer2, sizeService: SizeService, ngZone: NgZone);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    handleKeydown(ev: KeyboardEvent): void;
    stateChange(event: any): void;
    boundsDidChange(event: any): void;
    onWarpViewModalClose(): void;
    warpViewSelectedGTS(event: any): void;
    handleMouseMove(evt: MouseEvent): void;
    handleMouseEnter(evt: MouseEvent): void;
    handleMouseOut(evt: MouseEvent): void;
    update(options: any, refresh: any): void;
    inputTextKeyboardEvents(e: KeyboardEvent): void;
    tzSelected(): void;
    getTimeClip(): Promise<ChartBounds>;
    resizeChart(event: any): void;
    drawChart(firstDraw?: boolean): void;
    focus(event: any): void;
    private handleKeyPress;
    applyFilter(): void;
    private pushKbdEvent;
    getTZ(): string[];
    protected convert(data: DataModel): any[];
    onChartDraw($event: any): void;
    private resizeArea;
}