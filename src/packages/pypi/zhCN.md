> Python软件包索引（缩写为 PyPI ）是 Python 的官方第三方软件存储库。
[source](https://en.wikipedia.org/wiki/Python_Package_Index)

# 1 - 修改镜像源
打开命令行并执行以下命令：

```bash
pip config set global.index-url {{link}}/simple
```

# 2 - 开始使用
现在便可以正常使用 `pip` 。

```bash
pip install <package name>
```
