> Arch Linux ARM is a distribution of Linux for ARM computers.
[source](https://archlinuxarm.org/)

# 1 - Change the mirror
Open the terminal and execute the following commands:

```bash
sed -i '1s|^|Server = {{link}}/$arch/$repo\n|' /etc/pacman.d/mirrorlist
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
