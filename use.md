---
layout: page
title: Use
permalink: /use
order: 1
heading: <span id="nav_use" class="active">Use</span> now,<br /><span id="nav_install">Install</span> later
---

<article class="chapter">
  <section id="use" class="summary">
  <h1>Use Now</h1>
  <ul>
    <li><a href="https://www.3scale.net/signup/">quick sign up</a> for SaaS</li>
    <li>free plan</li>
    <li>get a <em>feel for the product</em></li>
  </ul>
  </section>
</article>

<article class="chapter paragraphed">
  <section id="install" class="summary">
    <h1>Install the full Monty on your laptop</h1>
    <em>Pre-requisite: <a href="https://docs.okd.io/latest/minishift/getting-started/installing.html">Minishift</a>.</em><br/>
    <br/>
    <ul>
      <li><code class="highlight"><span class="c"># 1. Start Minishift with 6gb</span><br/>
  <span class="gp">minishift start --memory 6GB --cpus 2</span></code></li>
      <li><code class="highlight"><span class="c"># 2. Create a new application using a minimal 3scale template</span><br/><span class="gp">oc new-app \
   --param WILDCARD_DOMAIN="$(minishift ip).nip.io" \
   --param AMP_RELEASE=2.4.0 \
   -f https://red.ht/2HdoRPB</span></code></li>
   <li><code class="highlight"><span class="c"># 3. Sign in to 3scale with Username:admin
and get password from the terminal output (look for ADMIN_PASSWORD).</span><br/><span class="gp">https://3scale-admin.$(minishift ip).nip.io/</span></code></li>
    </ul>

    <em>More details in <a href="https://gist.github.com/gsaslis/015e3aa6ff283b3c4caedd9bc64f0c39">this gist</a>.</em>
  </section>  
  <section id="install" class="summary">
    <h1>Install individual components for evaluation or development purposes</h1>
    <ul>
      <li><a href="https://github.com/3scale/porta/blob/master/INSTALL.md">Install & run</a> Porta</li>    
      <li><a href="https://github.com/3scale/apicast/blob/master/README.md">Install & run</a> APIcast</li>
      <li><a href="https://github.com/3scale/apisonator#how-to-run">Install & run</a> Apisonator</li>
    </ul>
  </section>
</article>




<script src="{{ "/assets/use.js" | relative_url }}"></script>
