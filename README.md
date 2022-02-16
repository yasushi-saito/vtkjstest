
To try:

- First, edit `package.json` and change the `@kitware/vtk.js` dependency
  to point to your local installation.

- Then


```
npm install
npm run build
```

It should fail with:

```
ERROR in /home/saito/src/vtkjstest/src/index.ts
./src/index.ts 6:7-25
[tsl] ERROR in /home/saito/src/vtkjstest/src/index.ts(6,8)
      TS2339: Property 'setInputConnection' does not exist on type 'vtkMapper'.
```

If you change `package.json`'s `@kitware/vtk.js` entry to a proper version, e.g.
`22.2.3`, the problem disappears.
