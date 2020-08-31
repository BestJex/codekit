> npm (Node Package Manager) is Node.js's default package management system which written in JavaScript.
[source](https://zh.wikipedia.org/wiki/Npm)

# 1 - Changing npm registry
Open the terminal and execute the following commands：

```bash
npm config set registry {{link}}
```

# 2 - Confirming npm registry
Execute the following commands to confirm the npm registry has been changed.

```bash
npm config get registry
```

# 3 - Good to go
Now you can use `npm` normally.

```bash
npm install <package name>
```
