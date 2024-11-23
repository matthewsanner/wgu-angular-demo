import { HighlightDirective } from './highlight.directive';

describe('HighlightDirective', () => {
  it('should create an instance', () => {
    // Create a mock for ElementRef
    const mockElementRef = {
      nativeElement: document.createElement('div'),
    };
    const directive = new HighlightDirective(mockElementRef as any);
    expect(directive).toBeTruthy();
  });
});
