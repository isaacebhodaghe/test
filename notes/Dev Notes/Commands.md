Git Commands

## Delete branch from origin - git push origin --delete feature/login

    Rename a folder or file and tranfering the git history.
    use git mv

    ```
    git mv  src/templates/react/customPage/CustomPage._stories.mdx src/templates/react/CustomPage/CustomPage._stories.mdx
    git mv  src/templates/react/customPage/CustomPage.jsx src/templates/react/CustomPage/CustomPage.jsx
    ```

## Icon update script - to remove -2px and add -icon before svg

```
find . -type f -name "*-24px*.svg" -exec sh -c 'newname="$(echo "$1" | sed -e 's/-24px//g' -e 's/\.svg/-icon.svg/')"; mv "$1" "$newname"' _ {} \;

```

- Add -icons before .svg only

```
find . -type f -name "*.svg" -exec sh -c 'newname="$(echo "$1" | sed 's/\.svg/-icons.svg/')"; mv "$1" "$newname"' _ {} \;
```

## Get spcific folder from a git repo

```
    git clone -n --depth=1 --filter=tree:0 \
    ssh://git@bitbucket.sunlifecorp.com/ui/react-starter-kit.git
    cd react-starter-kit
    git sparse-checkout set --no-cone webpack5+react+scss
    git checkout
```
