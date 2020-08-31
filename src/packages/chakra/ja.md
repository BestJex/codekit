> Chakra は Linux ディストリビューションであり、元は Arch Linux に基づいており、 KDE ソフトウェアに焦点を当てており、他のウィジェットツールボックスの使用を最小限に抑えるために KDE / Qt を提供することを目指しています。 批評家からも好評です。
[source](https://en.wikipedia.org/wiki/Chakra_(operating_system))

# 1 - ミラーソースの切り替え
コマンドラインを開き、次のコマンドを実行します。

```bash
mv /etc/pacman.d/mirrorlist /etc/pacman.d/mirrorlist.bak && echo "Server = {{link}}/$repo/$arch" > /etc/pacman.d/mirrorlist
```

# 2 - ミラーソースキャッシュを更新する
コマンドラインを開き、次のコマンドを実行します。

```bash
pacman -Syy
```

# 3 - 使い始める
これで、`pacman` を通常どおり使用できます。

```bash
pacman -S <package name>
```
