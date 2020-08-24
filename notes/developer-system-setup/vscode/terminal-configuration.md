# VS Code Terminal Configuration

By Default VS Code will 'try' to use the system default terminal settings, but these do not often align to your custom terminal config.

## Editing VS Code settings

 - Select Code > Preferences > Settings (for Settings UI)

 or

 - CMD + Shift + p (to edit as JSON)


## Terminal Settings
1. Set the termal to the one configured on the system:

```"terminal.external.osxExec": "iterm.app",```

2. Use the DOM renderer, it's *slightly* slower but aligns better

```"terminal.integrated.rendererType": "dom",```

3. Set the font to the same one that is used in the item profile
```
"terminal.integrated.fontFamily": "RobotoMono Nerd Font",
"terminal.integrated.fontSize": 12,
"terminal.integrated.lineHeight": 1,
"terminal.integrated.fontWeight": "normal",
```

4. Point VS Code to the terminal's config directory
```
"terminal.integrated.shell.osx": "/bin/zsh",
```

5. Use the same font in the editor, as the terminal
```
"editor.fontFamily": "RobotoMono Nerd Font",
```
