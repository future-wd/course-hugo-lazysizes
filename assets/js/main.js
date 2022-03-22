import 'lazysizes';
import 'lazysizes/plugins/native-loading/ls.native-loading';
// native loading config
lazySizes.cfg.nativeLoading = {
	setLoadingAttribute: true,
	disableListeners: {
		scroll: true
	},
};
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