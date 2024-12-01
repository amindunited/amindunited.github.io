# Visual Studio Code

[Visual Studio Code](https://code.visualstudio.com/)

## Add VSCode command to terminal:

- In VSCcode open the command palette (cmd + shift + p )
- Strart typing ```shell command```....
- click on ```SHELL Command: Install 'code' command in PATH```

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

## Settings 
```
{
    "editor.scrollBeyondLastLine": false,
    "workbench.iconTheme": "material-icon-theme",
    "editor.tabSize": 2,
    "peacock.favoriteColors": [
        {
            "name": "Angular Red",
            "value": "#b52e31"
        }
    ],
}
