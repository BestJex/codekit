# 1 - パッケージをインストールする
コマンドラインを開き、次のコマンドを実行します。

```sh
yum install -y epel-release
```

# 1 - ミラーソースの切り替え
コマンドラインを開き、次のコマンドを実行します。

```sh
sed -e 's|^metalink=|#metalink=|g' \
    -e 's|^#baseurl=https\?://download.fedoraproject.org/pub/epel/|baseurl={{link}}/|g' \
    -i.bak \
    /etc/yum.repos.d/epel.repo
```

# 2 - ミラーソースキャッシュを更新する
コマンドラインを開き、次のコマンドを実行します。

```sh
yum makecache
```

# 3 - 使い始める
これで、`yum` を通常どおり使用できます。

```sh
yum install <package name>
```
