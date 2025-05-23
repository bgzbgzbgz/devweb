// js/components/Navbar.js
import { NavlinkUser } from './NavlinkUser.js';

export function NavbarUser(currentPage) {
  const links = [
    { href: './forum.html', label: 'Forum' },
    { href: './job-board.html', label: 'Jobs' },
    { href: './collab.html', label: 'Collaborate' },
    { href: '/index.html', label: 'Logout' }
  ];

  const navItems = links
    .map(link => NavlinkUser({
      ...link,
      isActive: currentPage === link.href.split('/').pop()
    }))
    .join('');

  return `
    <nav class="navbar navbar-expand-lg custom-navbar shadow-sm">
      <div class="container">
        <a class="navbar-brand text-white fw-bold" href="./dashboard.html">DevHub</a>
        <button class="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-auto">
            ${navItems}
          </ul>
        </div>
      </div>
    </nav>
  `;
}
