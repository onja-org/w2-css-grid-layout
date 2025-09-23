/**
 * @jest-environment jsdom
 */

const fs = require('fs');
const path = require('path');

beforeEach(() => {
    document.documentElement.innerHTML = '';

    // Load HTML
    const html = fs.readFileSync(path.resolve(__dirname, '../grid-area/index.html'), 'utf8');
    document.documentElement.innerHTML = html;

    // Load CSS
    const css = fs.readFileSync(path.resolve(__dirname, '../grid-area/style-grid-area.css'), 'utf8');
    const style = document.createElement('style');
    style.textContent = css;
    document.head.appendChild(style);
});

function expectStyleMatchIgnoringSpaces(received, expected) {
    expect(received.replace(/\s/g, '')).toBe(expected.replace(/\s/g, ''));
}

describe('Grid Area Layout', () => {
    test('.wrapper should have display grid and correct grid-template-areas', () => {
        const wrapper = document.querySelector('.wrapper');
        expect(wrapper).not.toBeNull();

        const styles = window.getComputedStyle(wrapper);
        expect(styles.display).toBe('grid');

        const expectedAreas = `'header header header'
            'nav nav nav'
            'sidebar main advertising'
            'footer footer footer'`;

        expectStyleMatchIgnoringSpaces(styles.gridTemplateAreas, expectedAreas);
    });

    test('header has grid-area: header', () => {
        const header = document.querySelector('header');
        expect(header).not.toBeNull();
        const styles = window.getComputedStyle(header);
        expect(styles.gridArea).toBe('header');
    });

    test('nav has grid-area: nav', () => {
        const nav = document.querySelector('nav');
        expect(nav).not.toBeNull();
        const styles = window.getComputedStyle(nav);
        expect(styles.gridArea).toBe('nav');
    });

    test('sidebar has grid-area: sidebar', () => {
        const sidebar = document.querySelector('aside.sidebar');
        expect(sidebar).not.toBeNull();
        const styles = window.getComputedStyle(sidebar);
        expect(styles.gridArea).toBe('sidebar');
    });

    test('main has grid-area: main', () => {
        const main = document.querySelector('main');
        expect(main).not.toBeNull();
        const styles = window.getComputedStyle(main);
        expect(styles.gridArea).toBe('main');
    });

    test('advertising has grid-area: advertising', () => {
        const ad = document.querySelector('aside.advertising');
        expect(ad).not.toBeNull();
        const styles = window.getComputedStyle(ad);
        expect(styles.gridArea).toBe('advertising');
    });

    test('footer has grid-area: footer', () => {
        const footer = document.querySelector('footer');
        expect(footer).not.toBeNull();
        const styles = window.getComputedStyle(footer);
        expect(styles.gridArea).toBe('footer');
    });
});
