# 1 - ミラーソースの切り替え
コマンドラインを開き、次のコマンドを実行します。

```sh
sed -i 's|http://dl-cdn.alpinelinux.org/alpine|{{link}}|g' /etc/apk/repositories
```

# 2 - ミラーソースキャッシュを更新する
コマンドラインを開き、次のコマンドを実行します。

```sh
apk update
```

# 3 - 使い始める
これで、`apk` を通常どおり使用できます。

```sh
apk add <package name>
```
