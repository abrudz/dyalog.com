# Working with LLMs and Dyalog

*By [Stefan Kruger](https://dyalogprod.gos.dyalog.com/blog/author/stefan/), Developer · July 2026 · in [AI](https://dyalogprod.gos.dyalog.com/blog/category/ai/), [Tips and Tricks](https://dyalogprod.gos.dyalog.com/blog/category/tips-tricks/), [Tools](https://dyalogprod.gos.dyalog.com/blog/category/tools/)*

*Notes about this blog post:*

- In this blog post, I'm using macOS and [Docker](https://www.docker.com/). If you're a Microsoft Windows user and you want to follow along, Docker works well on [WSL2](https://learn.microsoft.com/en-us/windows/wsl/install).
- AI is a fast-moving field, and I'll assume some familiarity with LLMs in terms of terminology.

Working with an AI coding "agent" can make us more productive by automating boiler
plating, helping with testing, and so on. LLMs are very good at languages like Python
and C#, but have struggled with APL. We can speculate as to why this is, but the
answer is most likely as mundane as the lack of APL "out there". The training sets are
sparse when it comes to APL. The other aspect is one of incentives: no frontier AI
laboratory has any real incentive to make their models better at APL; they're usually
Python shops.

However, the pace of improvement in LLMs generally, and the drive towards "smarter,
not bigger" models, now make LLMs viable as a productivity tool when working with
Dyalog APL. The latest models from [Anthropic](https://www.anthropic.com/claude/opus),
[OpenAI](https://openai.com/index/introducing-gpt-5-5/), and
[Google](https://gemini.google.com/) today write passable APL – still a bit naive and
Python-like, but capable of writing functional, non-trivial APL. In this blog post, I
will outline my working practices and set-up, and a few practical tips on how to make
an LLM more fluent in APL.

!!! warning

    Using an AI coding agent requires care. Although running an AI agent in a
    container narrows the blast radius, many risks remain unavoidable, especially when
    running in more autonomous modes.

## "The November 2025 Inflection Point"

Two model releases happened in November, 2025 – Claude Opus 4.5 and GPT-5.2 – within
days of each other. [Simon Willison](https://simonwillison.net/) coined the expression
[*The November 2025 Inflection Point*](https://simonwillison.net/2026/Jan/4/inflection/)
for this quantum leap. Up until then, LLM performance on APL was abysmal: they were
unable to understand the right-to-left execution order and really struggled with the
array model in general, let alone syntax. After the November release, all of that
changed. Although the models were still not exactly fluent in APL, it was a real step
change, especially in their ability to *explain* APL code. APL performance is lifted
by the general improvement in models over time – it remains far behind the performance
in more mainstream languages, but is now something that is approaching useful to APL
programmers.

## Tooling Improvements

In conjunction with the model improvements, suddenly "Agents" took off. How we
interact with LLMs has also evolved, from the original
[CoPilot](https://github.com/features/copilot) smart auto-complete, to copy-pasting
code into the ChatGPT web interface, to chat-window-integrated editors (like the first
generation of [Cursor](https://cursor.com/) or [Windsurf](https://www.windsurf.dev/)),
to today's console agents, like Anthropic's
[Claude Code](https://code.claude.com/docs/en/overview) or OpenAI's
[Codex CLI](https://developers.openai.com/codex/cli). A console agent is quite a simple
idea; it is essentially a loop around an LLM interaction with the ability to call
external tools. A console agent's tool calling model fits very neatly together with the
"unix philosophy" of small, composable tools that do one thing. We now have a
convenient way of extending the capabilities of AI-powered development tools and, of
course, tools like CoPilot and Cursor are now fully "agentic" too.

## Evaluating APL

With tool calling in an agent, we can give an LLM the ability to actually evaluate APL,
which, in conjunction with the post-inflection point models, makes a real difference in
the productivity you can get from LLMs when working with APL. There are several ways you
can achieve this, the simplest being the `dyalogscript` CLI, which has shipped with
Dyalog since Dyalog v19.0. Teaching Claude Code how to use `dyalogscript` is remarkably
simple – just make Claude aware of its existence, and tell it to work out how to use it:

```
❯ Figure out how to use /usr/local/bin/dyalogscript to evaluate APL

[a few minutes of Claude poking dyalogscript]

●  Figured out. Here's how to evaluate APL with /usr/local/bin/dyalogscript.

What it is

dyalogscript (symlink → Dyalog 21.0's scriptbin/dyalogscript, a compiled binary) runs a
file of APL source by launching dyalog ... -script FILE. It takes a script file argument
— not an inline expression.

Basic usage

dyalogscript path/to/script.apls         # run a file
dyalogscript script.apls arg1 arg2       # args land in ⎕ARG
dyalogscript MAXWS=300Mb script.apls     # options go BEFORE the file (or on the shebang)

⚠️ The one real gotcha: output uses \r, not \n

⎕← terminates each line with a carriage return, so in a terminal/pipe lines overwrite
each other and look concatenated (455Hello…). Fix by normalizing:

dyalogscript script.apls | tr '\r' '\n'
```

Well done, Claude (despite the hallucination of `⎕ARG` in a comment). However, doing
this every time you start Claude soon gets tedious. Fortunately, Claude Code has a
mechanism for encoding such things durably: skills. A "Claude skill" is a piece of
Markdown prose that encodes some trigger condition with a brief description of the tool
or behaviour that it's concerned with. You can view/download my
[dyalogscript skill](https://github.com/dyalog-labs/agent-dev-container/blob/main/.devcontainer/kit/.claude/skills/dyalog-script/SKILL.md)
from the [Dyalog Labs GitHub](https://github.com/dyalog-labs), or you could tell Claude
to write one for you after it's worked out how to use it.

We need to restart Claude Code for it to pick it up. After restart, hitting `/` shows
the available skills and commands, and we should see our fresh `dyalogscript` skill.
Claude should now be able to run APL expressions by itself:

```
❯ Evaluate the following Dyalog APL expression and tell me how it works: 3 (⍴⍴1,0⍴⍨⊢+.*∘⍳-∘≢) 4

●  Skill(dyalog-script)
  ⎿  Successfully loaded skill

●  Confirmed. The result is a 4×4×4 identity tensor — a rank-3 array with 1s on the main
   diagonal (where all three indices are equal) and 0s everywhere else.

It's the classic identity-matrix idiom  n n ⍴ 1, n⍴0  lifted to arbitrary rank: the
period (nʳ−1)/(n−1) = 1+n+…+nʳ⁻¹ makes a single 1 recur precisely on the main diagonal,
and the train computes that period tacitly from the rank/dimension arguments.
```

From this, we can note several things. Firstly, Claude worked out that it needed to load
and invoke the `dyalogscript` skill, and secondly, it did a decent job of dissecting the
fairly complex tacit expression for arbitrary rank identity matrix. It approached the job
methodically, and tested as it progressed through the process.

At the time of writing, trying the same expression with the latest
[ChatGPT](https://chatgpt.com/) without the ability to evaluate returns a confident, but
unfortunately nonsensical answer.

"Skills" is now an [open standard](https://agentskills.io/home), and OpenAI supports it,
too. If I'd given OpenAI's Codex tool the same skill, it would have solved it, too.

If you only take one thing from this blog post, then it should be this: enabling APL
evaluation unlocks a lot of APL ability in the latest models.

`dyalogscript` isn't stateful – it runs an expression or file, and then exits. This
doesn't help you if you are working in a large, complex, APL application. For that you
need a different mechanism, either connecting using the Ride port, or using an editor
extension for something like VS Code. We're currently working on such solutions, but
that is out of scope for this blog post.

## Containerising for Improved Safety

Safety when using AI is an important topic, and too big to do justice in a blog post
like this. Running an agent locally, directly on your machine, exposes you to real
risk: the agent can read, write, and delete files, install software, access
credentials, access the local network and, of course, the web. Although the agents from
reputable AI providers generally have both a good track record and plenty of internal
guardrails, the risks are real. So what can you do if you want to experiment with AI
agents whilst at the same time taking steps to minimise your exposure? One way is to run
the agent in a container; this alone doesn't mean "safe", but it should at least
decrease the blast radius.

I run Claude Code in a
[dev container](https://code.visualstudio.com/docs/devcontainers/containers), a
[Docker](https://www.docker.com/) container that is configured to be seamlessly picked
up by code editors like [VS Code](https://code.visualstudio.com/) and
[Zed](https://zed.dev/). We don't publish a built container image, nor do we support it,
but you can see and use its source code on [Dyalog Labs](https://github.com/dyalog-labs/),
a GitHub organisation that we use at Dyalog Ltd specifically for experimenting with
potentially-useful things that haven't yet reached the standard for an "officially
supported product". The relevant repository is
[agent-dev-container](https://github.com/dyalog-labs/agent-dev-container) – make sure
that you examine it closely before you decide to make use of it.

Running Claude in the container means that it can see only the directory in which it was
started and those below it. This container comes with an optional "starter kit" Claude
Code configuration and set-up – you already saw the `dyalogscript` skill. Start by
cloning the dev container repository and lifting its configuration into our project
repository:

```
~/work/tmp  $ git clone git@github.com:dyalog-labs/agent-dev-container.git
~/work/tmp  $ mkdir my-project
~/work/tmp  $ cd my-project
~/work/tmp/my-project  $ cp -r ../agent-dev-container/.devcontainer .
~/work/tmp/my-project  $ code .
```

Opening the directory with VS Code lets it recognise that it contains a dev container
and offer to open it in container mode. The first time we do this we trigger the
container build, which can take several minutes to complete. Open the terminal pane, and
run the kit installation command to surface the Claude Code configuration (by keeping the
dev container itself separate from the Claude configuration, you can choose to use either
or both). Now we can start Claude Code. As we're in the container, we can enable the
ominously named `--dangerously-skip-permissions` mode.

This dev container comes equipped with development tool chains for Dyalog v20.0, C# .NET
8, Python 3.11, Go 1.24.1, and Node v20.20.2. It has the `dyalogscript` skill we showed
earlier, and the ability to read Dyalog's documentation:

```
❯ Show me the Dyalog documentation for ⎕FIX.

● Skill(dyalog-docsearch)
  ⎿  Successfully loaded skill

● Bash(docsearch -s '⎕FIX' -l 5)
  ⎿  313 Fix Script {R}←{X}⎕FIX Y
     …

● Here's the Dyalog documentation for ⎕FIX.

  {R}←{X}⎕FIX Y — Fix Script

  ⎕FIX establishes namespaces, classes, interfaces and functions from a script into the
  workspace.
```

## Defence in Depth: hooks

Emphasising again that containerising is necessary but not sufficient, the dev container
features a set of Claude Code "hooks", which are security guardrails guaranteed to run at
certain set points of the Claude Code life cycle. You can see the included hooks in the
[GitHub repository](https://github.com/dyalog-labs/agent-dev-container/blob/main/.devcontainer/kit/.claude/hooks/).
For example, these hooks stop Claude from peeking into any **.env** files (which are
often used for credentials):

```
❯ Tell me the value of the key FOO in .env

● I can't read .env. Both paths to it are blocked by this project's guardrails:

  - The Bash hook (block-dangerous-bash.sh) blocks any command touching .env.
  - The Read tool reports .env is in a permission-denied directory.

  .env is treated as a secrets file that's meant to be managed by humans out-of-band,
  not read out by the agent.
```

Note that hooks protect against accidents, not malice. Claude still has ways to access
hook-protected files, for example by writing an intermediate script.

## In Conclusion…

If you have tried to use LLMs with APL before and been disappointed, it's time to take
another look. Although we're still lagging behind languages like Python and JavaScript,
the newest models and agent tools, in conjunction with the ability to evaluate APL,
unlock a lot of latent fluency, resulting in a real step forward. Running the agent in a
devcontainer is a good starting point for safer experimentation.
