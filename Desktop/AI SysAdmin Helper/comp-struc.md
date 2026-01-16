Pages & Components
2.1 Dashboard Page (Dashboard.js)

Purpose: Summary of system health, recent anomalies, active incidents, and trends.

Components:

SummaryCards.js

Cards for:

Total logs today

Active anomalies

Open incidents

Resolved incidents

Each card clickable → navigates to corresponding page

TrendChart.js

Line or bar chart

Shows anomalies/incidents over time

Filters: last 24h, 7 days, 30 days

Hover shows data details

RecentAnomalies.js

List of most recent anomalies

Columns: Timestamp, Host, Severity, Type

Each row clickable → navigates to anomaly details

RecentIncidents.js

List of most recent incidents

Columns: ID, Severity, Status, Assigned To, Timestamp

Each row clickable → navigates to incident details

Interactions:

Click card → navigate page

Click anomaly/incident → open details

Filter dropdowns for trends

Real-time updates via WebSocket/SSE

2.2 Logs Page (Logs.js)

Purpose: Display collected logs, search/filter, view details.

Components:

LogTable.js

Columns: Timestamp, Host, Log Type, Event ID, Message (truncated), Severity (if AI tag)

Pagination / Infinite scroll

Click row → open LogDetailModal.js

LogDetailModal.js

Full log message

Parsed fields in JSON tree view

Linked anomalies (if any)

Option: “Mark as Important” / “Send Feedback”

LogFilters.js

Host filter (dropdown/multi-select)

Log type filter (Security, System, Application)

Severity filter (High/Medium/Low)

Time range selector

Search bar (keyword search)

Interactions:

Filter/search → updates table dynamically

Click log row → modal opens

Click anomaly link → navigates to Anomalies page

2.3 Anomalies Page (Anomalies.js)

Purpose: Show AI-detected anomalies and allow user to investigate or escalate.

Components:

AnomalyTable.js

Columns: Timestamp, Host, Event ID, Severity, Status

Sortable by any column

Row click → AnomalyDetailModal.js

AnomalyDetailModal.js

Anomaly description

Related logs

Suggested remediation from AI

Action buttons:

Acknowledge

Escalate → creates incident

Mark resolved

Provide feedback to AI

AnomalyFilters.js

Host filter

Severity filter

Status filter (Open / Resolved / Acknowledged)

Time range selector

Search by Event ID or keywords

Interactions:

Row click → open modal

Apply filters → updates table

Acknowledge / Escalate / Resolve → backend API call

Feedback → updates AI agent memory/KB

2.4 Incidents Page (Incidents.js)

Purpose: Show AI-generated incident reports and track remediation progress.

Components:

IncidentTable.js

Columns: Incident ID, Severity, Status, Assigned To, Timestamp, Linked Anomalies

Sortable & searchable

IncidentDetailModal.js

AI-generated report summary

Suggested remediation steps

Linked anomalies

Action buttons:

Assign to user/admin

Mark as In Progress

Mark as Resolved

Provide feedback to AI

IncidentFilters.js

Severity

Status

Assigned To

Date range

Search by Incident ID or related anomaly

Interactions:

Table row click → open modal

Filters → updates table

Action buttons → API calls

Feedback → AI learning pipeline

2.5 Knowledge Base Page (KB.js)

Purpose: View and manage AI remediation knowledge base.

Components:

KBTable.js

Columns: Event ID, Description, Suggested Remediation, Severity, Last Updated

Sortable & searchable

Row click → KBDetailModal.js

KBDetailModal.js

Full remediation instructions

Edit / Add new remediation

Link to anomalies/incidents

Save/Cancel buttons

KBFilters.js

Severity filter

Event type filter

Search bar

Interactions:

Add/Edit → updates backend KB

Link anomalies → view affected incidents

2.6 Settings Page (Settings.js)

Purpose: Configure log sources, agent behavior, alert channels, user preferences.

Components:

LogSourceSettings.js

Add/remove hosts

Enable/disable log types

Polling interval (seconds/minutes)

AlertSettings.js

Slack / Teams / Email configuration

Severity thresholds

Enable/disable alert types

AgentSettings.js

AI reasoning parameters

Feedback update toggle

Multi-host monitoring toggle

UserSettings.js

Update profile

Change password

Role assignment (admin/analyst)

Interactions:

Form inputs with validation

Save → backend API

Cancel → revert to last saved state



System Health Page
2.1 ServiceStatus Component

Purpose: Monitor active services in real-time with:

Service name & version

Status: Online / Degraded / Offline

Load percentage (color-coded gauge)

Uptime

Action: Restart service

Actions / Interactions:

Refresh button → Fetch latest service status from backend

Restart button → Trigger backend service restart API

Hover / more options → Future modals (logs, details)

2.2 LatencyMatrix Component

Purpose: Show real-time inter-node latency (RTT) and trends:

Source → Target nodes

RTT (ms) color-coded (Optimal / Warning / Critical)

Trend: improving, stable, degrading

Actions / Interactions:

Real-time or periodic fetch from backend

Export metrics button → download JSON / CSV

2.3 ResourceGauges Component

Purpose: Display:

CPU, RAM, Storage, Thermal gauges

Top active processes with CPU, RAM, and recommendation (Keep / Kill / Idle)

Actions / Interactions:

Periodic fetch of cluster-wide telemetry

AI-based recommendation for suspicious processes

Optionally, Kill/Idle actions could trigger backend process control

2.4 Neural Outlook Panel

Purpose: Summarize AI agent heuristic predictions:

Status: predicted downtime / anomalies

Summary of AI reasoning (last run, upcoming window)

Generate audit report button

Actions / Interactions:

Generate audit report → triggers AI agent pipeline to generate PDF/JSON report

Display agent state (Idle / Running / Error)

Clickable details for logs and anomalies

2.5 Quick Stats Cards

Metrics:

Active Nodes → Node count

Avg Latency → Average RTT cluster-wide

Total Memory → Total RAM in cluster

Security Status → Heuristic AI risk evaluation

Interactions:

Click card → navigate / scroll to corresponding panel

Update dynamically from backend metrics API

2.6 Trigger Diagnostic Button

Action:

Manually triggers full system diagnostic scan

Fetches new service, latency, resource, and agent data

Updates all components in real-time