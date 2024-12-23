---
title: "Hyprlang-ts-mode"
description: "A Major mode for editing hyprland config files in Emacs powered by treesitter."
date: "01/11/2024"
draft: false
demoURL: "https://github.com/Nathan-Melaku/hyprlang-ts-mode"
repoURL: "https://github.com/Nathan-Melaku/hyprlang-ts-mode"
---

I've been a Linux enthusiast for over a decade, and during that time,
I've used various window managers like i3, awesomewm, and dwm.
When I got a 4K monitor, I realized that Xorg couldn't provide
the fractional scaling I needed, so I began exploring Wayland.

The first Wayland window manager I tried was Hyprland.
My customizations for window managers are usually minimal,
mainly focused on configuring keybindings.
However, I was surprised to find that there wasn't a major mode
for editing Hyprland config files.
Since I knew there was one for Neovim, I took the opportunity
to develop a major mode for Emacs that leverages treesitter.

This mode provides the following features.

- Syntax highlighting
- Indentation
- Navigation
- and Imenu support

If you are using emacs and hyprland try it out. Installing it with streight.el
is easy.

```emacs-lisp
(use-package hyprlang-ts-mode
  :straight (:type git :host github :repo "Nathan-Melaku/hyprlang-ts-mode")
  :custom
  (hyprlang-ts-mode-indent-offset 4)
```

If you haven't installed the hyprlang grammer from [Here](https://github.com/tree-sitter-grammars/tree-sitter-hyprlang),
when you start the mode for the first time it will add the grammer url to `treesit-language-source-alist`.
So you can install it with `M-x` then `treesit-install-language-grammar`.

The `hyprlang-ts-mode-indent-offset` is a custom variable that you can use to
set the indentation offset according to your preference.
