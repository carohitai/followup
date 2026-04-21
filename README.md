[house-vendor-tracker_3.html](https://github.com/user-attachments/files/26930488/house-vendor-tracker_3.html)
# followup
Daily followup of vendors clients, staff.
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>House — Vendor Follow-up Tracker</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Fraunces:ital,wght@0,400;0,500;0,600;1,400&family=JetBrains+Mono:wght@500;600&family=Manrope:wght@400;500;600;700&display=swap" rel="stylesheet">
<style>
  :root {
    --bg: #f7f3ec;
    --surface: #ffffff;
    --surface-alt: #f0e9dc;
    --border: #e2d8c4;
    --border-strong: #c8bba1;
    --text: #2a1f14;
    --text-muted: #786852;
    --text-subtle: #a89a80;
    --accent: #a8441b;
    --accent-soft: #f7dfcf;
    --success: #4a7c3a;
    --success-soft: #deecd0;
    --warning: #b37d13;
    --warning-soft: #f5e2b8;
    --danger: #9a2127;
    --danger-soft: #f5d4cf;
    --info: #2d5f7a;
    --info-soft: #d6e6ee;
    --contractor: #5d4a7a;
    --contractor-soft: #e6dff0;
    --prof: #2e6454;
    --prof-soft: #d4e8e0;
    --radius: 10px;
    --radius-lg: 14px;
    --radius-sm: 6px;
    --font-display: 'Fraunces', Georgia, serif;
    --font-body: 'Manrope', -apple-system, BlinkMacSystemFont, sans-serif;
    --font-mono: 'JetBrains Mono', 'SF Mono', Monaco, Consolas, monospace;
  }

  * { box-sizing: border-box; }

  html, body {
    margin: 0;
    padding: 0;
    background: var(--bg);
    color: var(--text);
    font-family: var(--font-body);
    font-size: 15px;
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
    -webkit-tap-highlight-color: transparent;
  }

  .app {
    max-width: 960px;
    margin: 0 auto;
    padding: 24px 20px 80px;
  }

  /* Header */
  .header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 16px;
    padding-bottom: 20px;
    border-bottom: 1px solid var(--border);
    margin-bottom: 20px;
    flex-wrap: wrap;
  }
  .title {
    font-family: var(--font-display);
    font-weight: 500;
    font-size: 28px;
    letter-spacing: -0.01em;
    margin: 0 0 4px;
    color: var(--text);
  }
  .subtitle {
    margin: 0;
    font-size: 13px;
    color: var(--text-muted);
  }
  .user-toggle {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 13px;
    color: var(--text-muted);
  }
  .user-toggle select {
    font-family: inherit;
    font-size: 13px;
    padding: 8px 28px 8px 10px;
    border: 1px solid var(--border-strong);
    background: var(--surface) url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='10' height='6' viewBox='0 0 10 6'><path d='M1 1l4 4 4-4' stroke='%23786852' stroke-width='1.5' fill='none' stroke-linecap='round'/></svg>") no-repeat right 10px center;
    border-radius: var(--radius-sm);
    color: var(--text);
    cursor: pointer;
    appearance: none;
    -webkit-appearance: none;
  }

  /* Tabs */
  .tabs {
    display: flex;
    gap: 4px;
    margin-bottom: 20px;
    border-bottom: 1px solid var(--border);
  }
  .tab {
    font-family: inherit;
    font-size: 14px;
    font-weight: 500;
    background: transparent;
    border: none;
    padding: 12px 16px;
    color: var(--text-muted);
    cursor: pointer;
    border-bottom: 2px solid transparent;
    margin-bottom: -1px;
    display: flex;
    align-items: center;
    gap: 8px;
    transition: color 0.15s;
    min-height: 44px;
  }
  .tab:hover { color: var(--text); }
  .tab.active {
    color: var(--accent);
    border-bottom-color: var(--accent);
  }
  .tab-count {
    background: var(--surface-alt);
    color: var(--text-muted);
    font-size: 11px;
    padding: 2px 7px;
    border-radius: 10px;
    font-weight: 600;
  }
  .tab.active .tab-count {
    background: var(--accent-soft);
    color: var(--accent);
  }

  /* Panel */
  .panel { display: none; }
  .panel.active { display: block; }

  .panel-head {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 12px;
    margin-bottom: 16px;
    flex-wrap: wrap;
  }
  .filters {
    display: flex;
    gap: 6px;
    flex-wrap: wrap;
    align-items: center;
  }
  .chip {
    font-family: inherit;
    font-size: 13px;
    background: var(--surface);
    border: 1px solid var(--border);
    color: var(--text-muted);
    padding: 8px 14px;
    border-radius: 20px;
    cursor: pointer;
    transition: all 0.15s;
    min-height: 36px;
    display: inline-flex;
    align-items: center;
    gap: 6px;
  }
  .chip:hover { border-color: var(--border-strong); }
  .chip.active {
    background: var(--text);
    color: var(--bg);
    border-color: var(--text);
  }
  .chip-count {
    background: rgba(255,255,255,0.2);
    font-size: 11px;
    padding: 1px 6px;
    border-radius: 8px;
    font-weight: 600;
  }
  .chip:not(.active) .chip-count {
    background: var(--surface-alt);
    color: var(--text-muted);
  }

  .vendor-toolbar {
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
    align-items: center;
    margin-bottom: 14px;
  }

  .filter-select {
    font-family: inherit;
    font-size: 13px;
    padding: 10px 30px 10px 12px;
    border: 1px solid var(--border-strong);
    border-radius: var(--radius);
    background: var(--surface) url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='10' height='6' viewBox='0 0 10 6'><path d='M1 1l4 4 4-4' stroke='%23786852' stroke-width='1.5' fill='none' stroke-linecap='round'/></svg>") no-repeat right 10px center;
    color: var(--text);
    cursor: pointer;
    appearance: none;
    -webkit-appearance: none;
    min-width: 180px;
    min-height: 40px;
  }
  .filter-select:focus {
    outline: none;
    border-color: var(--accent);
    box-shadow: 0 0 0 3px var(--accent-soft);
  }

  /* Buttons */
  .btn {
    font-family: inherit;
    font-size: 14px;
    font-weight: 500;
    padding: 10px 18px;
    border-radius: var(--radius);
    border: 1px solid transparent;
    cursor: pointer;
    transition: all 0.15s;
    white-space: nowrap;
    min-height: 40px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 6px;
  }
  .btn-primary {
    background: var(--accent);
    color: #fff;
    border-color: var(--accent);
  }
  .btn-primary:hover { background: #8a371a; border-color: #8a371a; }
  .btn-ghost {
    background: transparent;
    color: var(--text-muted);
    border-color: var(--border);
  }
  .btn-ghost:hover { background: var(--surface); color: var(--text); }
  .btn-success {
    background: var(--success);
    color: #fff;
    border-color: var(--success);
  }
  .btn-success:hover { background: #3e6830; border-color: #3e6830; }
  .btn-sm {
    padding: 7px 12px;
    font-size: 13px;
    min-height: 34px;
  }

  /* Search */
  .search-input {
    font-family: inherit;
    font-size: 14px;
    padding: 10px 14px;
    border: 1px solid var(--border-strong);
    border-radius: var(--radius);
    background: var(--surface);
    color: var(--text);
    min-width: 220px;
    flex: 1;
    max-width: 340px;
    min-height: 40px;
  }
  .search-input:focus {
    outline: none;
    border-color: var(--accent);
    box-shadow: 0 0 0 3px var(--accent-soft);
  }

  /* Forms */
  .form {
    background: var(--surface);
    border: 1px solid var(--border);
    border-radius: var(--radius-lg);
    padding: 16px;
    margin-bottom: 16px;
  }
  .form.hidden { display: none; }
  .form input[type="text"], .form input[type="tel"], .form input[type="email"], .form select, .form textarea {
    font-family: inherit;
    font-size: 14px;
    padding: 10px 12px;
    border: 1px solid var(--border-strong);
    border-radius: var(--radius);
    background: var(--bg);
    color: var(--text);
    width: 100%;
    min-height: 40px;
  }
  .form input:focus, .form select:focus, .form textarea:focus {
    outline: none;
    border-color: var(--accent);
    box-shadow: 0 0 0 3px var(--accent-soft);
  }
  .form select {
    appearance: none;
    -webkit-appearance: none;
    background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='10' height='6' viewBox='0 0 10 6'><path d='M1 1l4 4 4-4' stroke='%23786852' stroke-width='1.5' fill='none' stroke-linecap='round'/></svg>");
    background-repeat: no-repeat;
    background-position: right 12px center;
    padding-right: 30px;
  }
  .form-row {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 10px;
    margin-top: 10px;
  }
  .form-row.triple { grid-template-columns: 1fr 1fr 1fr; }
  .form-label {
    font-size: 12px;
    font-weight: 600;
    color: var(--text-muted);
    margin: 14px 0 6px;
    letter-spacing: 0.03em;
    text-transform: uppercase;
  }
  .form-actions {
    display: flex;
    justify-content: flex-end;
    gap: 8px;
    margin-top: 16px;
    flex-wrap: wrap;
  }

  /* Linked chip input */
  .linked-input-wrap {
    border: 1px solid var(--border-strong);
    border-radius: var(--radius);
    background: var(--bg);
    padding: 8px;
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
    align-items: center;
    min-height: 44px;
  }
  .linked-input-wrap input {
    border: none !important;
    background: transparent !important;
    flex: 1;
    min-width: 120px;
    padding: 4px 6px !important;
    min-height: auto !important;
    font-size: 13px !important;
    font-family: var(--font-mono) !important;
  }
  .linked-input-wrap input:focus { box-shadow: none !important; }

  /* List */
  .list {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  /* Task Card */
  .task {
    background: var(--surface);
    border: 1px solid var(--border);
    border-left: 4px solid var(--border-strong);
    border-radius: var(--radius-lg);
    padding: 14px 16px;
    transition: all 0.4s;
    scroll-margin-top: 80px;
  }
  .task[data-priority="high"] { border-left-color: var(--warning); }
  .task[data-priority="urgent"] { border-left-color: var(--danger); }
  .task[data-status="done"] { opacity: 0.75; background: var(--surface-alt); }
  .task[data-status="done"] .task-title { text-decoration: line-through; color: var(--text-muted); }

  .task.flash {
    box-shadow: 0 0 0 3px var(--accent);
    background: var(--accent-soft);
  }

  .task-idline {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
    margin-bottom: 8px;
    flex-wrap: wrap;
  }
  .task-id {
    font-family: var(--font-mono);
    font-size: 12px;
    font-weight: 600;
    color: var(--accent);
    background: var(--accent-soft);
    padding: 3px 10px;
    border-radius: 12px;
    letter-spacing: 0.03em;
  }
  .task-done-mark {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    font-size: 12px;
    color: var(--success);
    font-weight: 500;
  }

  .task-title {
    font-weight: 500;
    font-size: 15.5px;
    margin: 0 0 10px;
    padding: 2px 4px;
    margin-left: -4px;
    border-radius: var(--radius-sm);
    cursor: text;
    line-height: 1.4;
  }
  .task-title:hover { background: var(--surface-alt); }
  .task-title[contenteditable="true"] {
    background: var(--bg);
    outline: 2px solid var(--accent);
    cursor: text;
  }

  .task-meta {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    align-items: center;
    margin-bottom: 10px;
  }
  .badge {
    font-size: 11px;
    font-weight: 600;
    padding: 4px 10px;
    border-radius: 10px;
    display: inline-flex;
    align-items: center;
    gap: 4px;
    letter-spacing: 0.02em;
  }
  .badge-pending { background: var(--surface-alt); color: var(--text-muted); }
  .badge-in-progress { background: var(--info-soft); color: var(--info); }
  .badge-done { background: var(--success-soft); color: var(--success); }
  .badge-high { background: var(--warning-soft); color: var(--warning); }
  .badge-urgent { background: var(--danger-soft); color: var(--danger); }
  .badge-vendor { background: var(--accent-soft); color: var(--accent); }
  .badge-desc-vendor { background: var(--accent-soft); color: var(--accent); }
  .badge-desc-contractor { background: var(--contractor-soft); color: var(--contractor); }
  .badge-desc-professional { background: var(--prof-soft); color: var(--prof); }
  .badge-desc-other { background: var(--surface-alt); color: var(--text-muted); }
  .badge-expense { background: var(--surface-alt); color: var(--text-muted); font-weight: 500; }

  /* Linked tasks section */
  .task-linked {
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
    align-items: center;
    margin: 6px 0 10px;
    font-size: 12px;
    color: var(--text-muted);
  }
  .linked-label {
    font-weight: 500;
    color: var(--text-muted);
  }
  .linked-chip {
    font-family: var(--font-mono);
    font-size: 11px;
    background: var(--info-soft);
    color: var(--info);
    padding: 4px 8px;
    border-radius: 10px;
    cursor: pointer;
    font-weight: 600;
    transition: all 0.15s;
    display: inline-flex;
    align-items: center;
    gap: 4px;
    border: none;
    font-family: var(--font-mono);
  }
  .linked-chip:hover {
    background: var(--info);
    color: #fff;
  }
  .linked-chip .x {
    font-size: 14px;
    line-height: 1;
    opacity: 0.6;
    cursor: pointer;
    padding: 0 2px;
  }
  .linked-chip .x:hover { opacity: 1; }
  .linked-add-btn {
    font-family: inherit;
    font-size: 11px;
    background: transparent;
    color: var(--text-muted);
    border: 1px dashed var(--border-strong);
    padding: 4px 10px;
    border-radius: 10px;
    cursor: pointer;
    font-weight: 500;
  }
  .linked-add-btn:hover {
    color: var(--accent);
    border-color: var(--accent);
    background: var(--accent-soft);
  }

  .linked-inline-input {
    display: inline-flex;
    gap: 4px;
    align-items: center;
  }
  .linked-inline-input input {
    font-family: var(--font-mono);
    font-size: 11px;
    padding: 4px 8px;
    border: 1px solid var(--accent);
    border-radius: 10px;
    background: var(--surface);
    color: var(--text);
    width: 90px;
    outline: none;
  }

  .follow-up { margin-top: 10px; }
  .follow-up-label {
    font-size: 12px;
    font-weight: 600;
    color: var(--text-muted);
    margin-bottom: 6px;
    letter-spacing: 0.03em;
    text-transform: uppercase;
  }
  .follow-up textarea {
    font-family: inherit;
    font-size: 14px;
    width: 100%;
    min-height: 64px;
    padding: 10px 12px;
    border: 1px solid var(--border);
    border-radius: var(--radius);
    background: var(--bg);
    color: var(--text);
    resize: vertical;
    line-height: 1.55;
  }
  .follow-up textarea:focus {
    outline: none;
    border-color: var(--accent);
    box-shadow: 0 0 0 3px var(--accent-soft);
  }

  .task-timestamps {
    font-size: 11px;
    color: var(--text-subtle);
    line-height: 1.6;
    margin-top: 10px;
  }
  .task-timestamps strong {
    font-weight: 600;
    color: var(--text-muted);
  }

  .task-actions {
    display: flex;
    gap: 8px;
    margin-top: 12px;
    flex-wrap: wrap;
  }
  .task-actions .btn { flex-shrink: 0; }

  .icon-btn {
    background: transparent;
    border: 1px solid var(--border);
    color: var(--text-muted);
    padding: 7px 12px;
    border-radius: var(--radius-sm);
    font-size: 12px;
    cursor: pointer;
    font-family: inherit;
    min-height: 34px;
  }
  .icon-btn:hover { background: var(--surface-alt); color: var(--text); }
  .icon-btn.danger:hover { background: var(--danger-soft); color: var(--danger); border-color: var(--danger); }

  select.inline-status {
    font-family: inherit;
    font-size: 12px;
    font-weight: 600;
    padding: 4px 24px 4px 10px;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    appearance: none;
    -webkit-appearance: none;
    background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='8' height='5' viewBox='0 0 8 5'><path d='M1 1l3 3 3-3' stroke='%23786852' stroke-width='1.3' fill='none' stroke-linecap='round'/></svg>");
    background-repeat: no-repeat;
    background-position: right 8px center;
    min-height: 26px;
  }

  .save-flash {
    display: inline-flex;
    align-items: center;
    gap: 4px;
    color: var(--success);
    font-size: 12px;
    font-weight: 500;
    opacity: 0;
    transition: opacity 0.3s;
    margin-left: 6px;
  }
  .save-flash.show { opacity: 1; }

  /* Vendor group headers */
  .group-header {
    font-family: var(--font-display);
    font-size: 14px;
    font-weight: 500;
    color: var(--text-muted);
    letter-spacing: 0.04em;
    text-transform: uppercase;
    margin: 18px 0 6px;
    padding-bottom: 6px;
    border-bottom: 1px solid var(--border);
    display: flex;
    justify-content: space-between;
    align-items: baseline;
  }
  .group-header:first-child { margin-top: 0; }
  .group-count {
    font-size: 11px;
    color: var(--text-subtle);
    font-weight: 500;
    letter-spacing: 0;
    text-transform: none;
  }

  /* Vendor Card */
  .vendor {
    background: var(--surface);
    border: 1px solid var(--border);
    border-radius: var(--radius-lg);
    padding: 12px 14px;
    display: grid;
    grid-template-columns: 1fr auto;
    gap: 12px;
    align-items: center;
  }
  .vendor-main { min-width: 0; }
  .vendor-header {
    display: flex;
    align-items: center;
    gap: 8px;
    flex-wrap: wrap;
    margin-bottom: 3px;
  }
  .vendor-name { font-weight: 600; font-size: 14.5px; margin: 0; }
  .vendor-scope { font-size: 13px; color: var(--text); margin: 0 0 4px; font-weight: 500; }
  .vendor-details {
    font-size: 13px;
    color: var(--text-muted);
    display: flex;
    flex-wrap: wrap;
    gap: 4px 10px;
    align-items: center;
  }
  .vendor-details a { color: var(--text-muted); text-decoration: none; }
  .vendor-details a:hover { color: var(--accent); text-decoration: underline; }
  .vendor-details .sep { color: var(--text-subtle); font-size: 10px; }
  .vendor-details .poc { font-weight: 500; color: var(--text); }
  .vendor-actions { display: flex; gap: 6px; align-items: center; flex-wrap: wrap; }
  .contact-btn {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    border: 1px solid var(--border-strong);
    background: var(--surface);
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    transition: all 0.15s;
    text-decoration: none;
    color: var(--text-muted);
  }
  .contact-btn:hover {
    background: var(--surface-alt);
    border-color: var(--text);
    color: var(--text);
  }
  .contact-btn.wa:hover { background: #25D366; border-color: #25D366; color: #fff; }
  .contact-btn.call:hover { background: var(--accent); border-color: var(--accent); color: #fff; }

  /* Empty state */
  .empty {
    text-align: center;
    padding: 40px 20px;
    color: var(--text-muted);
    font-size: 14px;
    background: var(--surface);
    border: 1px dashed var(--border-strong);
    border-radius: var(--radius-lg);
  }
  .empty.hidden { display: none; }

  /* Footer */
  .footer {
    margin-top: 30px;
    padding-top: 16px;
    border-top: 1px solid var(--border);
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 12px;
    color: var(--text-subtle);
    gap: 12px;
    flex-wrap: wrap;
  }
  .link-btn {
    background: none;
    border: none;
    color: var(--accent);
    cursor: pointer;
    font-family: inherit;
    font-size: 12px;
    padding: 4px 6px;
    text-decoration: underline;
  }
  .link-btn:hover { color: #8a371a; }

  .sync-dot {
    display: inline-block;
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: var(--success);
    margin-right: 6px;
    vertical-align: middle;
  }
  .sync-dot.syncing { background: var(--warning); animation: pulse 1.2s infinite; }
  .sync-dot.offline { background: var(--danger); }
  @keyframes pulse { 0%,100% { opacity: 1; } 50% { opacity: 0.3; } }

  .hidden { display: none !important; }

  /* Mobile optimizations */
  @media (max-width: 640px) {
    .app { padding: 14px 12px 60px; }
    .title { font-size: 22px; }
    .header { gap: 10px; padding-bottom: 14px; margin-bottom: 14px; }
    .user-toggle { width: 100%; justify-content: space-between; }
    .form-row, .form-row.triple { grid-template-columns: 1fr; }
    .vendor { grid-template-columns: 1fr; }
    .vendor-actions { justify-self: stretch; justify-content: flex-start; }
    .panel-head { flex-direction: column; align-items: stretch; }
    .panel-head .btn { width: 100%; }
    .search-input { max-width: 100%; }
    .filter-select { min-width: 100%; width: 100%; }
    .vendor-toolbar { flex-direction: column; align-items: stretch; }
    .tabs { overflow-x: auto; }
    .tab { flex-shrink: 0; }
    .task-actions .btn { flex: 1; min-width: 0; }
    .form-actions { flex-direction: column-reverse; align-items: stretch; }
    .form-actions .btn { width: 100%; }
    .footer { flex-direction: column; align-items: flex-start; }
  }

  @media (hover: none) {
    .icon-btn { min-height: 40px; padding: 8px 14px; }
  }
</style>
</head>
<body>
<div class="app">
  <header class="header">
    <div>
      <h1 class="title">House — Vendor Follow-up</h1>
      <p class="subtitle">Shared tracker · Director &amp; Mr. Pushpender Vyas</p>
    </div>
    <div class="user-toggle">
      <label for="userSelect">Logged in as</label>
      <select id="userSelect">
        <option value="Director">Director</option>
        <option value="Mr. Vyas">Mr. Vyas</option>
      </select>
    </div>
  </header>

  <nav class="tabs" role="tablist">
    <button class="tab active" data-tab="tasks" role="tab">
      Tasks <span class="tab-count" id="tasksCount">0</span>
    </button>
    <button class="tab" data-tab="vendors" role="tab">
      Vendor Directory <span class="tab-count" id="vendorsCount">0</span>
    </button>
  </nav>

  <main>
    <!-- TASKS PANEL -->
    <section class="panel active" id="tasksPanel" role="tabpanel">
      <div class="panel-head">
        <div class="filters" id="taskFilters">
          <button class="chip active" data-filter="all">All <span class="chip-count" data-count="all">0</span></button>
          <button class="chip" data-filter="pending">Pending <span class="chip-count" data-count="pending">0</span></button>
          <button class="chip" data-filter="in-progress">In progress <span class="chip-count" data-count="in-progress">0</span></button>
          <button class="chip" data-filter="done">Completed <span class="chip-count" data-count="done">0</span></button>
        </div>
        <button class="btn btn-primary" id="addTaskBtn">+ Add task</button>
      </div>

      <div class="form hidden" id="taskForm">
        <div class="form-label">Task description</div>
        <input type="text" id="taskTitle" placeholder='e.g., "Follow up Indoshine on black stone delivery"' />

        <div class="form-row">
          <div>
            <div class="form-label">Link vendor (optional)</div>
            <select id="taskVendor">
              <option value="">— None —</option>
            </select>
          </div>
          <div>
            <div class="form-label">Priority</div>
            <select id="taskPriority">
              <option value="normal">Normal</option>
              <option value="high">High</option>
              <option value="urgent">Urgent</option>
            </select>
          </div>
        </div>

        <div class="form-label">Linked to other tasks (optional)</div>
        <div class="linked-input-wrap">
          <div id="taskFormLinkedChips" style="display:contents;"></div>
          <input type="text" id="taskLinkedInput" list="taskIdDatalist" placeholder="Type a task ID (e.g., 2004/01) and press Enter" />
        </div>
        <datalist id="taskIdDatalist"></datalist>

        <div class="form-actions">
          <button class="btn btn-ghost" id="cancelTaskBtn">Cancel</button>
          <button class="btn btn-primary" id="saveTaskBtn">Add task</button>
        </div>
      </div>

      <div class="list" id="tasksList"></div>
      <div class="empty hidden" id="tasksEmpty">
        No tasks yet. Click <strong>+ Add task</strong> to hand over the first follow-up item to Mr. Vyas.
      </div>
    </section>

    <!-- VENDORS PANEL -->
    <section class="panel" id="vendorsPanel" role="tabpanel">
      <div class="panel-head">
        <input type="search" class="search-input" placeholder="Search name, POC, phone, scope, expense head…" id="vendorSearch" />
        <button class="btn btn-primary" id="addVendorBtn">+ Add vendor</button>
      </div>

      <div class="vendor-toolbar">
        <select class="filter-select" id="expenseHeadFilter">
          <option value="">All expense heads</option>
        </select>
        <select class="filter-select" id="descriptionFilter">
          <option value="">All descriptions</option>
          <option value="Vendor">Vendor</option>
          <option value="Contractor">Contractor</option>
          <option value="Professional">Professional</option>
          <option value="Other">Other / Unspecified</option>
        </select>
        <select class="filter-select" id="viewMode">
          <option value="grouped">Grouped by expense head</option>
          <option value="alpha">Alphabetical</option>
        </select>
      </div>

      <div class="form hidden" id="vendorForm">
        <div class="form-label">Trade name</div>
        <input type="text" id="vendorName" placeholder="Firm / trade name" />
        <div class="form-row">
          <div>
            <div class="form-label">Point of contact</div>
            <input type="text" id="vendorPOC" placeholder="Person's name" />
          </div>
          <div>
            <div class="form-label">Contact number</div>
            <input type="tel" id="vendorPhone" placeholder="10-digit mobile" />
          </div>
        </div>
        <div class="form-row">
          <div>
            <div class="form-label">Email ID</div>
            <input type="email" id="vendorEmail" placeholder="Optional" />
          </div>
          <div>
            <div class="form-label">Description</div>
            <select id="vendorDescription">
              <option value="">— Select —</option>
              <option value="Vendor">Vendor</option>
              <option value="Contractor">Contractor</option>
              <option value="Professional">Professional</option>
              <option value="Other">Other</option>
            </select>
          </div>
        </div>
        <div class="form-row">
          <div>
            <div class="form-label">Scope</div>
            <input type="text" id="vendorScope" placeholder="e.g., Tiles Supplier, Plumbing Grohe" />
          </div>
          <div>
            <div class="form-label">Expense head</div>
            <input type="text" id="vendorExpense" placeholder="e.g., Flooring, Civil" list="expenseHeadList" />
            <datalist id="expenseHeadList"></datalist>
          </div>
        </div>
        <div class="form-actions">
          <button class="btn btn-ghost" id="cancelVendorBtn">Cancel</button>
          <button class="btn btn-primary" id="saveVendorBtn">Add vendor</button>
        </div>
      </div>

      <div id="vendorsList"></div>
      <div class="empty hidden" id="vendorsEmpty">No vendors added yet.</div>
    </section>
  </main>

  <footer class="footer">
    <span><span class="sync-dot" id="syncDot"></span><span id="syncStatus">Ready</span></span>
    <div>
      <button class="link-btn" id="refreshBtn">Refresh</button>
      &nbsp;·&nbsp;
      <button class="link-btn" id="exportBtn">Export backup</button>
      &nbsp;·&nbsp;
      <button class="link-btn" id="importBtn">Import</button>
    </div>
  </footer>
</div>

<input type="file" id="importFile" accept="application/json" style="display:none;"/>

<script>
(function(){
  // ---------- Storage keys ----------
  const K_TASKS = 'tasks-data';
  const K_VENDORS = 'vendors-data';
  const K_USER = 'current-user-pref';
  const K_SEEDED_V2 = 'vendor-seed-v2-applied';

  // ---------- Seed vendors (79-row list) ----------
  const SEED_VENDORS = [
    { name: 'Saifee Services & Hardware Suppliers (Mustafa)', pointOfContact: 'Saifee Service', phone: '9764379052', email: '', description: 'Vendor', scope: 'Hardware Material Supply', expenseHead: 'Furniture' },
    { name: 'Aakar Traders', pointOfContact: 'Anmol Chandwani', phone: '8087162980', email: '', description: 'Vendor', scope: 'Furniture Material Supply', expenseHead: 'Furniture' },
    { name: 'Abdul Gaffar Suleman Bhati', pointOfContact: 'Abdul Bhati', phone: '9422771693', email: '', description: 'Contractor', scope: 'Waterproofing Contractor', expenseHead: 'Water Proofing' },
    { name: 'Ajay Maheshkumar Meghani', pointOfContact: '', phone: '', email: '', description: 'Vendor', scope: 'Electrical Material Supply', expenseHead: 'Electronics' },
    { name: 'Akash Chate', pointOfContact: '', phone: '', email: '', description: 'Other', scope: 'Labor', expenseHead: 'Civil' },
    { name: 'Amit Murlidhar Meghani', pointOfContact: 'Amit Meghani', phone: '9545800702', email: '', description: 'Vendor', scope: 'Electrical Material Supply', expenseHead: 'Electronics' },
    { name: 'Amplo Elevators Lift', pointOfContact: 'Yusuf', phone: '9823030605', email: '', description: 'Contractor', scope: 'Lift Contractor', expenseHead: 'Electronics' },
    { name: 'Dhanraj Patil Electrician', pointOfContact: 'Dhanraj Patil', phone: '8975667395', email: '', description: 'Contractor', scope: 'Electrical Contractor', expenseHead: 'Electronics' },
    { name: 'Baba Foam and Furnishing', pointOfContact: 'Navin Baba Foam', phone: '8805858805', email: '', description: 'Vendor', scope: 'Furniture Material', expenseHead: 'Furniture' },
    { name: 'Bajaj Hardwares', pointOfContact: 'Mithilesh Bajaj', phone: '8805858805', email: '', description: 'Vendor', scope: 'Paint Material Supply', expenseHead: 'Paint Work' },
    { name: 'Bari Building Material Suppliers', pointOfContact: 'Bhaskar Tade', phone: '9325516198', email: '', description: 'Vendor', scope: 'Building Material Supply — Bricks', expenseHead: 'Civil' },
    { name: 'D K and Company (Aakar Traders)', pointOfContact: 'Anmol Chandwani', phone: '8087162980', email: '', description: 'Vendor', scope: 'Furniture Material Supply — Ply and Laminate', expenseHead: 'Furniture' },
    { name: 'Demand Note for MSEB NVK & RNK', pointOfContact: 'Kaustubh Bharambe (MSEB)', phone: '9763402472', email: '', description: 'Contractor', scope: 'Electric Meter Fitting — MSEB Wireman', expenseHead: 'Electronics' },
    { name: 'Devendra Trading Company', pointOfContact: 'Pavan Patil', phone: '9766412253', email: '', description: 'Contractor', scope: 'Fabrication Contractor — Gate & Shutters', expenseHead: 'Fabrication' },
    { name: 'Distressed Home', pointOfContact: 'Inzamam', phone: '8879945998', email: '', description: 'Contractor', scope: 'Furniture Contractor — Mumbai Furniture Vendor', expenseHead: 'Furniture' },
    { name: 'Ekvira Building Material Supplier', pointOfContact: 'Pramod Sapkale', phone: '9422772555', email: '', description: 'Vendor', scope: 'Building Material Supply — Sand Supply', expenseHead: 'Water Proofing' },
    { name: 'Manoj Patil MSEB Contractor', pointOfContact: 'Manoj Patil', phone: '8080459352', email: '', description: 'Contractor', scope: 'Electric Meter Fitting — MSEB Contractor', expenseHead: 'Electronics' },
    { name: 'Ganpati Traders', pointOfContact: 'Ganpati Marble', phone: '9860831562', email: '', description: 'Vendor', scope: 'Building Material Supply — Kota Stone for Waterproofing', expenseHead: 'Water Proofing' },
    { name: 'Gaurav Inder Chordia', pointOfContact: 'Gaurav Inder Chordia', phone: '7038713800', email: '', description: 'Professional', scope: 'Architect Fees', expenseHead: 'Architect Fees' },
    { name: 'Gaurav Ramesh Sonawane (Mayur Nagori)', pointOfContact: 'Mayur Nagori', phone: '9423976244', email: '', description: 'Vendor', scope: 'Building Material Supply — Sand Supply', expenseHead: 'Civil' },
    { name: 'Green Triology — Flooring', pointOfContact: 'Rishab Kankariya', phone: '9028811076', email: '', description: 'Vendor', scope: 'Building Material Supply — Tiles, Flooring', expenseHead: 'Flooring' },
    { name: 'Green Triology — Plumbing', pointOfContact: 'Rishab Kankariya', phone: '9028811076', email: '', description: 'Vendor', scope: 'Building Material Supply — Plumbing (Grohe)', expenseHead: 'Plumbing' },
    { name: 'Green Triology — Fenesta', pointOfContact: 'Rishab Kankariya', phone: '9028811076', email: '', description: 'Vendor', scope: 'Windows, Sliding Doors, Glass Railings', expenseHead: 'Windows' },
    { name: 'Gurunanak Tiles Granite and Marbles', pointOfContact: 'Guddu Manwani', phone: '9028500500', email: '', description: 'Vendor', scope: 'Building Material Supply — Tiles and Chemicals', expenseHead: 'Flooring' },
    { name: 'Indoshine Marbles Pvt. Ltd.', pointOfContact: 'Vidit Poswalia', phone: '9079276607', email: '', description: 'Vendor', scope: 'Building Material Supply — Stone (Rajasthan)', expenseHead: 'Flooring' },
    { name: 'Kartik Inderchand Chordia', pointOfContact: '', phone: '9420291897', email: '', description: 'Professional', scope: 'Architect Fees', expenseHead: 'Architect Fees' },
    { name: 'Khandesh Fabrication', pointOfContact: 'Asif Qureshi', phone: '9028124654', email: '', description: 'Contractor', scope: 'Fabrication Contractor', expenseHead: 'Fabrication' },
    { name: 'Krishna Madho Patil', pointOfContact: '', phone: '', email: '', description: 'Contractor', scope: 'Electrical Contractor', expenseHead: 'Electronics' },
    { name: 'Mayur Nagori — Ritesh Koli', pointOfContact: 'Mayur Nagori', phone: '9423976244', email: '', description: 'Vendor', scope: 'Building Material Supply — Sand Supply', expenseHead: 'Flooring' },
    { name: 'Mayur Nagori — Shashikant Tayade', pointOfContact: 'Mayur Nagori', phone: '9423976244', email: '', description: 'Vendor', scope: 'Building Material Supply — Sand Supply', expenseHead: 'Flooring' },
    { name: 'Nirmohi Ramvtar Varma', pointOfContact: 'Mohiram', phone: '8605365488', email: '', description: 'Contractor', scope: 'Furniture Contractor — Labor for Furniture', expenseHead: 'Furniture' },
    { name: 'Om Enterprises', pointOfContact: '', phone: '', email: '', description: 'Vendor', scope: 'Building Material Supply', expenseHead: 'Furniture' },
    { name: 'Om Hardware', pointOfContact: 'Mohanani', phone: '7058543359', email: '', description: 'Vendor', scope: 'Building Material Supply', expenseHead: 'Furniture' },
    { name: 'Pradeep Patil', pointOfContact: 'Pradeep Patil', phone: '9372844116', email: '', description: 'Contractor', scope: 'Building Contractor — RCC and Brickwork', expenseHead: 'Civil' },
    { name: 'R.K. Enterprises (Aakar Traders)', pointOfContact: 'Anmol Chandwani', phone: '8087162980', email: '', description: 'Vendor', scope: 'Furniture Material Supply', expenseHead: 'Furniture' },
    { name: 'Rajuram Sitaram Swami', pointOfContact: 'Raju Swami', phone: '7387027425', email: '', description: 'Contractor', scope: 'Polish Contractor — Stone Polish', expenseHead: 'Flooring' },
    { name: 'Rampreet Kabbi Chamandia', pointOfContact: 'Vijay Painter', phone: '9545558504', email: '', description: 'Contractor', scope: 'Paint Contractor', expenseHead: 'Paint Work' },
    { name: 'Ramsahay Deepchand Kumavat', pointOfContact: 'Ramsahay', phone: '9422735947', email: '', description: 'Contractor', scope: 'Tiles Contractor', expenseHead: 'Flooring' },
    { name: 'Tasleem Labor Charges', pointOfContact: 'Tasleem Labor', phone: '9049221262', email: '', description: 'Contractor', scope: 'Labor Contractor — Grooving and Civil Cleaning', expenseHead: 'Water Proofing' },
    { name: 'Ravee Enterprises', pointOfContact: 'Alim Shaikh (Manager)', phone: '9923049779', email: '', description: 'Vendor', scope: 'Building Material Supply — Cement', expenseHead: 'Flooring' },
    { name: 'Sabir Budhan Saiyyad', pointOfContact: 'Sabir', phone: '9923933558', email: '', description: 'Contractor', scope: 'Plumbing', expenseHead: 'Plumbing' },
    { name: 'Sainath Aqwa Water', pointOfContact: 'Tushar Thakur', phone: '8412801333', email: '', description: 'Vendor', scope: 'Water Supply for Labor', expenseHead: 'Misc' },
    { name: 'Sanjay Babulal More', pointOfContact: 'Sanjay More', phone: '7020447337', email: '', description: 'Vendor', scope: 'Building Material Supply — Sand Supply', expenseHead: 'Water Proofing' },
    { name: 'Satyam Traders', pointOfContact: 'Manager Satyam Traders', phone: '7020374783', email: '', description: 'Vendor', scope: 'Building Material Supply — Cement', expenseHead: 'Water Proofing' },
    { name: 'Scon Infra', pointOfContact: 'Sangita', phone: '8591951772', email: '', description: 'Professional', scope: 'PT Slab Consultant', expenseHead: 'Civil' },
    { name: 'Shri Balaji Marble & Granite', pointOfContact: '', phone: '', email: '', description: 'Vendor', scope: 'Building Material Supply — Stone (Rajasthan)', expenseHead: 'Flooring' },
    { name: 'Shri Kailash Electricals', pointOfContact: 'Amit Meghani', phone: '9545800702', email: '', description: 'Vendor', scope: 'Electrical Material Supply', expenseHead: 'Electronics' },
    { name: 'Suman Enterprises', pointOfContact: 'Suman Enterprises', phone: '8806662041', email: '', description: 'Vendor', scope: 'Plumbing Material Supply', expenseHead: 'Plumbing' },
    { name: 'Sunil Shantaram Patharavat', pointOfContact: 'Sunil Patharavat', phone: '9923362228', email: '', description: 'Contractor', scope: 'Stone Work Contractor — Stone and Labor Charges', expenseHead: 'Civil' },
    { name: 'Sunil Vasantrav Sonune', pointOfContact: 'Sunil Sonune', phone: '8408927374', email: '', description: 'Contractor', scope: '', expenseHead: 'Misc' },
    { name: 'Unnati Borewell & Electrical', pointOfContact: 'Dipak Mahajan', phone: '9850675753', email: '', description: 'Vendor', scope: 'Boring Machine', expenseHead: 'Plumbing' },
    { name: 'Vijay Ramprit Chamdiya', pointOfContact: 'Vijay Painter', phone: '9545558504', email: '', description: 'Contractor', scope: 'Paint Contractor', expenseHead: 'Paint Work' },
    { name: 'Vrushali Patil', pointOfContact: 'Vrushali Patil', phone: '9372844116', email: '', description: 'Contractor', scope: 'Building Contractor — RCC and Brickwork', expenseHead: 'Civil' },
    { name: 'Gurunanak Tiles Granite and Marbles (Alt Entry)', pointOfContact: 'Gurunanak Tiles', phone: '9028500500', email: '', description: 'Vendor', scope: '', expenseHead: 'Flooring' },
    { name: 'Riviera Enterprises (Renuka Irrigation)', pointOfContact: 'Renuka Irrigation', phone: '9970359628', email: '', description: 'Vendor', scope: '', expenseHead: 'Misc' },
    { name: 'Venkatesh Trading Co', pointOfContact: 'CA Shreay Kothari', phone: '9422223247', email: '', description: 'Vendor', scope: 'Electrical Material Supply — Wire', expenseHead: 'Electronics' },
    { name: 'Kantilal and Sons Woodworks Pvt. Ltd.', pointOfContact: 'Dhruv Parekh', phone: '9920252122', email: '', description: 'Vendor', scope: 'Furniture Material Supply — Wood Supplier (Mumbai)', expenseHead: 'Furniture' },
    { name: 'Bramhechas', pointOfContact: 'Rajendraji', phone: '9822049091', email: '', description: 'Vendor', scope: '', expenseHead: 'Misc' },
    { name: 'Raj Hardware', pointOfContact: 'Guddu Bhaiya', phone: '9423950840', email: '', description: 'Vendor', scope: 'Hardware Material Supply', expenseHead: 'Misc' },
    { name: 'Shubh Marketing', pointOfContact: 'Shubh Marketing', phone: '9822275667', email: '', description: 'Vendor', scope: '', expenseHead: 'Misc' },
    { name: 'Patil Paint House', pointOfContact: 'Aakash Patil', phone: '7507850045', email: '', description: 'Vendor', scope: 'Paint Material Supply', expenseHead: 'Paint Work' },
    { name: 'Maqbool Ahmad Rajjabali Pasha', pointOfContact: '', phone: '9823452518', email: '', description: 'Contractor', scope: 'POP Contractor (Alt: 7050077777)', expenseHead: 'POP' },
    { name: 'Deokrishna Suresh Zende', pointOfContact: 'Deokrishna Suresh Zende', phone: '7558712102', email: '', description: 'Contractor', scope: 'Pest Control Contractor — Complete House', expenseHead: 'Civil' },
    { name: 'S.R. Marbles and Tiles', pointOfContact: 'Sitaram Saini', phone: '9595422689', email: '', description: 'Vendor', scope: 'Tiles Supplier', expenseHead: 'Flooring' },
    { name: 'R.G. Metal & Company', pointOfContact: 'Chaudhari (Manager)', phone: '9373993275', email: '', description: 'Vendor', scope: 'Windows Manufacturing — Sliding Doors, Glass Railings', expenseHead: 'Windows' },
    { name: 'Devika Agencies', pointOfContact: 'Devika Agencies', phone: '9823057241', email: '', description: 'Vendor', scope: 'Lights Vendor', expenseHead: 'Lights' },
    { name: 'Multiserve Cooling Solutions', pointOfContact: 'Shadab (Manager)', phone: '9607682888', email: '', description: 'Vendor', scope: 'AC Vendor', expenseHead: 'AC' },
    { name: 'Kishor Tak', pointOfContact: 'Kishor Tak', phone: '8087935928', email: '', description: 'Vendor', scope: 'Bricks', expenseHead: 'Civil' },
    { name: 'Bajaj Hardware', pointOfContact: 'Mithilesh Bajaj', phone: '9764467445', email: '', description: 'Vendor', scope: 'Hardware Material Supply', expenseHead: 'Hardware' },
    { name: 'Khemchand Handicrafts Limited', pointOfContact: '', phone: '', email: '', description: 'Vendor', scope: 'Furniture', expenseHead: 'Furniture' },
    { name: 'Atharva Sales and Plumbing Solutions', pointOfContact: 'Vishwajit Bharate', phone: '8600120086', email: '', description: 'Vendor', scope: 'Plumbing Material Supply', expenseHead: 'Plumbing' },
    { name: 'Foam N Fabrics', pointOfContact: 'Baljeet', phone: '9860050000', email: '', description: 'Vendor', scope: 'Fabrics — Curtains, Cushions', expenseHead: 'Fabrics' },
    { name: 'Prince Flooring', pointOfContact: 'Mukul Shah', phone: '9325909904', email: '', description: 'Vendor', scope: 'Wooden Flooring', expenseHead: 'Flooring' },
    { name: 'Om Glass House & Aluminium Works', pointOfContact: 'Vishwas Zope', phone: '9823067998', email: '', description: 'Vendor', scope: 'Glass, Rope Work', expenseHead: 'Furniture' },
    { name: 'Hirodkar Saraf', pointOfContact: 'Hirodkar Saraf', phone: '9860861433', email: '', description: 'Vendor', scope: 'Gold & Silver', expenseHead: 'Gold & Silver' },
    { name: 'Anmol Dinesh Chandwani (Aakar Traders)', pointOfContact: 'Anmol Chandwani', phone: '8087162980', email: '', description: 'Vendor', scope: 'Furniture', expenseHead: 'Furniture' },
    { name: 'Kumawat Tools', pointOfContact: 'Kumawat Tools', phone: '8600813751', email: '', description: 'Vendor', scope: 'Building Material Supply — Tiles and Chemicals', expenseHead: 'Flooring' },
    { name: 'Raksha Service — Sunil Badrising Thakur', pointOfContact: 'Vinod Sharma', phone: '8888444072', email: '', description: 'Vendor', scope: 'Security Guard', expenseHead: 'Security Guard' },
    { name: 'Ramesh Wireman', pointOfContact: 'Ramesh Wireman', phone: '7841063742', email: '', description: 'Contractor', scope: 'Electric Meter Fitting', expenseHead: 'Private Wireman' }
  ];

  // ---------- State ----------
  let state = {
    tasks: [],
    vendors: [],
    currentUser: 'Director',
    filter: 'all',
    vendorSearch: '',
    expenseHeadFilter: '',
    descriptionFilter: '',
    viewMode: 'grouped',
    activeTab: 'tasks',
    taskFormLinkedIds: [] // temp state for new task form
  };

  // ---------- Helpers ----------
  const $ = (sel) => document.querySelector(sel);
  const $$ = (sel) => document.querySelectorAll(sel);
  const uid = () => Date.now().toString(36) + Math.random().toString(36).slice(2, 10);

  function escapeHtml(s) {
    if (s == null) return '';
    return String(s).replace(/[&<>"']/g, c => ({
      '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
    }[c]));
  }
  function escapeAttr(s) { return escapeHtml(s); }

  function formatDate(ts) {
    if (!ts) return '';
    const d = new Date(ts);
    const now = new Date();
    const sameDay = d.toDateString() === now.toDateString();
    if (sameDay) return 'today ' + d.toLocaleTimeString([], {hour:'2-digit', minute:'2-digit'});
    const diffDays = Math.floor((now - d) / 86400000);
    if (diffDays < 7) return diffDays + 'd ago';
    return d.toLocaleDateString('en-IN', {day:'2-digit', month:'short', year:'2-digit'});
  }

  function formatDateFull(ts) {
    if (!ts) return '';
    const d = new Date(ts);
    return d.toLocaleDateString('en-IN', {day:'2-digit', month:'short', year:'numeric'}) +
      ' at ' + d.toLocaleTimeString([], {hour:'2-digit', minute:'2-digit'});
  }

  function cleanPhone(p) { return (p || '').replace(/[^\d+]/g, ''); }
  function waLink(p) {
    let n = cleanPhone(p);
    if (n.startsWith('+')) n = n.slice(1);
    if (n.length === 10) n = '91' + n;
    return 'https://wa.me/' + n;
  }
  function telLink(p) {
    let n = cleanPhone(p);
    if (!n.startsWith('+') && n.length === 10) n = '+91' + n;
    return 'tel:' + n;
  }
  function formatPhoneDisplay(p) {
    const n = cleanPhone(p).replace(/^\+?91/, '');
    if (n.length === 10) return '+91 ' + n.slice(0,5) + ' ' + n.slice(5);
    return p || '';
  }

  function descSlug(d) {
    const v = (d || '').toLowerCase();
    if (v === 'vendor') return 'vendor';
    if (v === 'contractor') return 'contractor';
    if (v === 'professional') return 'professional';
    return 'other';
  }

  function setSync(status, kind) {
    $('#syncStatus').textContent = status;
    const dot = $('#syncDot');
    dot.className = 'sync-dot' + (kind ? ' ' + kind : '');
  }

  const hasStorage = typeof window.storage !== 'undefined';

  async function safeGet(key, shared) {
    if (!hasStorage) return null;
    try { return await window.storage.get(key, shared); }
    catch(e) { return null; }
  }
  async function safeSet(key, value, shared) {
    if (!hasStorage) { setSync('Storage unavailable — changes lost on reload', 'offline'); return; }
    try {
      setSync('Saving…', 'syncing');
      await window.storage.set(key, value, shared);
      setSync('Synced · ' + new Date().toLocaleTimeString([], {hour:'2-digit', minute:'2-digit'}));
    } catch(e) {
      console.error(e);
      setSync('Save failed', 'offline');
    }
  }

  // ---------- Task ID generation (ddmm/nn, serial resets daily) ----------
  function generateTaskId(createdAt) {
    const d = new Date(createdAt || Date.now());
    const dd = String(d.getDate()).padStart(2, '0');
    const mm = String(d.getMonth() + 1).padStart(2, '0');
    const prefix = dd + mm;
    const existing = state.tasks
      .map(t => t.taskId)
      .filter(id => id && id.startsWith(prefix + '/'))
      .map(id => parseInt(id.split('/')[1], 10))
      .filter(n => !isNaN(n));
    const nextSerial = (existing.length ? Math.max(...existing) : 0) + 1;
    return prefix + '/' + String(nextSerial).padStart(2, '0');
  }

  // ---------- Migration ----------
  function migrateVendor(v) {
    return {
      id: v.id || uid(),
      name: v.name || '',
      pointOfContact: v.pointOfContact || v.poc || '',
      phone: v.phone || '',
      email: v.email || '',
      description: v.description || (v.category ? 'Vendor' : ''),
      scope: v.scope || v.category || '',
      expenseHead: v.expenseHead || '',
      createdBy: v.createdBy || 'Director',
      updatedBy: v.updatedBy || v.createdBy || 'Director',
      createdAt: v.createdAt || Date.now(),
      updatedAt: v.updatedAt || Date.now()
    };
  }

  function migrateTask(t) {
    return {
      id: t.id || uid(),
      taskId: t.taskId || '', // assigned post-migration
      title: t.title || '',
      vendorId: t.vendorId || null,
      linkedTaskIds: Array.isArray(t.linkedTaskIds) ? t.linkedTaskIds : [],
      priority: t.priority || 'normal',
      status: t.status || 'pending',
      followUp: t.followUp || '',
      completedAt: t.completedAt || null,
      completedBy: t.completedBy || null,
      createdBy: t.createdBy || 'Director',
      updatedBy: t.updatedBy || t.createdBy || 'Director',
      createdAt: t.createdAt || Date.now(),
      updatedAt: t.updatedAt || Date.now()
    };
  }

  function assignMissingTaskIds() {
    const needsId = state.tasks.filter(t => !t.taskId);
    if (needsId.length === 0) return false;

    // Count max serial per ddmm prefix from already-assigned IDs
    const maxSerial = {};
    state.tasks.forEach(t => {
      if (t.taskId && t.taskId.includes('/')) {
        const [prefix, s] = t.taskId.split('/');
        const n = parseInt(s, 10);
        if (!isNaN(n)) maxSerial[prefix] = Math.max(maxSerial[prefix] || 0, n);
      }
    });

    // Assign in creation order
    needsId.sort((a, b) => a.createdAt - b.createdAt);
    needsId.forEach(t => {
      const d = new Date(t.createdAt);
      const prefix = String(d.getDate()).padStart(2, '0') + String(d.getMonth() + 1).padStart(2, '0');
      maxSerial[prefix] = (maxSerial[prefix] || 0) + 1;
      t.taskId = prefix + '/' + String(maxSerial[prefix]).padStart(2, '0');
    });
    return true;
  }

  function seedVendor(data) {
    return {
      id: uid(),
      name: data.name || '',
      pointOfContact: data.pointOfContact || '',
      phone: data.phone || '',
      email: data.email || '',
      description: data.description || '',
      scope: data.scope || '',
      expenseHead: data.expenseHead || '',
      createdBy: 'System (seed)',
      updatedBy: 'System (seed)',
      createdAt: Date.now(),
      updatedAt: Date.now()
    };
  }

  // ---------- Data ops ----------
  async function loadAll() {
    setSync('Loading…', 'syncing');
    const [t, v, u, seededV2] = await Promise.all([
      safeGet(K_TASKS, true),
      safeGet(K_VENDORS, true),
      safeGet(K_USER, false),
      safeGet(K_SEEDED_V2, true)
    ]);
    try {
      const rawTasks = t ? JSON.parse(t.value) : [];
      state.tasks = rawTasks.map(migrateTask);
    } catch(e){ state.tasks = []; }
    try {
      const rawVendors = v ? JSON.parse(v.value) : [];
      state.vendors = rawVendors.map(migrateVendor);
    } catch(e){ state.vendors = []; }

    if (u && u.value) {
      state.currentUser = u.value;
      $('#userSelect').value = u.value;
    }

    // V2 vendor seed
    if (!seededV2) {
      state.vendors = SEED_VENDORS.map(seedVendor);
      await safeSet(K_VENDORS, JSON.stringify(state.vendors), true);
      await safeSet(K_SEEDED_V2, 'true', true);
    }

    // Assign task IDs to any tasks lacking them
    const changed = assignMissingTaskIds();
    if (changed) await saveTasks();

    setSync('Synced · ' + new Date().toLocaleTimeString([], {hour:'2-digit', minute:'2-digit'}));
    renderAll();
  }

  async function saveTasks() { await safeSet(K_TASKS, JSON.stringify(state.tasks), true); }
  async function saveVendors() { await safeSet(K_VENDORS, JSON.stringify(state.vendors), true); }
  async function saveUserPref() { await safeSet(K_USER, state.currentUser, false); }

  // ---------- Render ----------
  function getExpenseHeads() {
    const set = new Set();
    state.vendors.forEach(v => { if (v.expenseHead) set.add(v.expenseHead); });
    return Array.from(set).sort();
  }

  function populateExpenseHeadFilter() {
    const sel = $('#expenseHeadFilter');
    const current = state.expenseHeadFilter;
    const heads = getExpenseHeads();
    sel.innerHTML = '<option value="">All expense heads</option>' +
      heads.map(h => `<option value="${escapeHtml(h)}"${h===current?' selected':''}>${escapeHtml(h)}</option>`).join('');
    $('#expenseHeadList').innerHTML = heads.map(h => `<option value="${escapeHtml(h)}"></option>`).join('');
  }

  function populateTaskIdDatalist(excludeId) {
    const dl = $('#taskIdDatalist');
    dl.innerHTML = state.tasks
      .filter(t => t.taskId && t.taskId !== excludeId)
      .map(t => `<option value="${escapeHtml(t.taskId)}">${escapeHtml(t.title.slice(0, 40))}</option>`)
      .join('');
  }

  function populateVendorDropdown() {
    const sel = $('#taskVendor');
    const current = sel.value;
    sel.innerHTML = '<option value="">— None —</option>' +
      state.vendors
        .slice()
        .sort((a,b) => a.name.localeCompare(b.name))
        .map(v => `<option value="${escapeHtml(v.id)}">${escapeHtml(v.name)}${v.scope ? ' · ' + escapeHtml(v.scope) : ''}</option>`)
        .join('');
    sel.value = current;
  }

  function updateTaskCounts() {
    const counts = { all: state.tasks.length, pending: 0, 'in-progress': 0, done: 0 };
    state.tasks.forEach(t => { if (counts[t.status] !== undefined) counts[t.status]++; });
    Object.keys(counts).forEach(k => {
      const el = document.querySelector(`[data-count="${k}"]`);
      if (el) el.textContent = counts[k];
    });
    $('#tasksCount').textContent = counts.pending + counts['in-progress'];
  }

  function renderAll() {
    populateVendorDropdown();
    populateExpenseHeadFilter();
    renderTasks();
    renderVendors();
    updateTaskCounts();
    $('#vendorsCount').textContent = state.vendors.length;
  }

  function renderTasks() {
    const list = $('#tasksList');
    const empty = $('#tasksEmpty');
    let items = state.tasks.slice();
    if (state.filter !== 'all') {
      items = items.filter(t => t.status === state.filter);
    }
    const statusOrder = { 'pending': 0, 'in-progress': 1, 'done': 2 };
    const priorityOrder = { 'urgent': 0, 'high': 1, 'normal': 2 };
    items.sort((a,b) => {
      const s = statusOrder[a.status] - statusOrder[b.status];
      if (s) return s;
      if (a.status === 'done' && b.status === 'done') {
        return (b.completedAt || b.updatedAt) - (a.completedAt || a.updatedAt);
      }
      const p = priorityOrder[a.priority] - priorityOrder[b.priority];
      if (p) return p;
      return b.createdAt - a.createdAt;
    });

    if (items.length === 0) {
      list.innerHTML = '';
      empty.classList.remove('hidden');
      empty.innerHTML = state.filter === 'all'
        ? 'No tasks yet. Click <strong>+ Add task</strong> to hand over the first follow-up item to Mr. Vyas.'
        : `No ${state.filter === 'done' ? 'completed' : state.filter} tasks.`;
      return;
    }
    empty.classList.add('hidden');

    list.innerHTML = items.map(taskCardHtml).join('');
  }

  function taskCardHtml(t) {
    const vendor = state.vendors.find(v => v.id === t.vendorId);
    const priorityBadge = t.priority !== 'normal'
      ? `<span class="badge badge-${t.priority}">${t.priority[0].toUpperCase() + t.priority.slice(1)}</span>`
      : '';
    const vendorBadge = vendor
      ? `<span class="badge badge-vendor">${escapeHtml(vendor.name)}</span>`
      : '';

    const linkedChips = (t.linkedTaskIds || []).map(lid => {
      const linkedTask = state.tasks.find(x => x.taskId === lid);
      const title = linkedTask ? linkedTask.title : '(not found)';
      return `<span class="linked-chip" data-jump="${escapeHtml(lid)}" title="${escapeAttr(title)}">
        ${escapeHtml(lid)} <span class="x" data-unlink="${escapeHtml(lid)}" title="Remove link">×</span>
      </span>`;
    }).join('');

    const linkedSection = `
      <div class="task-linked" data-task-linked>
        <span class="linked-label">Linked to:</span>
        ${linkedChips || '<span style="color:var(--text-subtle); font-size:12px;">none</span>'}
        <button class="linked-add-btn" data-add-link>+ Link task</button>
      </div>`;

    const doneMark = t.status === 'done'
      ? `<span class="task-done-mark">
           <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
           Completed
         </span>`
      : '';

    const completionInfo = t.status === 'done' && t.completedAt
      ? `<br>Completed by <strong>${escapeHtml(t.completedBy || '—')}</strong> · ${formatDateFull(t.completedAt)}`
      : '';

    const actions = t.status === 'done'
      ? `<button class="btn btn-ghost btn-sm" data-reopen>Reopen</button>
         <button class="btn btn-ghost btn-sm icon-btn danger" data-delete>Delete</button>`
      : `<button class="btn btn-primary btn-sm" data-save>Save update</button>
         <span class="save-flash" data-flash>✓ Saved</span>
         <button class="btn btn-success btn-sm" data-complete>Mark complete</button>
         <button class="btn btn-ghost btn-sm icon-btn danger" data-delete>Delete</button>`;

    return `
      <div class="task" data-id="${escapeHtml(t.id)}" data-task-id="${escapeHtml(t.taskId)}" data-priority="${escapeHtml(t.priority)}" data-status="${escapeHtml(t.status)}">
        <div class="task-idline">
          <span class="task-id">#${escapeHtml(t.taskId)}</span>
          ${doneMark}
        </div>
        <p class="task-title" data-edit="title">${escapeHtml(t.title)}</p>
        <div class="task-meta">
          <select class="inline-status badge-${t.status}" data-status-select ${t.status==='done'?'disabled':''}>
            <option value="pending" ${t.status==='pending'?'selected':''}>Pending</option>
            <option value="in-progress" ${t.status==='in-progress'?'selected':''}>In progress</option>
            <option value="done" ${t.status==='done'?'selected':''}>Done</option>
          </select>
          ${priorityBadge}
          ${vendorBadge}
        </div>
        ${linkedSection}
        <div class="follow-up">
          <div class="follow-up-label">Follow-up notes (Mr. Vyas)</div>
          <textarea data-followup placeholder="Enter follow-up details: who was contacted, what was said, next action…" ${t.status==='done'?'readonly':''}>${escapeHtml(t.followUp || '')}</textarea>
        </div>
        <div class="task-timestamps">
          Added by <strong>${escapeHtml(t.createdBy)}</strong> · ${formatDate(t.createdAt)}
          ${t.updatedAt && t.updatedAt !== t.createdAt ? `<br>Last updated by <strong>${escapeHtml(t.updatedBy || '—')}</strong> · ${formatDate(t.updatedAt)}` : ''}
          ${completionInfo}
        </div>
        <div class="task-actions">
          ${actions}
        </div>
      </div>`;
  }

  function vendorCardHtml(v) {
    const descBadge = v.description
      ? `<span class="badge badge-desc-${descSlug(v.description)}">${escapeHtml(v.description)}</span>`
      : '';
    const expBadge = v.expenseHead
      ? `<span class="badge badge-expense">${escapeHtml(v.expenseHead)}</span>`
      : '';
    const details = [];
    if (v.pointOfContact) details.push(`<span class="poc">${escapeHtml(v.pointOfContact)}</span>`);
    if (v.phone) details.push(`<a href="${telLink(v.phone)}">${escapeHtml(formatPhoneDisplay(v.phone))}</a>`);
    if (v.email) details.push(`<a href="mailto:${escapeAttr(v.email)}">${escapeHtml(v.email)}</a>`);
    const detailsHtml = details.join('<span class="sep">·</span>');

    return `
      <div class="vendor" data-id="${escapeHtml(v.id)}">
        <div class="vendor-main">
          <div class="vendor-header">
            <p class="vendor-name">${escapeHtml(v.name)}</p>
            ${descBadge}
            ${expBadge}
          </div>
          ${v.scope ? `<p class="vendor-scope">${escapeHtml(v.scope)}</p>` : ''}
          ${details.length ? `<div class="vendor-details">${detailsHtml}</div>` : ''}
        </div>
        <div class="vendor-actions">
          ${v.phone ? `
          <a href="${telLink(v.phone)}" class="contact-btn call" title="Call" aria-label="Call">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
          </a>
          <a href="${waLink(v.phone)}" target="_blank" rel="noopener" class="contact-btn wa" title="WhatsApp" aria-label="WhatsApp">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.626.712.226 1.36.194 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/></svg>
          </a>` : ''}
          <button class="icon-btn" data-edit-vendor title="Edit">Edit</button>
          <button class="icon-btn danger" data-delete-vendor title="Delete">Delete</button>
        </div>
      </div>`;
  }

  function renderVendors() {
    const list = $('#vendorsList');
    const empty = $('#vendorsEmpty');
    const q = (state.vendorSearch || '').toLowerCase().trim();
    let items = state.vendors.slice();

    if (state.expenseHeadFilter) {
      items = items.filter(v => (v.expenseHead || '') === state.expenseHeadFilter);
    }
    if (state.descriptionFilter) {
      if (state.descriptionFilter === 'Other') {
        items = items.filter(v => !['Vendor','Contractor','Professional'].includes(v.description));
      } else {
        items = items.filter(v => v.description === state.descriptionFilter);
      }
    }
    if (q) {
      items = items.filter(v =>
        (v.name || '').toLowerCase().includes(q) ||
        (v.pointOfContact || '').toLowerCase().includes(q) ||
        (v.scope || '').toLowerCase().includes(q) ||
        (v.description || '').toLowerCase().includes(q) ||
        (v.expenseHead || '').toLowerCase().includes(q) ||
        cleanPhone(v.phone).includes(q.replace(/\D/g,'')) ||
        (v.email || '').toLowerCase().includes(q)
      );
    }

    if (items.length === 0) {
      list.innerHTML = '';
      empty.classList.remove('hidden');
      empty.innerHTML = state.vendors.length === 0
        ? 'No vendors yet. Click <strong>+ Add vendor</strong> to add one.'
        : 'No vendors match the current filters.';
      return;
    }
    empty.classList.add('hidden');

    if (state.viewMode === 'grouped') {
      const groups = {};
      items.forEach(v => {
        const h = v.expenseHead || 'Unassigned';
        if (!groups[h]) groups[h] = [];
        groups[h].push(v);
      });
      const sortedHeads = Object.keys(groups).sort((a,b) => {
        if (a === 'Unassigned') return 1;
        if (b === 'Unassigned') return -1;
        return a.localeCompare(b);
      });
      list.innerHTML = sortedHeads.map(head => {
        const gItems = groups[head].slice().sort((a,b) => a.name.localeCompare(b.name));
        return `
          <div class="group-header">
            <span>${escapeHtml(head)}</span>
            <span class="group-count">${gItems.length} vendor${gItems.length===1?'':'s'}</span>
          </div>
          <div class="list">${gItems.map(vendorCardHtml).join('')}</div>`;
      }).join('');
    } else {
      items.sort((a,b) => a.name.localeCompare(b.name));
      list.innerHTML = `<div class="list">${items.map(vendorCardHtml).join('')}</div>`;
    }
  }

  // ---------- Task form linked chips ----------
  function renderTaskFormLinkedChips() {
    const wrap = $('#taskFormLinkedChips');
    wrap.innerHTML = state.taskFormLinkedIds.map(lid =>
      `<span class="linked-chip">${escapeHtml(lid)} <span class="x" data-form-unlink="${escapeHtml(lid)}">×</span></span>`
    ).join('');
  }

  function addTaskFormLinkedId(val) {
    const v = (val || '').trim();
    if (!v) return;
    if (!/^\d{4}\/\d{1,3}$/.test(v)) {
      alert('Task ID must be in format ddmm/nn (e.g., 2004/01)');
      return;
    }
    if (state.taskFormLinkedIds.includes(v)) return;
    state.taskFormLinkedIds.push(v);
    renderTaskFormLinkedChips();
  }

  // ---------- Jump to task ----------
  function jumpToTask(taskId) {
    const target = state.tasks.find(t => t.taskId === taskId);
    if (!target) {
      alert('Linked task ' + taskId + ' no longer exists.');
      return;
    }
    // Switch filter if needed
    if (state.filter !== 'all' && state.filter !== target.status) {
      state.filter = 'all';
      $$('#taskFilters .chip').forEach(c => c.classList.toggle('active', c.dataset.filter === 'all'));
      renderTasks();
    }
    setTimeout(() => {
      const el = document.querySelector(`.task[data-task-id="${CSS.escape(taskId)}"]`);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'center' });
        el.classList.add('flash');
        setTimeout(() => el.classList.remove('flash'), 1500);
      }
    }, 50);
  }

  // ---------- Event handlers: Tabs, user ----------
  $$('.tab').forEach(btn => {
    btn.addEventListener('click', () => {
      $$('.tab').forEach(b => b.classList.remove('active'));
      $$('.panel').forEach(p => p.classList.remove('active'));
      btn.classList.add('active');
      const tab = btn.dataset.tab;
      $('#' + tab + 'Panel').classList.add('active');
      state.activeTab = tab;
    });
  });

  $('#userSelect').addEventListener('change', (e) => {
    state.currentUser = e.target.value;
    saveUserPref();
  });

  // Task filter chips
  $('#taskFilters').addEventListener('click', (e) => {
    const chip = e.target.closest('.chip');
    if (!chip) return;
    $$('#taskFilters .chip').forEach(c => c.classList.remove('active'));
    chip.classList.add('active');
    state.filter = chip.dataset.filter;
    renderTasks();
  });

  // Task form
  function openTaskForm() {
    $('#taskForm').classList.remove('hidden');
    $('#taskTitle').value = '';
    $('#taskVendor').value = '';
    $('#taskPriority').value = 'normal';
    $('#taskLinkedInput').value = '';
    state.taskFormLinkedIds = [];
    renderTaskFormLinkedChips();
    populateTaskIdDatalist();
    $('#taskTitle').focus();
  }
  function closeTaskForm() {
    $('#taskForm').classList.add('hidden');
    state.taskFormLinkedIds = [];
  }

  $('#addTaskBtn').addEventListener('click', openTaskForm);
  $('#cancelTaskBtn').addEventListener('click', closeTaskForm);

  // Linked chip input in task form
  $('#taskLinkedInput').addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ',') {
      e.preventDefault();
      addTaskFormLinkedId(e.target.value);
      e.target.value = '';
    } else if (e.key === 'Backspace' && !e.target.value && state.taskFormLinkedIds.length) {
      state.taskFormLinkedIds.pop();
      renderTaskFormLinkedChips();
    }
  });
  $('#taskLinkedInput').addEventListener('change', (e) => {
    // Fired when selecting from datalist
    if (e.target.value) {
      addTaskFormLinkedId(e.target.value);
      e.target.value = '';
    }
  });
  $('#taskFormLinkedChips').addEventListener('click', (e) => {
    const x = e.target.closest('[data-form-unlink]');
    if (x) {
      const lid = x.dataset.formUnlink;
      state.taskFormLinkedIds = state.taskFormLinkedIds.filter(id => id !== lid);
      renderTaskFormLinkedChips();
    }
  });

  $('#saveTaskBtn').addEventListener('click', async () => {
    const title = $('#taskTitle').value.trim();
    if (!title) { $('#taskTitle').focus(); return; }
    const now = Date.now();
    const task = {
      id: uid(),
      taskId: '', // filled below
      title,
      vendorId: $('#taskVendor').value || null,
      linkedTaskIds: state.taskFormLinkedIds.slice(),
      priority: $('#taskPriority').value,
      status: 'pending',
      followUp: '',
      completedAt: null,
      completedBy: null,
      createdBy: state.currentUser,
      updatedBy: state.currentUser,
      createdAt: now,
      updatedAt: now
    };
    task.taskId = generateTaskId(now);
    state.tasks.unshift(task);
    closeTaskForm();
    renderAll();
    await saveTasks();
  });

  // Task list delegation — all actions
  const tasksList = $('#tasksList');

  tasksList.addEventListener('click', async (e) => {
    const taskEl = e.target.closest('.task');
    if (!taskEl) return;
    const id = taskEl.dataset.id;
    const task = state.tasks.find(x => x.id === id);
    if (!task) return;

    // Jump to linked task
    const jumpBadge = e.target.closest('[data-jump]');
    if (jumpBadge && !e.target.closest('[data-unlink]')) {
      jumpToTask(jumpBadge.dataset.jump);
      return;
    }

    // Unlink a linked task
    const unlink = e.target.closest('[data-unlink]');
    if (unlink) {
      e.stopPropagation();
      const lid = unlink.dataset.unlink;
      task.linkedTaskIds = (task.linkedTaskIds || []).filter(x => x !== lid);
      task.updatedAt = Date.now();
      task.updatedBy = state.currentUser;
      renderTasks();
      await saveTasks();
      return;
    }

    // Add linked task inline
    if (e.target.closest('[data-add-link]')) {
      const linkedWrap = taskEl.querySelector('[data-task-linked]');
      const btn = linkedWrap.querySelector('[data-add-link]');
      // replace btn with inline input
      const wrapper = document.createElement('span');
      wrapper.className = 'linked-inline-input';
      wrapper.innerHTML = `<input type="text" list="taskIdDatalist" placeholder="Task ID" autofocus />`;
      btn.replaceWith(wrapper);
      populateTaskIdDatalist(task.taskId);
      const input = wrapper.querySelector('input');
      input.focus();
      const commit = async () => {
        const val = input.value.trim();
        if (val && /^\d{4}\/\d{1,3}$/.test(val) && val !== task.taskId) {
          if (!task.linkedTaskIds.includes(val)) {
            task.linkedTaskIds.push(val);
            task.updatedAt = Date.now();
            task.updatedBy = state.currentUser;
            await saveTasks();
          }
        } else if (val && !/^\d{4}\/\d{1,3}$/.test(val)) {
          alert('Task ID must be in format ddmm/nn (e.g., 2004/01)');
        }
        renderTasks();
      };
      input.addEventListener('keydown', (ev) => {
        if (ev.key === 'Enter') { ev.preventDefault(); commit(); }
        else if (ev.key === 'Escape') { renderTasks(); }
      });
      input.addEventListener('blur', commit);
      return;
    }

    // Delete
    if (e.target.closest('[data-delete]')) {
      if (!confirm('Delete task #' + task.taskId + '?')) return;
      state.tasks = state.tasks.filter(t => t.id !== id);
      renderAll();
      await saveTasks();
      return;
    }

    // Save update
    if (e.target.closest('[data-save]')) {
      const followup = taskEl.querySelector('[data-followup]');
      if (followup) {
        task.followUp = followup.value;
      }
      task.updatedAt = Date.now();
      task.updatedBy = state.currentUser;
      await saveTasks();
      const flash = taskEl.querySelector('[data-flash]');
      if (flash) {
        flash.classList.add('show');
        setTimeout(() => flash.classList.remove('show'), 1600);
      }
      renderAll();
      return;
    }

    // Mark complete
    if (e.target.closest('[data-complete]')) {
      const followup = taskEl.querySelector('[data-followup]');
      if (followup) task.followUp = followup.value;
      task.status = 'done';
      task.completedAt = Date.now();
      task.completedBy = state.currentUser;
      task.updatedAt = Date.now();
      task.updatedBy = state.currentUser;
      renderAll();
      await saveTasks();
      return;
    }

    // Reopen
    if (e.target.closest('[data-reopen]')) {
      task.status = 'pending';
      task.completedAt = null;
      task.completedBy = null;
      task.updatedAt = Date.now();
      task.updatedBy = state.currentUser;
      renderAll();
      await saveTasks();
      return;
    }

    // Title edit
    if (e.target.matches('[data-edit="title"]') && task.status !== 'done') {
      if (e.target.getAttribute('contenteditable') === 'true') return;
      e.target.setAttribute('contenteditable', 'true');
      e.target.focus();
      const range = document.createRange();
      range.selectNodeContents(e.target);
      const sel = window.getSelection();
      sel.removeAllRanges();
      sel.addRange(range);
    }
  });

  tasksList.addEventListener('change', async (e) => {
    const taskEl = e.target.closest('.task');
    if (!taskEl) return;
    const id = taskEl.dataset.id;
    const task = state.tasks.find(x => x.id === id);
    if (!task) return;
    if (e.target.matches('[data-status-select]')) {
      const newStatus = e.target.value;
      task.status = newStatus;
      if (newStatus === 'done') {
        task.completedAt = Date.now();
        task.completedBy = state.currentUser;
      } else {
        task.completedAt = null;
        task.completedBy = null;
      }
      task.updatedAt = Date.now();
      task.updatedBy = state.currentUser;
      renderAll();
      await saveTasks();
    }
  });

  tasksList.addEventListener('blur', async (e) => {
    const taskEl = e.target.closest('.task');
    if (!taskEl) return;
    const id = taskEl.dataset.id;
    const task = state.tasks.find(x => x.id === id);
    if (!task) return;
    if (e.target.matches('[data-edit="title"]')) {
      const newTitle = e.target.innerText.trim();
      e.target.removeAttribute('contenteditable');
      if (newTitle && newTitle !== task.title) {
        task.title = newTitle;
        task.updatedAt = Date.now();
        task.updatedBy = state.currentUser;
        await saveTasks();
        renderTasks();
      } else if (!newTitle) {
        e.target.innerText = task.title;
      }
    }
  }, true);

  tasksList.addEventListener('keydown', (e) => {
    if (e.target.matches('[data-edit="title"]')) {
      if (e.key === 'Enter') { e.preventDefault(); e.target.blur(); }
      if (e.key === 'Escape') {
        const id = e.target.closest('.task').dataset.id;
        const task = state.tasks.find(t => t.id === id);
        e.target.innerText = task.title;
        e.target.blur();
      }
    }
  });

  // ---------- Vendor form ----------
  let editingVendorId = null;
  function openVendorForm(vendor) {
    $('#vendorForm').classList.remove('hidden');
    $('#vendorName').value = vendor ? vendor.name : '';
    $('#vendorPOC').value = vendor ? (vendor.pointOfContact || '') : '';
    $('#vendorPhone').value = vendor ? (vendor.phone || '') : '';
    $('#vendorEmail').value = vendor ? (vendor.email || '') : '';
    $('#vendorDescription').value = vendor ? (vendor.description || '') : '';
    $('#vendorScope').value = vendor ? (vendor.scope || '') : '';
    $('#vendorExpense').value = vendor ? (vendor.expenseHead || '') : '';
    editingVendorId = vendor ? vendor.id : null;
    $('#saveVendorBtn').textContent = vendor ? 'Save changes' : 'Add vendor';
    $('#vendorForm').scrollIntoView({ behavior: 'smooth', block: 'center' });
    $('#vendorName').focus();
  }
  function closeVendorForm() {
    $('#vendorForm').classList.add('hidden');
    editingVendorId = null;
    $('#saveVendorBtn').textContent = 'Add vendor';
  }

  $('#addVendorBtn').addEventListener('click', () => openVendorForm(null));
  $('#cancelVendorBtn').addEventListener('click', closeVendorForm);

  $('#saveVendorBtn').addEventListener('click', async () => {
    const name = $('#vendorName').value.trim();
    if (!name) { $('#vendorName').focus(); return; }
    const payload = {
      name,
      pointOfContact: $('#vendorPOC').value.trim(),
      phone: $('#vendorPhone').value.trim(),
      email: $('#vendorEmail').value.trim(),
      description: $('#vendorDescription').value,
      scope: $('#vendorScope').value.trim(),
      expenseHead: $('#vendorExpense').value.trim()
    };
    if (editingVendorId) {
      const v = state.vendors.find(x => x.id === editingVendorId);
      if (v) {
        Object.assign(v, payload);
        v.updatedAt = Date.now();
        v.updatedBy = state.currentUser;
      }
    } else {
      state.vendors.push({
        id: uid(),
        ...payload,
        createdBy: state.currentUser,
        updatedBy: state.currentUser,
        createdAt: Date.now(),
        updatedAt: Date.now()
      });
    }
    closeVendorForm();
    renderAll();
    await saveVendors();
  });

  $('#vendorsList').addEventListener('click', async (e) => {
    const vEl = e.target.closest('.vendor');
    if (!vEl) return;
    const id = vEl.dataset.id;
    if (e.target.closest('[data-delete-vendor]')) {
      const v = state.vendors.find(x => x.id === id);
      if (!v) return;
      if (!confirm('Delete vendor "' + v.name + '"? Tasks linked to them will keep their reference but show no name.')) return;
      state.vendors = state.vendors.filter(x => x.id !== id);
      renderAll();
      await saveVendors();
    } else if (e.target.closest('[data-edit-vendor]')) {
      const v = state.vendors.find(x => x.id === id);
      if (v) openVendorForm(v);
    }
  });

  $('#vendorSearch').addEventListener('input', (e) => {
    state.vendorSearch = e.target.value;
    renderVendors();
  });
  $('#expenseHeadFilter').addEventListener('change', (e) => {
    state.expenseHeadFilter = e.target.value;
    renderVendors();
  });
  $('#descriptionFilter').addEventListener('change', (e) => {
    state.descriptionFilter = e.target.value;
    renderVendors();
  });
  $('#viewMode').addEventListener('change', (e) => {
    state.viewMode = e.target.value;
    renderVendors();
  });

  // Refresh / Export / Import
  $('#refreshBtn').addEventListener('click', loadAll);

  $('#exportBtn').addEventListener('click', () => {
    const data = {
      exportedAt: new Date().toISOString(),
      exportedBy: state.currentUser,
      version: 3,
      tasks: state.tasks,
      vendors: state.vendors
    };
    const blob = new Blob([JSON.stringify(data, null, 2)], {type:'application/json'});
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'house-vendor-tracker-' + new Date().toISOString().slice(0,10) + '.json';
    a.click();
    URL.revokeObjectURL(url);
  });

  $('#importBtn').addEventListener('click', () => $('#importFile').click());
  $('#importFile').addEventListener('change', async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    try {
      const text = await file.text();
      const data = JSON.parse(text);
      if (!Array.isArray(data.tasks) || !Array.isArray(data.vendors)) throw new Error('Invalid file');
      if (!confirm('This will REPLACE current tasks and vendors with the backup. Proceed?')) return;
      state.tasks = data.tasks.map(migrateTask);
      state.vendors = data.vendors.map(migrateVendor);
      assignMissingTaskIds();
      renderAll();
      await saveTasks();
      await saveVendors();
      alert('Backup imported successfully.');
    } catch(err) {
      alert('Could not import file: ' + err.message);
    }
    e.target.value = '';
  });

  // ---------- Init ----------
  loadAll();

  // Poll for updates from the other party
  setInterval(async () => {
    const active = document.activeElement;
    if (active && (active.tagName === 'TEXTAREA' || active.getAttribute('contenteditable') === 'true' || active.tagName === 'INPUT')) return;
    const [t, v] = await Promise.all([safeGet(K_TASKS, true), safeGet(K_VENDORS, true)]);
    try {
      const newTasks = (t ? JSON.parse(t.value) : []).map(migrateTask);
      const newVendors = (v ? JSON.parse(v.value) : []).map(migrateVendor);
      if (JSON.stringify(newTasks) !== JSON.stringify(state.tasks) ||
          JSON.stringify(newVendors) !== JSON.stringify(state.vendors)) {
        state.tasks = newTasks;
        state.vendors = newVendors;
        renderAll();
      }
    } catch(e){}
  }, 20000);
})();
</script>
</body>
</html>
