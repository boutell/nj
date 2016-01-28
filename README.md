# nj

A simple command line for compiling Nunjucks templates to generate static HTML files.

It's *really* easy:

```bash
npm install --save nj
nj myfile.nj
```

That compiles `myfile.nj` and outputs `myfile.html`. Boom!

Since `nj` outputs `.html` files, your nunjucks templates should `not` have a `.html` extension, because you don't want to overwrite them.

You may optionally pass a JSON file as the second argument. If you do, it is parsed and passed to the nunjucks template as data:

```bash
nj myfile.nj mydata.json
```

## Changelog

0.1.0: initial release.

0.1.1-0.1.3: npm nonsense, no code changes.

0.1.4: explicit exit when done to work around versions of node that can't figure this out on their own.
