# 1 - Change the mirror
Open the terminal and execute the following commands:

```bash
cat << EOF >> /etc/pacman.conf
[archlinuxcn]
Server = {{link}}/$arch
EOF
```

# 2 - Update local cache and install keyring
Open the terminal and execute the following commands:

```bash
pacman -Syyu archlinuxcn-keyring
```

# 3 - Good to go
Now you can use `pacman` normally.

```bash
pacman -S <package name>
```
