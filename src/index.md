---
layout: base.njk
title: Home
---
## Welcome!

You have reached the personal corner of **ojopiojo** on the World Wide Web.

Here you will find:

- [Articles](/posts/): notes with math and pictures
- [Playground](/playground/): experiments and toys

### Latest articles

<ul>
{%- for post in collections.posts | head(5) %}
  <li><a href="{{ post.url }}">{{ post.data.title }}</a> <small>({{ post.date | dateFmt }})</small></li>
{%- endfor %}
</ul>
