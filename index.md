---
# You don't need to edit this file, it's empty on purpose.
# Edit theme's home layout instead if you wanna make some changes
# See: https://jekyllrb.com/docs/themes/#overriding-theme-defaults
layout: page
title: 3scale API Management
heading: <a href="#share" id="nav_share">Share</a>, <a href="#secure" id="nav_secure">secure</a>, <a href="#control" id="nav_control">control</a>, <a href="#analyze" id="nav_analyze">analyze</a>, and <a href="#monetize" id="nav_monetize">monetize</a> your APIs<span class="active">.</span>
permalink: /
---

<article id="share" class="chapter focus">  
  <section class="summary">
    <h1>
      <i class="fas fa-sitemap"></i>
      Developer Portal
    </h1>
    <p><span class="conditional-highlight">Share</span> your API's with the world, educate developers with interactive docs and empower them with a private area to manage their subscriptions, keys, and apps.</p>
  </section>
  <section class="functional focus">
    <ol class="feature-chain">
      <li class="feature" id=""><a href="{{ site.3scale_docs_url }}{{ site.3scale_product_version }}/html/developer_portal/authentication">flexible authentication</a></li>
      <li class="feature" id=""><a href="{{ site.3scale_docs_url }}{{ site.3scale_product_version }}/html/developer_portal/change-built-in-pages">custom HTML, Js and CSS</a></li>
      <li class="feature" id=""><a href="{{ site.3scale_docs_url }}{{ site.3scale_product_version }}/html/developer_portal/custom-signup-fields">custom sign-up form & email templates</a></li>
    </ol>
  </section>
</article>

<article id="secure" class="chapter focus">  
  <section class="summary">
    <h1>
      <i class="fas fa-fingerprint"></i>
      API Authentication
    </h1>
    <p>Use one of the three different authentication patterns to <span class="conditional-highlight">secure</span> access to your APIs.</p>
  </section>
  <section class="functional">
    <ol class="feature-chain">
      <li class="feature" id=""><a href="{{ site.3scale_docs_url }}{{ site.3scale_product_version }}/html/api_authentication/authentication-patterns#api_key">API Key</a></li>
      <li class="feature" id=""><a href="{{ site.3scale_docs_url }}{{ site.3scale_product_version }}/html/api_authentication/authentication-patterns#app_id_and_app_key_pair">App Id and Key pair</a></li>
      <li class="feature" id=""><a href="{{ site.3scale_docs_url }}{{ site.3scale_product_version }}/html/api_authentication/authentication-patterns#openid_connect">OpenID Connect</a></li>
    </ol>
  </section>
</article>

<article id="control" class="chapter focus">  
  <section class="summary">
    <h1>
      <i class="fas fa-clipboard-list"></i>
      Plans, Rules & Limits
    </h1>
    <p><span class="conditional-highlight">Control</span> access to your APIs with plans, metrics, methods, rate limits and pricing rules.</p>
  </section>
  <section class="functional">
    <ol class="feature-chain">
      <li class="feature" id=""><a href="{{ site.3scale_docs_url }}{{ site.3scale_product_version }}/html/access_control/api-definition-methods-metrics">Methods and Metrics</a></li>
      <li class="feature" id=""><a href="{{ site.3scale_docs_url }}{{ site.3scale_product_version }}/html/access_control/api-definition-methods-metrics#application-plans">Application Plans</a></li>
      <li class="feature" id=""><a href="{{ site.3scale_docs_url }}{{ site.3scale_product_version }}/html/access_control/api-definition-methods-metrics#rate-limits">Rate limits</a></li>
    </ol>
  </section>
</article>

<article id="analyze" class="chapter focus">  
  <section class="summary">
    <h1>
      <i class="fas fa-user-circle"></i>
      Analytics
    </h1>
    <p><span class="conditional-highlight">Analyse</span> your API's usage through daily averages, top applications and response codes.</p>
  </section>
  <section class="functional">
    <ol class="feature-chain">
      <li class="feature" id=""><a href="{{ site.3scale_docs_url }}{{ site.3scale_product_version }}/html/analytics/out-of-the-box-analytics">Per-application</a></li>
      <li class="feature" id=""><a href="{{ site.3scale_docs_url }}{{ site.3scale_product_version }}/html/analytics/response-codes-tracking">Response code tracking</a></li>
      <li class="feature" id=""><a href="{{ site.3scale_docs_url }}{{ site.3scale_product_version }}/html/analytics/exporting-analytics">Export analytics</a></li>
    </ol>
  </section>
</article>

<article id="monetize" class="chapter focus">  
  <section class="summary">
    <h1>
      <i class="fas fa-credit-card"></i>
      Billing
    </h1>
    <p><span class="conditional-highlight">Monetize</span> your APIs through pricing rules, paid plans, automated billing and invoicing.</p>
  </section>
  <section class="functional">
    <ol class="feature-chain">  
      <li class="feature" id=""><a href="{{ site.3scale_docs_url }}{{ site.3scale_product_version }}/html/billing/index#configure-billing">Pre-paid and Post-paid billing</a></li>
      <li class="feature" id=""><a href="{{ site.3scale_docs_url }}{{ site.3scale_product_version }}/html/billing/index#adding-vat-rate">VAT rates</a></li>
      <li class="feature" id=""><a href="{{ site.3scale_docs_url }}{{ site.3scale_product_version }}/html/billing/index#stripe">Stripe, Adyen, and Braintree support</a></li>
    </ol>
  </section>
</article>
<script src="{{ "/assets/features.js" | relative_url }}"></script>
