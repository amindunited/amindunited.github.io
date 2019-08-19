<link rel="stylesheet" href="/main.css"/>

Created: June 24, 2018

## Create App

Common Create Command

## Assuming you have an existing project/dir:
cd my-app
ng new my-app --routing --style=scss --directory ./


Variations
  # Basic
  ```Shell
  ng new my-app
  ```

  # Generates Routing for you
  ```Shell
  ng new my-app --routing
  ```

  # Sets the project styles to scss 
  ```Shell
  ng new my-app --style=scss
  ```

  # All together
  ```Shell
  ng new my-app --routing --style=scss 
  ```

  # Generate in existing directory
  ```Shell
  mkdir my-app && cd $_ 
  ng new my-app --directory ./
  ```


Add NgRx

```Shell
npm install @ngrx/schematics --save-dev

npm install @ngrx/{store,effects,entity,store-devtools} --save

ng config cli.defaultCollection @ngrx/schematics
```

The ngRx schematics (currently 26.07.2018) do not properly support the scss or less style extensions, so put this into the angular.json to continue using scss:
```JSON
"schematics": {
  "@ngrx/schematics:component": {
    "styleext": "scss"
  }
}
```


Create store
# Create a store for the app. This store will aggrigate the features 
```Shell
ng generate store State --root --module app.module.ts
```

# Generate Effects...
```Shell
ng generate effect App --root --module app.module.ts
```


Create Feature
# Be sure to set the full path:
```Shell
ng generate feature store/todo/todo --flat
```

Add to app module:
```js
import * as fromTodo from './store/todo/todo.reducer';
import { TodoEffects } from './store/todo/todo.effects';

// and...

imports: [
  ...
  StoreModule.forFeature('todo', fromTodo.reducer),
  ...
]
```



