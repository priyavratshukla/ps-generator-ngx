<p align="center">
  <img height="256px" width="256px" style="text-align: center;" src="https://cdn.rawgit.com/priyavratshukla/generator-ngx-library/master/demo/src/assets/logo.svg">
</p>

# generator-ngx-library - Angular library built with ❤ using ngx-library yeoman generator.

[![npm version](https://badge.fury.io/js/generator-ngx-library.svg)](https://badge.fury.io/js/generator-ngx-library),
[![Build Status](https://travis-ci.org/priyavratshukla/generator-ngx-library.svg?branch=master)](https://travis-ci.org/priyavratshukla/generator-ngx-library)
[![Coverage Status](https://coveralls.io/repos/github/priyavratshukla/generator-ngx-library/badge.svg?branch=master)](https://coveralls.io/github/priyavratshukla/generator-ngx-library?branch=master)
[![dependency Status](https://david-dm.org/priyavratshukla/generator-ngx-library/status.svg)](https://david-dm.org/priyavratshukla/generator-ngx-library)
[![devDependency Status](https://david-dm.org/priyavratshukla/generator-ngx-library/dev-status.svg?branch=master)](https://david-dm.org/priyavratshukla/generator-ngx-library#info=devDependencies)
[![Greenkeeper Badge](https://badges.greenkeeper.io/priyavratshukla/generator-ngx-library.svg)](https://greenkeeper.io/)

## Demo

View all the directives in action at https://priyavratshukla.github.io/generator-ngx-library

## Dependencies
* [Angular](https://angular.io) (*requires* Angular 2 or higher, tested with 2.0.0)

## Installation
Install above dependencies via *npm*. 

Now install `generator-ngx-library` via:
```shell
npm install --save generator-ngx-library
```

---
##### SystemJS
>**Note**:If you are using `SystemJS`, you should adjust your configuration to point to the UMD bundle.
In your systemjs config file, `map` needs to tell the System loader where to look for `generator-ngx-library`:
```js
map: {
  'generator-ngx-library': 'node_modules/generator-ngx-library/bundles/generator-ngx-library.umd.js',
}
```
---

Once installed you need to import the main module:
```js
import { LibModule } from 'generator-ngx-library';
```
The only remaining part is to list the imported module in your application module. The exact method will be slightly
different for the root (top-level) module for which you should end up with the code similar to (notice ` LibModule .forRoot()`):
```js
import { LibModule } from 'generator-ngx-library';

@NgModule({
  declarations: [AppComponent, ...],
  imports: [LibModule.forRoot(), ...],  
  bootstrap: [AppComponent]
})
export class AppModule {
}
```

Other modules in your application can simply import ` LibModule `:

```js
import { LibModule } from 'generator-ngx-library';

@NgModule({
  declarations: [OtherComponent, ...],
  imports: [LibModule, ...], 
})
export class OtherModule {
}
```

## Usage



## License

Copyright (c) 2018 priyavrat. Licensed under the MIT License (MIT)

