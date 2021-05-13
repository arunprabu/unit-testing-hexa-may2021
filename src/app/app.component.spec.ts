import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

// Taking the AppComponent for testing
// group of related test spec
describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });


  // test spec
  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent); // taking up the comp for testing
    const app = fixture.componentInstance; // taking up the comp.ts for testing
    expect(app).toBeTruthy();
  });

  // test spec
  it(`should have as title 'unit-testing-hexa-may2021'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('unit-testing-hexa-may2021');
  });

  // test spec
  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement; // taking the app.comp.html
    expect(compiled.querySelector('.content span').textContent).toContain('unit-testing-hexa-may2021 app is running!');
  });

  // test spec
  it('should add properly', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance; // taking up the app.comp.ts for testing
    expect(app.add(10, 20)).toEqual(30);
  });

  it('should have a h1 with Welcome', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement; // taking the app.comp.html
    expect(compiled.querySelector('h1').textContent).toEqual('Welcome');
  });
});
