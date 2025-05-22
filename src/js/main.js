// Import our custom CSS
import '../scss/styles.scss'

// Import all of Bootstrap’s JS
import * as bootstrap from 'bootstrap'

import { NavbarUser } from './components/NavbarUser.js';

const currentPage = window.location.pathname.split('/').pop();

const navbarContainer = document.getElementById('navbar-placeholder');
if (navbarContainer) {
  navbarContainer.innerHTML = NavbarUser(currentPage);
}