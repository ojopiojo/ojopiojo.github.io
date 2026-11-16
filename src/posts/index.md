---
layout: base.njk
title: Articles
permalink: /posts/
eleventyExcludeFromCollections: true
---
## Articles

<ul>
{%- for post in collections.posts %}
  <li>{{ post.date | dateFmt }} &mdash; <a href="{{ post.url }}">{{ post.data.title }}</a></li>
{%- endfor %}
</ul>
