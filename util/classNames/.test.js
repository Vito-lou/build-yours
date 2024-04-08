import { describe, it, expect, vi } from 'vitest'
import classNames from './index.ts'

describe('classNames', () => {
    it('should handle string arguments', () => {
        expect(classNames('class1', 'class2', 'class3')).toBe('class1 class2 class3')
    })
    it('should ignore falsy arguments', () => {
        expect(classNames('class1', false, null, undefined, '')).toBe('class1')
    })
    it('should handle array arguments', () => {
        expect(classNames(['class1', 'class2'], 'class3')).toBe('class1 class2 class3');
    });
    it('should handle object arguments', () => {
        const classes = { 'class1': true, 'class2': false, 'class3': true };
        expect(classNames(classes)).toBe('class1 class3');
    });
    it('should concatenate and deduplicate class names', () => {
        expect(classNames('class1', 'class1', 'class2', 'class2')).toBe('class1 class2');
        expect(classNames(['class1', 'class2'], ['class2', 'class3'])).toBe('class1 class2 class3');
    });
    it('should warn on invalid arguments', () => {
        const consoleWarnMock = vi.spyOn(console, 'warn').mockImplementation(() => { });
        classNames(() => { });
        expect(consoleWarnMock).toHaveBeenCalled();
        consoleWarnMock.mockRestore();
    })
})