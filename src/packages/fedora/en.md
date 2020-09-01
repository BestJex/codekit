> Fedora is a Linux distribution developed by the community-supported Fedora Project which is sponsored primarily by Red Hat, a subsidiary of IBM, with additional support from other companies.
[source](https://en.wikipedia.org/wiki/Fedora_(operating_system))

# 1 - Change the mirror
Open the terminal and execute the following commands:

```bash
sed -e 's|^metalink=|#metalink=|g' \
    -e 's|^#baseurl=http://download.fedoraproject.org/pub/fedora/linux|baseurl={{link}}|g' \
    -i.bak \
    /etc/yum.repos.d/fedora.repo \
    /etc/yum.repos.d/fedora-modular.repo \
    /etc/yum.repos.d/fedora-updates.repo \
    /etc/yum.repos.d/fedora-updates-modular.repo
```

# 2 - Update local cache
Open the terminal and execute the following commands:

```bash
dnf makecache
```

# 3 - Good to go
Now you can use `dnf` normally.

```bash
dnf install <package name>
```
