# NPM Registries


For Enterprise / Custom Registries, you can set these up globally, or in an ```.npmrc``` in the root directory of you project.

**.npmrc**

```
registry=https://my/registry/url/.com/what/ever/
strict-ssl=false
```

You can have multiple registries:
(Stack Overflow - Config Multiple registries)[https://stackoverflow.com/questions/32633678/is-there-any-way-to-configure-multiple-registries-in-a-single-npmrc-file]


For scoped packages, you can have specific registries:

In your **.npmrc**:

```
@polymer:registry=<url register A>
registry=http://localhost:4873/
```


## Local NPM

Offline first NPM!

To cache, store and serve NPM packages that you have previously installed:

```
npm install -g local-npm
```

Then, run the local server
```
local-npm
```

Set up a 'local' npm config with [npmrc](https://www.npmjs.com/package/npmrc)

```
# install npmrc
npm install -g npmrc
# Create a default npmrc

# Create a local npmrc
npmrc -c local

# set the registry of the local to point to the local-npm server
npm set registry http://127.0.0.1:5080

# to switch back to your default npmrc
npmrc default
```
