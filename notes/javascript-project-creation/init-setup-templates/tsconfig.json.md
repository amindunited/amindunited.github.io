```
cat > tsconfig.json <<EOL
{
"compilerOptions": {
"module": "commonjs",
"esModuleInterop": true,
"target": "es6",
"moduleResolution": "node",
"sourceMap": true,
"outDir": "dist"
},
"lib": ["es2015"],
"exclude" : ["src/**/*.test.ts"]
}
EOL
```