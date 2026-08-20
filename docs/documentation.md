# Documentation for Dyalog v20.0

The documentation on this page is for Dyalog v20.0 and the components shipped with
that release.

!!! note

    In all Dyalog documentation, the values of `⎕IO` and `⎕ML` are `1`.

!!! tip "Viewing .chm files in Microsoft Windows"

    By default, Microsoft Windows blocks access to downloaded Compiled HTML Help
    (**.chm**) files. To enable access, right-click on each downloaded **.chm** file
    in Microsoft Windows Explorer, select **Properties** from the drop-down menu, and
    click **Unblock**.

## Core Documentation

These documents describe the details of the language and program construction; they
are not specific to an operating system.

- **[Dyalog APL Language Reference Guide](https://docs.dyalog.com/20.0/Dyalog%20APL%20Language%20Reference%20Guide.pdf)** — details the individual elements that form the 'vocabulary' of the APL language. It explains every primitive function, primitive operator, system function, system variable, system command and error message in Dyalog. It is assumed that the reader has a reasonable understanding of mathematics.
- **[Dyalog Programming Reference Guide](https://docs.dyalog.com/20.0/Dyalog%20Programming%20Reference%20Guide.pdf)** — details the syntax that forms the 'grammar' of the APL language. It describes the viable values that can be used in expressions and explains how the individual language elements can be manipulated through defined functions and operators, control structures and object oriented programming, as well as the way in which multi-threading can be implemented.
- **[.NET Interface Guide](https://docs.dyalog.com/20.0/dotNET%20Interface%20Guide.pdf)** (*Unicode edition only*) — describes the Dyalog interface to Microsoft .NET, the cross-platform successor to Microsoft's .NET Framework. See also [Comparison of .NET / .NET Framework Interfaces](https://docs.dyalog.com/20.0/dotNET%20Differences.pdf).
- **[Compiler User Guide](https://docs.dyalog.com/20.0/Compiler%20User%20Guide.pdf)** — a complete guide to the compiler, which reduces interpreter overhead, and details the syntax and restrictions of its current implementation.
- **[Parallel Language Features](https://docs.dyalog.com/20.0/Parallel%20Language%20Features.pdf)** — describes proposals for two new primitives, the function *isolate* and the monadic operator *parallel*, and a new type of array known as a *future*, designed to let APL developers take advantage of multiple processors.
- **[Shared Code Files User Guide](https://docs.dyalog.com/20.0/Shared%20Code%20Files%20User%20Guide.pdf)** (*Unicode edition only*) — describes shared code files, which can improve the performance of large applications while reducing their memory consumption and initialisation time.

## Microsoft Windows

These documents are specific to running Dyalog on the Microsoft Windows operating
system.

- **[Installation and Configuration Guide](https://docs.dyalog.com/20.0/Dyalog%20for%20Microsoft%20Windows%20Installation%20and%20Configuration%20Guide.pdf)** — the installation procedure and configuration options for Dyalog on Windows, including customising instances, creating executables and run-time applications, using the command line and the Dyalog DLL, and the recovery process after a system error.
- **[UI Guide](https://docs.dyalog.com/20.0/Dyalog%20for%20Microsoft%20Windows%20UI%20Guide.pdf)** — introduces the Dyalog user interface: windows, menu options, built-in tools and customisation, and explains programming techniques, file storage, integrity checking and error trapping.
- **[Object Reference Guide](https://docs.dyalog.com/20.0/Dyalog%20for%20Microsoft%20Windows%20Object%20Reference%20Guide.pdf)** — the complete set of objects, properties, events and methods for creating a Graphical User Interface. Read alongside the *Interfaces Guide*.
- **[Interfaces Guide](https://docs.dyalog.com/20.0/Dyalog%20for%20Microsoft%20Windows%20Interface%20Guide.pdf)** — interfaces between Dyalog and Windows, including MDI and docking, the Component Object Model (COM) and other applications. Read alongside the *Object Reference Guide*.
- **[.NET Framework Interface Guide](https://docs.dyalog.com/20.0/Dyalog%20for%20Microsoft%20Windows%20.NET%20Framework%20Interface%20Guide.pdf)** — the Dyalog interface to the Microsoft .NET Framework. See also [Comparison of .NET / .NET Framework Interfaces](https://docs.dyalog.com/20.0/dotNET%20Differences.pdf).

## UNIX and Linux

These documents are specific to running Dyalog on various UNIX platforms, for
example AIX or Linux distributions.

- **[Installation and Configuration Guide](https://docs.dyalog.com/20.0/Dyalog%20for%20UNIX%20Installation%20and%20Configuration%20Guide.pdf)** — the installation procedure and configuration options for Dyalog on a UNIX platform, including environment variables, the PuTTY terminal emulator, and upgrade/uninstall procedures.
- **[UI Guide](https://docs.dyalog.com/20.0/Dyalog%20for%20UNIX%20UI%20Guide.pdf)** — the different input windows and the keystrokes used within them, entering commands, and the configurable keycode-keystroke mappings.
- **[Dyalog for Raspberry Pi User Guide](https://docs.dyalog.com/20.0/Dyalog%20for%20Raspberry%20Pi%20User%20Guide.pdf)** — for anyone who wants to run Dyalog on a Raspberry Pi; supplements the UNIX guides and is the definitive source where they differ.

## macOS

These documents are specific to running Dyalog on the macOS operating system.

- **[Installation and Configuration Guide](https://docs.dyalog.com/20.0/Dyalog%20for%20macOS%20Installation%20and%20Configuration%20Guide.pdf)** — the installation procedure and configuration options for Dyalog on macOS, including pre-requisites and configuration parameters.
- **[UI Guide](https://docs.dyalog.com/20.0/Dyalog%20for%20macOS%20UI%20Guide.pdf)** — summarises starting Dyalog with either RIDE or the TTY interface.

## Tools

These tools supplement Dyalog's core functionality — to produce code more
efficiently, to interface with other software and platforms, or to be integrated and
deployed in an application.

- **[Conga User Guide](https://docs.dyalog.com/20.0/Conga%20User%20Guide.pdf)** — a complete guide to Conga, Dyalog's framework for TCP/IP communications (HTTP, HTTPS, FTP, Telnet, SMTP), including secure communication via SSL/TLS and communication between APL processes.
- **[HTMLRenderer User Guide](https://docs.dyalog.com/20.0/HTMLRenderer%20User%20Guide.pdf)** — the HTMLRenderer object, a cross-platform mechanism for producing GUIs based on HTML. (Also [available as a web document](https://docs.dyalog.com/latest/HTMLRenderer%20User%20Guide.htm) to facilitate copying example code.)
- **[Dyalog Link User Guide](https://dyalog.github.io/link/4.0)** — a complete guide to Link, which enables the use of Dyalog application source code as text files.
- **[Dyalog RIDE User Guide](https://dyalog.github.io/ride/4.5)** — a complete guide to the Remote Integrated Development Environment: installation and the user interface.
- **[SALT User Guide](https://docs.dyalog.com/20.0/SALT%20User%20Guide.pdf)** — a complete guide to SALT, the Simple APL Library Toolkit.
- **[SAWS User Guide](https://docs.dyalog.com/20.0/SAWS%20User%20Guide.pdf)** — a complete guide to SAWS, the Stand-Alone Web Service framework.
- **[SharpLeaf User Guide](https://docs.dyalog.com/20.0/SharpLeaf%20User%20Guide.chm)** — the frame-based publishing tool that generates high-quality printed output from simple APL arrays.
- **[SharpPlot User Guide](https://docs.dyalog.com/20.0/SharpPlot%20User%20Guide.pdf)** — the charting software engine that brings publication-quality graphics to your application.
- **[SQL Interface Guide](https://docs.dyalog.com/20.0/SQL%20Interface%20Guide.pdf)** — a complete guide to SQAPL, the interface between APL and ODBC-conformant database drivers.
- **[User Commands User Guide](https://docs.dyalog.com/20.0/User%20Commands%20User%20Guide.pdf)** — how to create and implement new user commands, and how to find information on those supplied with Dyalog.
- **[APL as a Shared Library](https://docs.dyalog.com/20.0/APL%20as%20a%20Shared%20Library.pdf)** — the API for calling APL code as a shared library (`.dll`, `.so`, `.dylib`), with samples.
- **[APL Workspace Transfer Guide](https://docs.dyalog.com/20.0/APL%20Workspace%20Transfer%20Guide.pdf)** — moving code and data from another APL dialect to Dyalog, or between Dyalog versions, with examples from APL2, APLX and APL+Win.
- **[Application Tuning Guide](https://docs.dyalog.com/20.0/Application%20Tuning%20Guide.pdf)** — using the `⎕PROFILE` system function and `]PROFILE` user command to obtain and analyse an application's performance profile.
- **[Code Libraries Reference Guide](https://docs.dyalog.com/20.0/Code%20Libraries%20Reference%20Guide.pdf)** — the workspaces, scripts and DLLs supplied with Dyalog.
- **[The JSON_APL Shared Object](https://docs.dyalog.com/20.0/The%20JSON_APL%20Shared%20Object.pdf)** — execute APL statements in the Dyalog interpreter from any language that can access shared objects.

## Cheat sheets

Short summaries of some of the terminology, syntax and conventions used in Dyalog.

[Binding Strengths](https://docs.dyalog.com/20.0/Dyalog%20APL%20Binding%20Strengths.pdf) ·
[Component Files](https://docs.dyalog.com/20.0/Dyalog%20APL%20Component%20Files.pdf) ·
[I-Beams](https://docs.dyalog.com/20.0/Dyalog%20APL%20I-Beams.pdf) ·
[Idioms](https://docs.dyalog.com/20.0/Dyalog%20APL%20Idioms.pdf) ·
[Nameclasses and Subclasses (⎕NC)](https://docs.dyalog.com/20.0/Dyalog%20APL%20Nameclasses.pdf) ·
[Native Files](https://docs.dyalog.com/20.0/Dyalog%20APL%20Native%20Files.pdf) ·
[Nomenclature: Functions and Operators](https://docs.dyalog.com/20.0/Dyalog%20APL%20Terminology.pdf) ·
[SALT Functions: Syntax](https://docs.dyalog.com/20.0/Dyalog%20APL%20SALT%20Functions.pdf)

## Release notes

These documents cover the changes made to Dyalog and some of its supported tools
since the first release of Dyalog version 18.2.

- **[Dyalog Version 20.0 Release Notes](https://docs.dyalog.com/20.0/Dyalog%20Version%2020.0%20Release%20Notes.pdf)** — the changes and new features in Dyalog version 20.0 compared with version 18.2.
- **[Dyalog Version 20.0 readme](https://docs.dyalog.com/20.0/dyalog_readme.htm)** — open issues and recent fixes.
- **[Dyalog Version 20.0 installation readme](https://docs.dyalog.com/20.0/setup_readme.htm)** — information that might affect installation.

## Interactive and offline documentation

- **[Online documentation](https://help.dyalog.com/20.0/)** — a subset of the documentation; internet access required.
- **[Offline documentation](https://docs.dyalog.com/20.0/dyalog.chm)** — an offline version of the online documentation.
- **[All PDFs (colour) ZIP](https://docs.dyalog.com/20.0/screenpdfs.zip)** — all documentation PDFs formatted for on-screen viewing.
- **[Printable PDFs (monochrome) ZIP](https://docs.dyalog.com/20.0/printpdfs.zip)** — a subset of the PDFs formatted for printing.
