<h1 style="display: flex; align-items: center; justify-content: flex-start; text-align: left;">
  <img src="https://github.com/logmeals/metabase-image-resizer/blob/master/images/icon128.png?raw=true" alt="Your Image Alt Text" style="height: 40px;margin-right: 12px; border-radius: 5px;">   Metabase Image Resizer   <img src="https://img.shields.io/badge/Current%20version-v1.0.0%20Stable-green" alt="Version 1.0.0" style="margin-left: 20px;"/>
</h1>

A Google Chrome extension that allows you to:
- Enlarge the images in a Metabase Question by clicking them
- Click an image again to toggle it's size back to default (30px tall)
- Customize the size that images enlarge to by adjusting the multiplier in our plugin GUI

This is helpful when users/customers submit photo data that you want to analyze directly in Metabase, rather than having to create a third-party app for this.

### Some examples
- On a "User signups" question for a SaaS app, using this plugin to enlarge and view user avatars, and moderate against AI/fake avatars
- On a "Latest meals added" question for a calorie counter app, using this plugin to enlarge and view the latest photos submitted by users
- On a "Latest deliveries" question for a logistics app, using this plugin to view Proof of delivery photos provided by couriers

### Before using:
By default, this plugin only works on Official Cloud-Hosted Metabase Dashboards using a `.metabaseapp.com` URL.

Unfortunately due to Google Chrome Plugin API restrictions, I'm not able to include permissions for this app to work on your self-hosted Metabase or any Metabase using a custom domain.

Fortunately, you can white-list your domain easily by running:
1. First, clone this project locally, and CD to the project's root directory
2. Next, run `npm run add-domain metabase.example.com` inside your local shell
3. Next, open Google Chrome, and visit (`chrome://extensions`)[chrome://extensions]
4. Enable Developer mode in the top-right hand corner (if it's not already enabled)
5. Now, click the new "Load unpacked" button in the top-left hand corner, and select the project folder
6. That's it. Enjoy your new plugin!

**PS, Need to share your plugin with coworkers/colleagues?** I recommend installing it on their behalf, or sending them your project directory ready for install, along with instructions 3-6.



## Credits

Built and maintained by Jim Bisenius with the support of [**365, GPT-AI Calorie Counter**](https://logmeals.com).

Appreciate this plugin? We don't accept donations, but the most helpful things you could do for us is [**downloading and trying our app** *(100% free, no credit card required)*](https://apps.apple.com/us/app/365-gpt-ai-calorie-counter/id6443741431).