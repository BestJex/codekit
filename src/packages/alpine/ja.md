> Alpine Linux は、musl と BusyBox をベースにした Linux ディストリビューションであり、セキュリティ、シンプルさ、およびリソース効率のために設計されています。 サイズが小さいため、起動時間の短いコンテナで一般的に使用されます。
[source](https://en.wikipedia.org/wiki/Alpine_Linux)

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
