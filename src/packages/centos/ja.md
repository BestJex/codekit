> CentOS は、コミュニティがサポートする無料のコンピューティングプラットフォームを提供する Linux ディストリビューションであり、そのアップストリームソースである Red Hat Enterprise Linux と機能的に互換性があります。
[source](https://en.wikipedia.org/wiki/CentOS)

# 1 - ミラーソースの切り替え
コマンドラインを開き、次のコマンドを実行します。

```sh
sed -e 's|^mirrorlist=|#mirrorlist=|g' \
    -e 's|^#baseurl=http://mirror.centos.org/{{path}}|baseurl={{link}}|g' \
    -i.bak \
    /etc/yum.repos.d/CentOS-Base.repo {{extra}}
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
