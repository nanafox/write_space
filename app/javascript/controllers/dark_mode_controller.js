import { Controller } from '@hotwired/stimulus';

export default class extends Controller {
  static targets = ['sun', 'moon'];

  connect() {
    // On connect, set the theme based on localStorage or system preference
    if (
      localStorage.theme === 'dark' ||
      (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    this.updateIcons();
  }

  toggle() {
    // Toggle the 'dark' class on the root element
    document.documentElement.classList.toggle('dark');

    // Update localStorage
    if (document.documentElement.classList.contains('dark')) {
      localStorage.theme = 'dark';
    } else {
      localStorage.theme = 'light';
    }
    this.updateIcons();
  }

  updateIcons() {
    // Update icon visibility based on the current theme
    if (
      localStorage.theme === 'dark' ||
      (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      this.sunTarget.classList.add('hidden');
      this.moonTarget.classList.remove('hidden');
    } else {
      this.sunTarget.classList.remove('hidden');
      this.moonTarget.classList.add('hidden');
    }
  }
}
