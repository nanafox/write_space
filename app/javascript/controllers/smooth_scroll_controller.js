import { Controller } from '@hotwired/stimulus';

// Connects to data-controller="smooth-scroll"
export default class extends Controller {
  static targets = ['link'];

  connect() {
    // Handle all anchor links within this controller
    this.element.addEventListener('click', this.handleClick.bind(this));
  }

  handleClick(event) {
    const target = event.target.closest("a[href^='#']");
    if (!target) return;

    event.preventDefault();

    const href = target.getAttribute('href');
    const targetElement = document.querySelector(href);

    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  }

  // Action method for individual links
  scroll(event) {
    event.preventDefault();

    const href = event.currentTarget.getAttribute('href');
    const targetElement = document.querySelector(href);

    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  }
}
