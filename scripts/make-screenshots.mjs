import { chromium } from "playwright";
import { mkdir } from "node:fs/promises";

const BASE_URL = process.env.SCREENSHOT_URL || "http://127.0.0.1:5175/";

const targets = [
  { id: "top", file: "top.png" },
  { id: "about", file: "about.png" },
  { id: "skills", file: "skills.png" },
  { id: "projects", file: "projects.png" },
  { id: "contact", file: "contact.png" },
];

const run = async () => {
  await mkdir("screenshots", { recursive: true });

  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });

  await page.goto(BASE_URL, { waitUntil: "networkidle" });

  for (const t of targets) {
    await page.evaluate((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      el.scrollIntoView({ behavior: "instant", block: "start" });
    }, t.id);

    await page.waitForTimeout(350);
    await page.screenshot({ path: `screenshots/${t.file}`, fullPage: false });
  }

  await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
  await page.waitForTimeout(350);
  await page.screenshot({ path: "screenshots/footer.png", fullPage: false });

  await browser.close();
};

run().catch((err) => {
  console.error(err);
  process.exit(1);
});

