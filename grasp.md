---
layout: page
heading: <span class="active" id="client">Grasp</span> the inner workings
title: Grasp
permalink: /grasp
order: 2
---



<article id="apicast" class="chapter">  
  <section class="summary">
    <h1>
      <i class="fab fa-github"></i>
      <a href="https://github.com/3scale/apicast">3scale/apicast</a>
    </h1>
    <ul>
      <li><a href="https://www.nginx.com/">NGINX</a> based API gateway</li>
      <li><a href="https://www.lua.org/start.html">Lua</a> <a href="https://github.com/3scale/apicast/blob/master/doc/policies.md#policies">Policies</a> tell APIcast what to do in each of the nginx phases. You can <a href="https://www.lua.org/start.html">write your own</a>.</li>
      <li>Ships with own <a href="https://github.com/3scale/apicast/blob/master/doc/dns-resolver.md#dns-resolver">DNS resolver</a> implemented in Lua</li>
    </ul>
  </section>
  <section class="functional">
    <ol class="policy-chain">
      <li class="policy" id="policy_chain"><a href="https://github.com/3scale/apicast/blob/master/doc/policies.md#policy-chains">policy chain</a></li>
      <li class="policy" id="policy1"><a href="https://github.com/3scale/apicast/tree/master/gateway/src/apicast/policy/url_rewriting">rewrite policy</a></li>
      <li class="policy" id="policy2"><a href="https://github.com/3scale/apicast/blob/master/doc/policies.md#write-your-own-policy">custom policy</a></li>
      <li class="policy" id="policy3"><a href="https://github.com/3scale/apicast/tree/master/gateway/src/apicast/policy/apicast">3scale policy</a></li>
      <li class="policy" id="policy4">policy</li>
      <li class="policy" id="policy5">policy</li>
    </ol>
  </section>
</article>

<article id="apisonator" class="chapter">
  <section class="summary">
    <h1>
      <i class="fab fa-github"></i>
      <a href="https://github.com/3scale/apisonator">3scale/apisonator</a>
    </h1>
    <ul>
      <li><a href="https://github.com/3scale/apisonator#apisonator-listener">Listener</a> accepts and enques requests to authorize and report</li>
      <li><a href="https://github.com/3scale/apisonator#apisonator-worker">Worker</a> performs background tasks off-loaded from the listener.</li>
      <li><a href="https://github.com/3scale/apisonator#apisonator-failed-jobs-rescheduler">Rescheduler</a> re-queues failed jobs.</li>

    </ul>
  </section>
  <section class="functional">
    <ol id="authrep" class="policy-chain">
      <li class="policy" id="authenticate">authenticator</li>
      <li class="policy" id="authorize">authorizer</li>
      <li class="policy" id="report">reporter</li>
      <li class="policy" id="internal_api">internal API</li>
    </ol>
  </section>
</article>

<article class="chapter api">
  <h1 id="api">API</h1>
</article>

<article id="apicenter" class="chapter">
  <section class="summary">
    <h1>
      <i class="fab fa-github"></i>
      <a href="https://github.com/3scale/porta">3scale/porta</a>
    </h1>
    <ul>
      <li><a href="https://github.com/3scale/porta">Rails app</a> to manage API(s) & developers through GUI & API</li>
      <li>Accounts, Applications, Messages, Plans, Billing, Limits, Rules, Policies.</li>
      <li>Create and nurture a <a href="https://github.com/3scale/porta/tree/master/lib/developer_portal">developer portal</a></li>
    </ul>
  </section>
  <section class="functional">
    <ol id="features" class="policy-chain">
      <li class="policy" id="pisoni">pisoni</li>
      <li class="policy" id="services">services</li>
      <li class="policy" id="plans">plans (rules & limits)</li>
      <li class="policy" id="apps">apps (auth)</li>      
      <li class="policy" id="analytics">analytics</li>   
      <li class="policy" id="portal">developer portal</li>
    </ol>
  </section>  
</article>
<script src="{{ "/assets/grasp.js" | relative_url }}"></script>
