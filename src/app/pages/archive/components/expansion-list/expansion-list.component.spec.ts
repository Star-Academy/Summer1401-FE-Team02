import {ComponentFixture, TestBed} from '@angular/core/testing';
import {FilterPipe} from 'src/app/pipes/filter.pipe';

import {ExpansionListComponent} from './expansion-list.component';

const expansionData = [
    {
        id: 2,
        title: 'Point-and-click',
        isEnabled: false,
    },
    {
        id: 4,
        title: 'Fighting',
        isEnabled: false,
    },
    {
        id: 5,
        title: 'Shooter',
        isEnabled: false,
    },
    {
        id: 7,
        title: 'Music',
        isEnabled: false,
    },
];

describe('ExpansionListComponent', () => {
    let component: ExpansionListComponent;
    let fixture: ComponentFixture<ExpansionListComponent>;
    let host: HTMLElement;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ExpansionListComponent, FilterPipe],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(ExpansionListComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
        host = fixture.nativeElement as HTMLElement;
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    // it('should change', () => {
    //     component.items = expansionData;
    //     component.isExpanded = true;
    //     fixture.detectChanges();

    //     spyOn(component.itemsChange, 'emit');
    //     const checkbox = host.querySelector(
    //         `input[id="${expansionData[0].id + expansionData[0].title}"]`
    //     ) as HTMLInputElement;
    //     checkbox.dispatchEvent(new Event('changeS'));
    //     fixture.detectChanges();
    //     expect(component.itemsChange.emit).toHaveBeenCalledWith([
    //         {...expansionData[0], isEnabled: true},
    //         ...expansionData.slice(1),
    //     ]);
    // });
});
