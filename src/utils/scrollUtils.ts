
/**
 * Scrolls smoothly to the specified element ID
 */
export const scrollToSection = (elementId: string): void => {
  const element = document.getElementById(elementId);
  if (element) {
    // Close mobile menu if open
    const mobileMenuButton = document.querySelector('[aria-label="Toggle menu"]');
    if (mobileMenuButton && window.innerWidth < 768) {
      (mobileMenuButton as HTMLButtonElement).click();
    }
    
    // Calculate offset to account for fixed header
    const headerHeight = 80; // Approximate header height in pixels
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerHeight;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth"
    });
  }
};
