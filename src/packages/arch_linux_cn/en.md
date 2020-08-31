> The Arch Linux Chinese Community Repository is an unofficial software repository driven by the Arch Linux Chinese Community. It contains many additional software packages that are not provided by the official repositories, as well as variants of existing software such as git versions.
[source](https://www.archlinuxcn.org/archlinux-cn-repo-and-mirror/)

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
