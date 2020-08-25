# Creating a Browsers List Config

This is part of [Githooks Project Automation](./../githooks-project-automation.md).

Run this script in your console to generate a .browserslistrc (Browserslist Config)

```BASH
cat > .browserslistrc <<EOL
[production]
> 0.5%
last 2 versions
Firefox ESR
not dead
not IE 9-10 # For IE 9-11 support, remove 'not'.

[development]
last 1 chrome version
last 1 firefox version
last 1 safari version

[ssr]
node 12
EOL
```

Return to guide [here](./../githooks-project-automation.md#browserslist)

## References

[browserslist - Readme](https://github.com/browserslist/browserslist)

[browserslist - Config for Environments](https://github.com/browserslist/browserslist#configuring-for-different-environments)
