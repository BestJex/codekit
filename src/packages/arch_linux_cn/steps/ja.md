# 1 - ミラーソースの切り替え
コマンドラインを開き、次のコマンドを実行します。

```bash
cat << EOF >> /etc/pacman.conf
[archlinuxcn]
Server = {{link}}/$arch
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
