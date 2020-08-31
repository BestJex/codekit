> Arch Linux 中国語コミュニティリポジトリは、 Arch Linux 中国語コミュニティによって運営されている非公式のソフトウェアリポジトリです。公式リポジトリでは提供されていない多くの追加ソフトウェアパッケージや、 git バージョンなどの既存のソフトウェアのバリアントが含まれています。
[source](https://www.archlinuxcn.org/archlinux-cn-repo-and-mirror/)

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
