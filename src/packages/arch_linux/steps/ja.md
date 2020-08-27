# 1 - ミラーソースの切り替え
コマンドラインを開き、次のコマンドを実行します。

```bash
sed -i '1s|^|Server = {{link}}/$repo/os/$arch\n|' /etc/pacman.d/mirrorlist
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
