Hi @here we have successfully completed the code move, thanks to @Alfred.
Find below the steps to transition over on your local from _web-jslib-react_ to _ui-components-react_ repo.

       Remove old origin
       ```
       git remote rm origin
       ```

       Add the new origin
       ```
       git remote add origin ssh://git@bitbucket.sunlifecorp.com/design_sys/ui-components-react.git
       ```

       Verify that the origin has be updated successfully.
       ```
       git remote -v
       ```

       ```
       Output

       origin  ssh://git@bitbucket.sunlifecorp.com/design_sys/ui-components-react.git (fetch)
       origin  ssh://git@bitbucket.sunlifecorp.com/design_sys/ui-components-react.git (push)
       ```

Make some commit and test to ensure that everything is working fine and can be seen the repo
https://bitbucket.sunlifecorp.com/projects/DESIGN_SYS/repos/ui-components-react/branches
