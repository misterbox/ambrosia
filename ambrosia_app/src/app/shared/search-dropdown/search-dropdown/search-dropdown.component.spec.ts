import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchDropdownComponent } from './search-dropdown.component';

describe('SearchDropdownComponent', () => {
  let component: SearchDropdownComponent;
  let fixture: ComponentFixture<SearchDropdownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchDropdownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('get sortedListItems', () => {
    it('should return a list in alphabetical order', () => {
      const items = ['bread', 'apples'];
      component.listItems = items;

      const actual = component.sortedListItems;

      expect(actual[0]).toEqual('apples');
      expect(actual[1]).toEqual('bread');
    });
  });

  describe('onFilterKeyUp', () => {
    it('should filter out expected items from the sorted list items', () => {
      const items = ['bread', 'apples'];
      component.listItems = items;
      const keyUpEvent = {
        target: {
          value: 'br'
        }
      };

      component.onFilterKeyUp(keyUpEvent);
      const actual = component.sortedListItems;

      expect(actual[0]).toEqual('bread');
    });

    it('should return entire item list when input is empty', () => {
      const items = ['bread', 'apples'];
      component.listItems = items;
      const firstKeyUpEvent = {
        target: {
          value: 'br'
        }
      };
      const secondKeyUpEvent = {
        target: {
          value: ''
        }
      };

      component.onFilterKeyUp(firstKeyUpEvent);
      component.onFilterKeyUp(secondKeyUpEvent);
      const actualItems = component.sortedListItems;

      expect(actualItems).toEqual(items.sort());
    });
  });
});
