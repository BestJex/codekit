# 1 - Install the package
Open the terminal and execute the following commands:

```sh
yum install -y epel-release
```

# 2 - Change the mirror
Open the terminal and execute the following commands:

```sh
sed -e 's|^metalink=|#metalink=|g' \
    -e 's|^#baseurl=https\?://download.fedoraproject.org/pub/epel/|baseurl={{link}}/|g' \
    -i.bak \
    /etc/yum.repos.d/epel.repo
```

# 3 - Update local cache
Open the terminal and execute the following commands:

```sh
yum makecache
```

# 4 - Good to go
Now you can use `yum` normally.

```sh
yum install <package name>
```
