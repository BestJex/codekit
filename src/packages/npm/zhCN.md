> npm（全称 Node Package Manager，即 “node 包管理器”）是 Node.js 默认的、用 JavaScript 编写的软件包管理系统。

# 1 - 更改 npm registry

打开命令行并执行以下命令：

```bash
npm config set registry {{link}}
```

# 2 - 确认 npm registry

执行以下命令以确认 npm registry 已被修改：

```bash
npm config get registry
```

# 3 - 开始使用

现在便可以正常使用 `npm` 。

```bash
npm install <package name>
```
