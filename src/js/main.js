// Import our custom CSS
import "../scss/styles.scss";

// Import all of Bootstrap’s JS
import * as bootstrap from "bootstrap";

import { NavbarUser } from "./components/NavbarUser.js";
import { AdminSidebar } from "./components/AdminSidebar.js";
import { AdminTopbar } from "./components/AdminTopbar.js";

// Dapatkan nama halaman saat ini (sekali saja)
const currentPage = window.location.pathname.split('/').pop();

// Inject Admin Sidebar (jika ada)
const sidebarContainer = document.getElementById('admin-sidebar');
if (sidebarContainer) {
  sidebarContainer.innerHTML = AdminSidebar(currentPage);
}

// Inject Admin Topbar (jika ada)
const topbarContainer = document.getElementById('admin-topbar');
if (topbarContainer) {
  topbarContainer.innerHTML = AdminTopbar();
}

// Inject User Navbar (jika ada)
const navbarContainer = document.getElementById("navbar-placeholder");
if (navbarContainer) {
  navbarContainer.innerHTML = NavbarUser(currentPage);
}
