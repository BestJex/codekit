# 1 - 切换镜像源
打开命令行并执行以下命令：

```bash
mv /etc/pacman.d/mirrorlist /etc/pacman.d/mirrorlist.bak && echo "Server = {{link}}/$repo/$arch" > /etc/pacman.d/mirrorlist
```

# 2 - 更新镜像源缓存
打开命令行并执行以下命令：

```bash
pacman -Syy
```

# 3 - 开始使用
现在便可以正常使用 `pacman` 。

```bash
pacman -S <package name>
```
