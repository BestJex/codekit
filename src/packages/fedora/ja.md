> Fedora は、コミュニティーでサポートされている Fedora Project によって開発された Linux ディストリビューションであり、主に IBM の子会社である Red Hat がスポンサーであり、他の会社からの追加サポートがあります。
[source](https://en.wikipedia.org/wiki/Fedora_(operating_system))

# 1 - ミラーソースの切り替え
コマンドラインを開き、次のコマンドを実行します。

```bash
sed -e 's|^metalink=|#metalink=|g' \
    -e 's|^#baseurl=http://download.fedoraproject.org/pub/fedora/linux|baseurl={{link}}|g' \
    -i.bak \
    /etc/yum.repos.d/fedora.repo \
    /etc/yum.repos.d/fedora-modular.repo \
    /etc/yum.repos.d/fedora-updates.repo \
    /etc/yum.repos.d/fedora-updates-modular.repo
```

# 2 - ミラーソースキャッシュを更新する
コマンドラインを開き、次のコマンドを実行します。

```bash
dnf makecache
```

# 3 - 使い始める
これで、`dnf` を通常どおり使用できます。

```bash
dnf install <package name>
```
