/**
 * @jest-environment jsdom
 */


const fs = require('fs');
const path = require('path');


beforeEach(() => {
    // Initialize the matchMedia mock
    // Clear the document first
    document.documentElement.innerHTML = '';

    // Load real HTML
    const html = fs.readFileSync(path.resolve(__dirname, '../container-basic/index.html'), 'utf8');
    document.documentElement.innerHTML = html;

    // Load real CSS
    const css = fs.readFileSync(path.resolve(__dirname, '../container-basic/style-grid.css'), 'utf8');
    const styleTag = document.createElement('style');
    styleTag.textContent = css;
    document.head.appendChild(styleTag);
});

function expectStyleMatchIgnoringSpaces(received, expected) {
    expect(received.replace(/\s/g, '')).toBe(expected.replace(/\s/g, ''));
}

describe('Responsive Grid CSS layout', () => {
    test('wrapper has correct base grid styles', () => {
        const wrapper = document.querySelector(".wrapper");
        expect(wrapper).not.toBeNull();

        const styles = window.getComputedStyle(wrapper);
        expect(styles.display).toBe('grid');
        expect(styles.gridTemplateColumns).toBe('1fr 2fr 1fr');
        expect(styles.gridTemplateRows).toBe('1fr 1fr 3fr 1fr 1fr 2fr');
        expect(styles.backgroundColor).toBe('rgb(234, 242, 227)');
        expect(styles.boxSizing).toBe('border-box');
        expect(styles.height).toBe('100vh');
    });

    test('header occupies correct grid area', () => {
        const header = document.querySelector(".header");
        expect(header).not.toBeNull();
        const styles = window.getComputedStyle(header);
        expectStyleMatchIgnoringSpaces(styles.gridColumn, '1 / 4');
        expectStyleMatchIgnoringSpaces(styles.gridRow, '1 / 2');
    });

    test('menu has correct grid placement on desktop', () => {
        const menu = document.querySelector(".menu");
        expect(menu).not.toBeNull();
        const styles = window.getComputedStyle(menu);
        expectStyleMatchIgnoringSpaces(styles.gridColumn, '1 / 2');
        expectStyleMatchIgnoringSpaces(styles.gridRow, '2 / 4');
    });

    test('main section grid placement on desktop', () => {
        const main = document.querySelector(".main");
        expect(main).not.toBeNull();
        const styles = window.getComputedStyle(main);
        expectStyleMatchIgnoringSpaces(styles.gridColumn, '2 / 3');
        expectStyleMatchIgnoringSpaces(styles.gridRow, '2 / 6');
    });

    test('ad1 placement on desktop', () => {
        const ad1 = document.querySelector(".ad1");
        expect(ad1).not.toBeNull();
        const styles = window.getComputedStyle(ad1);
        expectStyleMatchIgnoringSpaces(styles.gridColumn, '3 / 4');
        expectStyleMatchIgnoringSpaces(styles.gridRow, '2 / 6');
    });

    test('ad2 placement on desktop', () => {
        const ad2 = document.querySelector(".ad2");
        expect(ad2).not.toBeNull();
        const styles = window.getComputedStyle(ad2);
        expectStyleMatchIgnoringSpaces(styles.gridColumn, '1 / 2');
        expectStyleMatchIgnoringSpaces(styles.gridRow, '4 / 6');
    });

    test('footer placement on desktop', () => {
        const footer = document.querySelector(".footer");
        expect(footer).not.toBeNull();
        const styles = window.getComputedStyle(footer);
        expectStyleMatchIgnoringSpaces(styles.gridColumn, '1 / 4');
        expectStyleMatchIgnoringSpaces(styles.gridRow, '6 / 7');
    });
});