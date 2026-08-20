# Quick Start Guide

Download, install, and run your first Dyalog APL session.

## Install Dyalog

=== "Windows"

    1. [Download the installer](downloads.md), extract it, and double-click `setup*.exe`.
    2. Installing with administrator privileges is strongly recommended.
    3. Starting Dyalog launches the IDE.

    See the [Windows Installation and Configuration Guide](https://docs.dyalog.com/20.0/Dyalog%20for%20Microsoft%20Windows%20Installation%20and%20Configuration%20Guide.pdf)
    and [Windows UI Guide](https://docs.dyalog.com/20.0/Dyalog%20for%20Microsoft%20Windows%20UI%20Guide.pdf).

=== "macOS"

    1. [Download the installer](downloads.md) and double-click the `.pkg` file.
    2. Starting Dyalog launches RIDE as the UI.

    See the [macOS Installation and Configuration Guide](https://docs.dyalog.com/20.0/Dyalog%20for%20macOS%20Installation%20and%20Configuration%20Guide.pdf)
    and the [RIDE User Guide](https://dyalog.github.io/ride/4.6/).

=== "Linux"

    1. [Download the interpreter installer](downloads.md).
    2. Double-click it, or install from the command line:

        ```bash
        sudo dpkg --install linux_64*.deb   # DEB-based
        sudo rpm  --install linux_64*.rpm   # RPM-based
        ```

    3. Starting Dyalog launches a TTY text-based interface. Optionally install
       [RIDE](https://github.com/Dyalog/ride/releases) for a graphical UI.

    See the [UNIX UI Guide](https://docs.dyalog.com/20.0/Dyalog%20for%20UNIX%20UI%20Guide.pdf).

=== "Raspberry Pi"

    On 32-bit Raspberry Pi OS, install from the Dyalog APT repository:

    ```bash
    wget -O - https://packages.dyalog.com/dyalog-apt-key.gpg.key | sudo apt-key add -
    CODENAME=$(lsb_release -sc)
    echo "deb https://packages.dyalog.com ${CODENAME} main" | sudo tee /etc/apt/sources.list.d/dyalog.list
    sudo apt-get update
    sudo apt-get install dyalog-unicode
    ```

    For 64-bit, follow the Linux instructions. See the
    [Raspberry Pi User Guide](https://docs.dyalog.com/20.0/Dyalog%20for%20Raspberry%20Pi%20User%20Guide.pdf).

## Use Dyalog

### The interactive session

Type an expression (traditionally indented by six spaces) and press Enter:

```apl
      2 + 3
5
```

### Create, trace, edit, and continue

1. Type a function name and press **Shift+Enter** to open the editor.
2. Write the definition (see [Mastering Dyalog APL: User-Defined Functions](https://mastering.dyalog.com/User-Defined-Functions.html)).
3. Press **Esc** to close the editor and save changes to the workspace.
4. Press **Ctrl+Enter** to trace through the function line by line.

### Save your work

Link a directory so source is written to files as you edit:

```apl
      ]LINK.Create # /tmp/MyProject
Linked: # ←→ /tmp/MyProject [directory was created]
```

Files are created or updated whenever you close the editor after making changes.

!!! note

    Variables and dfns assigned in the session aren't saved automatically — use
    `]LINK.Add mything` to save their source. Tacit functions can't be saved as
    text; wrap them in a tradfn or dfn.

### Quit and resume

Use `⎕OFF` (or close the window) to exit. When you restart, re-run
`]LINK.Create # /tmp/MyProject` to pick up where you left off.

## Keep going

- [Typing APL](https://dyalogprod.gos.dyalog.com/learn/typing-apl/) — ways to type APL glyphs
- [Useful tips](https://dyalogprod.gos.dyalog.com/learn/tips-for-using-dyalog/) — hints from the community
- [Mastering Dyalog APL, Chapter 2](https://mastering.dyalog.com/Getting-Started.html) — a detailed walkthrough
- [Documentation](documentation.md) — the complete reference
