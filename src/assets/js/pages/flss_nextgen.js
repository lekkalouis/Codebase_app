(() => {
  const data = window.FLSS_NEXTGEN_DATA;
  const appState = { route: '', rows: [], filtered: [] };

  const datasetMap = {
    dispatch: 'shipments',
    orders: 'orders',
    inventory: 'materials',
    traceability: 'batches',
    production: 'workOrders',
    retailer: 'retailers',
    analytics: 'campaigns',
    finance: 'orders',
    marketing: 'campaigns',
    digital: 'domains',
    ip: 'trademarks',
    subscriptions: 'customers',
    employee: 'employees',
    atlas: 'atlasDocs',
    admin: 'shipments',
    home: 'orders'
  };

  const routeSlug = (section, item) => `${section.toLowerCase().replace(/[^a-z0-9]+/g, '-')}/${item.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`;

  const viewCatalog = data.sections.flatMap((section) => section.items.map((item) => ({
    section: section.title,
    icon: section.icon,
    sectionBadge: section.badge || '',
    item,
    route: routeSlug(section.title, item)
  })));

  const getDatasetName = (sectionTitle) => {
    const title = sectionTitle.toLowerCase();
    if (title.includes('dispatch')) return datasetMap.dispatch;
    if (title.includes('order')) return datasetMap.orders;
    if (title.includes('product')) return datasetMap.inventory;
    if (title.includes('trace')) return datasetMap.traceability;
    if (title.includes('production')) return datasetMap.production;
    if (title.includes('retailer')) return datasetMap.retailer;
    if (title.includes('analytics')) return datasetMap.analytics;
    if (title.includes('finance')) return datasetMap.finance;
    if (title.includes('marketing')) return datasetMap.marketing;
    if (title.includes('digital')) return datasetMap.digital;
    if (title.includes('ip')) return datasetMap.ip;
    if (title.includes('subscription')) return datasetMap.subscriptions;
    if (title.includes('employee')) return datasetMap.employee;
    if (title.includes('atlas')) return datasetMap.atlas;
    if (title.includes('admin')) return datasetMap.admin;
    return datasetMap.home;
  };

  const sidebarEl = document.getElementById('nextgen-nav-anchor');
  const titleEl = document.getElementById('view-title');
  const descEl = document.getElementById('view-desc');
  const kpiEl = document.getElementById('kpi-cards');
  const tableHeadEl = document.getElementById('data-head');
  const tableBodyEl = document.getElementById('data-body');
  const detailsEl = document.getElementById('detail-content');
  const filterEl = document.getElementById('table-filter');

  function showToast(message, type = 'info') {
    Codebase.helpers('jq-notify', {
      align: 'right',
      from: 'top',
      type,
      icon: 'fa fa-circle-info me-1',
      message
    });
  }

  function renderSidebar() {
    sidebarEl.innerHTML = data.sections.map((section, sIdx) => `
      <li class="nav-main-item ${sIdx === 0 ? 'open' : ''}">
        <a class="nav-main-link nav-main-link-submenu" data-toggle="submenu" aria-haspopup="true" aria-expanded="${sIdx === 0 ? 'true' : 'false'}" href="#">
          <i class="nav-main-link-icon fa ${section.icon}"></i>
          <span class="nav-main-link-name">${section.title}</span>
          ${section.badge ? `<span class="nav-main-link-badge badge rounded-pill bg-primary">${section.badge}</span>` : ''}
        </a>
        <ul class="nav-main-submenu">
          ${section.items.map((item, idx) => {
            const route = routeSlug(section.title, item);
            const comingSoon = item.toLowerCase().includes('placeholder') || item.toLowerCase().includes('mock');
            const countBadge = idx % 3 === 0 ? `<span class="nav-main-link-badge badge rounded-pill bg-success-subtle text-success">${(idx + 1) * 3}</span>` : '';
            return `<li class="nav-main-item"><a class="nav-main-link js-route-link" href="#${route}" data-route="${route}"><span class="nav-main-link-name">${item}</span>${comingSoon ? '<span class="nav-main-link-badge badge rounded-pill bg-warning-subtle text-warning">Soon</span>' : countBadge}</a></li>`;
          }).join('')}
        </ul>
      </li>`).join('');
  }

  function renderKpis(rows, section, item) {
    const active = rows.length;
    const attention = rows.filter((r) => JSON.stringify(r).toLowerCase().includes('risk') || JSON.stringify(r).toLowerCase().includes('exception')).length;
    const complete = Math.max(0, Math.round((active - attention) / Math.max(active, 1) * 100));
    kpiEl.innerHTML = [
      { title: 'Records', value: active },
      { title: 'Needs Attention', value: attention },
      { title: 'SLA/Completion', value: `${complete}%` },
      { title: 'View', value: section.split(' ')[0] }
    ].map((kpi) => `<div class="col-md-3"><div class="block block-rounded mb-0"><div class="block-content block-content-full"><div class="fs-sm text-muted">${kpi.title}</div><div class="fs-3 fw-semibold">${kpi.value}</div></div></div></div>`).join('');

    const comingSoon = item.toLowerCase().includes('placeholder') || item.toLowerCase().includes('mock');
    document.getElementById('coming-soon-ribbon').innerHTML = comingSoon ? '<span class="badge bg-warning text-dark">Coming Soon</span>' : '';
  }

  function renderTable(rows) {
    const columns = Object.keys(rows[0] || { id: '-', name: '-', status: '-' });
    tableHeadEl.innerHTML = columns.map((col) => `<th class="text-capitalize">${col}</th>`).join('');
    tableBodyEl.innerHTML = rows.map((row, idx) => `<tr class="js-row" data-index="${idx}">${columns.map((col) => `<td>${row[col]}</td>`).join('')}</tr>`).join('');

    document.querySelectorAll('.js-row').forEach((rowEl) => {
      rowEl.addEventListener('click', () => {
        const row = appState.filtered[Number(rowEl.dataset.index)];
        openDrawer(row);
      });
    });
  }

  function openDrawer(row) {
    detailsEl.innerHTML = `<h5 class="mb-3">${row.id || row.title || row.name}</h5>${Object.entries(row).map(([k, v]) => `<div class="d-flex justify-content-between border-bottom py-2"><span class="text-muted text-capitalize">${k}</span><span class="fw-semibold text-end">${v}</span></div>`).join('')}`;
    bootstrap.Offcanvas.getOrCreateInstance('#nextgenDrawer').show();
  }

  function applyRoute(route) {
    const view = viewCatalog.find((v) => v.route === route) || viewCatalog[0];
    appState.route = view.route;
    const datasetName = getDatasetName(view.section);
    appState.rows = data.datasets[datasetName] || [];
    appState.filtered = [...appState.rows];
    titleEl.textContent = view.item;
    descEl.textContent = `${view.section} · FLSS NextGen mock module with enterprise controls, filters, actions and detail workflows.`;
    renderKpis(appState.rows, view.section, view.item);
    renderTable(appState.filtered);

    document.querySelectorAll('.js-route-link').forEach((el) => el.classList.toggle('active', el.dataset.route === view.route));
    document.getElementById('primary-action').textContent = view.item.includes('Report') ? 'Export Report' : 'Create';
  }

  function bindEvents() {
    window.addEventListener('hashchange', () => applyRoute(location.hash.replace('#', '')));

    filterEl.addEventListener('input', () => {
      const q = filterEl.value.toLowerCase();
      appState.filtered = appState.rows.filter((row) => JSON.stringify(row).toLowerCase().includes(q));
      renderTable(appState.filtered);
    });

    document.getElementById('primary-action').addEventListener('click', () => showToast('Saved', 'success'));
    document.getElementById('secondary-action').addEventListener('click', () => showToast('Booked', 'primary'));
    document.getElementById('print-action').addEventListener('click', () => showToast('Printed', 'info'));
    document.getElementById('export-action').addEventListener('click', () => showToast('Export queued', 'warning'));
  }

  renderSidebar();
  bindEvents();
  applyRoute(location.hash.replace('#', ''));
})();
