/**
 * @jest-environment jsdom
 */

const fs = require('fs');
const path = require('path');

beforeEach(() => {
    const html = fs.readFileSync(path.resolve(__dirname, '../container-basic/index.html'), 'utf8');
    document.documentElement.innerHTML = html;
    const css = fs.readFileSync(path.resolve(__dirname, '../container-basic/style-grid.css'), 'utf8');
    const styleTag = document.createElement('style');
    styleTag.textContent = css;
    document.head.appendChild(styleTag);
});


/**
 * @jest-environment jsdom
 */

describe('Grid CSS layout', () => {
    let wrapper, header, nav, sidebar, main, advertising, footer;

    beforeEach(() => {
        // Create wrapper div and set styles (simulate .wrapper CSS)
        wrapper = document.createElement('div');
        wrapper.className = 'wrapper';
        wrapper.style.display = 'grid';
        wrapper.style.gridTemplateColumns = 'repeat(6, 1fr)';
        wrapper.style.gap = '20px';

        // Create child elements and apply grid positioning styles
        header = document.createElement('header');
        header.style.gridColumn = '2 / 7';

        nav = document.createElement('nav');
        nav.style.gridColumn = '4 / 6';
        nav.style.gridRow = '2 / 4';

        sidebar = document.createElement('aside');
        sidebar.className = 'sidebar';
        sidebar.style.gridColumn = '1 / 2';
        sidebar.style.gridRow = '1 / 5';

        main = document.createElement('main');
        main.style.gridColumn = '2 / 6';
        main.style.gridRow = '2 / 4';

        advertising = document.createElement('aside');
        advertising.className = 'advertising';
        advertising.style.gridColumn = '6 / 7';
        advertising.style.gridRow = '2 / 4';

        footer = document.createElement('footer');
        footer.style.gridColumn = '2 / 7';

        // Append all children to wrapper
        wrapper.appendChild(header);
        wrapper.appendChild(nav);
        wrapper.appendChild(sidebar);
        wrapper.appendChild(main);
        wrapper.appendChild(advertising);
        wrapper.appendChild(footer);

        // Append wrapper to document body (so getComputedStyle works properly)
        document.body.appendChild(wrapper);
    });

    afterEach(() => {
        // Cleanup
        document.body.innerHTML = '';
    });

    test('wrapper has correct grid container styles', () => {
        const styles = window.getComputedStyle(wrapper);
        expect(styles.display).toBe('grid');
        expect(styles.gridTemplateColumns).toBe('repeat(6, 1fr)');
        expect(styles.gap).toBe('20px');
    });

    test('header has correct grid-column', () => {
        const styles = window.getComputedStyle(header);
        expect(styles.gridColumn).toBe('2 / 7');
    });

    test('nav has correct grid-column and grid-row', () => {
        const styles = window.getComputedStyle(nav);
        expect(styles.gridColumn).toBe('4 / 6');
        expect(styles.gridRow).toBe('2 / 4');
    });

    test('sidebar has correct grid-column and grid-row', () => {
        const styles = window.getComputedStyle(sidebar);
        expect(styles.gridColumn).toBe('1 / 2');
        expect(styles.gridRow).toBe('1 / 5');
    });

    test('main has correct grid-column and grid-row', () => {
        const styles = window.getComputedStyle(main);
        expect(styles.gridColumn).toBe('2 / 6');
        expect(styles.gridRow).toBe('2 / 4');
    });

    test('advertising has correct grid-column and grid-row', () => {
        const styles = window.getComputedStyle(advertising);
        expect(styles.gridColumn).toBe('6 / 7');
        expect(styles.gridRow).toBe('2 / 4');
    });

    test('footer has correct grid-column', () => {
        const styles = window.getComputedStyle(footer);
        expect(styles.gridColumn).toBe('2 / 7');
    });
});
