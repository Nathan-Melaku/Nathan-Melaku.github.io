---
title: "Hyprlang-ts-mode is now on Melpa"
description: "Hyprlang-ts-mode is now available on Melpa."
date: "12/25/2024"
tags: [ "hyprland", "emacs" ]
---

Hyprland is a Wayland-based dynamic tiling compositor with all the
eye-candy and extensibility. Its popularity has grown rapidly, thanks
to an active and vibrant community of users.

One fantastic addition from this community is a Tree-sitter grammar
for Hyprlang—the configuration "language" used by Hyprland. As an avid
Emacs user and a Hyprland enthusiast, I saw an opportunity to bring
this integration to Emacs.

I'm thrilled to announce the first release of hyprland-ts-mode, an Emacs
major mode for editing Hyprland configuration files. This package is
built to make working with Hyprlang a breeze by leveraging the
Tree-sitter grammar for Hyprlang.

Link to the
[Github](https://github.com/Nathan-Melaku/hyprlang-ts-mode), Link to
the [Melpa Package](https://melpa.org/#/hyprlang-ts-mode)

| Features            | status |
|---------------------|--------|
| Syntax highlighting | ✔      |
| Indentation         | ✔      |
| Navigation          | ✔      |
| Imenu               | ✔      |

I'm excited to share that this major mode is now available on MELPA!
You can install it with ease and enhance your Hyprlang editing
experience in Emacs. Check it out and let me know what you think!

```emacs-lisp
(use-package hyprlang-ts-mode
  :ensure t
  :custom
  (hyprlang-ts-mode-indent-offset 4)
```

Indentation offset can be set by setting the `hyprlang-ts-mode-indent-offset` variable.

# Feedback & Contributions

This is the first release, so feedback and bug reports are more than
welcome! If you encounter issues or have ideas for improvements, feel
free to open an issue or contribute on [Github](https://github.com/Nathan-Melaku/hyprlang-ts-mode).

Thank you for checking it out, and I hope this mode makes your
Hyprland configuration experience even better! 🌟
