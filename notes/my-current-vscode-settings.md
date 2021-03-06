# My Current VS Code Settings

Updated: 18 07 2020

The terminal settings depend on [My iTerm zsh conig](./iterm-with-material-theme)

## Settings.json

```
// Place your settings in this file to overwrite the default settings
{
    "editor.scrollBeyondLastLine": false,
    "workbench.iconTheme": "material-icon-theme",
    "editor.tabSize": 2,
    "window.zoomLevel": 0,
    "gitlens.advanced.messages": {
        "suppressCommitHasNoPreviousCommitWarning": false,
        "suppressCommitNotFoundWarning": false,
        "suppressFileNotUnderSourceControlWarning": false,
        "suppressGitVersionWarning": false,
        "suppressLineUncommittedWarning": false,
        "suppressNoRepositoryWarning": false,
        "suppressResultsExplorerNotice": false,
        "suppressShowKeyBindingsNotice": true,
        "suppressUpdateNotice": false,
        "suppressWelcomeNotice": true
    },
    "gitlens.keymap": "alternate",
    "editor.renderWhitespace": "all",
    "gitlens.historyExplorer.enabled": true,
    "gitlens.views.fileHistory.enabled": true,
    "gitlens.views.lineHistory.enabled": true,
    "peacock.favoriteColors": [
        {
            "name": "Angular Red",
            "value": "#b52e31"
        },
        {
            "name": "Auth0 Orange",
            "value": "#eb5424"
        },
        {
            "name": "Azure Blue",
            "value": "#007fff"
        },
        {
            "name": "C# Purple",
            "value": "#68217A"
        },
        {
            "name": "Gatsby Purple",
            "value": "#639"
        },
        {
            "name": "Go Cyan",
            "value": "#5dc9e2"
        },
        {
            "name": "Java Blue-Gray",
            "value": "#557c9b"
        },
        {
            "name": "JavaScript Yellow",
            "value": "#f9e64f"
        },
        {
            "name": "Mandalorian Blue",
            "value": "#1857a4"
        },
        {
            "name": "Node Green",
            "value": "#215732"
        },
        {
            "name": "React Blue",
            "value": "#00b3e6"
        },
        {
            "name": "Something Different",
            "value": "#832561"
        },
        {
            "name": "Vue Green",
            "value": "#42b883"
        }
    ],
    "[javascript]": {
        "editor.defaultFormatter": "esbenp.prettier-vscode"
    },
    "[json]": {
        "editor.defaultFormatter": "vscode.json-language-features"
    },
    "[typescript]": {
        "editor.defaultFormatter": "vscode.typescript-language-features"
    },
    "[html]": {
        "editor.defaultFormatter": "vscode.html-language-features"
    },
    "explorer.autoReveal": false,
    "terminal.external.osxExec": "iterm.app",
    "terminal.integrated.rendererType": "dom",
    "terminal.integrated.fontFamily": "RobotoMono Nerd Font",
    "terminal.integrated.fontSize": 12,
    "terminal.integrated.lineHeight": 1,
    "terminal.integrated.fontWeight": "normal",
    "terminal.integrated.shell.osx": "/bin/zsh",
    "editor.fontFamily": "RobotoMono Nerd Font",
    "hediet.vscode-drawio.local-storage": "eyIuZHJhd2lvLWNvbmZpZyI6IntcImxhbmd1YWdlXCI6XCJcIixcImN1c3RvbUZvbnRzXCI6W10sXCJsaWJyYXJpZXNcIjpcImdlbmVyYWxcIixcImN1c3RvbUxpYnJhcmllc1wiOltcIkwuc2NyYXRjaHBhZFwiXSxcInBsdWdpbnNcIjpbXSxcInJlY2VudENvbG9yc1wiOltdLFwiZm9ybWF0V2lkdGhcIjpcIjI0MFwiLFwiY3JlYXRlVGFyZ2V0XCI6ZmFsc2UsXCJwYWdlRm9ybWF0XCI6e1wieFwiOjAsXCJ5XCI6MCxcIndpZHRoXCI6ODI3LFwiaGVpZ2h0XCI6MTE2OX0sXCJzZWFyY2hcIjp0cnVlLFwic2hvd1N0YXJ0U2NyZWVuXCI6dHJ1ZSxcImdyaWRDb2xvclwiOlwiI2QwZDBkMFwiLFwiZGFya0dyaWRDb2xvclwiOlwiIzZlNmU2ZVwiLFwiYXV0b3NhdmVcIjp0cnVlLFwicmVzaXplSW1hZ2VzXCI6bnVsbCxcIm9wZW5Db3VudGVyXCI6MCxcInZlcnNpb25cIjoxOCxcInVuaXRcIjoxLFwiaXNSdWxlck9uXCI6ZmFsc2UsXCJ1aVwiOlwiXCJ9In0=",
    "[jsonc]": {
        "editor.defaultFormatter": "esbenp.prettier-vscode"
    },
}
```

## Extensions

```
Angular.ng-template
christian-kohler.path-intellisense
CoenraadS.bracket-pair-colorizer
dbaeumer.vscode-eslint
eamodio.gitlens
EditorConfig.EditorConfig
eg2.tslint
eg2.vscode-npm-script
esbenp.prettier-vscode
GrapeCity.gc-excelviewer
hediet.vscode-drawio
johnpapa.angular-essentials
johnpapa.Angular2
johnpapa.vscode-peacock
johnpapa.winteriscoming
LucasBadico.code-flowchart
ms-azuretools.vscode-docker
ms-vscode.vscode-typescript-tslint-plugin
msjsdiag.debugger-for-chrome
msjsdiag.debugger-for-edge
natewallace.angular2-inline
nrwl.angular-console
octref.vetur
PKief.material-icon-theme
steoates.autoimport
toba.vsfire
vitaliymaz.vscode-svg-previewer
```

To install them

```
code --install-extension Angular.ng-template
code --install-extension christian-kohler.path-intellisense
code --install-extension CoenraadS.bracket-pair-colorizer
code --install-extension dbaeumer.vscode-eslint
code --install-extension eamodio.gitlens
code --install-extension EditorConfig.EditorConfig
code --install-extension eg2.tslint
code --install-extension eg2.vscode-npm-script
code --install-extension esbenp.prettier-vscode
code --install-extension GrapeCity.gc-excelviewer
code --install-extension hediet.vscode-drawio
code --install-extension johnpapa.angular-essentials
code --install-extension johnpapa.Angular2
code --install-extension johnpapa.vscode-peacock
code --install-extension johnpapa.winteriscoming
code --install-extension LucasBadico.code-flowchart
code --install-extension ms-azuretools.vscode-docker
code --install-extension ms-vscode.vscode-typescript-tslint-plugin
code --install-extension msjsdiag.debugger-for-chrome
code --install-extension msjsdiag.debugger-for-edge
code --install-extension natewallace.angular2-inline
code --install-extension nrwl.angular-console
code --install-extension octref.vetur
code --install-extension PKief.material-icon-theme
code --install-extension steoates.autoimport
code --install-extension toba.vsfire
code --install-extension vitaliymaz.vscode-svg-previewer
```


To list your VS Code extensions

```
code --list-extensions
```

To output them as a script to install on an other machine

```
code --list-extensions | xargs -L 1 echo code --install-extension > install-vs-ext.sh
```

