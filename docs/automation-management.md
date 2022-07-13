# Automation management
  
If a company uses several tools, it’s important that they’re well interlinked. When onboarding a new person, ideally they should be given just one link that will then guide them to other places as needed.

But what should be this first, main place?

And there’s a second question that is closely connected to all of this. What should be the main admin panel for all things automation? There’s several options.

## Central panel for automation

### Slack

A lot of companies use Slack. We naturally gravitate towards community and novelty. And Slack can easily become both of these things - an online place for your company’s community and also a center to get all the news. So people quickly build a habit to frequently check it.

Because of that it makes sense to make Slack your main panel. There’s several tools within Slack that you can use to accomplish that

📌 Pinned messages

🔗 Bookmarks

🤖 Commands and workflows

<img src=https://s3.us-west-2.amazonaws.com/secure.notion-static.com/e25f5244-a846-4995-9e2c-331f717b66dc/Screenshot_2022-07-05_at_12.54.09.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220713T180825Z&X-Amz-Expires=3600&X-Amz-Signature=4a21b1becebf5ad8b7ac28d739773981929e36a9f93ad089826c4580e40988a0&X-Amz-SignedHeaders=host&x-id=GetObject />

**Downsides**

- Pinned messages and bookmarks might be overlooked, especially for people not that familiar with Slack. But to fix that, you can set up a custom [Slack bot to automatically message a new member of the workspace](https://slack.com/slack-tips/automatically-onboard-new-channel-members). This message can introduce the user to the pinned messages and bookmarks and also for custom Slack commands available.

- Slack is potentially **a source of distraction**. Therefore you might have an intention, such as going from there to place B, or execute a certain command, but you see a new message in a channel or in a DM and your attention is diverted.

- With commands it’s not always easy to manage authorisation. If there’s a command to redeploy your app for example, it maybe shouldn’t be executable by everyone.

### Airtable

Airtable provides various ways to present content. There’s several places where you can provide helpful welcome message, or links to docs.

Airtable allows to set a base guide which is  automatically opened to a newcomer to the base. So it can also nicely function as an informative welcome message providing link to all other relevant resources.

You can also set up a special table which works as an admin panel.

<img src=https://s3.us-west-2.amazonaws.com/secure.notion-static.com/5bb791be-a42b-43e3-b520-2617e68ba95d/Screenshot_2022-07-05_at_13.24.22.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220713T180826Z&X-Amz-Expires=3600&X-Amz-Signature=a1a3d138cd78c71690375616b22014c81cd3114186364ea942a4613fe62eca6e&X-Amz-SignedHeaders=host&x-id=GetObject />

<img src=https://s3.us-west-2.amazonaws.com/secure.notion-static.com/b208fdd4-7392-4481-99ff-28f5b0d14da7/Screenshot_2022-07-05_at_13.39.08.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220713T180824Z&X-Amz-Expires=3600&X-Amz-Signature=304f67fd4e957b41b4972b8b577dff205641e41d6b7a723ebd8cf2ec7754592b&X-Amz-SignedHeaders=host&x-id=GetObject />

If you have buttons or other admin operations scattered across multiple tables, you can bring it to one master place via an interface:

<img src=https://s3.us-west-2.amazonaws.com/secure.notion-static.com/5fc302a8-6424-46b7-9927-9e3993a832cc/Screenshot_2022-07-05_at_14.14.22.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220713T180824Z&X-Amz-Expires=3600&X-Amz-Signature=20d74f31332ad14ee3009c0527902ab6f40e888d941080263484aa5761b064d7&X-Amz-SignedHeaders=host&x-id=GetObject />

**Downsides**

- Same as Slack, Airtable also does not handle authorisation much. Therefore if you need to protect certain actions, it might require some extra code.

- Some people might not have a habit of opening Airtable frequently. Therefore accessing Airtable just to execute some command might be inconvenient for them.

- Not always it is desirable to manage actions in tables (althought this might be fixed via an interface)

### Alfred

Alfred is a command line / quick access tool for Mac. Alfred interface can be summoned very quickly from anywhere. This way it allows you to quickly open programs and URLs that you need and also perform certain commands very quickly and it doesn’t matter if you’re in the browser or in your text or graphic editor. This is powerful as it reduces the number of steps to do what you want.

<img src=https://s3.us-west-2.amazonaws.com/secure.notion-static.com/ab69a6b5-64e8-4b43-8f1d-42b8419b7289/Screenshot_2022-07-05_at_13.55.47.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220713T180824Z&X-Amz-Expires=3600&X-Amz-Signature=8892f95838befd249b35638478b346c55f9ca59a9477bfdc7372b2c09ef584d3&X-Amz-SignedHeaders=host&x-id=GetObject />

**Downsides**

- Alfred workflows run on the machine, not on the server. Sometimes that requires special API tokens and other input that might be harder to set up for regular user

- Alfred is only for **MacOS**

- For custom workflows, you also need to buy the paid version of Alfred for **35£**

Because of these limitations, Alfred might need to be only a voluntary addon - a nice to have set of shortcuts for just certain people in your company.

### Shortcuts

A slight alternative to Alfred can be native MacOS/iOS Shortcuts. Through Shortcuts you can also create your custom workflows and you can execute them from anywhere - via Siri or via [Spotlight](https://support.apple.com/cs-cz/guide/shortcuts-mac/apd8a8ffb4ac/mac). And the main benefit of Shortcuts is that you can run them on iOS as well.

**Downsides**

- Shortcuts can run more slowly than Alfred workflows

- Shortcuts have to be set up via the UI and can’t be written with code, this limits them for rather simpler usages

## Conclusion?

After analysing all this it seems to me that my priorities for clients for the time being will be:

1) Set up a interface in Airtable

2) Create a few helpful commands in Slack, especially if it’s an action that can be executed by anyone in the company

3) Decide between Shortcuts and Alfred. Write a few essential Shortcuts / Alfred workflows for the powerusers within the company
