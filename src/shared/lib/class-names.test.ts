import { classNames } from './class-names'

describe('classNames', () => {
  test('with only "cls" param', () => {
    expect(classNames({ cls: 'class' })).toBe('class')
  })

  test('with "cls" and "adds" params', () => {
    const expectedClassNames = 'class1 class2 class3'

    expect(classNames({ cls: 'class1', adds: ['class2', 'class3'] })).toBe(expectedClassNames)
    expect(classNames({ adds: ['class1'] })).toBe('class1')
  })

  test('with "csl", "mods" and "adds" params', () => {
    const mods = { class1: true, class2: false }
    const adds = ['class3']
    const cls = 'class'
    const expectedClassNames = `${cls} class3 class1`

    expect(classNames({ cls, mods, adds })).toBe(expectedClassNames)
  })
})
