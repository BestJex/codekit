> BlackArch は Arch Linux に基づく侵入テストディストリビューションであり、大量のサイバーセキュリティツールを提供します。 これは、侵入テスターやセキュリティ研究者のために特別に作成されたオープンソースのディストリビューションです。
[source](https://en.wikipedia.org/wiki/BlackArch)

# 1 - ミラーソースの切り替え
コマンドラインを開き、次のコマンドを実行します。

```bash
cat << EOF >> /etc/pacman.conf
[blackarch]
Server = {{link}}/$repo/os/$arch
EOF
```

# 2 - ミラーソースキャッシュを更新して「keyring」をインストールする
コマンドラインを開き、次のコマンドを実行します。

```bash
pacman -Syyu archlinuxcn-keyring
```

# 3 - 使い始める
これで、`pacman` を通常どおり使用できます。

```bash
pacman -S <package name>
```
