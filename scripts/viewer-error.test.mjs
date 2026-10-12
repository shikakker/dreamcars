import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import vm from 'node:vm';
import test from 'node:test';

const source = readFileSync(new URL('../assets/case.js', import.meta.url), 'utf8');

test('failed Lottie data disables every nonfunctional playback control', () => {
  const elements = new Map();
  for (const id of ['animation','toggle','restart','speed','status','legacy','legacyMount']) {
    elements.set('#'+id, {
      textContent: '',
      disabled: false,
      value: '1',
      listeners: new Map(),
      addEventListener(name, cb) { this.listeners.set(name, cb); },
      querySelector() { return null; },
      append() {},
    });
  }
  const animationHandlers = new Map();
  const animation = {
    addEventListener(name, cb) { animationHandlers.set(name, cb); },
    play() { throw new Error('must not play missing data'); },
    goToAndPlay() { throw new Error('must not restart missing data'); },
    setSpeed() { throw new Error('must not set speed of missing data'); },
  };
  const lottie = { loadAnimation() { return animation; } };
  const document = { querySelector: selector => elements.get(selector) };
  vm.runInNewContext(source, { document, window: { lottie }, lottie, matchMedia: () => ({ matches: false }) });

  assert.equal(typeof animationHandlers.get('data_failed'), 'function');
  animationHandlers.get('data_failed')();
  assert.equal(elements.get('#toggle').disabled, true);
  assert.equal(elements.get('#restart').disabled, true);
  assert.equal(elements.get('#speed').disabled, true);
  assert.match(elements.get('#status').textContent, /unavailable|failed/i);
  assert.doesNotThrow(() => elements.get('#toggle').listeners.get('click')());
  assert.doesNotThrow(() => elements.get('#restart').listeners.get('click')());
});

test('missing external Lottie runtime disables speed selector as well as buttons', () => {
  const elements = new Map();
  for (const id of ['animation','toggle','restart','speed','status','legacy','legacyMount']) {
    elements.set('#'+id, {
      textContent: '', disabled: false, value: '1', listeners: new Map(),
      addEventListener(name, cb) { this.listeners.set(name, cb); },
      querySelector() { return null; }, append() {},
    });
  }
  const document = { querySelector: selector => elements.get(selector) };
  vm.runInNewContext(source, { document, window: { lottie: null }, matchMedia: () => ({ matches: false }) });
  for (const id of ['#toggle','#restart','#speed']) {
    assert.equal(elements.get(id).disabled, true);
  }
});
