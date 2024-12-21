import rss from '@astrojs/rss';
import { blog, site } from '@constants';
import { getCollection } from 'astro:content';
import sanitizeHtml from 'sanitize-html';
import MarkdownIt from 'markdown-it';

const parser = new MarkdownIt();

export async function GET(context) {
  const blogs = await getCollection('blog');
  return rss({
    title: blog.title,
    description: blog.description,
    site: context.site,
    items: blogs.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.date,
      link: `/blogs/${post.slug}`,
      content: sanitizeHtml(parser.render(post.body)),
      ...post.data,
    }))
  });
}
