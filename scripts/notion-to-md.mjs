import { Client } from '@notionhq/client';
import { NotionToMarkdown } from 'notion-to-md';
import pages from './pages.mjs';
import fs from 'fs';

const notion = new Client({
  auth: process.env.NOTION_INTEGRATION_TOKEN,
});

// passing notion client to the option
const n2m = new NotionToMarkdown({ notionClient: notion });
(async () => {
  pages.forEach(async (page) => {
    const mdblocks = await n2m.pageToMarkdown(page.id);
    const mdString = `# ${page.name}\n  ` + n2m.toMarkdownString(mdblocks);
    //writing to file
    const filePath = `docs/${page.slug}.md`;
    console.log(`Saving ${filePath}`);
    fs.writeFile(filePath, mdString, (err) => {
      err && console.log(err);
    });
  });
})();
