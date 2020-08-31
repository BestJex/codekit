> npm（フルネームノードパッケージマネージャー、つまり「ノードパッケージマネージャー」）は、JavaScript で記述された Node.js のデフォルトのパッケージ管理システムです。
[source](https://zh.wikipedia.org/wiki/Npm)

# 1 - npm レジストリを変更する
コマンドラインを開き、次のコマンドを実行します。

```bash
npm config set registry {{link}}
```

# 2 - npm レジストリを確認する
次のコマンドを実行して、npm レジストリが変更されたことを確認します。

```bash
npm config get registry
```

# 3 - 使い始める
これで、 `npm` を通常どおり使用できます。

```bash
npm install <package name>
```
