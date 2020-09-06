> RubyGems 是 Ruby 编程语言的软件包管理器，它提供了用于分发 Ruby 程序和库的标准格式，旨在轻松管理 gems 的安装的工具以及用于分发它们的服务器。

# 1 - 更改镜像源

打开命令行并执行以下命令：

```bash
gem sources --add {{link}}/ --remove https://rubygems.org/
```

# 2 - 确认镜像源

执行以下命令以确认镜像源已被修改：

```bash
gem sources -l
```

# 3 - 开始使用

现在便可以正常使用 `gem` 。

```bash
gem install <package name>
```
