# Apex Sports Law — Official Website

Apex Sports Law is a specialist sports law practice advising footballers, agents, and clubs on contracts, transfers, FIFA regulations, and dispute resolution.

This repository contains the production codebase for the Apex Sports Law website, including its SEO-optimized Knowledge Centre.

---

## Overview

The platform is designed to:
- Provide **authoritative legal insights** on football regulations
- Serve as a **client acquisition channel** for advisory services
- Establish **thought leadership** in sports law across Africa
- Deliver **high-performance, SEO-first content** targeting football stakeholders

---

## Key Capabilities

### 1. Knowledge Centre (Content Engine)
- Long-form, SEO-optimized legal articles
- Structured for discoverability (Google, LinkedIn previews)
- Focus areas:
  - FIFA Regulations (RSTP, agents, transfers)
  - Football governance and compliance
  - Player protection and dispute resolution

### 2. SEO Infrastructure
- Server-compatible metadata via `react-helmet-async`
- Open Graph (OG) and Twitter Card optimization
- Canonical URL enforcement
- Structured data (Schema.org: WebSite, LegalService)
- Internal linking strategy for topical authority

### 3. Conversion Layer
- Embedded consultation funnel (Calendly integration)
- Service positioning across:
  - Sports Law
  - Arbitration & Dispute Resolution
  - Corporate Advisory

---

## Tech Stack

- **Frontend:** React (TypeScript) + Vite  
- **Routing:** React Router DOM  
- **SEO:** react-helmet-async  
- **Hosting:** Firebase Hosting  
- **Assets:** Cloudinary (images), static OG images  

---

## Project Structure

```bash
/src
  /pages
    Home.tsx
    PostDetail.tsx
  /constants
    constants.ts   # Blog content + metadata
/public
  /og             # Open Graph images
