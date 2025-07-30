// Utility function to map gradient strings to color-based hover classes
export function getHoverColorClass(gradient: string): string {
  // Extract the primary color from gradient strings
  if (gradient.includes('blue-primary') || gradient.includes('blue-500') || gradient.includes('blue-400')) {
    return 'laser-hover-blue';
  }
  if (gradient.includes('red-500') || gradient.includes('pink-500')) {
    return 'laser-hover-red';
  }
  if (gradient.includes('green-500') || gradient.includes('emerald-500') || gradient.includes('green-400')) {
    return 'laser-hover-green';
  }
  if (gradient.includes('purple-500') || gradient.includes('violet-500') || gradient.includes('purple-400')) {
    return 'laser-hover-purple';
  }
  if (gradient.includes('orange-500') || gradient.includes('amber-500') || gradient.includes('orange-400')) {
    return 'laser-hover-orange';
  }
  if (gradient.includes('indigo-500')) {
    return 'laser-hover-indigo';
  }
  if (gradient.includes('turquoise-primary') || gradient.includes('cyan-500') || gradient.includes('turquoise-light')) {
    return 'laser-hover-turquoise';
  }
  if (gradient.includes('pink-500')) {
    return 'laser-hover-pink';
  }
  if (gradient.includes('emerald-500')) {
    return 'laser-hover-emerald';
  }
  if (gradient.includes('violet-500')) {
    return 'laser-hover-violet';
  }
  if (gradient.includes('amber-500')) {
    return 'laser-hover-amber';
  }
  if (gradient.includes('aubergine-primary') || gradient.includes('aubergine-light')) {
    return 'laser-hover-purple';
  }
  if (gradient.includes('yellow-500')) {
    return 'laser-hover-amber';
  }
  if (gradient.includes('gray-500') || gradient.includes('gray-400')) {
    return 'laser-hover-blue'; // Default to blue for gray gradients
  }
  
  // Default fallback
  return 'laser-hover';
} 