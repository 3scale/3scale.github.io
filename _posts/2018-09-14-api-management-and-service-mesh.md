---
layout: post
title:  "API Management and Service Mesh"
date:   2018-09-14 16:31:33 +0200
categories: istio mesh
---
Why a Service Mesh is not a replacement of API Management
As a disclaimer, I work at Red Hat, more specifically, at the 3scale Team (acquired 2 years ago) developing the 3scale API Management Solution.

Lately, a question is popping up more and more when talking with our customers: “Why do I need API Management if I use Istio?”

To answer this question, first, we need to understand what is what, but if you want a spoiler: 3scale API Management and Istio are amazing together.

I will try to describe what problems those two solutions aim to solve, focusing on 3scale API Management and Istio Service Mesh (those are the two I know better).

## What is an API Management solution?

If we take a look at Wikipedia:
> “API management is the process of creating and publishing web APIs, enforcing their usage policies, controlling access, nurturing the subscriber community, collecting and analyzing usage statistics, and reporting on performance.”

This is a good definition. As a company that has created some kind of internal service, I now want to build a business around it by providing an API to external subscribers. Of course, I want to monetize it by offering several subscription plans with different usage limits, scopes, and be able to invoice my customers automatically.
Additionally, external Developers should find my API easily, and sign up for a plan in a self-service way with just their credit card and all of this should be transparent for my API code…

{% highlight ruby %}
def print_hi(name)
  puts "Hi, #{name}"
end
print_hi('Tom')
#=> prints 'Hi, Tom' to STDOUT.
{% endhighlight %}

Check out the [Jekyll docs][jekyll-docs] for more info on how to get the most out of Jekyll. File all bugs/feature requests at [Jekyll’s GitHub repo][jekyll-gh]. If you have questions, you can ask them on [Jekyll Talk][jekyll-talk].

[jekyll-docs]: https://jekyllrb.com/docs/home
[jekyll-gh]:   https://github.com/jekyll/jekyll
[jekyll-talk]: https://talk.jekyllrb.com/
