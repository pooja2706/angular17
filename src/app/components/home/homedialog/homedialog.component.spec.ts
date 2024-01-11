import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomedialogComponent } from './homedialog.component';

describe('HomedialogComponent', () => {
  let component: HomedialogComponent;
  let fixture: ComponentFixture<HomedialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomedialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HomedialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
