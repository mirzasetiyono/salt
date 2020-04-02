import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SideDisplayComponent } from './side-display.component';

describe('SideDisplayComponent', () => {
    let component: SideDisplayComponent;
    let fixture: ComponentFixture<SideDisplayComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [SideDisplayComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(SideDisplayComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
