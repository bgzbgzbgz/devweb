// js/components/NavLink.js
export function NavlinkUser({ href, label, isActive = false }) {
    return `
      <li class="nav-item">
        <a class="nav-link text-white ${isActive ? 'active' : ''}" href="${href}">
          ${label}
        </a>
      </li>
    `;
  }
  