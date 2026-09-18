const preset = require('../index');

describe('tailwind-preset-pro', () => {
  it('defines brand color palette', () => {
    expect(preset.theme.extend.colors.brand[500]).toBe('#14b8a6');
  });
  it('provides fluid font size definitions', () => {
    expect(preset.theme.extend.fontSize['fluid-base']).toContain('clamp');
  });
});
