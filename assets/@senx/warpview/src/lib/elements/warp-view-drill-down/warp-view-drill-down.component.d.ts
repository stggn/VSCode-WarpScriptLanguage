import { AfterViewInit, ElementRef, NgZone, Renderer2 } from '@angular/core';
import { WarpViewComponent } from '../warp-view-component';
import { Param } from '../../model/param';
import { DataModel } from '../../model/dataModel';
import { SizeService } from '../../services/resize.service';
/**
 *
 */
export declare class WarpViewDrillDownComponent extends WarpViewComponent implements AfterViewInit {
    el: ElementRef;
    renderer: Renderer2;
    sizeService: SizeService;
    ngZone: NgZone;
    heatMapData: any;
    private parentWidth;
    private resizeTimer;
    constructor(el: ElementRef, renderer: Renderer2, sizeService: SizeService, ngZone: NgZone);
    ngAfterViewInit(): void;
    update(options: Param, refresh: boolean): void;
    onResize(): void;
    private drawChart;
    protected convert(data: DataModel): any[];
    private parseData;
}