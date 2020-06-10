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
