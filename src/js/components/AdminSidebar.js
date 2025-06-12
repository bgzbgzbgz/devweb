export function AdminSidebar(active = '') {
  return `
    <nav class="admin-sidebar text-white p-3 min-vh-100 w-100 w-lg-25" style="max-width: 250px;">
      <h4 class="fw-bold mb-4">Admin Panel</h4>
      <ul class="nav flex-column gap-2">
        <li class="nav-item">
          <a href="./dashboard.html" class="nav-link ${active === 'dashboard' ? 'active text-primary' : 'text-white'}">
            Dashboard
          </a>
        </li>
        <li class="nav-item">
          <a href="./jobs.html" class="nav-link ${active === 'jobs' ? 'active text-primary' : 'text-white'}">
            Verifikasi Proyek
            </a>
          </li>
          <li class="nav-item">
        <a href="./verify-jobs.html" class="nav-link ${active === 'verify-jobs' ? 'active text-primary' : 'text-white'}">
           Verifikasi Job Posting
         </a>
        </li>
        <li class="nav-item">
          <a href="./reports.html" class="nav-link ${active === 'reports' ? 'active text-primary' : 'text-white'}">
            Laporan Aktivitas
          </a>
        </li>
        <li class="nav-item">
          <a href="./users.html" class="nav-link ${active === 'users' ? 'active text-primary' : 'text-white'}">
            Manajemen Pengguna
          </a>
        </li>
        <li class="nav-item mt-3">
          <a href="/index.html" class="nav-link text-danger">Logout</a>
        </li>
      </ul>
    </nav>
  `;
}
