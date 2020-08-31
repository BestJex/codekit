> Arch Linux は、x86-64 プロセッサーを搭載したコンピューター用の Linux ディストリビューションです。 Arch Linux は、シンプルさ、現代性、実用性、ユーザーの中心性、多様性という5つの原則に準拠しています。
[source](https://en.wikipedia.org/wiki/Arch_Linux)

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
