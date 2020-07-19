# Creating an Editorconfig

## Basic

```
cat > .editorconfig <<EOL
# http://editorconfig.org

root = true

[*]
charset = utf-8
indent_style = space
indent_size = 2
insert_final_newline = true
trim_trailing_whitespace = true

[*.md]
insert_final_newline = false

EOL
```


## References

[editorconfig.org](https://editorconfig.org/)