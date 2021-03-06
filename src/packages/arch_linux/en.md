> Arch Linux is a Linux distribution for computers with x86-64 processors. Arch Linux adheres to five principles: simplicity, modernity, pragmatism, user centrality and versatility.

# 1 - Change the mirror

Open the terminal and execute the following commands:

```bash
sed -i '1s|^|Server = {{link}}/$repo/os/$arch\n|' /etc/pacman.d/mirrorlist
```

# 2 - Update local cache

Open the terminal and execute the following commands:

```bash
pacman -Syy
```

# 3 - Good to go

Now you can use `pacman` normally.

```bash
pacman -S <package name>
```
