
/**
 * Scrolls smoothly to the specified element ID
 */
export const scrollToSection = (elementId: string): void => {
  // Map of navbar link IDs to actual section IDs in the DOM
  const idMap: Record<string, string> = {
    "iot-connectivity": "services",
    "remote-monitoring": "services", 
    "custom-iot": "services",
    "printing-3d": "services",
    "white-label": "solutions",
    "dashboards": "solutions",
    "custom-apps": "solutions",
    "reports": "solutions",
    "manufacturing": "industries",
    "healthcare": "industries",
    "smart-city": "industries",
    "agriculture": "industries"
  };
  
  // Get the actual section ID to scroll to (from the map or use the original)
  const targetId = idMap[elementId] || elementId;
  
  const element = document.getElementById(targetId);
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
    
    // Update URL hash without scrolling (to maintain state)
    history.pushState(null, "", `#${elementId}`);
    
    // Handle subsection highlighting if needed
    if (idMap[elementId]) {
      setTimeout(() => {
        // Highlight the specific subsection if possible
        const subsection = document.querySelector(`[data-section="${elementId}"]`);
        if (subsection) {
          subsection.scrollIntoView({ behavior: "smooth", block: "nearest" });
        }
      }, 500);
    }
  } else {
    console.warn(`Element with ID "${targetId}" not found.`);
  }
};
