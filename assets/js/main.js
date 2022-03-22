import 'lazysizes';
// import the whole bootstrap library
// import * as bootstrap from 'bootstrap';

// import only the required the required parts of the library
import { 
  // Alert, 
  // Button, 
  // Carousel, 
  Collapse, 
  // Dropdown, 
  // Modal, 
  // Offcanvas, 
  // Popover, 
  // ScrollSpy, 
  // Tab, 
  // Toast, 
  // Tooltip 
} from 'bootstrap';

// create a dynamic year and insert into the js-year span
document.getElementById('js-year').innerHTML = new Date().getFullYear();