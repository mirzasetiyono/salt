/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { LargeDisplayComponent } from './large-display.component';

describe('LargeDisplayComponent', () => {
    let component: LargeDisplayComponent;
    let fixture: ComponentFixture<LargeDisplayComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [LargeDisplayComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(LargeDisplayComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
